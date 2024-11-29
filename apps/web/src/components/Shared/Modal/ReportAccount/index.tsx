import SingleAccount from "@components/Shared/SingleAccount";
import errorToast from "@helpers/errorToast";
import { Leafwatch } from "@helpers/leafwatch";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Errors } from "@hey/data/errors";
import { ACCOUNT } from "@hey/data/tracking";
import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import type { Account } from "@hey/indexer";
import { useReportAccountMutation } from "@hey/indexer";
import {
  Button,
  Card,
  EmptyState,
  ErrorMessage,
  Form,
  TextArea,
  useZodForm
} from "@hey/ui";
import type { FC } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAccountStatus } from "src/store/non-persisted/useAccountStatus";
import { object, string, type z } from "zod";
import Reason from "./Reason";

const reportReportAccountSchema = object({
  additionalComments: string().max(260, {
    message: "Additional comments should not exceed 260 characters"
  })
});

interface ReportAccountProps {
  account: Account | null;
}

const ReportAccount: FC<ReportAccountProps> = ({ account }) => {
  const { isSuspended } = useAccountStatus();
  const [type, setType] = useState("");
  const [subReason, setSubReason] = useState("");

  const form = useZodForm({
    schema: reportReportAccountSchema
  });

  const [
    createReport,
    { data: submitData, error: submitError, loading: submitLoading }
  ] = useReportAccountMutation({
    onCompleted: () => {
      Leafwatch.track(ACCOUNT.REPORT, { address: account?.address });
    }
  });

  const reportProfile = async ({
    additionalComments
  }: z.infer<typeof reportReportAccountSchema>) => {
    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    try {
      return await createReport({
        variables: {
          request: {
            additionalComments,
            account: account?.address,
            reason: type
          }
        }
      });
    } catch (error) {
      errorToast(error);
    }
  };

  return (
    <div onClick={stopEventPropagation}>
      {submitData?.reportProfile === null ? (
        <EmptyState
          hideCard
          icon={<CheckCircleIcon className="size-14" />}
          message="Account reported"
        />
      ) : account ? (
        <div className="p-5">
          <Card className="p-3">
            <SingleAccount
              hideFollowButton
              hideUnfollowButton
              account={account as Account}
              showUserPreview={false}
            />
          </Card>
          <div className="divider my-5" />
          <Form className="space-y-4" form={form} onSubmit={reportProfile}>
            {submitError ? (
              <ErrorMessage error={submitError} title="Failed to report" />
            ) : null}
            <Reason
              setSubReason={setSubReason}
              setType={setType}
              subReason={subReason}
              type={type}
            />
            {subReason ? (
              <>
                <TextArea
                  label="Description"
                  placeholder="Please provide additional details"
                  {...form.register("additionalComments")}
                />
                <Button
                  className="flex w-full justify-center"
                  disabled={submitLoading}
                  type="submit"
                >
                  Report
                </Button>
              </>
            ) : null}
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default ReportAccount;
