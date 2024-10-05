import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export type getAssertionIdArguments = {
  asserter: string;
  claim: string;
  time: number;
  bond: number;
  liveness: number;
  identifier: string;
};

export const getAssertionId = async (args: getAssertionIdArguments): Promise<[string]> => {
    const { asserter, claim, time, bond, liveness, identifier } = args;
    
    const assertionId = await aptosClient().view<[string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_assertion_id`,
            typeArguments: [],
            functionArguments: [asserter, claim, time, bond, liveness, identifier],
        },
    });
    return assertionId;
};