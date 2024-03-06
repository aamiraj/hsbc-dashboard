import React from "react";
import SwitchInput from "../SwitchInput/SwitchInput";

const PersonalizationOfInvestment = () => {
  return (
    <div className="border rounded-lg p-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="border rounded-lg p-8">
          <p className="text-3xl">Savings Fund</p>
          <div className="my-8">
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Standard Housing Perspective Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked true means off  */}
                <SwitchInput checked={true} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Perspective Housing Plus Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked false means on  */}
                <SwitchInput checked={false} />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8">
          <p className="text-3xl">CAR PARK</p>
          <div className="my-8">
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Standard Housing Perspective Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked true means off  */}
                <SwitchInput checked={true} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Perspective Housing Plus Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked false means on  */}
                <SwitchInput checked={false} />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8">
          <p className="text-3xl">FINANCIAL INVESTMENTS</p>
          <div className="my-8">
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Standard Housing Perspective Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked true means off  */}
                <SwitchInput checked={true} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Perspective Housing Plus Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked false means on  */}
                <SwitchInput checked={false} />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8">
          <p className="text-3xl">HOTELS</p>
          <div className="my-8">
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Standard Housing Perspective Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked true means off  */}
                <SwitchInput checked={true} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-8 my-4">
              <div>
                <p className="font-bold">Perspective Housing Plus Fund</p>
                <p className="text-xs text-red-500 font-bold">
                  End of subscription
                </p>
              </div>
              <div>
                {/* checked false means on  */}
                <SwitchInput checked={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationOfInvestment;
