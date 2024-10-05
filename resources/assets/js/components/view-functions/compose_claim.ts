import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export type composeClaimArguments = {
    outcome: string;
    description: string;
};

export const composeClaim = async (args: composeClaimArguments): Promise<[string]> => {
    
    const { outcome, description } = args;

    const claim = await aptosClient().view<[string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::compose_claim`,
            typeArguments: [],
            functionArguments: [outcome, description],
        },
    });
    return claim;
};
