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
