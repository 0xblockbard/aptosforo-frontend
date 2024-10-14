@extends('default')

@section('content')

    <div class="flex w-full py-24 shadow-md" style="background-image: url('https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1728907448/header-2_dow9zh.png'); background-size: cover; background-position: center;">
        <div class="max-w-7xl">
            <div class="flex flex-col ml-40 bg-white opacity-90 px-12 py-4 rounded-md"> 
                <h3 class="text-3xl text-teal-600 font-extrabold">Guide: AptosForo Full Process Flow</h3>
                <span class="w-24 border-2 border-teal-600 mt-1"></span>
            </div>
        </div>
    </div>

    <div class="flex flex-col w-full sm:w-10/12 xl:w-9/12 px-12 pt-16 pb-24 m-auto">

        <div class="flex flex-col pl-3">

            <div class="bg-sky-50 border-2 border-teal-600 p-4 rounded-md shadow-lg shadow-teal-50">
                
                <div class="mt-2 px-10 py-6 text-gray-600 space-y-6">

                    <h2 class="font-semibold text-2xl">AptosForo Full Process Flow</h2>
                    
                    <p>Currently, on the Aptos Testnet, any user will be able to initialize a new market for a given scenario with binary outcomes (e.g., Yes / No) and provide a reward as an incentive for users to assert a truthful market resolution.</p>

                    <p>Then, the user can initialize a liquidity pool for the newly created market, providing initial liquidity that meets or exceeds the minimum requirement. This liquidity is split evenly between both outcomes, and the user will receive corresponding LP tokens (representing half of the total liquidity provided, with each LP token equating to one share of both outcomes).</p>

                    <p>On the Aptos Testnet, we primarily use a standard fungible asset token as the Oracle Token on <strong>AptosForo</strong>, functioning as the main currency and liquidity token. Users can mint Oracle Tokens via our faucet to interact with the sample markets created. Should we deploy on the Mainnet in the future, the main currency token could be a USDT-equivalent fungible asset, with the Oracle Token designated for market assertions and resolutions.</p>

                    <p>With the liquidity pool in place, other users can freely buy or sell outcome tokens from it. For each swap, a small fee (e.g., 0.2%, equivalent to Polymarket’s fee) is charged, which serves as an incentive for liquidity providers.</p>

                    <p>Unlike the traditional CPMM, which follows the x * y = k formula, our modified AMM adopts a ratio formula to ensure that the total price always equals 1, regardless of demand or supply fluctuations for either outcome token. For instance, the price of an outcome token is determined by its corresponding reserve amount against the total reserves in the liquidity pool.</p>

                    <p>This differs from Polymarket, which has recently moved away from AMM DEXs and is now operating through an order book model with market and limit orders.</p>

                    <p>A user can also deposit collateral into the liquidity pool and receive LP tokens, which they can later redeem for outcome tokens. Similarly, they can withdraw collateral by returning LP tokens, which will then be burned.</p>

                    <p>When LP tokens are redeemed, they are exchanged for outcome tokens at the current pool ratio. For instance, with a 70:30 ratio between the two outcomes, the user will receive outcome tokens reflecting that ratio.</p>

                    <p>For market resolutions, <strong>AptosForo</strong> uses a modified Full Policy Escalation Manager from UMA Protocol, adapted for Aptos Move, allowing for whitelisting of asserters and disputers if required. This ensures controlled access to market assertions and disputes, reducing frivolous or malicious activities. If necessary, we can also pause all assertion activities on the market.</p>

                    <p>To resolve a market, users post a bond with their asserted outcome. This assertion remains open for a liveness period (e.g., 2 hours), during which other users may dispute it. At any one time, there can only be one asserter or disputer for a market.</p>

                    <p>If no dispute arises, the market settles at the end of the liveness period, with the asserted outcome recognized as true. Any existing market reward will also be awarded to the asserter at this time.</p>

                    <p>However, in the case of a dispute, the escalation manager steps in to resolve the conflict. Here, the admin will be able to set an arbitration resolution for the disputed assertion. We have also modified the UMA Escalation Manager smart contract to allow for overrides on the arbitration resolution to facilitate testing on Aptos Testnet.</p>

                    <p>The winner of the dispute (whether asserter or disputer) recoups their bond and claims half of the opposing party's bond (less fees) as an incentive. For potential high-activity markets, the bond requirement may be set higher to deter frivolous or malicious assertions.</p>

                    <p>Should a market be disputed successfully in favor of the disputer, the market’s asserted outcome resets, allowing another user to make a new assertion.</p>

                    <p>After a market has been resolved, trading on the market’s liquidity pool ceases. Users cannot buy, sell, deposit, or withdraw liquidity from the pool, though they can still redeem LP tokens for outcome tokens. The redeemed amount will be calculated proportionally based on the total LP Token supply and ratio of outcome token reserves.</p>

                    <p>Finally, users can settle their outcome tokens for rewards. If, for example, outcome one wins, holders of outcome one tokens will receive payouts proportionate to the pool’s outcome token one reserves. Tokens from the losing outcome are discarded and burned. In cases where there 


                </div>

            </div>
        </div>

    </div>

@endsection
