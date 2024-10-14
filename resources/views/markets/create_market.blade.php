@extends('default')

@section('content')

    <div class="flex w-full py-24" style="background-image: url('https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1728907449/header-1_jp76ga.png'); background-size: cover; background-position: center;">
        <div class="max-w-7xl">
            <div class="flex flex-col ml-16 sm:ml-40 bg-white opacity-90 px-12 py-4 rounded-md"> 
                <h3 class="text-3xl text-teal-600 font-extrabold">Create a new Market</h3>
                <span class="w-14 border-2 border-teal-600 mt-1"></span>
            </div>
        </div>
    </div>

    <div class="flex flex-col w-8/12 px-12 py-6 m-auto">

        <div class="flex flex-col pl-3 mt-6">
            <h3 class="font-semibold text-3xl">Create New Market</h3>
            <p class="text-sm text-gray-500">All information here will be stored on the Aptos blockchain</p>
        </div>

        <div id="create_market_form" class="w-full mt-6 mb-32 create_market_form">
            <div class="flex flex-row mb-8">

                <div class="flex flex-col w-full pr-1">

                    <div class="w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description">
                            Short Description of Market
                        </label>
                        <input id="description" autocomplete="off" class="description appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Market short description">
                    </div>

                    <div class="w-full px-3 mb-6 md:mb-0 mt-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="outcome_one">
                            Outcome One
                        </label>
                        <input id="outcome_one" autocomplete="off" class="outcome_one appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Outcome One">
                    </div>

                    <div class="w-full px-3 mb-6 md:mb-0 mt-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="outcome_two">
                            Outcome Two
                        </label>
                        <input id="outcome_two" autocomplete="off" class="outcome_two appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Outcome Two">
                    </div>

                    <div class="w-full px-3 mb-6 md:mb-0 mt-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image_url">
                            Image (URL or IPFS)
                        </label>
                        <input id="image_url" autocomplete="off" class="image_url appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Full url or ipfs://">
                    </div>

                    <div class="w-full px-3 mb-6 md:mb-0 mt-6">
                        <label class=" text-gray-700 text-xs mb-2" for="reward">
                            <span class="inline uppercase tracking-wide font-bold">Reward</span>
                            <span class="inline">(In tokens - you can mint from our faucet <a href="{{ route('faucet') }}" class="hover:underline font-semibold" target="_blank">here</a>)</span>
                        </label>
                        <input id="reward" autocomplete="off" class="reward appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Outcome Two">
                    </div>

                    <div class="w-full px-3 mb-6 md:mb-0 mt-6">
                        <label class=" text-gray-700 text-xs mb-2" for="bond">
                            <span class="inline uppercase tracking-wide font-bold">bond</span>
                            <span class="inline">(In tokens - you can mint from our faucet <a href="{{ route('faucet') }}" class="hover:underline font-semibold" target="_blank">here</a>)</span>
                        </label>
                        <input id="bond" autocomplete="off" class="bond appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Outcome Two">
                    </div>

                </div>

            </div>

            <div id="create_market_submit_button"></div>

        </div>
    </div>

@endsection
