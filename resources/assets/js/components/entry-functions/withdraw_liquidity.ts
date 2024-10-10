import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type withdrawLiquidityArguments = {
    market_id: number;
    lp_token_amount: number;
};

export const withdrawLiquidity = (args: withdrawLiquidityArguments): InputTransactionData => {
  const { market_id, lp_token_amount } = args;
  const decimals = 8;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::withdraw_liquidity`,
        typeArguments: [],
        functionArguments: [
            market_id,
            convertAmountFromHumanReadableToOnChain(lp_token_amount, decimals)
        ],
    },
  };
};
