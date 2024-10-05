import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export type getMarketIdArguments = {
    creator: string;
    time_bytes: string;
    description: string;
};

export const getMarketId = async (args: getMarketIdArguments): Promise<[string]> => {
    
    const { creator, time_bytes, description } = args;

    const marketId = await aptosClient().view<[string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_market_id`,
            typeArguments: [],
            functionArguments: [creator, time_bytes, description],
        },
    });
    return marketId;
};
