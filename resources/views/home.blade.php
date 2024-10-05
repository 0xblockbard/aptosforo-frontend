@extends('default')

@section('content')

    <div class="flex w-full px-10">

        <div class="home flex flex-col sm:flex-row w-full">

            <div class="flex flex-col items-start justify-center w-full sm:w-1/2 sm:pr-16 sm:pl-20 pb-10 pt-10 sm:pt-0">

                <h1 class="text-5xl text-teal-600 font-extrabold">AptosForo</h1>
                <span class="w-20 border-2 teal-teal-600 mt-2"></span>
{{--                <h3 class="text-md mt-2 italic">Raise funds for your projects on our decentralised opensource platform powered by the Aptos blockchain</h3>--}}
{{--                <h3 class="text-md mt-2 italic">Make the Aptos community stronger as an early adopter supporting innovative creators and unique projects.</h3>--}}
                <h3 class="text-md mt-2 font-semibold italic">Simple Prediction Market on Aptos</h3>

                
                {{-- <p class="text-base mt-4">Leverage our optimistic oracles to make accurate predictions and resolve outcomes with community consensus.</p> --}}
                <p class="text-base mt-8">Trade on the world's most highly-debated topics like crypto, politics, sports, current events, and more.</p>
                <p class="text-base mt-4">Build a portfolio based on your forecasts, and earn returns if you are right.</p>
                

                <div class="flex flex-row mt-10 space-x-4">
                    <a href="{{ route('show_all_markets') }}">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            Explore Markets
                        </button>
                    </a>

                    {{-- <a href="{{ route('create_market') }}">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            Start Market
                        </button>
                    </a> --}}
                </div>

                <span class="w-10 border border-teal-600 mt-24"></span>
                <p class="text-sm mt-2 italic">Turn your knowledge, research, and view of the future into assets</p>

            </div>

            <div class="flex flex-col items-center justify-center w-full sm:w-1/2 sm:px-6 pb-20 sm:pb-0">

                <img class="max-w-full" src="https://aptos-blockbard.s3.ap-southeast-2.amazonaws.com/aptosforo/aptos-foro-home-1.png" />

            </div>

        </div>

    </div>

@endsection
