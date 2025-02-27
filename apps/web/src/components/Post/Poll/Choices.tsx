import Beta from "@components/Shared/Badges/Beta";
import { getAuthApiHeaders } from "@helpers/getAuthApiHeaders";
import {
  Bars3BottomLeftIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";
import { HEY_API_URL } from "@hey/data/constants";
import { Errors } from "@hey/data/errors";
import getTimetoNow from "@hey/helpers/datetime/getTimetoNow";
import humanize from "@hey/helpers/humanize";
import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import type { Poll } from "@hey/types/hey";
import { Card, Spinner } from "@hey/ui";
import cn from "@hey/ui/cn";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import plur from "plur";
import type { FC } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAccountStatus } from "src/store/non-persisted/useAccountStatus";
import { useAccountStore } from "src/store/persisted/useAccountStore";
import { GET_POLL_QUERY_KEY } from ".";

interface ChoicesProps {
  poll: Poll;
}

const Choices: FC<ChoicesProps> = ({ poll }) => {
  const { currentAccount } = useAccountStore();
  const { isSuspended } = useAccountStatus();
  const [pollSubmitting, setPollSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const queryClient = useQueryClient();

  const { endsAt, options } = poll;
  const totalResponses = options.reduce((acc, { responses }) => {
    return acc + responses;
  }, 0);

  const handleVotePoll = async (id: string) => {
    if (!currentAccount) {
      return toast.error(Errors.SignWallet);
    }

    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    try {
      setPollSubmitting(true);
      setSelectedOption(id);

      await axios.post(
        `${HEY_API_URL}/polls/act`,
        { option: id, poll: poll.id },
        { headers: getAuthApiHeaders() }
      );

      queryClient.refetchQueries({ queryKey: [GET_POLL_QUERY_KEY, poll.id] });
      toast.success("Your poll has been casted!");
    } catch {
      toast.error(Errors.SomethingWentWrong);
    } finally {
      setPollSubmitting(false);
    }
  };

  const isPollLive = new Date(endsAt) > new Date();

  return (
    <Card className="mt-3" onClick={stopEventPropagation}>
      <div className="space-y-1 p-3">
        {options.map(({ id, option, percentage, voted }) => (
          <button
            className="flex w-full items-center space-x-2.5 rounded-xl p-2 text-left text-xs hover:bg-gray-100 sm:text-sm dark:hover:bg-gray-900"
            disabled={!isPollLive || pollSubmitting}
            key={id}
            onClick={() => handleVotePoll(id)}
            type="button"
          >
            {pollSubmitting && id === selectedOption ? (
              <Spinner className="mr-1" size="sm" />
            ) : (
              <CheckCircleIcon
                className={cn(
                  voted ? "text-green-500" : "text-gray-500",
                  "size-6"
                )}
              />
            )}
            <div className="w-full space-y-1">
              <div className="flex items-center justify-between">
                <b>{option}</b>
                <div>
                  <span className="ld-text-gray-500">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="flex h-2.5 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800">
                <div
                  className="bg-green-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between border-t px-5 py-3 dark:border-gray-700">
        <div className="flex items-center space-x-2 text-gray-500 text-xs">
          <Bars3BottomLeftIcon className="size-4" />
          <span>
            {humanize(totalResponses || 0)} {plur("vote", totalResponses || 0)}
          </span>
          <span>·</span>
          {isPollLive ? (
            <span>{getTimetoNow(new Date(endsAt))} left</span>
          ) : (
            <span>Poll ended</span>
          )}
        </div>
        <Beta />
      </div>
    </Card>
  );
};

export default Choices;
