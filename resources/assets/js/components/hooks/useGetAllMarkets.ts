// import { useEffect, useState } from "react";
// import { aptosClient } from "../utils/aptosClient";
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
// import { AccountAddress } from "@aptos-labs/ts-sdk";
// import { MODULE_ADDRESS } from "../../constants";

// import { hexToAscii } from "../utils/helpers";
// import { getMetadataAddress } from "../view-functions/get_metadata_address";

// export interface Market {
//   creator: string;
//   resolved: boolean;
//   asserted_outcome_id: string;
//   reward: number;
//   required_bond: number;

//   outcome_one: string;
//   outcome_two: string;
//   description: string;
//   image_url: string;

//   outcome_token_one_metadata: string;
//   outcome_token_two_metadata: string;

//   outcome_token_one_address: string;
//   outcome_token_two_address: string;
// }

// // Custom hook to fetch market
// export function useGetAllMarkets() {
//   const [markets, setMarkets] = useState<Market[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const { account } = useWallet();
//   const decimals = 8;
//   const ipfsUrl  = "https://ipfs.io/ipfs/";


//   useEffect(() => {
//     const fetchMarkets = async () => {
//       try {
//         // Step 1: Get the next market ID
//         const nextMarketIdRes = await aptosClient().view({
//           payload: {
//             function: `${MODULE_ADDRESS}::prediction_market::get_next_market_id`,
//             functionArguments: [],
//           },
//         });

//         const nextMarketId : number = nextMarketIdRes[0] as number ?? 0;
        
//         // Step 2: Loop through all market IDs and fetch each market
//         const marketList: Market[] = [];

//         for (let i = 0; i < nextMarketId; i++) {
//           const marketRes = await aptosClient().view({
//             payload: {
//               function: `${MODULE_ADDRESS}::prediction_market::get_market`,
//               functionArguments: [i],
//             },
//           });

//           // let outcome_token_one_metadata_address: string = await getMetadataAddress();

//           const [
//             creator,
//             resolved,
//             asserted_outcome_id,
//             reward,
//             required_bond,

//             outcome_one,
//             outcome_two,
//             description,
//             image_url,

//             outcome_token_one_metadata,
//             outcome_token_two_metadata,

//             outcome_token_one_address,
//             outcome_token_two_address

//             // category,
//             // tags
//           ] = marketRes;

//           let format_image_url     = image_url.toString();
//           let image_url_to_ascii = hexToAscii(format_image_url);

//           if(image_url_to_ascii.substring(7) == "ipfs://"){
//             // ipfs
//             image_url_to_ascii = ipfsUrl + image_url.toString().substring(7);
//           };

//           marketList.push({
//             creator: creator.toString(),
//             resolved: Boolean(resolved),
//             asserted_outcome_id: asserted_outcome_id.toString(),
//             reward: Number(reward),
//             required_bond: Number(required_bond),

//             description: hexToAscii(description),
//             image_url: image_url_to_ascii,

//             outcome_one: hexToAscii(outcome_one),
//             outcome_two: hexToAscii(outcome_two),
            
//             outcome_token_one_metadata: outcome_token_one_metadata.toString(),
//             outcome_token_two_metadata: outcome_token_two_metadata.toString(),

//             outcome_token_one_address: outcome_token_one_address.toString(),
//             outcome_token_two_address: outcome_token_two_address.toString()
            
//           });
//         }

//         console.log(marketList);

//         // Step 3: Update state with fetched markets
//         setMarkets(marketList);
//         setIsLoading(false);
        
//       } catch (error) {
//         console.error("Error fetching markets:", error);
//         setError("Failed to fetch markets.");
//         setIsLoading(false);
//       }
//     };

//     fetchMarkets();
//   }, [account]);

//   return { markets, isLoading, error };
// }

// // function hexToAscii(hex) {
// //   // Remove the "0x" prefix if present
// //   const hexString = hex.startsWith('0x') ? hex.slice(2) : hex;

// //   // Decode the hex string to ASCII
// //   let result = '';
// //   for (let i = 0; i < hexString.length; i += 2) {
// //     result += String.fromCharCode(parseInt(hexString.substr(i, 2), 16));
// //   }

// //   return result;
// // }


import { useEffect, useState } from "react";
import { aptosClient } from "../utils/aptosClient";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";
import { hexToAscii } from "../utils/helpers";
import { fetchMarketData } from "./../view-functions/fetch_market_data";

export interface Market {
  creator: string;
  resolved: boolean;
  asserted_outcome_id: string;
  reward: number;
  required_bond: number;
  outcome_one: string;
  outcome_two: string;
  description: string;
  image_url: string;
  outcome_token_one_metadata: string;
  outcome_token_two_metadata: string;
  outcome_token_one_address: string;
  outcome_token_two_address: string;
  // Pool data
  pool_market_id?: number;
  initializer?: string;
  outcome_token_one_reserve?: number;
  outcome_token_two_reserve?: number;
  lp_total_supply?: number;
  lp_token_metadata?: string;
  lp_token_address?: string;
}

export function useGetAllMarkets() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { account } = useWallet();

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const nextMarketIdRes = await aptosClient().view({
          payload: {
            function: `${MODULE_ADDRESS}::prediction_market::get_next_market_id`,
            functionArguments: [],
          },
        });

        const nextMarketId: number = nextMarketIdRes[0] as number ?? 0;
        const marketPromises = [];

        for (let i = 0; i < nextMarketId; i++) {
          marketPromises.push(fetchMarketData(i));
        }

        const marketList = await Promise.all(marketPromises);
        setMarkets(marketList);
      } catch (error) {
        console.error("Error fetching markets:", error);
        setError("Failed to fetch markets.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkets();
  }, [account]);

  return { markets, isLoading, error };
}
