import Footer from "@components/Shared/Footer";
import PostsShimmer from "@components/Shared/Shimmer/PostsShimmer";
import ProfileListShimmer from "@components/Shared/Shimmer/ProfileListShimmer";
import { Card, GridItemEight, GridItemFour, GridLayout } from "@hey/ui";
import type { FC } from "react";

interface ClubPageShimmerProps {
  profileList?: boolean;
}

const ListPageShimmer: FC<ClubPageShimmerProps> = ({ profileList = false }) => {
  return (
    <GridLayout>
      <GridItemEight>
        {profileList ? (
          <Card>
            <ProfileListShimmer />
          </Card>
        ) : (
          <PostsShimmer />
        )}
      </GridItemEight>
      <GridItemFour>
        <Card className="mb-4 space-y-5 p-5">
          <div className="shimmer size-24 rounded-xl ring-8 ring-gray-50 dark:bg-gray-700 dark:ring-black" />
          <div className="space-y-2 pt-2">
            <div className="shimmer h-5 w-1/3 rounded-lg" />
            <div className="shimmer h-3 w-1/4 rounded-lg" />
          </div>
          <div className="flex gap-5 pt-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="space-y-2" key={index}>
                <div className="shimmer size-7 rounded-lg" />
                <div className="shimmer h-3 w-20 rounded-lg" />
              </div>
            ))}
          </div>
          <div className="shimmer h-[34px] w-20 rounded-full" />
        </Card>
        <Footer />
      </GridItemFour>
    </GridLayout>
  );
};

export default ListPageShimmer;
