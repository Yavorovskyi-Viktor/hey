import LicensePicker from "@components/Composer/LicensePicker";
import ToggleWithHelper from "@components/Shared/ToggleWithHelper";
import { PostActionType } from "@hey/indexer";
import type { CollectModuleType } from "@hey/types/hey";
import { Button } from "@hey/ui";
import type { Dispatch, FC, SetStateAction } from "react";
import { useCollectModuleStore } from "src/store/non-persisted/post/useCollectModuleStore";
import { usePostLicenseStore } from "src/store/non-persisted/post/usePostLicenseStore";
import { isAddress } from "viem";
import AmountConfig from "./AmountConfig";
import CollectLimitConfig from "./CollectLimitConfig";
import FollowersConfig from "./FollowersConfig";
import ReferralConfig from "./ReferralConfig";
import SplitConfig from "./SplitConfig";
import TimeLimitConfig from "./TimeLimitConfig";

interface CollectFormProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const CollectForm: FC<CollectFormProps> = ({ setShowModal }) => {
  const { collectModule, reset, setCollectModule } = useCollectModuleStore(
    (state) => state
  );
  const { setLicense } = usePostLicenseStore();

  const { SimpleCollectAction } = PostActionType;
  const recipients = collectModule.recipients || [];
  const splitTotal = recipients.reduce((acc, curr) => acc + curr.split, 0);

  const hasEmptyRecipients = recipients.some(
    (recipient) => !recipient.recipient
  );
  const hasInvalidEthAddressInRecipients = recipients.some(
    (recipient) => recipient.recipient && !isAddress(recipient.recipient)
  );
  const hasZeroSplits = recipients.some((recipient) => recipient.split === 0);
  const hasImproperSplits = recipients.length > 1 && splitTotal !== 100;

  const isRecipientsDuplicated = () => {
    const recipientsSet = new Set(
      recipients.map((recipient) => recipient.recipient)
    );
    return recipientsSet.size !== recipients.length;
  };

  const setCollectType = (data: CollectModuleType) => {
    setCollectModule({
      ...collectModule,
      ...data
    });
  };

  const toggleCollect = () => {
    if (collectModule.type) {
      setLicense(null);
      reset();
    } else {
      setCollectType({ type: SimpleCollectAction });
    }
  };

  return (
    <>
      <div className="p-5">
        <ToggleWithHelper
          description="This post can be collected"
          heading="Enable Collect"
          on={collectModule.type !== null}
          setOn={toggleCollect}
        />
      </div>
      <div className="divider" />
      {collectModule.type !== null ? (
        <>
          <div className="m-5">
            <AmountConfig setCollectType={setCollectType} />
            {collectModule.amount?.value ? (
              <>
                <ReferralConfig setCollectType={setCollectType} />
                <SplitConfig
                  isRecipientsDuplicated={isRecipientsDuplicated}
                  setCollectType={setCollectType}
                />
              </>
            ) : null}
            <CollectLimitConfig setCollectType={setCollectType} />
            <TimeLimitConfig setCollectType={setCollectType} />
            <FollowersConfig setCollectType={setCollectType} />
          </div>
          <div className="divider" />
          <div className="m-5">
            <LicensePicker />
          </div>
          <div className="divider" />
        </>
      ) : null}
      <div className="flex space-x-2 p-5">
        <Button
          className="ml-auto"
          onClick={() => {
            setShowModal(false);
            setLicense(null);
            reset();
          }}
          outline
          variant="danger"
        >
          {collectModule.type ? "Reset" : "Cancel"}
        </Button>
        <Button
          disabled={
            (Number.parseFloat(collectModule.amount?.value as string) <= 0 &&
              collectModule.type !== null) ||
            hasImproperSplits ||
            hasEmptyRecipients ||
            hasZeroSplits ||
            hasInvalidEthAddressInRecipients ||
            isRecipientsDuplicated()
          }
          onClick={() => setShowModal(false)}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default CollectForm;
