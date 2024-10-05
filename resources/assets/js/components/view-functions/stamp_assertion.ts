import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export type stampAssertionArguments = {
    assertion_id: string;
    asserter: string;
};

export const stampAssertion = async (args: stampAssertionArguments): Promise<[string]> => {
    
    const { assertion_id, asserter } = args;

    const ancillaryData = await aptosClient().view<[string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::stamp_assertion`,
            typeArguments: [],
            functionArguments: [assertion_id, asserter],
        },
    });
    return ancillaryData;
};
