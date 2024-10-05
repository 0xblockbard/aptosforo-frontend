import "../sass/app.scss";

import ReactDOM from 'react-dom/client'; 

import { NETWORK } from "./constants";
import { WalletSelector } from './components/WalletSelector';
import { WalletProvider } from "./components/WalletProvider";
import { aptosClient } from "./components/utils/aptosClient";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { useState, useEffect } from "react";

// entry functions
import { initializeMarket } from "./components/entry-functions/initialize_market";
import { disputeAssertion } from "./components/entry-functions/dispute_assertion";
import { setAdminProperties } from "./components/entry-functions/set_admin_properties";
import { settleAssertion } from "./components/entry-functions/settle_assertion";
import { createOutcomeTokens } from "./components/entry-functions/create_outcome_tokens";
import { redeemOutcomeTokens } from "./components/entry-functions/redeem_outcome_tokens";
import { settleOutcomeTokens } from "./components/entry-functions/settle_outcome_tokens";
import { mintOracleTokens } from "./components/entry-functions/mint_oracle_tokens";


// view functions
// import { getCampaignInfo } from "./components/view-functions/get_campaign";
// import { getConfigInfo } from "./components/view-functions/get_admin_properties";
// import { getNextCampaignId } from "./components/view-functions/get_next_campaign_id";
// import { getContributorAmountInfo } from "./components/view-functions/get_contributor_amount";
// import { accountAPTBalance } from "./components/view-functions/accountBalance";

import { getAdminProperties } from "./components/view-functions/get_admin_properties";
import { getAssertionId } from "./components/view-functions/get_assertion_id";
import { getAssertion } from "./components/view-functions/get_assertion";
import { getMarket } from "./components/view-functions/get_market";
import { getMarketId } from "./components/view-functions/get_market_id";
import { stampAssertion } from "./components/view-functions/stamp_assertion";
import { composeClaim } from "./components/view-functions/compose_claim";

import { useGetAllMarkets } from "./components/hooks/useGetAllMarkets"; 

// start

var oracleTokensMintedSuccessMessage = `
    <div class="success_notification rounded-md bg-green-50 p-4 mt-2 mb-1 border border-green-600">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="sucess_message text-sm font-medium text-green-800">Mint successful. Have fun!</p>
            </div>
        </div>
    </div>`;

var refundSuccessMessage = `
    <div class="success_notification rounded-md bg-green-50 p-4 mt-2 mb-1 border border-orange-600">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="sucess_message text-sm font-medium text-orange-800"> Your refund is successful.</p>
            </div>
        </div>
    </div>`;


var claimFundsSuccessMessage = `
    <div class="success_notification rounded-md bg-green-50 p-4 mt-2 mb-1 border border-green-600">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="sucess_message text-sm font-medium text-green-800">Congratulations! Your funds have been claimed.</p>
            </div>
        </div>
    </div>`;



function MintOracleTokensButton() {
    const { account, signAndSubmitTransaction } = useWallet();

    const mintOracleTokenDiv = async () => {
      try {
        
        let aptosConfig = new AptosConfig({ network: NETWORK });
        let aptos       = new Aptos(aptosConfig);

        var faucet = $('#faucet');
        let amount: number = faucet.find('#mint_amount').val() as number;

        const response = await signAndSubmitTransaction(
          mintOracleTokens({
            amount
          })
        );
  
        // Wait for transaction to complete
        console.log('executing');
        await aptos.waitForTransaction({ transactionHash: response.hash });
  
        // update total contribution amount
        console.log('success minted');

        $('.notification_container').find('.general_notification').remove();
        $(oracleTokensMintedSuccessMessage).appendTo('.notification_container').fadeIn(2000);
        faucet.find('#mint_amount').val('')

        setTimeout(() => {
            $('.notification_container .success_notification').fadeOut(1000);
        }, 5000);

      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <button
          className={`${!account ? 'opacity-60 cursor-not-allowed' : '' } bg-teal-500 flex items-center justify-center text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
          onClick={mintOracleTokenDiv}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 text-white mr-3" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Mint
        </button>
      </div>
    );
}



const walletDiv = document.getElementById('connect-wallet');
if (walletDiv) {
    const root = ReactDOM.createRoot(walletDiv); 
    
    root.render(
        <WalletProvider>
            <WalletSelector />
        </WalletProvider>
    );
}


const MintOracleTokensButtonExists = document.getElementById('mint_oracle_tokens_button');
if (MintOracleTokensButtonExists) {
  const root = ReactDOM.createRoot(MintOracleTokensButtonExists);
  root.render(
    <WalletProvider>
      <MintOracleTokensButton />
    </WalletProvider>
  );
}

function CreateMarketSubmitButton() {
    const { account, signAndSubmitTransaction } = useWallet();
  
    const createNewMarket = async () => {
      try {
        
        let aptosConfig = new AptosConfig({ network: NETWORK });
        let aptos       = new Aptos(aptosConfig);
        
        var create_market_form = $('.create_market_form');
        let decimals            = 8;

        let outcome_one: string = create_market_form.find('.outcome_one').val() as string;
        let outcome_two: string = create_market_form.find('.outcome_two').val() as string;
        let description: string = create_market_form.find('.description').val() as string;
        let image_url: string   = create_market_form.find('.image_url').val() as string;
        let reward              = (create_market_form.find('.reward').val() as number) * 10**decimals;
        let bond                = (create_market_form.find('.bond').val() as number) * 10**decimals;

        const response = await signAndSubmitTransaction(
          initializeMarket({
            outcome_one,
            outcome_two,
            description,
            image_url,
            reward,
            bond
          })
        );
  
        // Wait for transaction to complete
        console.log('executing');
        await aptos.waitForTransaction({ transactionHash: response.hash });
  
        // redirect to show campaign page
        // window.location.replace(`/campaigns/${nextCampaignId}`);

      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <button
          className="create_market flex m-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          onClick={createNewMarket}
        >
          Create Market
        </button>
      </div>
    );
}


const CreateMarketSubmitButtonExists = document.getElementById('create_market_submit_button');
if (CreateMarketSubmitButtonExists) {
  const root = ReactDOM.createRoot(CreateMarketSubmitButtonExists);
  root.render(
    <WalletProvider>
      <CreateMarketSubmitButton />
    </WalletProvider>
  );
}


// helpers

// Function to convert duration string to seconds
// function convertDurationToSeconds(duration) {
//     // Extract the number part and convert it to an integer
//     let days = parseInt(duration);

//     // Convert days to seconds (1 day = 86400 seconds)
//     let seconds = days * 86400;

//     return seconds;
// }


// function MarketList() {
//     const { markets, isLoading, error } = useGetAllMarkets();
  
//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error fetching markets</div>;
  
//     return (
//       <div className="w-full mx-auto grid gap-6 lg:grid-cols-3 ">
//         {markets?.map((market, index) => (
          
//           <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
//             {/* Market Image and Status */}
//             <div className="flex-shrink-0 relative">
//               <a href={`/markets/${index}`}>
//                 <img
//                   className="lazy h-72 w-full object-cover hover:opacity-70"
//                   src={market.image_url ? market.image_url : 'https://via.placeholder.com/800'}
//                   alt={market.description}
//                 />
//               </a>
//               </div>
  
//             {/* Campaign Details */}
//             <div className="flex-1 bg-white pt-3 p-6 flex flex-col justify-between dark:bg-gray-800">
//               <div className="flex-1">
//                 {/* <p className="text-xl font-semibold showcase_text_gray_900">{market.description}</p>
//                 <p className="mt-3 text-base text-gray-500 dark:text-gray-300 text-justify"> */}
//                 <p className="mt-3 text-base text-gray-500 dark:text-gray-300 text-justify">
//                     {market.description.length > 300
//                         ? `${market.description.slice(0, 300)}...`
//                         : market.description}
//                   </p>
//                 {/* </p> */}
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     );
//   }
  

function MarketList() {
  const { markets, isLoading, error } = useGetAllMarkets();

  if (isLoading) return <div></div>;
  if (error) return <div>Error fetching markets</div>;

  return (
    <div className="w-full mx-auto grid gap-4 px-4 py-8 lg:grid-cols-4">
      {markets?.map((market, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-md border border-gray-50 overflow-hidden hover:shadow-lg transition duration-300">

          <div className="flex-1 bg-white pt-4 px-4">
            <div className="flex flex-row">
              <img className="w-12 h-12 rounded-sm object-cover hover:opacity-70" 
                  src={market.image_url ? market.image_url : 'https://via.placeholder.com/400x400'}
                  alt={market.description} />
              <h3 className="ml-4 leading-6 text-base font-semibold ">
                <a href={`/markets/${index}`}>
                  {market.description}
                </a>
              </h3>
            </div>

            <div className="flex flex-col justify-between">
              <div className="mt-10">
                <div className="flex justify-between">
                  
                  <button className="buy_outcome_one_button mr-0.5">
                    <span className="mr-1">Buy</span>
                    <span>{market.outcome_one}</span>
                    <svg className="size-4 inline -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>        
                  </button>

                  <button className="buy_outcome_two_button ml-0.5">
                    <span className="mr-1">Buy</span>
                    <span>{market.outcome_two}</span>
                    <svg className="size-4 inline -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>                                                        
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div className="my-3 ml-1 px-4 flex justify-between items-center">
            <div className="text-xs text-gray-500">
              <span className="mr-1">$X</span>
              <span>Vol.</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}


const showAllMarketsDiv = document.getElementById('show_all_markets');
if (showAllMarketsDiv) {
  const root = ReactDOM.createRoot(showAllMarketsDiv);
  root.render(
    <WalletProvider>
      <MarketList />
    </WalletProvider>
  );
}


// function fetchCampaignData(campaign_id): Promise<any> {

//     // Fetch campaign data using id
//     return getCampaignInfo({ campaign_id })
//         .then((campaignInfo) => {

//             return {
//                 creator: campaignInfo[0] as string,
//                 name: campaignInfo[1] as string,
//                 description: campaignInfo[2] as string,
//                 image_url: campaignInfo[3] as string,
//                 funding_type: campaignInfo[4] as number,
                
//                 fee: campaignInfo[5],
//                 funding_goal: campaignInfo[6],
//                 contributed_amount: campaignInfo[7],
//                 claimed_amount: campaignInfo[8],
//                 leftover_amount: campaignInfo[9],
//                 refunded_amount: campaignInfo[10],

//                 duration: campaignInfo[11],
//                 end_timestamp: campaignInfo[12],

//                 claimed: campaignInfo[13],
//                 is_successful: campaignInfo[14],
//             };
//         })
//         .catch((error) => {
//             console.error('Error fetching campaign data:', error);
//             throw error;
//         });
// }


// function getContributorAmount(campaign_id, contributor): Promise<any> {

//   // Fetch campaign data using id
//   return getContributorAmountInfo({ campaign_id, contributor_address: contributor })
//       .then((contributorInfo) => {
//           return {
//             contributorInfo
//           };
//       })
//       .catch((error) => {
//           console.error('Error fetching contributor info :', error);
//           throw error;
//       });
// }


// function updateCampaignForm(campaignData: { name: string; description: string; image_url: string }) {
//     $('.update_campaign_form #name').val(campaignData.name);
//     $('.update_campaign_form #description').val(campaignData.description);
//     $('.update_campaign_form #image_url').val(campaignData.image_url);
// }

// function renderCampaignInfo(campaignData: { 
//     creator: string;
//     name: string; 
//     description: string;
//     image_url: string; 
//     end_timestamp: number,
//     funding_type: number,
//     contributed_amount: number,
//     funding_goal: number
// }) {

//     // const campaign_id = (window as any).campaignId;
//     const decimals = 8;

//     const campaignIdElement = document.getElementById('campaignId');
//     let campaign_id = Number(campaignIdElement.getAttribute('data-campaign-id')) + 1;

//     $('.single_campaign #count').text("Campaign #" + campaign_id);
//     $('.single_campaign #creator').text(campaignData.name);
//     $('.single_campaign #name').text(campaignData.name);
//     $('.single_campaign #description').text(campaignData.description);
//     $('.single_campaign #featured_image').attr('src', campaignData.image_url);

//     let days_remaining = Math.max(0, Math.round((campaignData.end_timestamp - Date.now() / 1000) / 86400));
//     if(days_remaining > 0){
//       $('.single_campaign #days_remaining').text(days_remaining);
//     } else {
//       $('.single_campaign_container').text("Completed");
//     };

//     $('.single_campaign #contributed_amount').text(campaignData.contributed_amount / 10**decimals);
//     $('.single_campaign #target_amount').text(campaignData.funding_goal / 10**decimals);

//     // percentage raise
//     let percentage_raised = (campaignData.contributed_amount / campaignData.funding_goal) * 100;
//     $('.single_campaign #amount_raised_percentage').text(percentage_raised + '%');
//     $('.single_campaign #progress_bar').css('width', percentage_raised.toFixed(2) + '%');

//     if(campaignData.funding_type == 0){
//         $('.single_campaign #cf_type').text("Flexible");
//     } else if (campaignData.funding_type == 1){
//         $('.single_campaign #cf_type').text("Fixed");
//     }
// }



$(document).ready(function () {
    
    const currentPath       = window.location.pathname;
    const campaignIdElement = document.getElementById('campaignId');
    
    // if (campaignIdElement) {
    //     let campaign_id = Number(campaignIdElement.getAttribute('data-campaign-id'));
    //     console.log('campaign_id:', campaign_id);

    //     if (isNaN(campaign_id)) {
    //         console.error('Invalid campaign ID');
    //         return;
    //     }

    //     if (currentPath.includes("/info")) {
    //         fetchCampaignData(campaign_id)
    //             .then((campaignData) => {
    //                 updateCampaignForm(campaignData);
    //             });
    //     } else if (currentPath.includes("/campaigns")) {
    //         fetchCampaignData(campaign_id)
    //             .then((campaignData) => {
    //                 renderCampaignInfo(campaignData);
    //             });
    //     }
    // };

});


