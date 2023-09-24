'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
var errors_1 = require('@hey/data/errors');
var response_1 = require('@hey/lib/response');
var filteredNames_1 = require('../helpers/filteredNames');
exports.default = function (request) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, date, query, clickhouseResponse, json, list, error_1;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          (_a = request.params), (id = _a.id), (date = _a.date);
          if (!id) {
            return [
              2 /*return*/,
              (0, response_1.default)({
                success: false,
                error: errors_1.Errors.NoBody
              })
            ];
          }
          _b.label = 1;
        case 1:
          _b.trys.push([1, 4, , 5]);
          query =
            "\n      SELECT\n        id,\n        name,\n        created\n      FROM events\n      WHERE actor = '"
              .concat(
                id,
                "' AND created >= now() - INTERVAL 1 YEAR\n      AND name IN ("
              )
              .concat(
                filteredNames_1.default
                  .map(function (name) {
                    return "'".concat(name, "'");
                  })
                  .join(','),
                ')\n      '
              )
              .concat(
                date === 'latest'
                  ? "\n        AND DATE(created) = (\n          SELECT MAX(DATE(created))\n          FROM events\n          WHERE actor = '"
                      .concat(
                        id,
                        "' \n          AND created >= now() - INTERVAL 1 YEAR\n          AND name IN ("
                      )
                      .concat(
                        filteredNames_1.default
                          .map(function (name) {
                            return "'".concat(name, "'");
                          })
                          .join(','),
                        ')\n        )\n      '
                      )
                  : '',
                ';\n    '
              );
          return [
            4 /*yield*/,
            fetch(
              ''.concat(
                request.env.CLICKHOUSE_REST_ENDPOINT,
                '&default_format=JSONCompact'
              ),
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                cf: { cacheTtl: 600, cacheEverything: true },
                body: query
              }
            )
          ];
        case 2:
          clickhouseResponse = _b.sent();
          if (clickhouseResponse.status !== 200) {
            return [
              2 /*return*/,
              (0, response_1.default)({
                success: false,
                error: errors_1.Errors.StatusCodeIsNot200
              })
            ];
          }
          return [4 /*yield*/, clickhouseResponse.json()];
        case 3:
          json = _b.sent();
          list = json.data.map(function (_a) {
            var id = _a[0],
              event = _a[1],
              date = _a[2];
            return { id: id, event: event, date: date };
          });
          return [
            2 /*return*/,
            (0, response_1.default)({
              success: true,
              data: list.sort(function (a, b) {
                var dateA = new Date(a.date);
                var dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime();
              })
            })
          ];
        case 4:
          error_1 = _b.sent();
          throw error_1;
        case 5:
          return [2 /*return*/];
      }
    });
  });
};
