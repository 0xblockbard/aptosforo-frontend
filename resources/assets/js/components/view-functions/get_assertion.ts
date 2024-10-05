import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export type getAssertionArguments = {
  assertion_id: number;
};

export const getAssertion = async (args: getAssertionArguments): Promise<[string, boolean, boolean, number, number, number, string, number, string]> => {
    const { assertion_id } = args;
    
    const assertionInfo = await aptosClient().view<[string, boolean, boolean, number, number, number, string, number, string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_assertion`,
            typeArguments: [],
            functionArguments: [assertion_id],
        },
    });
    return assertionInfo;
};

// return the necessary fields from the assertion
// (
//     assertion_ref.asserter,
//     assertion_ref.settled,
//     assertion_ref.settlement_resolution,
//     assertion_ref.liveness,
//     assertion_ref.assertion_time,
//     assertion_ref.expiration_time,
//     assertion_ref.identifier,
//     assertion_ref.bond,
//     assertion_ref.disputer
// )