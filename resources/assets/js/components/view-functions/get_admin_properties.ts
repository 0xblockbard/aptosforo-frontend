import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export const getAdminProperties = async (): Promise<[number, number, number, string, string]> => {
    
    const adminProperties = await aptosClient().view<[number, number, number, string, string]>({
        payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_admin_properties`,
            typeArguments: [],
            functionArguments: [],
        },
    });
    return adminProperties;
};

// return admin_properties values
// (
//     admin_properties.default_fee,
//     admin_properties.burned_bond_percentage,
//     admin_properties.min_liveness,
//     admin_properties.treasury_address,
//     option::destroy_some(admin_properties.currency_metadata)
// )