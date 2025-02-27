import MenuTransition from "@components/Shared/MenuTransition";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  MusicalNoteIcon,
  PhotoIcon,
  VideoCameraIcon
} from "@heroicons/react/24/outline";
import { Spinner, Tooltip } from "@hey/ui";
import cn from "@hey/ui/cn";
import {
  MediaAudioMimeType,
  MediaImageMimeType
} from "@lens-protocol/metadata";
import { useClickAway } from "@uidotdev/usehooks";
import type { ChangeEvent, FC, MutableRefObject } from "react";
import { useId, useState } from "react";
import toast from "react-hot-toast";
import useUploadAttachments from "src/hooks/useUploadAttachments";
import { usePostAttachmentStore } from "src/store/non-persisted/post/usePostAttachmentStore";

const ImageMimeType = Object.values(MediaImageMimeType);
const AudioMimeType = Object.values(MediaAudioMimeType);
const VideoMimeType = [
  "video/mp4",
  "video/mpeg",
  "video/ogg",
  "video/webm",
  "video/quicktime"
];

const Attachment: FC = () => {
  const { attachments, isUploading } = usePostAttachmentStore((state) => state);
  const { handleUploadAttachments } = useUploadAttachments();
  const [showMenu, setShowMenu] = useState(false);
  const id = useId();
  const dropdownRef = useClickAway(() => {
    setShowMenu(false);
  }) as MutableRefObject<HTMLDivElement>;

  const isTypeAllowed = (files: FileList) => {
    const allowedTypes = [
      ...ImageMimeType,
      ...AudioMimeType,
      ...VideoMimeType
    ] as string[];

    for (const file of files) {
      if (allowedTypes.includes(file.type)) {
        return true;
      }
    }

    return false;
  };

  const isUploadAllowed = (files: FileList) => {
    if (files[0]?.type.slice(0, 5) === "image") {
      return attachments.length + files.length <= 4;
    }

    return files.length === 1;
  };

  const handleAttachment = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setShowMenu(false);

    try {
      const { files } = evt.target;

      if (!isUploadAllowed(files as FileList)) {
        return toast.error(
          "Exceeded max limit of 1 audio, or 1 video, or 4 images"
        );
      }

      if (!files) {
        return;
      }

      if (isTypeAllowed(files)) {
        await handleUploadAttachments(files);
        evt.target.value = "";
      } else {
        return toast.error("File format not allowed.");
      }
    } catch {
      return toast.error("Something went wrong while uploading!");
    }
  };

  const disableImageUpload = () => {
    const notImage = attachments[0] && attachments[0].type !== "Image";
    const isLimit = !notImage && attachments.length >= 4;
    return notImage || isLimit;
  };

  const disableOtherUpload = attachments.length > 0;

  return (
    <Tooltip content="Media" placement="top">
      <Menu as="div">
        <MenuButton
          aria-label="More"
          className="rounded-full outline-offset-8"
          onClick={() => setShowMenu(!showMenu)}
        >
          {isUploading ? (
            <Spinner size="sm" />
          ) : (
            <PhotoIcon className="size-5" />
          )}
        </MenuButton>
        <MenuTransition show={showMenu}>
          <MenuItems
            className="absolute z-[5] mt-2 rounded-xl border bg-white py-1 shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-900"
            ref={dropdownRef}
            static
          >
            <MenuItem
              as="label"
              className={({ focus }) =>
                cn(
                  { "dropdown-active": focus },
                  { "opacity-50": disableImageUpload() },
                  "menu-item !flex cursor-pointer items-center gap-1 space-x-1 rounded-lg"
                )
              }
              disabled={disableImageUpload()}
              htmlFor={`image_${id}`}
            >
              <PhotoIcon className="size-4" />
              <span className="text-sm">Upload image(s)</span>
              <input
                accept={ImageMimeType.join(",")}
                className="hidden"
                disabled={disableImageUpload()}
                id={`image_${id}`}
                multiple
                onChange={handleAttachment}
                type="file"
              />
            </MenuItem>
            <MenuItem
              as="label"
              className={({ focus }) =>
                cn(
                  { "dropdown-active": focus },
                  { "opacity-50": disableOtherUpload },
                  "menu-item !flex cursor-pointer items-center gap-1 space-x-1 rounded-lg"
                )
              }
              disabled={disableOtherUpload}
              htmlFor={`video_${id}`}
            >
              <VideoCameraIcon className="size-4" />
              <span className="text-sm">Upload video</span>
              <input
                accept={VideoMimeType.join(",")}
                className="hidden"
                disabled={disableOtherUpload}
                id={`video_${id}`}
                onChange={handleAttachment}
                type="file"
              />
            </MenuItem>
            <MenuItem
              as="label"
              className={({ focus }) =>
                cn(
                  { "dropdown-active": focus },
                  { "opacity-50": disableOtherUpload },
                  "menu-item !flex cursor-pointer items-center gap-1 space-x-1 rounded-lg"
                )
              }
              disabled={disableOtherUpload}
              htmlFor={`audio_${id}`}
            >
              <MusicalNoteIcon className="size-4" />
              <span className="text-sm">Upload audio</span>
              <input
                accept={AudioMimeType.join(",")}
                className="hidden"
                disabled={disableOtherUpload}
                id={`audio_${id}`}
                onChange={handleAttachment}
                type="file"
              />
            </MenuItem>
          </MenuItems>
        </MenuTransition>
      </Menu>
    </Tooltip>
  );
};

export default Attachment;
