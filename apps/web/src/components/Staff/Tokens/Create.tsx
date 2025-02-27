import errorToast from "@helpers/errorToast";
import { getAuthApiHeaders } from "@helpers/getAuthApiHeaders";
import { HEY_API_URL } from "@hey/data/constants";
import { Regex } from "@hey/data/regex";
import type { AllowedToken } from "@hey/types/hey";
import { Button, Form, Input, useZodForm } from "@hey/ui";
import axios from "axios";
import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { object, string, type z } from "zod";

const validationSchema = object({
  contractAddress: string()
    .min(1)
    .max(42)
    .regex(Regex.evmAddress, { message: "Invalid EVM address" }),
  decimals: string().min(1, { message: "Decimals is required" }),
  name: string().min(1, { message: "Name is required" }),
  symbol: string().min(1, { message: "Symbol is required" })
});

interface CreateProps {
  setShowCreateModal: Dispatch<SetStateAction<boolean>>;
  setTokens: Dispatch<SetStateAction<AllowedToken[]>>;
  tokens: AllowedToken[];
}

const Create: FC<CreateProps> = ({ setShowCreateModal, setTokens, tokens }) => {
  const [creating, setCreating] = useState(false);

  const form = useZodForm({
    schema: validationSchema
  });

  const create = async ({
    contractAddress,
    decimals,
    name,
    symbol
  }: z.infer<typeof validationSchema>) => {
    try {
      setCreating(true);
      const { data } = await axios.post(
        `${HEY_API_URL}/internal/tokens/create`,
        { contractAddress, decimals: Number.parseInt(decimals), name, symbol },
        { headers: getAuthApiHeaders() }
      );

      setTokens([...tokens, data?.result]);
      setShowCreateModal(false);
      toast.success("Token created");
    } catch (error) {
      errorToast(error);
    } finally {
      setCreating(false);
    }
  };

  return (
    <Form className="m-5 space-y-4" form={form} onSubmit={create}>
      <Input
        className="text-sm"
        placeholder="Name"
        type="text"
        {...form.register("name")}
      />
      <Input
        className="text-sm"
        placeholder="Symbol"
        type="text"
        {...form.register("symbol")}
      />
      <Input
        className="text-sm"
        max="30"
        min="0"
        placeholder="1"
        type="number"
        {...form.register("decimals")}
      />
      <Input
        className="text-sm"
        placeholder="Contract Address"
        type="text"
        {...form.register("contractAddress")}
      />
      <Button disabled={creating} type="submit">
        Create
      </Button>
    </Form>
  );
};

export default Create;
