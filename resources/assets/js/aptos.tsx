import $ from 'jquery';

import ReactDOM from 'react-dom/client'; 
import { WalletSelector } from './components/WalletSelector';
import { WalletProvider } from "@/components/WalletProvider";
import { aptosClient } from "./components/utils/aptosClient";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

// entry functions
import { createCampaign } from "./components/entry-functions/create_campaign";
import { contribute } from "./components/entry-functions/contribute";
import { refund } from "./components/entry-functions/refund";
import { claimFunds } from "./components/entry-functions/initialize_market";
import { updateConfig } from "./components/entry-functions/set_admin_properties";

// view functions
import { getCampaignInfo } from "./components/view-functions/get_campaign";
import { getConfigInfo } from "./components/view-functions/get_admin_properties";
import { getContributorAmountInfo } from "./components/view-functions/get_contributor_amount";
import { accountAPTBalance } from "./components/view-functions/accountBalance";


const walletDiv = document.getElementById('connect-wallet');

if (walletDiv) {
  const root = ReactDOM.createRoot(walletDiv); 
  
  root.render(
    <WalletProvider>
      <WalletSelector />
    </WalletProvider>
  );
}

var create_campaign_button = document.getElementsByClassName("create_campaign")[0];
create_campaign_button.addEventListener('click', () => {
    createNewCampaign();
});
async function createNewCampaign(){
    try{

        const { account, signAndSubmitTransaction } = useWallet();

        // Use jQuery to find form elements within the `.create_campaign_form` class
        var create_campaign_form = $('.create_campaign_form');
        
        let title = create_campaign_form.find('.title').val();
        let about = create_campaign_form.find('.about').val();
        let image_url = create_campaign_form.find('.image_url').val();
        let target_amount : any = create_campaign_form.find('.target').val() * 1000000; // Assuming APT token uses 6 decimals
        let type = create_campaign_form.find('.type').val();
        let duration = 1000;
        let funding_type = (type === 'KIA') ? 1 : 2;
        let decimals = 8;  // Assuming APT has 8 decimals

        // const response = await signAndSubmitTransaction(
        //     createCampaign({
        //     name,
        //     description,
        //     image_url,
        //     funding_goal: parseInt(funding_goal),
        //     duration,
        //     funding_type,
        //     decimals,
        //     }),
        // );
    
      // Wait for transaction to complete
    //   await aptosClient().waitForTransaction({ transactionHash: response.hash });
    
    //   // Optionally handle UI updates or query invalidations here
    //   alert('Campaign created successfully!');

    } catch(error){
        console.log(error);
    }
}

  

  // sign transaction

//   const response = await signAndSubmitTransaction(
//     mintAsset({
//       assetType: asset.asset_type,
//       amount,
//       decimals: asset.decimals,
//     }),
//   );
//   await aptosClient().waitForTransaction({ transactionHash: response.hash });
//   queryClient.invalidateQueries();

// from docs
// const addNewList = async () => {
//     if (!account) return [];
//     setTransactionInProgress(true);
//     const transaction:InputTransactionData = {
//         data: {
//           function:`${moduleAddress}::todolist::create_list`,
//           functionArguments:[]
//         }
//       }
//     try {
//       // sign and submit transaction to chain
//       const response = await signAndSubmitTransaction(transaction);
//       // wait for transaction
//       await aptos.waitForTransaction({transactionHash:response.hash});
//       setAccountHasList(true);
//     } catch (error: any) {
//       setAccountHasList(false);
//     } finally {
//       setTransactionInProgress(false);
//     }
//   };