@extends('default')

@section('content')

    <div class="flex max-w-7xl w-full pt-20 mx-auto">

        <div class="faucet_container flex flex-col sm:flex-row w-full">

            <div class="flex flex-col w-full sm:w-40p sm:px-6 py-2 ">

                <div class="flex justify-between">
                    <span id="count" class="text-gray-500 text-sm">Aptos Testnet</span>
                </div>

                <h2 id="name" class="inline name text-2xl font-semibold mt-2">Token Faucet</h2>
                
                {{-- <p class="text-base mt-4 text-justify">Mint some tokens to interact with our prediction markets.</p>
                <p class="text-base mt-2 mb-2 text-justify">These tokens will allow you to exchange for outcome tokens in your selected markets.</p> --}}

                <p class="text-base mt-4 text-justify">Easily mint test tokens to begin interacting with our prediction markets on the Aptos testnet.</p>
                <p class="text-base mt-2 text-justify">These tokens will enable you to participate and exchange for outcome tokens in your favorite markets.</p>
                <p class="text-base mt-2 text-justify">Make predictions, explore trends, and experiment in a risk-free environment.</p>
                
                <p class="text-base mt-4 text-justify font-semibold">Get started with free tokens:</p>
                <p class="text-base mt-2 text-justify">Enter the amount you wish to mint and instantly receive test tokens that you can use across various markets.</p>
                <p class="text-base mt-2 mb-4 text-justify">No limits, no costs—just free tokens to explore and experiment!</p>

                @include('partials.flash_messages')

                <div id="faucet" class="faucet mt-4">
                    <label for="mint_amount" class="block text-sm text-teal-700 font-bold">How many tokens would you like to mint?</label>
                    <div class="mt-3 flex rounded-md shadow-sm">
                        <div class="relative flex items-stretch flex-grow focus-within:z-10">
                            <input type="text" name="mint_amount" id="mint_amount" class="mint_amount border focus:ring-teal-500 focus:border-teal-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray-300" placeholder="Input amount to mint" />
                        </div>
                        <button type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500">
                            <span>Tokens</span>
                        </button>
                    </div>

                    <div class="inline-flex items-left mt-6">

                        <div id="mint_oracle_tokens_button"></div>

                    </div>
                </div>

            </div>

            <div class="flex w-full sm:w-60p sm:pl-6 pl-20 pt-8">
                <img id="featured_image" src="https://aptos-blockbard.s3.ap-southeast-2.amazonaws.com/aptosforo/mint-faucet.png" class="featured_image rounded-lg w-full shadow-lg" style="height: 500px">
            </div>

        </div>

    </div>

@endsection
