@extends('default')

@section('content')

    <div class="bg-white overflow-hidden w-full">
        <div class="relative max-w-7xl mx-auto py-8 sm:py-16 px-12 sm:px-6 lg:px-8">
            <div class="hidden lg:block bg-teal-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
            <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                <div>
                    <h2 class="text-base text-gray-700 font-semibold tracking-wide uppercase">0xBlockBard</h2>
                    <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-600 sm:text-4xl">About AptosForo</h3>
                    <p class="mt-4 text-md text-gray-500 italic font-merriweather">Decentralised prediction market on Aptos</p>
                </div>
            </div>
            <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="relative lg:row-start-1 lg:col-start-2">
                    <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-teal-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                    </svg>
                    <div id="about_image" class="relative text-base mx-auto max-w-prose lg:max-w-none pl-20">
                        <figure>
                            <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                                <img class="rounded-lg shadow-lg object-cover object-center" src="https://aptos-blockbard.s3.ap-southeast-2.amazonaws.com/aptosforo/aptosforo-about-1.png" alt="Turning knowledge, research, and insights on the market into assets">
                            </div>
                            <figcaption class="mt-3 flex text-sm text-gray-500">
                                <svg class="flex-none w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                                <span class="ml-2">Turning knowledge, research, and insights on the market into assets</span>
                            </figcaption>
                        </figure>
                    </div>
                    
                </div>
                <div class="mt-8 lg:mt-0">

                    <div class="mt-5 prose prose-teal text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 text-justify pr-5 space-y-6">
                        
                        <p><strong>AptosForo</strong> (derived from "Aptos" and "Foro," Latin for "market") is an innovative prediction market that lets you trade on a diverse range of highly debated topics, from current events and politics to cryptocurrency trends.</p>

                        <p>As prediction markets gain popularity, they appeal to individuals who seek to leverage their insights and capitalize on their understanding of future events.</p>

                        <p>By transforming forecasts into tradable assets, these markets allow users to profit from their predictions while also creating a collective intelligence that offers valuable insights into the likelihood of various outcomes.</p>

                        <p>With platforms like Polymarket on Polygon leading the way, prediction markets have become an exciting intersection of finance, technology, and social sentiment.</p>

                        <p>Inspired by this trend, <strong>AptosForo</strong> allows users to leverage their knowledge and insights on the future to build a dynamic portfolio. By buying shares in various markets, one can turn their predictions into potential profits.</p>

                        <p>At the core of our Minimum Viable Product (MVP) is a robust Optimistic Oracle, built on UMA Protocol's design and adapted for the Aptos Move language, which secures market resolution with economic guarantees and bonds.</p>

                        <p>Unlike conventional oracles limited to price feeds, UMA Protocol's Optimistic Oracle can validate a broad range of on-chain data, supporting AptosForo’s mission to enable secure, decentralized predictions.</p>

                        <p>Integrated with a Full Policy Escalation Manager and Automated Market Maker, <strong>AptosForo</strong> provides a seamless trading experience and reliable data verification, empowering users to engage confidently in predictive markets on Aptos.</p>

                        <p class="font-semibold italic">By 0xBlockBard</p>

                        <p><span class="font-semibold">Twitter / X:</span> <a class="text-teal-600 hover:underline hover:text-teal-700" target="_blank" href="https://x.com/0xblockbard">https://x.com/0xblockbard</a></p>

                        <p><span class="font-semibold">Substack Newsletter:</span> <a class="text-teal-600  hover:underline hover:text-teal-700" target="_blank" href="https://www.0xblockbard.com/">https://www.0xblockbard.com</a></p>

                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection