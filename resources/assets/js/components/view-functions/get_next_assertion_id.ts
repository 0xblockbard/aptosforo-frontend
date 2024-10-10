import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export const getNextAssertionId = async (): Promise<[string]> => {

    const assertionId = await aptosClient().view<[string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_next_assertion_id`,
            typeArguments: [],
            functionArguments: [],
        },
    });
    return assertionId;
};
