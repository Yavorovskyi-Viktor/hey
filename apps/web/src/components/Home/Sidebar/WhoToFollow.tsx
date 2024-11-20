import DismissRecommendedProfile from "@components/Shared/DismissRecommendedProfile";
import SingleAccountShimmer from "@components/Shared/Shimmer/SingleAccountShimmer";
import SingleAccount from "@components/Shared/SingleAccount";
import { Leafwatch } from "@helpers/leafwatch";
import { PROFILE, ProfileLinkSource } from "@hey/data/tracking";
import type { Profile } from "@hey/lens";
import { LimitType, useProfileRecommendationsQuery } from "@hey/lens";
import { Card, ErrorMessage, H5, Modal } from "@hey/ui";
import type { FC } from "react";
import { useState } from "react";
import { useAccountStore } from "src/store/persisted/useAccountStore";
import Suggested from "../Suggested";

const Title: FC = () => <H5>Who to Follow</H5>;

const WhoToFollow: FC = () => {
  const { currentAccount } = useAccountStore();
  const [showMore, setShowMore] = useState(false);

  const { data, error, loading } = useProfileRecommendationsQuery({
    variables: {
      request: {
        for: currentAccount?.id,
        limit: LimitType.Fifty,
        shuffle: true
      }
    }
  });

  if (loading) {
    return (
      <Card as="aside" className="space-y-4 p-5">
        <Title />
        <SingleAccountShimmer showFollowUnfollowButton />
        <SingleAccountShimmer showFollowUnfollowButton />
        <SingleAccountShimmer showFollowUnfollowButton />
        <SingleAccountShimmer showFollowUnfollowButton />
        <SingleAccountShimmer showFollowUnfollowButton />
        <div className="pt-2 pb-1">
          <div className="shimmer h-3 w-5/12 rounded-full" />
        </div>
      </Card>
    );
  }

  if (data?.profileRecommendations.items.length === 0) {
    return null;
  }

  const recommendedProfiles = data?.profileRecommendations.items.filter(
    (profile) =>
      !profile.operations.isBlockedByMe.value &&
      !profile.operations.isFollowedByMe.value
  );

  if (recommendedProfiles?.length === 0) {
    return null;
  }

  return (
    <>
      <Card as="aside" className="space-y-4 p-5">
        <Title />
        <ErrorMessage error={error} title="Failed to load recommendations" />
        {recommendedProfiles?.slice(0, 5).map((profile) => (
          <div
            className="flex items-center space-x-3 truncate"
            key={profile?.id}
          >
            <div className="w-full">
              <SingleAccount
                hideFollowButton={currentAccount?.id === profile.id}
                hideUnfollowButton={currentAccount?.id === profile.id}
                profile={profile as Profile}
                source={ProfileLinkSource.WhoToFollow}
              />
            </div>
            <DismissRecommendedProfile profile={profile as Profile} />
          </div>
        ))}
        <button
          className="ld-text-gray-500 font-bold"
          onClick={() => {
            setShowMore(true);
            Leafwatch.track(PROFILE.OPEN_RECOMMENDED_PROFILES);
          }}
          type="button"
        >
          Show more
        </button>
      </Card>
      <Modal
        onClose={() => setShowMore(false)}
        show={showMore}
        title="Suggested for you"
      >
        <Suggested profiles={recommendedProfiles as Profile[]} />
      </Modal>
    </>
  );
};

export default WhoToFollow;
