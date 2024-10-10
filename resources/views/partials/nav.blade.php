<nav class="fixed w-full bg-white z-20 {{ \Request::route()->getName() == 'show_all_markets' || \Request::route()->getName() == 'home' ? '' : 'border-b border-transparent shadow'}}">
    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-14">
            <div class="flex sm:w-3/5">
                <div class="flex-shrink-0 flex items-center">

                    <a href="{{ route('home') }}" class="inline-flex items-center py-2 ml-2 relative top-0.5">
                        <span class=" text-lg font-extrabold text-teal-600 hover:text-teal-800">AptosForo</span>
                    </a>

                </div>

                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">

                    <a href="{{ route('show_all_markets') }}" class="{{ \Request::route()->getName() == 'show_all_markets' ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Markets
                    </a>

                    <a href="{{ route('faucet') }}" class="{{ \Request::route()->getName() == 'faucet' ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Faucet
                    </a>

                    <a href="{{ route('about') }}" class="{{ \Request::route()->getName() == 'about' ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700' }} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        About
                    </a>
                    
                </div>

            </div>

        <div class="ml-6 flex items-center">

            <a href="{{ route('create_market') }}" class="mr-4">
                <button type="button" class="nav_create_market_button invisible items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300">
                    Create Market
                </button>
            </a>

            <div id="connect-wallet" class="connect_wallet cursor-pointer text-sm font-semibold">
                connect
            </div>

        </div>

</nav>
