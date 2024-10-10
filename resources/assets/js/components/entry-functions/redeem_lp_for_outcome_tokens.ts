import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type redeemLpForOutcomeTokensArguments = {
    market_id: number;
    amount: number;
};

export const redeemLpForOutcomeTokens = (args: redeemLpForOutcomeTokensArguments): InputTransactionData => {
  const { market_id, amount } = args;
  const decimals = 8;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::redeem_lp_for_outcome_tokens`,
        typeArguments: [],
        functionArguments: [
            market_id,
            convertAmountFromHumanReadableToOnChain(amount, decimals)
        ],
    },
  };
};
