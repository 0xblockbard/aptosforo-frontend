@extends('default')

@section('content')

    <div class="flex max-w-7xl w-full px-10 pt-12 mx-auto">

        <div class="market_container single_market flex flex-col sm:flex-row w-full">

            <div class="flex flex-col w-full sm:w-2/3 sm:px-6 py-2 ">

                <div id="marketId" data-market-id="{{ $id }}"></div>

                <div class="flex flex-row">
                    <img id="featured_image" src="https://aptos-blockbard.s3.ap-southeast-2.amazonaws.com/aptos-crowdfund/crowdfunding-placeholder.png" class="featured_image rounded-md w-24 h-24">
                    <div class="flex flex-col ml-6 pt-3">
                        <span class="text-sm mb-2">Category</span>
                        <h2 id="description" class="inline name text-2xl font-semibold mt-2">Loading market...</h2>
                    </div>
                </div>

                <div class="mt-8"> 
                    <h3 class="font-semibold">Discussions</h3>
                </div>

                {{-- @include('partials.flash_messages') --}}

            </div>

            <div class="flex flex-col w-full sm:w-1/3 sm:px-6 py-2 ">

                <div id="market_actions_card" class="market_actions_card rounded-md shadow-lg border border-gray-300 px-6 pt-4 pb-6"> 
                    <h3 class="font-semibold mt-2 mb-2">Outcome</h3>
                    <div class="flex justify-between">
                        <button class="buy_outcome_one_button px-2 py-4  mr-0.5">
                            {{-- <span>Buy</span> --}}
                            <span>Yes</span>
                            <svg class="size-4 inline -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                            </svg>                                                  
                        </button>
                        <button class="buy_outcome_two_button px-2 py-4 ml-0.5">
                            {{-- <span>Buy</span> --}}
                            <span>No</span>
                            <svg class="size-4 inline -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                            </svg>                                                  
                        </button>
                    </div>
                    <div class="flex flex-col mt-4">
                        <h3 class="font-semibold mt-2 mb-2">Amount</h3>
                        <input id="amount" autocomplete="off" class="amount appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-4 py-4 sm:text-sm border text-center border-gray-300 rounded-md" type="text" placeholder="$0">
                    </div>
                </div>
            </div>

        </div>

    </div>

@endsection
