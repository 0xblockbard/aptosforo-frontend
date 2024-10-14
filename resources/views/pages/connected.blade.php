@extends('default')

@section('content')

    <div class="bg-white overflow-hidden w-full">
        <div class="relative max-w-7xl mx-auto py-8 sm:py-10 px-4 sm:px-6 lg:px-8">

            <div class="mx-auto text-base max-w-full mt-4">
                <div class="flex flex-col items-center w-full">
                    <h2 class="text-base text-teal-700 font-semibold tracking-wide uppercase">Welcome</h2>
                    <div>
                        <h3 class="mt-2 text-3xl leading-8 font-roboto font-extrabold tracking-tight text-teal-600 sm:text-4xl">Get started with AptosForo</h3>
                        <div class="w-48 border border-teal-400 mt-2 mb-2 ml-auto pr-4"></div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row mt-8 px-20 sm:px-0 sm:space-x-12">
                    
                    <a class="flex w-full sm:w-1/3"  href="{{ route('show_all_markets') }}">
                        <div class="flex flex-col rounded-md shadow-md border border-teal-700 px-8 py-6 hover:shadow-xl shadow-teal-700 hover:border-teal-500 transition duration-300 ease-in-out hover:scale-[1.05] hover:cursor-pointer hover:border-2"> 
                            <h2 class="font-roboto font-bold text-xl text-center">Explore Markets</h2>
                            <div class="w-20 border border-teal-700 mt-1 mb-4 mx-auto"></div>
                            <img class="rounded-sm shadow-md border border-teal-500 shadow-teal-700" src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1728904505/aptosforo-concept-1_muhrd7.png" />
                            <p class="font-merriweather mt-6 sm:px-6 text-center text-sm font-medium">Look for a market you're interested in and bet on outcomes</p>
                            <button class="mt-6 mb-2 text-sm leading-4 font-medium mx-auto py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition duration-300 font-sans">Explore</button>
                        </div>
                    </a>

                    <a class="flex w-full sm:w-1/3 mt-10 sm:mt-0" href="{{ route('faucet') }}">
                        <div class="flex flex-col rounded-md shadow-md border border-teal-700 px-8 py-6 hover:shadow-xl shadow-teal-700 hover:border-teal-500 transition duration-300 ease-in-out hover:scale-[1.05] hover:cursor-pointer hover:border-2"> 
                            <h2 class="font-roboto font-bold text-xl text-center">Faucet</h2>
                            <div class="w-14 border border-teal-700 mt-1 mb-4 mx-auto"></div>
                            <img class="rounded-sm shadow-md border border-teal-500 shadow-teal-700" src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1727955244/mint-faucet-square.png" />
                            <p class="font-merriweather  mt-6 text-center text-sm font-medium">Mint tokens to interact and experiment with prediction markets</p>
                            <button class="mt-6 mb-2 text-sm leading-4 font-medium mx-auto py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition duration-300 font-sans">Mint Tokens</button>
                        </div>
                    </a>

                    <a class="flex w-full sm:w-1/3 mt-10 sm:mt-0" href="{{ route('guide') }}">
                        <div class="flex flex-col rounded-md shadow-md border border-teal-700 px-8 py-6 hover:shadow-xl shadow-teal-700 hover:border-teal-500 transition duration-300ease-in-out hover:scale-[1.05] hover:cursor-pointer hover:border-2"> 
                            <h2 class="font-roboto font-bold text-xl text-center">Learn More</h2>
                            <div class="w-14 border border-teal-700 mt-1 mb-4 mx-auto"></div>
                            <img class="rounded-sm shadow-md border border-teal-500 shadow-teal-700 " src="https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1728906843/guide-concept-1_j1i46a.png" />
                            <p class="font-merriweather mt-6 sm:px-4 text-center text-sm font-medium">Read more about our prediction market and how they work</p>
                            <button class="mt-6 mb-2 text-sm leading-4 font-medium mx-auto py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition duration-300 font-sans">Learn More</button>
                        </div>
                    </a>
                    
                </div>
            </div>
            
            
        </div>
    </div>


@endsection