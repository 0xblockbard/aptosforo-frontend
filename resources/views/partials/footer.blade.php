<footer class="bg-white border-t border-gray-200 z-20 ">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-md mx-auto pt-8 px-4 sm:max-w-7xl sm:px-6 lg:pt-8 lg:px-8">
        <div class="flex flex-row justify-between">

            <div class="flex flex-col">

                <a href="{{ route('home') }}" class="pl-1">
                    <span class="font-sans text-lg font-extrabold text-teal-600">AptosForo</span>
                </a>
                <p class="hidden sm:block text-gray-600 font-title text-sm pl-1 font-semibold ">
                    Optimistic Oracle-powered Prediction Market
                </p>
                <p class="text-gray-600 font-title uppercase text-xs pl-1 mt-6 font-semibold ">
                    Powered by Aptos
                </p>

            </div>

            <div class="sm:mt-12 pl-6 sm:pl-0 flex flew-row xl:mt-0">

                <div class="flex flex-col w-24 sm:w-32">
                    <div>
                        <ul class="mt-1 sm:mt-4 space-y-4 text-md">

                            <li>
                                <a href="{{ route('about') }}" class="text-gray-500 hover:text-gray-900 ">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="{{ route('about') }}" class="text-gray-500 hover:text-gray-900 ">
                                    FAQ
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="flex flex-col w-24 sm:w-32 pl-2">
                    <div class="mt-0">

                        <ul class="mt-1 sm:mt-4 space-y-4 text-md">

                            <li>
                                <a href="{{ route('show_all_markets') }}" class="text-gray-500 hover:text-gray-900 ">
                                    Markets
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>

            </div>

        </div>
        <div class="mt-10 py-2">

        </div>
    </div>
</footer>
