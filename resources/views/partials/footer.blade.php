<footer class="bg-white border-t border-gray-200 z-20 dark:bg-black dark:border-gray-500">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-md mx-auto pt-8 px-4 sm:max-w-7xl sm:px-6 lg:pt-8 lg:px-8">
        <div class="flex flex-row justify-between">

            <div class="flex flex-col">

                <a href="{{ route('home') }}" class="pl-1">
                    <span class="font-sans text-lg font-extrabold text-teal-600">AptosForo</span>
                </a>
                <p class="text-gray-600 font-title text-sm pl-1 font-semibold dark:text-gray-200">
                    Optimistic Oracle-powered Prediction Market
                </p>
                <p class="text-gray-600 font-title uppercase text-xs pl-1 mt-6 font-semibold dark:text-gray-200">
                    Powered by Aptos
                </p>

            </div>

            <div class="mt-12 flex flew-row xl:mt-0">

                <div class="flex flex-col w-32">
                    <div>
                        <ul class="mt-4 space-y-4 text-md">

                            <li>
                                <a href="{{ route('about') }}" class="text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="{{ route('about') }}" class="text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">
                                    FAQ
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="flex flex-col w-32 pl-2">
                    <div class="mt-0">

                        <ul class="mt-4 space-y-4 text-md">

                            <li>
                                <a href="{{ route('show_all_markets') }}" class="text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">
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
