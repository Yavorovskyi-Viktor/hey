import Misuse from "@components/Shared/Account/Icons/Misuse";
import Verified from "@components/Shared/Account/Icons/Verified";
import AccountPreview from "@components/Shared/AccountPreview";
import getAccount from "@hey/helpers/getAccount";
import getAvatar from "@hey/helpers/getAvatar";
import getLennyURL from "@hey/helpers/getLennyURL";
import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import type { Account } from "@hey/indexer";
import { Image } from "@hey/ui";
import Link from "next/link";
import type { FC, SyntheticEvent } from "react";

interface NotificationProfileProps {
  account: Account;
}

export const NotificationAccountAvatar: FC<NotificationProfileProps> = ({
  account
}) => {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.src = getLennyURL(account.address);
  };

  return (
    <AccountPreview
      handle={account.username?.localName}
      address={account.address}
    >
      <Link
        className="rounded-full outline-offset-2"
        href={getAccount(account).link}
        onClick={stopEventPropagation}
      >
        <Image
          alt={account.address}
          className="size-7 rounded-full border bg-gray-200 sm:size-8 dark:border-gray-700"
          height={32}
          onError={handleImageError}
          src={getAvatar(account)}
          width={32}
        />
      </Link>
    </AccountPreview>
  );
};

export const NotificationAccountName: FC<NotificationProfileProps> = ({
  account
}) => {
  const profileLink = getAccount(account).link;

  return (
    <AccountPreview
      handle={account.username?.localName}
      address={account.address}
    >
      <Link
        className="inline-flex items-center space-x-1 font-bold outline-none hover:underline focus:underline"
        href={profileLink}
        onClick={stopEventPropagation}
      >
        <span>{getAccount(account).name}</span>
        <Verified address={account.address} iconClassName="size-4" />
        <Misuse address={account.address} iconClassName="size-4" />
      </Link>
    </AccountPreview>
  );
};
