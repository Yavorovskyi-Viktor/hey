import MetaDetails from "@components/Shared/MetaDetails";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import type { AnyPost } from "@hey/indexer";
import { Card, H5 } from "@hey/ui";
import type { FC } from "react";

interface PostStaffToolProps {
  post: AnyPost;
}

const PostStaffTool: FC<PostStaffToolProps> = ({ post }) => {
  return (
    <Card
      as="aside"
      className="!bg-yellow-300/20 mt-5 border-yellow-400 p-5"
      forceRounded
    >
      <div className="flex items-center space-x-2 text-yellow-600">
        <ShieldCheckIcon className="size-5" />
        <H5>Staff tool</H5>
      </div>
      <div className="mt-3 space-y-2">
        <MetaDetails
          icon={<HashtagIcon className="ld-text-gray-500 size-4" />}
          title="Post ID"
          value={post?.id}
        >
          {post?.id}
        </MetaDetails>
        {post.__typename === "Post" && post.commentOn ? (
          <MetaDetails
            icon={<HashtagIcon className="ld-text-gray-500 size-4" />}
            title="Comment on"
            value={post?.commentOn?.id}
          >
            {post?.commentOn?.id}
          </MetaDetails>
        ) : null}
        {/* TODO: Lens v3 */}
        {/* {post?.openActionModules?.length ? (
          <MetaDetails
            icon={<ShoppingBagIcon className="ld-text-gray-500 size-4" />}
            noFlex
            title="Open action modules"
          >
            {(post?.openActionModules || []).map((module) => (
              <div key={module.__typename}>{module.__typename}</div>
            ))}
          </MetaDetails>
        ) : null} */}
      </div>
    </Card>
  );
};

export default PostStaffTool;
