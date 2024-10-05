import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type assertMarketArguments = {
    market_id: string;
    asserted_outcome: string;
};

export const assertMarket = (args: assertMarketArguments): InputTransactionData => {
  const { market_id, asserted_outcome } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::assert_market`,
        typeArguments: [],
        functionArguments: [
            market_id,
            asserted_outcome
        ],
    },
  };
};
