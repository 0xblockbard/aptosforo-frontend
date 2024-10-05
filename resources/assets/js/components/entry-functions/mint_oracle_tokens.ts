import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type mintOracleTokensArguments = {
    amount: number;
};

export const mintOracleTokens = (args: mintOracleTokensArguments): InputTransactionData => {
  const {amount } = args;
  const decimals = 8;
  return {
    data: {
        function: `${MODULE_ADDRESS}::oracle_token::public_mint`,
        typeArguments: [],
        functionArguments: [
            amount * 10**decimals
        ],
    },
  };
};
