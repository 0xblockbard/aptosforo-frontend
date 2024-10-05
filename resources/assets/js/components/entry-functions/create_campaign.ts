import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type createCampaignArguments = {
    name: string;
    description: string;
    image_url: string;
    funding_goal: number;
    duration: number;
    funding_type: number;
    decimals: number; // 8 for APT
};

export const createCampaign = (args: createCampaignArguments): InputTransactionData => {
  const { name, description, image_url, funding_goal, duration, funding_type, decimals } = args;

  return {
    data: {
        function: `${MODULE_ADDRESS}::crowdfund::create_campaign`,
        typeArguments: [],
        functionArguments: [
            name,
            description,
            image_url,
            convertAmountFromHumanReadableToOnChain(funding_goal, decimals),
            duration,
            funding_type
        ],
    },
  };
};
