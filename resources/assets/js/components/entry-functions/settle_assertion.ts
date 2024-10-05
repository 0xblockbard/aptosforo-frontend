import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type settleAssertionArguments = {
    assertion_id: string;
};

export const settleAssertion = (args: settleAssertionArguments): InputTransactionData => {
  const { assertion_id } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::preduction_market::settle_assertion`,
        typeArguments: [],
        functionArguments: [
          assertion_id
        ],
    },
  };
};
