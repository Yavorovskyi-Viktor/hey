import { MenuItem } from "@headlessui/react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { Errors } from "@hey/data/errors";
import type { MirrorablePublication } from "@hey/lens";
import { TriStateValue } from "@hey/lens";
import cn from "@hey/ui/cn";
import type { FC } from "react";
import toast from "react-hot-toast";
import { usePostStore } from "src/store/non-persisted/post/usePostStore";
import { useGlobalModalStateStore } from "src/store/non-persisted/useGlobalModalStateStore";
import { useProfileStatus } from "src/store/non-persisted/useProfileStatus";
import { useProfileStore } from "src/store/persisted/useProfileStore";

interface QuoteProps {
  post: MirrorablePublication;
}

const Quote: FC<QuoteProps> = ({ post }) => {
  const { currentProfile } = useProfileStore();
  const { setShowAuthModal, setShowNewPostModal } = useGlobalModalStateStore();
  const { setQuotedPost } = usePostStore();
  const { isSuspended } = useProfileStatus();
  const publicationType = post.__typename;

  if (post.operations.canQuote === TriStateValue.No) {
    return null;
  }

  return (
    <MenuItem
      as="div"
      className={({ focus }) =>
        cn(
          { "dropdown-active": focus },
          "m-2 block cursor-pointer rounded-lg px-4 py-1.5 text-sm"
        )
      }
      onClick={() => {
        if (!currentProfile) {
          setShowAuthModal(true);
          return;
        }

        if (isSuspended) {
          return toast.error(Errors.Suspended);
        }

        setQuotedPost(post);
        setShowNewPostModal(true);
      }}
    >
      <div className="flex items-center space-x-2">
        <ChatBubbleBottomCenterTextIcon className="size-4" />
        <div>
          {publicationType === "Comment" ? "Quote comment" : "Quote post"}
        </div>
      </div>
    </MenuItem>
  );
};

export default Quote;
