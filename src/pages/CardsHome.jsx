import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Page from "./Page";
import ILButton from "../components/core/ILButton";

function CardsHome() {
  const navigate = useNavigate();
  return (
    <Page>
      <div className="section">
        <div className="fluid-container">
          <PageHeader title="Overview" action1="Issue card" />

          {/* Banner starts */}
          <div className="mx-4 mb-6 mt-4 flex h-60 flex-col items-start gap-6 overflow-clip rounded-2xl bg-gray-900 px-12 py-10">
            <div className="text-title1 font-semibold text-white">
              Get <span className="text-orange-300">real-time</span> visibility{" "}
              <br />
              into company spend
            </div>
            <ILButton
              variant="secondarySubtle"
              onClick={() => navigate("/cards/issue-card")}
            >
              Issue card
            </ILButton>
          </div>

          {/* Content grid starts */}
          <div className="grid w-full grid-cols-4">
            <div className="col-span-3 mx-4 mt-4 flex flex-col gap-10">
              {/* Bar graph starts here */}
              <div className="flex flex-col gap-4 border-b border-gray-200 pb-10">
                <div className="flex flex-col">
                  <div className="text-body2 font-semibold text-gray-700">
                    Usage and balance
                  </div>
                  <div className="text-body2 text-gray-500">
                    8 Sep – 8 Oct 2023
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-largetitle font-semibold text-gray-900">
                    30%
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <div className="h-4 overflow-clip rounded-lg bg-green-300">
                      <div className="h-full w-1/3 bg-gray-900"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col items-start">
                        <div className="text-title3 font-semibold">$3,000</div>
                        <div className="flex items-center gap-1 text-body2 text-gray-500">
                          <div className="inline-block h-2 w-2 rounded-md bg-gray-900"></div>
                          <span>Spent</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-title3 font-semibold">$7,000</div>
                        <div className="flex items-center gap-1 text-body2 text-gray-500">
                          <div className="inline-block h-2 w-2 rounded-md bg-green-300"></div>
                          <span>Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Stat cards start here */}
              <div className="flex gap-8">
                {/* Card 1 */}
                <div className="flex w-full flex-col gap-4">
                  <div className="text-body2 font-semibold text-gray-700">
                    Cashback earned
                  </div>
                  <div className="flex text-body1">
                    <div className="flex w-full flex-col">
                      <div className="text-body2 text-gray-500">
                        8 Sep – 8 Oct 2023
                      </div>
                      <div className="font-medium">$400</div>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="text-body2 text-gray-500">All time</div>
                      <div className="font-medium">$600</div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex w-full flex-col gap-4">
                  <div className="text-body2 font-semibold text-gray-700">
                    Cards issued
                  </div>
                  <div className="flex text-body1">
                    <div className="flex w-full flex-col">
                      <div className="text-body2 text-gray-500">
                        Active cards
                      </div>
                      <div className="font-medium">0</div>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="text-body2 text-gray-500">All cards</div>
                      <div className="font-medium">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 mt-4 flex flex-col gap-4">
              <div className="text-body2 font-semibold text-gray-700">
                Details
              </div>
              <LabelValue label="Program type" value="Credit" />
              <LabelValue label="Total spend limit" value="$10,000" />
              <LabelValue label="Next payment" value="8 Oct 2023" />

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

const LabelValue = (props) => {
  const { label, value } = props;
  return (
    <div>
      <div className="text-body2 text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
};

export default CardsHome;

//
{
  /* <div className="section">
  <div className="fixed-container">
    <PageHeader title="Overview" action1="Issue card" />
  </div>
  <div className="fixed-container">
    <div className="h-96 rounded-3xl bg-orange-200">Banner</div>
  </div>
  <div className="fixed-container">
    <div>
      <div>Chart</div>
      <div>
        <div>Stats1</div>
        <div>Stats2</div>
      </div>
    </div>
  </div>
</div>; */
}
