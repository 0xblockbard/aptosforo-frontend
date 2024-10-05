import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type createOutcomeTokensArguments = {
    market_id: string;
    tokens_to_create: string;
};

export const createOutcomeTokens = (args: createOutcomeTokensArguments): InputTransactionData => {
  const { market_id, tokens_to_create } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::create_outcome_tokens`,
        typeArguments: [],
        functionArguments: [
            market_id,
            tokens_to_create
        ],
    },
  };
};
