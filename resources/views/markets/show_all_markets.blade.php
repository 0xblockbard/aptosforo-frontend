@extends('default')

@section('content')

    <nav class="fixed w-full bg-white shadow z-20 pb-2">
        <div class="max-w-full mx-auto px-4">
            <div class="flex justify-between h-10">
                <div class="flex w-full">

                    <div class="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
                        
                        <div class="mr-4 font-semibold text-teal-700 uppercase">
                            <span class="inline text-sm">Testnet</span>
                            <span class="inline-block blinker ml-1"></span>
                        </div>

                        <a href="{{ route('about') }}" class="{{ \Request::route()->getName() == 'about' ? ' text-gray-900' : ' text-gray-500 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 text-sm font-medium">
                            All
                        </a>

                        <a href="{{ route('about') }}" class="{{ \Request::route()->getName() == 'about' ? ' text-gray-900' : ' text-gray-500 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 text-sm font-medium">
                            New
                        </a>

                        <a href="{{ route('faucet') }}" class="{{ \Request::route()->getName() == 'faucet' ? ' text-gray-900' : ' text-gray-500 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Crypto
                        </a>

                        <a href="{{ route('faucet') }}" class="{{ \Request::route()->getName() == 'faucet' ? ' text-gray-900' : ' text-gray-500 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Politics
                        </a>

                        <a href="{{ route('faucet') }}" class="{{ \Request::route()->getName() == 'faucet' ? ' text-gray-900' : ' text-gray-500 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Business
                        </a>

                        <a href="{{ route('faucet') }}" class="{{ \Request::route()->getName() == 'faucet' ? ' text-gray-900' : ' text-gray-500 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Science
                        </a>

                    </div>

                </div>
            </div>
        </div>
    </nav>


    <div class="flex max-w-full w-full px-6 py-6 mx-auto mt-4">

        <div class="flex flex-col w-full ml-4 mb-10">

            <div class="w-full mx-auto">

                <div class="grid grid-cols-4 gap-4 px-4 py-8">

                    <!-- Card 1 -->
                    <div class="market_featured_card bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg shadow-md px-4 py-4 flex justify-between items-start relative overflow-hidden">
                        <div class="flex flex-col pr-10">
                            <div class="text-lg font-semibold text-white">2024 Election Forecast</div>
                            <div class="text-sm text-white mt-2 mb-2">Will Trump be the next president?</div>
                            <button class="market_view_button inline-block w-28 mt-4 text-white py-1 px-2 rounded-full text-sm transition duration-300">Trade Now</button>
                        </div>
                        <div class="absolute right-[-15px] top-[25px] h-full">
                            <img src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1727956167/trump-kamala-election-2.png" alt="2024 election trump" class="w-24 h-24 rounded-md border-2 border-white">
                        </div>
                    </div>
                
                    <!-- Card 2 -->
                    <div class="market_featured_card bg-gradient-to-r from-purple-700 to-purple-400 rounded-lg shadow-md px-4 py-4 flex justify-between items-start relative overflow-hidden">
                        <div class="flex flex-col pr-10">
                            <div class="text-lg font-semibold text-white">$10k Ethereum</div>
                            <div class="text-sm text-white mt-2 mb-2">Will Ethereum hit $10k in 2025</div>
                            <button class="market_view_button inline-block w-28 mt-4 text-white py-1 px-2 rounded-full text-sm transition duration-300">Trade Now</button>
                        </div>
                        <div class="absolute right-[-15px] top-[25px] h-full">
                            <img src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1727956356/10k-eth.png" alt="10k ethereum" class="w-24 h-24 rounded-md object-cover border-2 border-white">
                        </div>
                    </div>

                
                    <!-- Card 3 -->
                    <div class="market_featured_card bg-gradient-to-r from-orange-700 to-orange-400 rounded-lg shadow-md px-4 py-4 flex justify-between items-start relative overflow-hidden">
                        <div class="flex flex-col pr-10">
                            <div class="text-lg font-semibold text-white">$BTC To The Moon</div>
                            <div class="text-sm text-white mt-2 mb-2">Will Bitcoin hit $100k in 2024</div>
                            <button class="market_view_button inline-block w-28 mt-4 text-white py-1 px-2 rounded-full text-sm transition duration-300">Trade Now</button>
                        </div>
                        <div class="absolute right-[-15px] top-[25px] h-full">
                            <img src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1727956426/bitcoin-to-the-moon.png" alt="btc to the moon" class="w-24 h-24 rounded-md object-cover border-2 border-white">
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <a href="{{ route('faucet')}}">
                        <div class="market_featured_card bg-gradient-to-r from-teal-700 to-teal-400 rounded-lg shadow-md px-4 py-4 flex justify-between items-start relative overflow-hidden">
                            <div class="flex flex-col pr-10">
                                <div class="text-lg font-semibold text-white">Token Faucet</div>
                                <div class="text-sm text-white mt-2 mb-2">Mint free tokens and start predicting</div>
                                <button class="market_view_button inline-block w-16 mt-4 text-white py-1 px-4 rounded-full text-sm transition duration-300">Mint</button>
                            </div>
                            <div class="absolute right-[-15px] top-[25px] h-full">
                                <img src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1727955244/mint-faucet-square.png" alt="faucet mint token" class="w-24 h-24 rounded-md object-cover border-2 border-white">
                            </div>
                        </div>
                    </a>

                </div>
                
            </div>


            <div class="w-full mx-auto">
                <div id="show_all_markets"></div>
            </div>

                {{-- <div class="w-full mx-auto">
                    <div class="w-full mx-auto grid gap-4 px-4 py-8 lg:grid-cols-4">
                        <div class="flex flex-col rounded-lg shadow-md border border-gray-50 overflow-hidden hover:shadow-lg transition duration-300">
                            <div class="flex-1 bg-white pt-4 px-4">
                                <div class="flex flex-row">
                                    <img class="w-12 h-12 rounded-sm object-cover hover:opacity-70" src="https://placehold.co/400x400" alt="2024 September hottest on record?">
                                    <h3 class="ml-4 leading-6 text-base font-semibold ">
                                        <a href="/markets/0">
                                            2024 September hottest on record?
                                        </a>
                                    </h3>
                                </div>
                                <div class="flex flex-col justify-between">

                                    <div class="mt-10">
                                        <div class="flex justify-between">
                                            <button class="buy_outcome_one_button mr-0.5">
                                                <span>Buy</span>
                                                <span>Yes</span>
                                                <svg class="size-4 inline -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                                </svg>                                                  
                                            </button>
                                            <button class="buy_outcome_two_button ml-0.5">
                                                <span>Buy</span>
                                                <span>No</span>
                                                <svg class="size-4 inline -top-0.5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                                                </svg>                                                  
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="my-3 ml-1 px-4 flex justify-between items-center">
                            <div class="text-xs text-gray-500">
                                <span>$120</span>
                                <span>Vol.</span>
                            </div>
                        </div>
                    </div>
                </div> --}}

                
            </div>
        </div>
    </div>

@endsection