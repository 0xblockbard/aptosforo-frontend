@extends('default')

@section('content')

    <div class="flex w-full py-24 shadow-md" style="background-image: url('https://res.cloudinary.com/blockbard/image/upload/c_scale,w_auto,q_auto,f_auto,fl_lossy/v1728199591/header-5.png'); background-size: cover; background-position: center;">
        <div class="max-w-7xl">
            <div class="flex flex-col ml-40 bg-white opacity-90 px-12 py-4 rounded-md"> 
                <h3 class="text-3xl text-teal-600 font-extrabold">Guide</h3>
                <span class="w-14 border-2 border-teal-600 mt-1"></span>
            </div>
        </div>
    </div>

    <div class="flex flex-col w-full sm:w-10/12 xl:w-9/12 px-12 pt-16 pb-24 m-auto">

        <div class="flex flex-col pl-3">

            <div class="bg-sky-50 border-2 border-teal-600 p-4 rounded-md shadow-lg shadow-teal-50">
                
                <div class="mt-2 px-10 py-6 text-gray-600 space-y-6">

                    <h2 class="font-semibold text-2xl">Overview of AptosForo</h2>
                    
                    <p><span class="font-semibold text-teal-600">AptosForo</span> is built upon the crowdfunding models outlined in <a class="text-teal-600 hover:underline" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2447567" target="_blank">Schwienbacher's (2000) research</a> on Keep-It-All and All-Or-Nothing strategies.</p>

                    <p>By incorporating these foundational models, AptosCrowd offers project creators the flexibility to choose the approach that best aligns with their project's needs and goals.</p>

                    <h3 class="font-semibold text-lg">Flexible (Keep-It-All - KIA) Model</h3>

                    <p>In the Flexible Model, project owners have the ability to claim funds at any point during the campaign, regardless of whether the funding goal has been met. Supporters should note that all contributions are final, with no option for refunds.</p>

                    <p>This model is ideal for small and scalable projects where any amount of funding can contribute to progress and help move the project forward.</p>

                    <h3 class="font-semibold text-lg">Fixed (All-Or-Nothing - AON) Model</h3>

                    <p>In the Fixed Model, project owners can only claim the funds if the target goal is reached by the campaign's end date. If the project fails to meet its funding goal, supporters have the option to claim a refund.</p>

                    <p>This approach is best suited for large and non-scalable projects that require a minimum amount of funding to proceed effectively.</p>

                    <h3 class="font-semibold text-lg">Both Models</h3>

                    <p>For both models, AptosCrowd allows overfunding beyond the target amount, which will support creators more if their campaigns are wildly successful. Campaign durations can be designed to be between 3 and 45 days, ensuring a timely funding cycle that keeps momentum and engagement high.</p>

                    <p>By providing these options, AptosCrowd enables project owners to select the crowdfunding model that most effectively supports their objectives, whether they need flexible funding to get started or require a full budget to bring their vision to life.</p>

                    <h3 class="font-semibold text-lg">Demo MVP</h3>

                    <p>The <span class="font-semibold text-teal-600">AptosCrowd</span> demo is deployed on the Aptos Testnet and showcases sample crowdfunding campaigns using both the KIA and AON models.</p>

                    <p>Users can explore these sample campaigns with detailed descriptions, images, funding goals, and deadlines to get a feel for how the live site will operate.</p>

                    <p>In addition, users can experiment by starting new crowdfunding campaigns of their own, allowing them to experience the platform's features firsthand and what it will be like to raise funds for their project. They can also pledge support with APT tokens to live campaigns, with contributions updating the campaign's progress in real time.</p>

                    <p>This interactive demo provides a comprehensive preview of the AptosCrowd platform, highlighting our user-friendly interface and seamless integration of blockchain technology in crowdfunding.</p>

                </div>

            </div>
        </div>

    </div>

@endsection
