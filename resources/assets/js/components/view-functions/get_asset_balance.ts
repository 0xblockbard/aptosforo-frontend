import { aptosClient } from "../utils/aptosClient";
import { MODULE_ADDRESS } from "../../constants";

export type AccountFungibleAssetBalanceArguments = {
  accountAddress: string;
  metadata: string; 
};

export const getAssetBalance = async (args: AccountFungibleAssetBalanceArguments): Promise<number> => {
  const { accountAddress, metadata } = args;

  const balance = await aptosClient().view<[number]>({
    payload: {
      function: "0x1::primary_fungible_store::balance",
      typeArguments: [],
      functionArguments: [
        accountAddress,           
        metadata
      ],
    },
  });

  return balance[0];
};
