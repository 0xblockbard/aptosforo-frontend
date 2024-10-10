import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export const getNextMarketId = async (): Promise<[string]> => {

    const marketId = await aptosClient().view<[string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_next_market_id`,
            typeArguments: [],
            functionArguments: [],
        },
    });
    return marketId;
};
