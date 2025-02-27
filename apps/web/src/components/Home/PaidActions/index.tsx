import SinglePost from "@components/Post/SinglePost";
import PaidActionsShimmer from "@components/Shared/Shimmer/PaidActionsShimmer";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import type { Post } from "@hey/indexer";
import { Card, EmptyState, ErrorMessage } from "@hey/ui";
import type { FC } from "react";
import { Virtuoso } from "react-virtuoso";
import OpenActionPaidAction from "./OpenActionPaidAction";

const PaidActions: FC = () => {
  const request: PaginatedRequest = { limit: LimitType.TwentyFive };

  const { data, error, fetchMore, loading } = useLatestPaidActionsQuery({
    variables: { request }
  });

  const actions = data?.latestPaidActions?.items;
  const pageInfo = data?.latestPaidActions?.pageInfo;
  const hasMore = pageInfo?.next;

  const onEndReached = async () => {
    if (hasMore) {
      await fetchMore({
        variables: { request: { ...request, cursor: pageInfo?.next } }
      });
    }
  };

  if (loading) {
    return <PaidActionsShimmer />;
  }

  if (actions?.length === 0) {
    return (
      <EmptyState
        icon={<CurrencyDollarIcon className="size-8" />}
        message="No paid actions yet!"
      />
    );
  }

  if (error) {
    return <ErrorMessage error={error} title="Failed to load paid actions" />;
  }

  return (
    <Virtuoso
      className="[&>div>div]:space-y-5"
      components={{ Footer: () => <div className="pb-5" /> }}
      computeItemKey={(index, action) =>
        action.__typename === "OpenActionPaidAction"
          ? `${action.actedOn?.id}-${index}`
          : index
      }
      data={actions}
      endReached={onEndReached}
      itemContent={(_, action) => {
        return action.__typename === "OpenActionPaidAction" ? (
          <Card>
            <OpenActionPaidAction
              latestActed={action.latestActed as LatestActed[]}
              post={action.actedOn as Post}
            />
            <div className="divider" />
            <SinglePost
              isFirst={false}
              isLast
              post={action.actedOn as Post}
              showThread={false}
            />
          </Card>
        ) : null;
      }}
      useWindowScroll
    />
  );
};

export default PaidActions;
