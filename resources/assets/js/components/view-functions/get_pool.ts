import { aptosClient } from "../utils/aptosClient";
import { hexToAscii } from "../utils/helpers";
import { MODULE_ADDRESS } from "../../constants";

export type getPoolArguments = {
  market_id: number;
};

export const getPool = async (args: getPoolArguments): Promise<[number, string, number, number, number, string, string]> => {
    const { market_id } = args;
    
    const poolInfo = await aptosClient().view<[number, string, number, number, number, string, string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_pool`,
            typeArguments: [],
            functionArguments: [market_id],
        },
    });

    return poolInfo;
};

// return the necessary fields from the market liquidity pool
// (
//     liquidity_pool.market_id,
//     liquidity_pool.initializer,

//     liquidity_pool.outcome_token_one_reserve,
//     liquidity_pool.outcome_token_two_reserve,

//     liquidity_pool.lp_total_supply,
//     liquidity_pool.lp_token_metadata,
//     liquidity_pool.lp_token_address
// )