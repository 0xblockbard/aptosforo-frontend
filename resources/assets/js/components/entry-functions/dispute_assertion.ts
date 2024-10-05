import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type disputeAssertionArguments = {
    assertion_id: string;
};

export const disputeAssertion = (args: disputeAssertionArguments): InputTransactionData => {
  const { assertion_id } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::preduction_market::dispute_assertion`,
        typeArguments: [],
        functionArguments: [
          assertion_id
        ],
    },
  };
};
