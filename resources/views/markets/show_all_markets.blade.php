@extends('default')

@section('content')

    <nav class="fixed w-full bg-white shadow z-20 pb-2">
        <div class="max-w-full mx-auto px-4">
            <div class="flex justify-between h-10">
                <div class="flex w-full">

                    <div class="flex ml-2 sm:ml-6 space-x-6 sm:space-x-4 items-center">
                        
                        <div class="mr-4 font-semibold text-teal-700 uppercase">
                            <span class="inline text-sm">Testnet</span>
                            <span class="inline-block blinker ml-1"></span>
                        </div>

                        <div class="cursor-not-allowed inline-flex items-center px-1 pt-1 text-sm font-medium">
                            All
                        </div>

                        <div class="cursor-not-allowed inline-flex items-center px-1 pt-1 text-sm font-medium">
                            New
                        </div>

                        <div class="cursor-not-allowed inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Crypto
                        </div>

                        <div class="cursor-not-allowed inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Politics
                        </div>

                        <div class="cursor-not-allowed inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Business
                        </div>

                        <div class="cursor-not-allowed inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Science
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </nav>


    <div class="flex max-w-full w-full px-6 py-6 mx-auto mt-4">

        <div class="flex flex-col w-full sm:ml-4 mb-10">

            <div class="w-full mx-auto">

                {{-- Fixed cards --}}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-8">

                    <!-- Card 1 -->
                    <div class="market_featured_card bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg shadow-md px-4 py-4 flex justify-between items-start relative overflow-hidden">
                        <div class="flex flex-col pr-10">
                            <div class="text-lg font-semibold text-white">
                                <a href="{{ route('show_market', 6)}}">
                                    ETH VS SOL
                                </a>
                            </div>
                            <div class="text-sm text-white mt-2 mb-2">Who will come out on top?</div>
                            <a href="{{ route('show_market', 6)}}">
                                <button class="market_view_button inline-block w-28 mt-4 text-white py-1 px-2 rounded-full text-sm transition duration-300">Trade Now</button>
                            </a>
                        </div>
                        <div class="absolute right-[-15px] top-[25px] h-full">
                            <img src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1728120037/eth-vs-sol.png" alt="2024 election trump" class="w-24 h-24 rounded-md border-2 border-white">
                        </div>
                    </div>
                
                    <!-- Card 2 -->
                    <div class="market_featured_card bg-gradient-to-r from-purple-700 to-purple-400 rounded-lg shadow-md px-4 py-4 flex justify-between items-start relative overflow-hidden">
                        <div class="flex flex-col pr-10">
                            <div class="text-lg font-semibold text-white">
                                <a href="{{ route('show_market', 2)}}">
                                $10k Ethereum
                                </a>
                            </div>
                            <div class="text-sm text-white mt-2 mb-2">Will Ethereum hit $10k in 2025</div>
                            <a href="{{ route('show_market', 2)}}">
                                <button class="market_view_button inline-block w-28 mt-4 text-white py-1 px-2 rounded-full text-sm transition duration-300">Trade Now</button>
                            </a>
                        </div>
                        <div class="absolute right-[-15px] top-[25px] h-full">
                            <img src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1727956356/10k-eth.png" alt="10k ethereum" class="w-24 h-24 rounded-md object-cover border-2 border-white">
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="market_featured_card bg-gradient-to-r from-orange-700 to-orange-400 rounded-lg shadow-md px-4 py-4 flex justify-between items-start relative overflow-hidden">
                        <div class="flex flex-col pr-10">
                            
                            <div class="text-lg font-semibold text-white">
                                <a href="{{ route('show_market', 0)}}">$BTC To The Moon</a>
                            </div>
                            <div class="text-sm text-white mt-2 mb-2">Will Bitcoin hit $100k in 2024</div>
                            <a href="{{ route('show_market', 0)}}">
                                <button class="market_view_button inline-block w-28 mt-4 text-white py-1 px-2 rounded-full text-sm transition duration-300">Trade Now</button>
                            </a>
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

                {{-- Additional buttons --}}
                <div class="w-full max-w-full mx-auto ml-4 overflow-x-auto no-scrollbar">
                    
                    <div class="flex flex-row flex-nowrap space-x-4">
                        
                        <button class="flex-none px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300">
                            <svg class="inline mr-1 align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                                <path d="M9.99997 10.414L14 14.414L19.707 8.707L22 11V5H16L18.293 7.293L14 11.586L9.99997 7.586L2.29297 15.293L3.70697 16.707L9.99997 10.414Z" fill="white"></path>
                            </svg>
                            <span class="font-semibold align-middle">Top</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <svg class="inline mr-0.5 align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.3329 6.29836C14.6119 5.75536 15.3881 5.75536 15.6671 6.29836L17.2658 9.40986C17.3374 9.5492 17.4508 9.66262 17.5901 9.73421L20.7016 11.3329C21.2446 11.6119 21.2446 12.3881 20.7016 12.6671L17.5901 14.2658C17.4508 14.3374 17.3374 14.4508 17.2658 14.5901L15.6671 17.7016C15.3881 18.2446 14.6119 18.2446 14.3329 17.7016L12.7342 14.5901C12.6626 14.4508 12.5492 14.3374 12.4099 14.2658L9.29836 12.6671C8.75536 12.3881 8.75536 11.6119 9.29836 11.3329L12.4099 9.73421C12.5492 9.66262 12.6626 9.5492 12.7342 9.40986L14.3329 6.29836Z" fill="currentColor"></path><path d="M6.05527 4.86557C6.24126 4.50358 6.75874 4.50358 6.94473 4.86557L7.61455 6.16922C7.66228 6.26211 7.73789 6.33772 7.83078 6.38545L9.13443 7.05527C9.49642 7.24126 9.49642 7.75874 9.13443 7.94473L7.83078 8.61455C7.73789 8.66228 7.66228 8.73789 7.61455 8.83078L6.94473 10.1344C6.75874 10.4964 6.24126 10.4964 6.05527 10.1344L5.38545 8.83078C5.33772 8.73789 5.26211 8.66228 5.16922 8.61455L3.86557 7.94473C3.50358 7.75874 3.50358 7.24126 3.86557 7.05527L5.16922 6.38545C5.26211 6.33772 5.33772 6.26211 5.38545 6.16922L6.05527 4.86557Z" fill="currentColor"></path><path d="M6.05527 13.8656C6.24126 13.5036 6.75874 13.5036 6.94473 13.8656L7.61455 15.1692C7.66228 15.2621 7.73789 15.3377 7.83078 15.3855L9.13443 16.0553C9.49642 16.2413 9.49642 16.7587 9.13443 16.9447L7.83078 17.6145C7.73789 17.6623 7.66228 17.7379 7.61455 17.8308L6.94473 19.1344C6.75874 19.4964 6.24126 19.4964 6.05527 19.1344L5.38545 17.8308C5.33772 17.7379 5.26211 17.6623 5.16922 17.6145L3.86557 16.9447C3.50358 16.7587 3.50358 16.2413 3.86557 16.0553L5.16922 15.3855C5.26211 15.3377 5.33772 15.2621 5.38545 15.1692L6.05527 13.8656Z" fill="currentColor"></path>
                            </svg>
                            <span class="font-semibold align-middle">Featured</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">New</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">Crypto Prices</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">Economy</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">US Elections</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">NFL</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">Trump</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">Kamala</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">Today's Sports</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">Bitcoin</span>
                        </button>

                        <button class="flex-none cursor-not-allowed px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-teal-50 border border-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 transition duration-300">
                            <span class="font-semibold">Ethereum</span>
                        </button>

                    </div>
                </div>

                {{-- Show all markets --}}
                <div class="w-full mx-auto">
                    <div id="show_all_markets"></div>
                </div>
                
            </div>

        </div>

    </div>

@endsection