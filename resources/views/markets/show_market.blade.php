@extends('default')

@section('content')

    <div class="flex max-w-7xl w-full px-10 pt-24 mx-auto">

        <div class="market_container single_market flex flex-col sm:flex-row w-full">

            <div class="flex w-full sm:w-2/3 sm:pr-6">
                <img id="featured_image" src="https://aptos-blockbard.s3.ap-southeast-2.amazonaws.com/aptos-crowdfund/crowdfunding-placeholder.png" class="featured_image rounded-md w-full" style="height: 500px">
            </div>

            <div class="flex flex-col w-full sm:w-1/3 sm:px-6 py-2 ">

                <div id="marketId" data-market-id="{{ $id }}"></div>

                <div class="flex justify-between">
                    <span id="count" class="text-gray-500 text-sm">market #X</span>
                    <div id="edit_market"></div>
                </div>

                <h2 id="name" class="inline name text-2xl font-semibold mt-2">Loading market...</h2>
                
                <div class="relative mt-3 pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                            <div class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                <span id="amount_raised_percentage" class="amount_raised_percentage">X%</span> Funded - <span id="cf_type" class="cf_type">Fixed</span> Goal
                            </div>
                        </div>
                        <div class="text-right">
                            <span id="contributed_amount" class="contributed_amount text-xs font-semibold inline-block text-teal-600">
                                X
                            </span>
                            <span class="text-xs font-semibold inline-block text-teal-600">
                                /
                            </span>
                            <span id="target_amount" class="target_amount text-xs font-semibold inline-block text-teal-600">
                                XXX
                            </span>
                            <span class="text-xs font-semibold inline-block text-teal-600">
                                APT
                            </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-2 text-xs flex rounded bg-teal-200">
                        <div id="progress_bar" style="width:30%" class="progress_bar shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
                    </div>
                    <div class="flex justify-between mb-3 pl-1 pr-1">
{{-- 
                        <div class="flex text-sm">
                            <span class="backers font-extrabold pr-2 text-teal-600">XX</span>
                            <span>supporters</span>
                        </div> --}}

                        <div class="flex text-sm days_remaining_container">
                            <span id="days_remaining" class="days_remaining font-extrabold pr-1 text-teal-600">30</span>
                            <span>days to go</span>
                        </div>

                    </div>
                </div>

                <h3 id="description" class="description text-base mt-4 mb-2 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>

                @include('partials.flash_messages')

                <div id="contribute_form" class="contribute_form mt-3">
                    <label for="contribution" class="block text-sm text-teal-700 font-bold">Support This market:</label>
                    <div class="mt-3 flex rounded-md shadow-sm">
                        <div class="relative flex items-stretch flex-grow focus-within:z-10">
                            <input type="text" name="contribution" id="contribution" class="contribution border focus:ring-teal-500 focus:border-teal-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray-300" placeholder="Pledge Amount" />
                        </div>
                        <button type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500">
                            <span>APT</span>
                        </button>
                    </div>

                    <div class="inline-flex items-left mt-6">

                        <div id="contribute_submit"></div>

                        <div id="refund_submit"></div>

                        <div id="claim_funds_submit"></div>
                    </div>
                </div>

            </div>

        </div>

    </div>

@endsection
