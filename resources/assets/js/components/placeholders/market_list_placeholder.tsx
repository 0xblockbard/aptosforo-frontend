import React from "react";

export function MarketListPlaceholder() {
  return (
    <div className="w-full mx-auto grid gap-4 px-4 py-8 lg:grid-cols-4">
      {/* Row 1 */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-md border border-gray-50 overflow-hidden animate-pulse">
          
          <div className="flex-1 bg-white pt-4 px-4">
            <div className="flex flex-row">
              <div className="w-12 h-12 bg-gray-300 rounded-sm"></div>
              <div className="ml-4 w-2/3 h-6 bg-gray-300 rounded"></div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="mt-10">
                <div className="flex justify-between">
                  
                  <div className="buy_outcome_one_button bg-gray-300 px-2 py-2 mr-0.5 w-1/3 h-8 rounded"></div>

                  <div className="buy_outcome_two_button bg-gray-300 px-2 py-2 ml-0.5 w-1/3 h-8 rounded"></div>

                </div>
              </div>
            </div>
          </div>

          <div className="my-3 ml-1 px-4 flex justify-between items-center">
            <div className="text-xs text-gray-500 w-1/4 h-4 bg-gray-300 rounded"></div>
          </div>
          
        </div>
      ))}

      {/* Row 2 */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-md border border-gray-50 overflow-hidden animate-pulse">
          
          <div className="flex-1 bg-white pt-4 px-4">
            <div className="flex flex-row">
              <div className="w-12 h-12 bg-gray-300 rounded-sm"></div>
              <div className="ml-4 w-2/3 h-6 bg-gray-300 rounded"></div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="mt-10">
                <div className="flex justify-between">
                  
                  <div className="buy_outcome_one_button bg-gray-300 px-2 py-2 mr-0.5 w-1/3 h-8 rounded"></div>

                  <div className="buy_outcome_two_button bg-gray-300 px-2 py-2 ml-0.5 w-1/3 h-8 rounded"></div>

                </div>
              </div>
            </div>
          </div>

          <div className="my-3 ml-1 px-4 flex justify-between items-center">
            <div className="text-xs text-gray-500 w-1/4 h-4 bg-gray-300 rounded"></div>
          </div>
          
        </div>
      ))}
    </div>

  );
}
