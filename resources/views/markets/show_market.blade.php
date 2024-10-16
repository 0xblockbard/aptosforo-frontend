@extends('default')

@section('content')

    <div class="flex max-w-7xl w-full px-10 pt-12 mx-auto">

        <div class="market_container single_market flex flex-col sm:flex-row w-full">

            <div class="flex flex-col w-full sm:w-2/3 sm:px-6 py-2 ">

                <div id="marketId" data-market-id="{{ $id }}"></div>

                <div class="flex flex-row">
                    <img id="featured_image" src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1728122909/placeholder-2.png" class="featured_image rounded-md w-24 h-24">
                    <div class="flex flex-col ml-6 sm:pt-3">
                        <span class="text-sm mb-2">Prediction Market</span>
                        <h2 id="description" class="inline name text-2xl font-semibold mt-2">Loading market...</h2>
                    </div>
                </div>

                <div class="mt-8 pt-4 border-t border-gray-200"> 
                    <h3 class="font-semibold">Rules</h3>
                    <div class="rules mt-4 space-y-4">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>Parturient sollicitudin vivamus tempus ante velit neque platea ultrices a. Potenti ac conubia curae amet condimentum lacinia molestie. Platea interdum aenean sapien faucibus dictumst bibendum nulla.</p>
                        <p>Lectus primis vehicula augue pharetra rhoncus. Dictumst curae dictum suspendisse, aptent habitasse nunc risus. Adipiscing tempus elementum at neque magna fringilla. Fermentum laoreet nec neque aenean lacinia elementum tortor ad.</p>
                    </div>
                </div>

                <div class="mt-8 pt-4 border-t border-gray-200"> 
                    <h3 class="font-semibold">Discussions</h3>
                    <div class="comment_form mt-4">
                        <input id="comment_input" autocomplete="off" class="comment_input appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-4 py-3 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Share your thoughts here">
                    </div>
                </div>

            </div>

            <div class="flex flex-col market_actions_container w-full sm:w-1/3 sm:px-6 py-2 ">

                <div id="market_actions_card" class="market_actions_card rounded-md shadow-lg border border-gray-300 px-6 pt-4 pb-6" data-market-id="{{ $id }}">  

                    <div class="market_actions_form">

                        <div class="flex flex-row mt-2 justify-between border-b pt-2 mb-4 border-gray-200"> 
                            <div class="flex space-x-4 text-sm">
                                <div class="buy font-semibold hover:cursor-pointer pb-4 transition duration-150 ease-in-out">Buy</div>
                                <div class="sell hover:cursor-pointer pb-4 transition duration-150 ease-in-out hover">Sell</div>
                            </div>
                            <div class="flex text-sm">
                                <div class="amm uppercase text-teal-600 font-semibold mr-4 pb-4">AMM</div>
                                <div class="liquidity mr-4 pb-4 ">
                                    <a href="{{ route('show_market_pool', $id)}}">
                                        Liquidity
                                    </a>
                                </div>
                            </div>
                        </div>

                        @include('partials.flash_messages')

                        <h3 class="text-md font-medium font-roboto mt-4 mb-2">Outcome</h3>
                        <div class="flex justify-between">

                            <div id="selected_type" class="hidden selected_type" data-selected-type="buy"></div>
                            <div id="selected_outcome" class="hidden selected_outcome" data-selected-outcome="one"></div>
                            
                            <button class="buy_outcome_one_button px-2 py-4  mr-1 bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-emerald-900">
                                <span class="outcome_one">Yes</span>
                                <span class="outcome_one_price"></span>
                            </button>
                            <button class="buy_outcome_two_button px-2 py-4 ml-1 bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-rose-900">
                                <span class="outcome_two">No</span>
                                <span class="outcome_two_price"></span>
                            </button>
                        </div>

                        <div class="flex flex-col mt-4">
                            <h3 class="text-md font-medium font-roboto mt-2 mb-1">Amount</h3>
                            <input id="amount" autocomplete="off" class="amount appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-4 py-3 sm:text-sm border text-center border-gray-300 rounded-md" type="text" placeholder="0">
                            <div id="market_submit_button"></div> 
                        </div>

                        <div id="user_outcome_token_balances_container"></div>

                        {{-- <div class="flex flex-col mt-4 pt-4 border-t border-gray-200">
                            <h3 class="text-sm font-semibold mt-2 mb-2">Your Outcome Balance</h3>
                            <div class="flex flex-row justify-between text-sm">
                                <div class="flex">Token One Balance:</div>
                                <div class="flex token_one_balance">XXX</div>
                            </div>
                            <div class="flex flex-row justify-between text-sm">
                                <div class="flex">Token Two Balance:</div>
                                <div class="flex token_two_balance">XXX</div>
                            </div>
                        </div>
                     --}}
                    </div>

                </div>

            </div>

        </div>

    </div>

@endsection

@section('scripts')

    <script src="https://aptos-blockbard.s3.ap-southeast-2.amazonaws.com/assets/js/scrollToFixed.js"></script>

    <script>
        $(document).ready(function() {
            function handleScrollToFixed() {
                // check screen width and apply scrollToFixed for desktop screens (greater than 768px)
                if (window.innerWidth > 768) {
                    $('#market_actions_card').scrollToFixed({ marginTop: 112 });
                } else {
                    // remove scrollToFixed if the screen width is below 768px
                    $('#market_actions_card').trigger('detach.ScrollToFixed');
                }
            }

            handleScrollToFixed();

            // on window resize
            $(window).resize(function() {
                handleScrollToFixed();
            });
        });
    </script>

@endsection