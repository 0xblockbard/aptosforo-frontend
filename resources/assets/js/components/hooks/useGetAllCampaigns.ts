import { useEffect, useState } from "react";
import { aptosClient } from "../utils/aptosClient";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { MODULE_ADDRESS } from "../../constants";

export interface Campaign {
  creator: string;
  name: string;
  description: string;
  image_url: string;
  funding_type: number,
  
  fee: number,
  funding_goal: number;
  contributed_amount: number;
  claimed_amount: number,
  leftover_amount: number,
  refunded_amount: number,
  
  duration: number;
  active: boolean;
  
  claimed: boolean;
  is_successful: boolean;
  end_timestamp: number;
}

// Custom hook to fetch campaigns
export function useGetAllCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { account } = useWallet();
  const decimals = 8;
  const ipfsUrl  = "https://ipfs.io/ipfs/";


  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        // Step 1: Get the next campaign ID
        const nextCampaignIdRes = await aptosClient().view({
          payload: {
            function: `${MODULE_ADDRESS}::crowdfund::get_next_campaign_id`,
            functionArguments: [],
          },
        });

        // const nextCampaignId = nextCampaignIdRes[0];
        const nextCampaignId : number = nextCampaignIdRes[0] as number ?? 0;
        
        // Step 2: Loop through all campaign IDs and fetch each campaign
        const campaignList: Campaign[] = [];

        for (let i = 0; i < nextCampaignId; i++) {
          const campaignRes = await aptosClient().view({
            payload: {
              function: `${MODULE_ADDRESS}::crowdfund::get_campaign`,
              functionArguments: [i],
            },
          });

          const [
            creator,
            name,
            description,
            image_url,
            funding_type,
            fee,

            funding_goal,
            contributed_amount,
            claimed_amount,
            leftover_amount,
            refunded_amount,

            duration,
            end_timestamp,

            active,
            claimed,
            is_successful,
          ] = campaignRes;

          let format_image_url = image_url.toString();
          if(format_image_url.substring(7) == "ipfs://"){
            // ipfs
            format_image_url = ipfsUrl + image_url.toString().substring(7);
          };

          campaignList.push({
            creator: creator.toString(),
            name: name.toString(),
            description: description.toString(),
            image_url: format_image_url,
            funding_type: Number(funding_type),

            fee: Number(fee),
            funding_goal: Number(funding_goal) / 10**decimals,
            contributed_amount: Number(contributed_amount) / 10**decimals,
            claimed_amount: Number(claimed_amount) / 10**decimals,
            leftover_amount: Number(leftover_amount) / 10**decimals,
            refunded_amount: Number(refunded_amount) / 10**decimals,
            
            duration: Number(duration),
            end_timestamp: Number(end_timestamp),
            
            active: Boolean(active),
            claimed: Boolean(claimed),
            is_successful: Boolean(is_successful),
          });
        }

        console.log(campaignList);

        // Step 3: Update state with fetched campaigns
        setCampaigns(campaignList);
        setIsLoading(false);
        
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setError("Failed to fetch campaigns.");
        setIsLoading(false);
      }
    };

    fetchCampaigns();
  }, [account]);

  return { campaigns, isLoading, error };
}
