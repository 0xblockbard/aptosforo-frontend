import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type sellOutcomeTokensArguments = {
    market_id: number;
    outcome_token: number[];
    amount: number;
};

export const sellOutcomeTokens = (args: sellOutcomeTokensArguments): InputTransactionData => {
  const { market_id, outcome_token, amount } = args;
  const decimals = 8;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::sell_outcome_tokens`,
        typeArguments: [],
        functionArguments: [
            market_id,
            outcome_token,
            convertAmountFromHumanReadableToOnChain(amount, decimals)
        ],
    },
  };
};
