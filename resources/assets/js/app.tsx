import "../sass/app.scss";

import ReactDOM from 'react-dom/client'; 

import { NETWORK } from "./constants";
import { WalletSelector } from './components/WalletSelector';
import { WalletProvider } from "./components/WalletProvider";
import { aptosClient } from "./components/utils/aptosClient";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, MoveVector, Network } from "@aptos-labs/ts-sdk";
import { useState, useEffect } from "react";

// components
import { MarketListPlaceholder } from "./components/placeholders/market_list_placeholder"

// entry functions
import { initializeMarket } from "./components/entry-functions/initialize_market";
import { disputeAssertion } from "./components/entry-functions/dispute_assertion";
import { setAdminProperties } from "./components/entry-functions/set_admin_properties";
import { settleAssertion } from "./components/entry-functions/settle_assertion";
import { depositLiquidity } from "./components/entry-functions/deposit_liquidity";
import { withdrawLiquidity } from "./components/entry-functions/withdraw_liquidity";
import { buyOutcomeTokens } from "./components/entry-functions/buy_outcome_tokens";
import { sellOutcomeTokens } from "./components/entry-functions/sell_outcome_tokens";
import { redeemLpForOutcomeTokens } from "./components/entry-functions/redeem_lp_for_outcome_tokens";
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
import { getPool } from "./components/view-functions/get_pool";
import { getNextMarketId } from "./components/view-functions/get_next_market_id";
import { getNextAssertionId } from "./components/view-functions/get_next_assertion_id";
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


var transactionSuccessMessage = `
    <div class="success_notification rounded-md bg-green-50 p-4 mt-2 mb-1 border border-green-600">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="sucess_message text-sm font-medium text-green-800">Transaction successful.</p>
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
  

function MarketList() {
  
  const { markets, isLoading, error } = useGetAllMarkets();

  if (isLoading) return <MarketListPlaceholder />;

  if (error) return <div>Error fetching markets</div>;

  return (
    <div className="w-full mx-auto grid gap-4 px-4 py-8 lg:grid-cols-4">
      {markets?.map((market, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300">

          <div className="flex-1 bg-white pt-4 px-4">
            <div className="flex flex-row">
              <img className="w-12 h-12 rounded-sm object-cover hover:opacity-70" 
                  src={market.image_url ? market.image_url : 'https://via.placeholder.com/400x400'}
                  alt={market.description} />
              <h3 className="ml-4 leading-6 text-base font-semibold ">
                <a href={`/markets/${index}`} className="hover:underline">
                  {market.description}
                </a>
              </h3>
            </div>

            <div className="flex flex-col justify-between">
              <div className="mt-10">
                <div className="flex justify-between">
                  
                  <a className="flex flex-1" href={`/markets/${index}`}>
                    <button className="buy_outcome_one_button px-2 py-2 mr-0.5 bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-emerald-900">
                      <span className="mr-1">Buy</span>
                      <span>{market.outcome_one}</span>
                      <svg className="size-4 inline ml-1 -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                      </svg>        
                    </button>
                  </a>

                  <a className="flex flex-1" href={`/markets/${index}`}>
                    <button className="buy_outcome_two_button px-2 py-2 ml-0.5 bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-rose-900">
                      <span className="mr-1">Buy</span>
                      <span>{market.outcome_two}</span>
                      {market.outcome_two === "No" ? (
                        <svg className="size-4 inline ml-1 -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>                 
                      ) : (
                        <svg className="size-4 inline ml-1 -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>   
                      )}                                      
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div className="my-3 ml-1 px-4 flex justify-between items-center">
            <div className="text-xs text-gray-500">
              <span className="mr-1">{((market.outcome_token_one_reserve + market.outcome_token_two_reserve) / 10**6).toFixed(2)}</span>
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

async function fetchMarketData(market_id): Promise<any> {
  try {
      // Fetch market data
      const marketInfo = await getMarket({ market_id });

      // Initialize default pool data
      let poolData = {
        pool_market_id: market_id,
        initializer: '',
        outcome_token_one_reserve: 0,
        outcome_token_two_reserve: 0,
        lp_total_supply: 0,
        lp_token_metadata: '',
        lp_token_address: '',
      };

      try {
        // Attempt to fetch pool data
        const poolInfo = await getPool({ market_id });
        // If successful, update poolData with actual values
        poolData = {
            pool_market_id: poolInfo[0] as number,
            initializer: poolInfo[1] as string,
            outcome_token_one_reserve: poolInfo[2] as number,
            outcome_token_two_reserve: poolInfo[3] as number,
            lp_total_supply: poolInfo[4] as number,
            lp_token_metadata: poolInfo[5] as string,
            lp_token_address: poolInfo[6] as string,
        };
      } catch (poolError) {
          // Pool not found, keep default placeholder values
          console.warn(`Pool not found for market_id ${market_id}:`, poolError);
      }

      // Combine and return data
      return {
          creator: marketInfo[0] as string,
          resolved: marketInfo[1],
          asserted_outcome_id: marketInfo[2] as string,
          reward: marketInfo[3] as number,
          required_bond: marketInfo[4] as number,

          outcome_one: marketInfo[5] as string,
          outcome_two: marketInfo[6] as string,
          description: marketInfo[7] as string,
          image_url: marketInfo[8] as string,

          categories: marketInfo[9] as string,
          start_timestamp: marketInfo[10] as number,

          outcome_token_one_metadata: marketInfo[11] as string,
          outcome_token_two_metadata: marketInfo[12] as string,

          outcome_token_one_address: marketInfo[13] as string,
          outcome_token_two_address: marketInfo[14] as string,

          ...poolData,

      };
  } catch (error) {
      console.error('Error fetching market data:', error);
      throw error;
  }
}



function renderMarketInfo(marketData: { 
    creator: string;
    name: string; 
    description: string;
    image_url: string; 
    outcome_one: string;
    outcome_two: string;
    outcome_token_one_reserve: number;
    outcome_token_two_reserve: number;
}) {

    // const campaign_id = (window as any).campaignId;
    const decimals = 8;

    const marketIdElement = document.getElementById('marketId');
    let market_id = Number(marketIdElement.getAttribute('data-market-id')) + 1;

    $('.single_market #name').text(marketData.name);
    $('.single_market #description').text(marketData.description);
    $('.single_market #featured_image').attr('src', marketData.image_url);

    $('.single_market .outcome_one').text(marketData.outcome_one);
    $('.single_market .outcome_two').text(marketData.outcome_two);

    // Calculate prices
    const prices = calculatePrices(marketData.outcome_token_one_reserve, marketData.outcome_token_two_reserve);

    $('.single_market .outcome_one_price').text('$' + prices.outcomeOnePrice.toFixed(2));
    $('.single_market .outcome_two_price').text('$' + prices.outcomeTwoPrice.toFixed(2)); 

}


function calculatePrices(outcome_token_one_reserve, outcome_token_two_reserve) {

  outcome_token_one_reserve = Number(outcome_token_one_reserve);
  outcome_token_two_reserve = Number(outcome_token_two_reserve);
  const totalReserves = outcome_token_one_reserve + outcome_token_two_reserve;

  console.log("totalReserves: ", totalReserves);

  // Ensure reserves are numbers and avoid division by zero
  if (outcome_token_one_reserve <= 0 || outcome_token_two_reserve <= 0) {
      return {
          outcomeOnePrice: 0,
          outcomeTwoPrice: 0,
      };
  }

  console.log("outcome_token_one_reserve: ", outcome_token_one_reserve);
  console.log("outcome_token_two_reserve: ", outcome_token_two_reserve);

  const outcomeOnePrice = outcome_token_one_reserve / totalReserves;
  const outcomeTwoPrice = outcome_token_two_reserve / totalReserves;

  return {
      outcomeOnePrice,
      outcomeTwoPrice,
  };
}



$(document).ready(function () {
    
    const currentPath       = window.location.pathname;
    const marketIdElement = document.getElementById('marketId');
    
    if (marketIdElement) {
        let market_id = Number(marketIdElement.getAttribute('data-market-id'));
        console.log('market_id:', market_id);

        if (isNaN(market_id)) {
            console.error('Invalid market ID');
            return;
        }

        if (currentPath.includes("/markets")) {
            fetchMarketData(market_id)
                .then((marketData) => {
                    console.log('marketData: ', marketData);
                    renderMarketInfo(marketData);
                });
        }
    };

    // Select the buttons
    const buyOutcomeOneButton = document.querySelector('.buy_outcome_one_button');
    const buyOutcomeTwoButton = document.querySelector('.buy_outcome_two_button');

    // Add event listeners to the buttons
    buyOutcomeOneButton.addEventListener('click', () => {
        selectOutcome('one');
    });

    buyOutcomeTwoButton.addEventListener('click', () => {
        selectOutcome('two');
    });

    selectOutcome('one'); // default

    // Select Buy/Sell
    const buyButton  = document.querySelector('.buy');
    const sellButton = document.querySelector('.sell');

    buyButton.addEventListener('click', () => {
      selectBuyOrSell('buy');
    }); 

    sellButton.addEventListener('click', () => {
      selectBuyOrSell('sell');
    });

    selectBuyOrSell('buy'); // default

});


// Function to select an outcome
function selectOutcome(outcome) {

  // Select the buttons
  const buyOutcomeOneButton = document.querySelector('.buy_outcome_one_button');
  const buyOutcomeTwoButton = document.querySelector('.buy_outcome_two_button');

  // Select the hidden element that stores the selected outcome
  const selectedOutcomeElement = document.getElementById('selected_outcome');
  
  // Update the data-selected-outcome attribute
  selectedOutcomeElement.setAttribute('data-selected-outcome', outcome);

  if (outcome === 'one') {
      // Activate Outcome One Button (use hover state classes)
      buyOutcomeOneButton.classList.add('bg-emerald-500', 'text-emerald-900');
      buyOutcomeOneButton.classList.remove('bg-emerald-50', 'text-emerald-500');

      // Deactivate Outcome Two Button (reset to default state)
      buyOutcomeTwoButton.classList.add('bg-rose-50', 'text-rose-500');
      buyOutcomeTwoButton.classList.remove('bg-rose-500', 'text-rose-900');
  } else if (outcome === 'two') {
      // Activate Outcome Two Button (use hover state classes)
      buyOutcomeTwoButton.classList.add('bg-rose-500', 'text-rose-900');
      buyOutcomeTwoButton.classList.remove('bg-rose-50', 'text-rose-500');

      // Deactivate Outcome One Button (reset to default state)
      buyOutcomeOneButton.classList.add('bg-emerald-50', 'text-emerald-500');
      buyOutcomeOneButton.classList.remove('bg-emerald-500', 'text-emerald-900');
  } else {
      // If no outcome is selected, reset both buttons to default state
      buyOutcomeOneButton.classList.add('bg-emerald-50', 'text-emerald-500');
      buyOutcomeOneButton.classList.remove('bg-emerald-500', 'text-emerald-900');

      buyOutcomeTwoButton.classList.add('bg-rose-50', 'text-rose-500');
      buyOutcomeTwoButton.classList.remove('bg-rose-500', 'text-rose-900');
  }
}


// Function to select an outcome
function selectBuyOrSell(selectedType) {

  const buyButton  = document.querySelector('.buy');
  const sellButton = document.querySelector('.sell');

  // Select the hidden element that stores the selected type
  const selectedTypeElement = document.getElementById('selected_type');
  console.log('selectedType: ', selectedType);

  // Update the data-selected-outcome attribute
  selectedTypeElement.setAttribute('data-selected-type', selectedType);

  if(selectedType == "buy"){
    buyButton.classList.add('font-semibold', 'text-teal-600', 'border-b-2', 'border-teal-600')
    sellButton.classList.remove('font-semibold', 'text-teal-600', 'border-b-2', 'border-teal-600')
  } else if (selectedType == "sell"){
    buyButton.classList.remove('font-semibold', 'text-teal-600', 'border-b-2', 'border-teal-600')
    sellButton.classList.add('font-semibold', 'text-teal-600', 'border-b-2', 'border-teal-600')
  } else {
    buyButton.classList.add('font-semibold', 'text-teal-600', 'border-b-2', 'border-teal-600')
    sellButton.classList.remove('font-semibold', 'text-teal-600', 'border-b-2', 'border-teal-600')
  }

}

const displaySuccessNotification = () => {
  $('.notification_container').find('.general_notification').remove();
  $(transactionSuccessMessage).appendTo('.notification_container').fadeIn(2000);

  setTimeout(() => {
    $('.notification_container .success_notification').fadeOut(1000);
  }, 5000);
};




function BuyOrSellOutcomeTokenButton() {
  const { account, signAndSubmitTransaction } = useWallet();

  // const processBuyOrSellOutcomeToken = async () => {
  //   try {
      
  //     let aptosConfig = new AptosConfig({ network: NETWORK });
  //     let aptos       = new Aptos(aptosConfig);

  //     const marketIdElement = document.getElementById('market_actions_card');
  //     let market_id = Number(marketIdElement.getAttribute('data-market-id'));
      
  //     var market_pool_form = $('.market_actions_form');
  //     let amount: number = market_pool_form.find('.amount').val() as number;

  //     const selectedTypeIdElement = document.getElementById('selected_type');
  //     let selectedType = String(selectedTypeIdElement.getAttribute('data-selected-type'));

  //     const selectedOutcomeIdElement = document.getElementById('selected_outcome');
  //     let outcomeTokenStr = String(selectedOutcomeIdElement.getAttribute('data-selected-outcome'));
  //     let outcome_token   = stringToVectorU8(outcomeTokenStr);

  //     if(selectedType == "buy"){
  //       console.log('process buy');
  //       const response = await signAndSubmitTransaction(
  //         buyOutcomeTokens({
  //           market_id,
  //           outcome_token,
  //           amount,
  //         })
  //       );

  //       // Wait for transaction to complete
  //       console.log('executing buy tokens');
  //       await aptos.waitForTransaction({ transactionHash: response.hash });

  //       // Fetch updated market data
  //       const updatedMarketData = await fetchMarketData(market_id);

  //       // Re-render market information with updated data
  //       renderMarketInfo(updatedMarketData);

  //       $('.single_market .amount').val('');

  //       $('.notification_container').find('.general_notification').remove();
  //       $(transactionSuccessMessage).appendTo('.notification_container').fadeIn(2000);

  //       setTimeout(() => {
  //           $('.notification_container .success_notification').fadeOut(1000);
  //       }, 5000);

  //     } else if (selectedType == "sell"){
  //       console.log('process sell');
  //       const response = await signAndSubmitTransaction(
  //         sellOutcomeTokens({
  //           market_id,
  //           outcome_token,
  //           amount,
  //         })
  //       );

  //       // Wait for transaction to complete
  //       console.log('executing sell tokens');
  //       await aptos.waitForTransaction({ transactionHash: response.hash });

  //       // Fetch updated market data
  //       const updatedMarketData = await fetchMarketData(market_id);

  //       // Re-render market information with updated data
  //       renderMarketInfo(updatedMarketData);

  //       $('.single_market .amount').val('');

  //       $('.notification_container').find('.general_notification').remove();
  //       $(transactionSuccessMessage).appendTo('.notification_container').fadeIn(2000);

  //       setTimeout(() => {
  //           $('.notification_container .success_notification').fadeOut(1000);
  //       }, 5000);
  //     };      

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const processBuyOrSellOutcomeToken = async () => {
    try {
      const aptosConfig = new AptosConfig({ network: NETWORK });
      const aptos = new Aptos(aptosConfig);

      const market_id = Number(
        document.getElementById('market_actions_card').getAttribute('data-market-id')
      );
      const amount = Number($('.market_actions_form').find('.amount').val());
      const selectedType = String(
        document.getElementById('selected_type').getAttribute('data-selected-type')
      );
      const outcomeTokenStr = String(
        document.getElementById('selected_outcome').getAttribute('data-selected-outcome')
      );
      const outcome_token = stringToVectorU8(outcomeTokenStr);

      if (!['buy', 'sell'].includes(selectedType)) {
        throw new Error('Invalid selected type');
      }

      const transactionFunction =
        selectedType === 'buy' ? buyOutcomeTokens : sellOutcomeTokens;

      console.log(`Processing ${selectedType}`);

      const response = await signAndSubmitTransaction(
        transactionFunction({
          market_id,
          outcome_token,
          amount,
        })
      );

      console.log(`Executing ${selectedType} tokens`);
      await aptos.waitForTransaction({ transactionHash: response.hash });

      const updatedMarketData = await fetchMarketData(market_id);
      renderMarketInfo(updatedMarketData);

      $('.single_market .amount').val('');
      displaySuccessNotification();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        id="market_pool_button"
        className={`submit_button ${!account ? 'opacity-40 cursor-not-allowed' : ''} px-2 py-4 mt-6 mr-0.5`}
        onClick={processBuyOrSellOutcomeToken}
      >
          Submit
      </button>
    </div>
  );
  
}


const showMarketSubmitButtonDiv = document.getElementById('market_submit_button');
if (showMarketSubmitButtonDiv) {
  const root = ReactDOM.createRoot(showMarketSubmitButtonDiv);
  root.render(
    <WalletProvider>
      <BuyOrSellOutcomeTokenButton />
    </WalletProvider>
  );
}


function MarketPoolActionButton() {
  const { account, signAndSubmitTransaction } = useWallet();

  const processMarketPoolAction = async () => {
    try {
      
      let aptosConfig = new AptosConfig({ network: NETWORK });
      let aptos       = new Aptos(aptosConfig);

      const marketIdElement = document.getElementById('market_pool_actions_card');
      let market_id = Number(marketIdElement.getAttribute('data-market-id'));
      
      var market_pool_form = $('.market_actions_form');
      let amount: number = market_pool_form.find('.liquidity_amount').val() as number;

      const selectedPoolActionTypeIdElement = document.getElementById('selected_pool_action_type');
      let selectedActionType = String(selectedPoolActionTypeIdElement.getAttribute('data-selected-action-type'));

      console.log('processing');
      console.log('selectedType: ', selectedActionType);

      if(selectedActionType == "deposit"){
        console.log('process deposit');
        const response = await signAndSubmitTransaction(
          depositLiquidity({
            market_id,
            amount,
          })
        );

        // Wait for transaction to complete
        console.log('executing deposit liquidity');
        await aptos.waitForTransaction({ transactionHash: response.hash });

        // Fetch updated market data
        const updatedMarketData = await fetchMarketData(market_id);

        // Re-render market information with updated data
        renderMarketInfo(updatedMarketData);

        $('.single_market .liquidity_amount').val('');

        $('.notification_container').find('.general_notification').remove();
        $(transactionSuccessMessage).appendTo('.notification_container').fadeIn(2000);

        setTimeout(() => {
            $('.notification_container .success_notification').fadeOut(1000);
        }, 5000);

      } else if (selectedActionType == "withdraw"){
        console.log('process withdraw');
        const response = await signAndSubmitTransaction(
          withdrawLiquidity({
            market_id,
            lp_token_amount: amount,
          })
        );

        // Wait for transaction to complete
        console.log('executing withdraw liquidity');
        await aptos.waitForTransaction({ transactionHash: response.hash });

        // Fetch updated market data
        const updatedMarketData = await fetchMarketData(market_id);

        // Re-render market information with updated data
        renderMarketInfo(updatedMarketData);

        $('.single_market .liquidity_amount').val('');

        $('.notification_container').find('.general_notification').remove();
        $(transactionSuccessMessage).appendTo('.notification_container').fadeIn(2000);

        setTimeout(() => {
            $('.notification_container .success_notification').fadeOut(1000);
        }, 5000);
      };      

      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        id="market_pool_button"
        className={`submit_button ${!account ? 'opacity-40 cursor-not-allowed' : ''} px-2 py-4 mt-6 mr-0.5`}
        onClick={processMarketPoolAction}
      >
          Submit
      </button>
    </div>
  );
  
}


const showMarketPoolActionButtonDiv = document.getElementById('market_pool_submit_button');
if (showMarketPoolActionButtonDiv) {
  const root = ReactDOM.createRoot(showMarketPoolActionButtonDiv);
  root.render(
    <WalletProvider>
      <MarketPoolActionButton />
    </WalletProvider>
  );
}


function stringToVectorU8(str) {
  return Array.from(new TextEncoder().encode(str));
}
