import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type depositLiquidityArguments = {
    market_id: number;
    amount: number;
};

export const depositLiquidity = (args: depositLiquidityArguments): InputTransactionData => {
  const { market_id, amount } = args;
  const decimals = 8;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::deposit_liquidity`,
        typeArguments: [],
        functionArguments: [
            market_id,
            convertAmountFromHumanReadableToOnChain(amount, decimals)
        ],
    },
  };
};
