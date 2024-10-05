import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type redeemOutcomeTokensArguments = {
    market_id: string;
    tokens_to_redeem: string;
};

export const redeemOutcomeTokens = (args: redeemOutcomeTokensArguments): InputTransactionData => {
  const { market_id, tokens_to_redeem } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::redeem_outcome_tokens`,
        typeArguments: [],
        functionArguments: [
            market_id,
            tokens_to_redeem
        ],
    },
  };
};
