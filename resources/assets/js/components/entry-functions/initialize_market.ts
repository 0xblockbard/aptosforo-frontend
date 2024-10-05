import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type initializeMarketArguments = {
    outcome_one: string;
    outcome_two: string;
    description: string;
    image_url: string;
    reward: number;
    bond: number;
};

export const initializeMarket = (args: initializeMarketArguments): InputTransactionData => {
  const { outcome_one, outcome_two, description, image_url, reward, bond } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::initialize_market`,
        typeArguments: [],
        functionArguments: [
            outcome_one,
            outcome_two,
            description,
            image_url,
            reward,
            bond
        ],
    },
  };
};
