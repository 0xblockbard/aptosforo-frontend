@extends('default')

@section('content')

    <div class="flex flex-col w-8/12 px-12 py-6 m-auto mt-8">

        <div class="flex flex-col pl-3 mt-6">
            <h3 class="font-semibold text-3xl">Edit Market</h3>
            <p class="text-sm text-gray-500">All information here will be stored on the blockchain</p>
        </div>

        <div id="update_market_form" class="w-full mt-6 mb-32 update_market_form">
            <div class="flex flex-row mb-8">

                <div class="flex flex-col w-full pr-1">

                    <input id="marketId" class="market_id hidden" name="market_id" data-market-id="{{ $id }}" value="{{ $id }}" />

                    <div class="w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                            Name
                        </label>
                        <input id="name" autocomplete="off" class="name appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="market title">
                    </div>

                    <div class="w-full px-3 mt-6">
                        <label class="block mb-2" for="description">
                            <span class="uppercase tracking-wide text-gray-700 text-xs font-bold">About</span>
                        </label>
                        <textarea id="description" name="description" rows="8" class="description appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2  sm:text-sm border border-gray-300 rounded-md" placeholder="Tell us about your project"></textarea>
                    </div>

                    <div class="w-full px-3 mb-6 md:mb-0 mt-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_imagedate">
                            Featured Image (URL or IPFS)
                        </label>
                            <input id="image_url" autocomplete="off" class="image_url appearance-none shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md" type="text" placeholder="Full url or ipfs://">
                    </div>

                </div>

            </div>

            <div id="update_market_form_submit"></div>

        </div>

    </div>

@endsection

@section('scripts')

    <script>
        window.marketId = {{ $id }};
    </script>

@endsection