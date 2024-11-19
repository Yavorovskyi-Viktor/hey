import Link from "next/link";
import type { FC } from "react";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import LoginButton from "../LoginButton";
import SignedAccount from "./SignedAccount";
import SignupButton from "./SignupButton";

export const NextLink = ({ children, href, ...rest }: Record<string, any>) => (
  <Link href={href} {...rest}>
    {children}
  </Link>
);

const MenuItems: FC = () => {
  const { currentProfile } = useProfileStore();

  if (currentProfile) {
    return <SignedAccount />;
  }

  return (
    <div className="flex items-center space-x-2">
      <SignupButton />
      <LoginButton />
    </div>
  );
};

export default MenuItems;
