import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export type getMarketArguments = {
  market_id: number;
};

export const getMarket = async (args: getMarketArguments): Promise<[string, boolean, string, number, number, string, string, string, string, string, string, string]> => {
    const { market_id } = args;
    
    const marketInfo = await aptosClient().view<[string, boolean, string, number, number, string, string, string, string, string, string, string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_market`,
            typeArguments: [],
            functionArguments: [market_id],
        },
    });
    return marketInfo;
};

// return the necessary fields from the market
// (
//     market.creator,
//     market.resolved,
//     market.asserted_outcome_id,
//     market.reward,
//     market.required_bond,
//     market.outcome_one,
//     market.outcome_two,
//     market.description,
//     market.outcome_token_one_metadata,
//     market.outcome_token_two_metadata,
//     market.outcome_token_one_address,
//     market.outcome_token_two_address,
// )