import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";
// Internal utils
import { convertAmountFromHumanReadableToOnChain } from "../utils/helpers";

export type setAdminPropertiesArguments = {
    currency_metadata: string;
    min_liveness: number;
    default_fee: number;
    treasury_address: string;
    burned_bond_percentage: number;
};

export const setAdminProperties = (args: setAdminPropertiesArguments): InputTransactionData => {
  const decimals = 8;
  const { currency_metadata, min_liveness, default_fee, treasury_address, burned_bond_percentage } = args;
  return {
    data: {
        function: `${MODULE_ADDRESS}::prediction_market::set_admin_properties`,
        typeArguments: [],
        functionArguments: [
            currency_metadata,
            min_liveness,,
            convertAmountFromHumanReadableToOnChain(default_fee, decimals),
            treasury_address,
            burned_bond_percentage
        ],
    },
  };
};
