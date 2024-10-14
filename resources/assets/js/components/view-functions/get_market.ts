import { aptosClient } from "../utils/aptosClient";
import { hexToAscii } from "../utils/helpers";
import { MODULE_ADDRESS } from "../../constants";

export type getMarketArguments = {
  market_id: number;
};

export const getMarket = async (args: getMarketArguments): Promise<[string, boolean, string, number, number, string, string, string, string, string, number, string, string, string, string]> => {
    const { market_id } = args;
    
    const marketInfo = await aptosClient().view<[string, boolean, string, number, number, string, string, string, string, string, number, string, string, string, string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_market`,
            typeArguments: [],
            functionArguments: [market_id],
        },
    });
    
    // destructure marketInfo to handle specific fields
    const [
        creator,
        resolved,
        assertedOutcomeIdHex,
        reward,
        requiredBond,
        outcomeOneHex,
        outcomeTwoHex,
        descriptionHex,    
        imageUrlHex, 

        categoriesHex,
        startTimestamp,

        outcomeTokenOneMetadata,
        outcomeTokenTwoMetadata,
        
        outcomeTokenOneAddress,
        outcomeTokenTwoAddress,
    ] = marketInfo;

    // Convert hex fields to ASCII
    const assertedOutcomeId  = hexToAscii(assertedOutcomeIdHex);
    const outcomeOne         = hexToAscii(outcomeOneHex);
    const outcomeTwo         = hexToAscii(outcomeTwoHex);
    const description        = hexToAscii(descriptionHex);
    const imageUrl           = hexToAscii(imageUrlHex);
    const categories         = hexToAscii(categoriesHex);

    return [
        creator,
        resolved,
        assertedOutcomeId,
        reward,
        requiredBond,
        outcomeOne,
        outcomeTwo,
        description,
        imageUrl,
        categories,
        startTimestamp,
        outcomeTokenOneMetadata,
        outcomeTokenTwoMetadata,
        outcomeTokenOneAddress,
        outcomeTokenTwoAddress,
    ];
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
//     market.image_url,
//     market.categories,
//     market.start_timestamp,
//     market.outcome_token_one_metadata,
//     market.outcome_token_two_metadata,
//     market.outcome_token_one_address,
//     market.outcome_token_two_address,
// )