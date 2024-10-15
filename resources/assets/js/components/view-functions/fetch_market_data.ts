import { aptosClient } from "../utils/aptosClient";
import { getMetadataAddress } from "../view-functions/get_metadata_address";
import { hexToAscii } from "../utils/helpers";
import { MODULE_ADDRESS } from "../../constants";

const ipfsUrl = "https://ipfs.io/ipfs/";

export async function fetchMarketData(market_id: number): Promise<any> {
  try {
    // Fetch market data
    const marketRes = await aptosClient().view({
      payload: {
        function: `${MODULE_ADDRESS}::prediction_market::get_market`,
        functionArguments: [market_id],
      },
    });

    const [
      creator,
      resolved,
      asserted_outcome_id,
      reward,
      required_bond,
      outcome_one,
      outcome_two,
      description,
      image_url,
      outcome_token_one_metadata,
      outcome_token_two_metadata,
      outcome_token_one_address,
      outcome_token_two_address
    ] = marketRes;

    let formattedImageUrl = hexToAscii(image_url.toString());
    if (formattedImageUrl.startsWith("ipfs://")) {
      formattedImageUrl = ipfsUrl + formattedImageUrl.substring(7);
    }

    // Initialize default pool data
    let poolData = {
      pool_market_id: market_id,
      initializer: '',
      outcome_token_one_reserve: 0,
      outcome_token_two_reserve: 0,
      lp_total_supply: 0,
      lp_token_metadata: '',
      lp_token_address: '',
    };

    try {
      // Attempt to fetch pool data
      const poolRes = await aptosClient().view({
        payload: {
          function: `${MODULE_ADDRESS}::prediction_market::get_pool`,
          functionArguments: [market_id],
        },
      });

      poolData = {
        pool_market_id: market_id,
        initializer: poolRes[1] as string,
        outcome_token_one_reserve: Number(poolRes[2]),
        outcome_token_two_reserve: Number(poolRes[3]),
        lp_total_supply: Number(poolRes[4]),
        lp_token_metadata: poolRes[5].toString(),
        lp_token_address: poolRes[6].toString(),
      };

      console.log(poolData);
    } catch (poolError) {
        console.warn(`No pool found for market_id ${market_id}:`, poolError);
    }

    // Combine market and pool data and return
    return {
      creator: creator.toString(),
      resolved: Boolean(resolved),
      asserted_outcome_id: asserted_outcome_id.toString(),
      reward: Number(reward),
      required_bond: Number(required_bond),
      outcome_one: hexToAscii(outcome_one),
      outcome_two: hexToAscii(outcome_two),
      description: hexToAscii(description),
      image_url: formattedImageUrl,
      outcome_token_one_metadata: outcome_token_one_metadata.toString(),
      outcome_token_two_metadata: outcome_token_two_metadata.toString(),
      outcome_token_one_address: outcome_token_one_address.toString(),
      outcome_token_two_address: outcome_token_two_address.toString(),
      ...poolData, // Integrate pool data
    };
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
}
