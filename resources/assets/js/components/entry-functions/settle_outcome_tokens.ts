import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type settleOutcomeTokensArguments = {
    market_id: string;
};

export const settleOutcomeTokens = (args: settleOutcomeTokensArguments): InputTransactionData => {
  const { market_id } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::settle_outcome_tokens`,
        typeArguments: [],
        functionArguments: [
            market_id
        ],
    },
  };
};
