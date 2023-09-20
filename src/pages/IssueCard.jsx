import PageHeader from "../components/PageHeader";
import Page from "./Page";
import Icon from "../assets/Icon";
import CardThumbnail from "../assets/CardThumbnail";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import ILSelect from "../components/core/ILSelect";
import ILLabel from "../components/core/ILLabel";
import ILInput from "../components/core/ILInput";
import { Checkbox, Select } from "antd";
import ILButton from "../components/core/ILButton";
import ILCheckbox from "../components/core/ILCheckbox";
import ILRadio from "../components/core/ILRadio";
import ILRadioGroup from "../components/core/ILRadioGroup";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import CardBack from "../components/CardBack";

const CardType = (props) => {
  const { title, description, physical, onClickFn } = props;
  return (
    <button
      className="flex gap-6 rounded-xl p-6 shadow-b200 transition duration-200 hover:shadow-b200s400"
      onClick={onClickFn}
    >
      <div className="shrink-0">
        <CardThumbnail physical={physical} />
      </div>
      <div className="flex flex-col items-start">
        <div className="text-title3 font-medium text-gray-900">{title}</div>
        <div className="text-left text-body2 text-gray-500">{description}</div>
      </div>
    </button>
  );
};

const Label = (props) => {
  const { label } = props;
  return (
    <>
      <div className="text-body2 font-medium text-gray-700">{label}</div>
    </>
  );
};

function IssueCard() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [defaultType, setDefaultType] = useState(null);
  const [showPhysical, setShowPhysical] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [cardPhysical, setCardPhysical] = useState(null);
  const onRadioChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };

  const selectVirtual = () => {
    setShowDetails(true);
    setDefaultType("virtual");
    setCardPhysical(false);
  };

  const selectPhysical = () => {
    setShowDetails(true);
    setDefaultType("physical");
    setShowPhysical(true);
    setCardPhysical(true);
  };

  const handleChange = (value) => {
    setShowPhysical(!showPhysical);
    setCardPhysical(!cardPhysical);
  };

  return (
    <Page>
      <div className="sticky top-0 z-10 flex grow items-center border-b border-solid border-gray-200 bg-white px-4 py-2">
        <div className="ml-6 flex flex-row items-center gap-3">
          <button
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-80"
            onClick={() => navigate("/cards/overview")}
          >
            <Icon name="crossSmall" color="currentColor" />
          </button>
          <span className="text-body2 font-semibold text-gray-700">
            Issue new card
          </span>
        </div>
      </div>
      {/* <Outlet /> */}

      <div className="section">
        <div className="fixed-container">
          <div className="mt-10 grid w-full grid-cols-4">
            <div className="col-span-2 mx-4 flex max-w-xl">
              {/* Select card types */}

              <AnimatePresence mode="wait">
                {showDetails ? (
                  <motion.div
                    key="B"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex w-full max-w-md flex-col items-start gap-6"
                  >
                    <Select
                      size="large"
                      className="self-start"
                      labelInValue
                      defaultValue={defaultType}
                      onChange={handleChange}
                      options={[
                        { value: "virtual", label: "Virtual card" },
                        { value: "physical", label: "Physical card" },
                      ]}
                    />

                    <div className="w-full">
                      <ILLabel label="Who is this card for?" />
                      <ILInput size="large" />
                    </div>

                    <div className="w-full">
                      <ILLabel label="Card name" />
                      <ILInput size="large" />
                    </div>

                    <div className="w-full">
                      <ILLabel
                        label="Card spend limit"
                        description="Maximum amount that can be spent on this card in a month."
                      />
                      <ILInput size="large" />
                    </div>

                    {showPhysical && (
                      <div key="deliveryDiv" className="w-full">
                        <ILLabel
                          label="Delivery address"
                          description="Where would you like the physical card delivered?"
                        />
                        <div className="flex w-full flex-col gap-1">
                          <ILRadioGroup
                            className="flex flex-col gap-1 rounded-lg border border-gray-100 bg-white "
                            onChange={onRadioChange}
                            value={radioValue}
                          >
                            <ILRadio
                              value={1}
                              style={{
                                borderBottomWidth: "1px",
                                borderColor: "rgb(229, 233, 237)",
                                padding: "12px 16px",
                                marginRight: "0px",
                                lineHeight: "1.25rem",
                              }}
                            >
                              <div className="flex flex-col gap-0.5">
                                <div className="text-body2 font-medium">
                                  Use company address
                                </div>
                                {radioValue === 1 && (
                                  <div className="text-caption1 text-gray-500">
                                    Company office address, Company office
                                    address, Company office address, Company
                                    office address, Company office address,
                                    123456
                                  </div>
                                )}
                              </div>
                            </ILRadio>
                            <ILRadio
                              value={2}
                              style={{
                                padding: "12px 16px",
                                marginRight: "0px",
                                lineHeight: "1.25rem",
                              }}
                            >
                              <div className="-mr-2 flex flex-col gap-0.5">
                                <span className="text-body2 font-medium">
                                  Use a new address
                                </span>
                                {radioValue === 2 && (
                                  <div className="mb-1 mt-4 flex flex-col gap-6">
                                    <div className="w-full">
                                      <ILLabel label="Address line 1" />
                                      <ILInput size="large" />
                                    </div>
                                    <div className="w-full">
                                      <ILLabel label="Address line 2" />
                                      <ILInput size="large" />
                                    </div>
                                    <div className="w-full">
                                      <ILLabel label="City" />
                                      <ILInput size="large" />
                                    </div>
                                    <div className="flex gap-4">
                                      <div className="flex w-full flex-col">
                                        <ILLabel label="State" />
                                        <ILInput size="large" />
                                      </div>
                                      <div className="w-full">
                                        <ILLabel label="ZIP code" />
                                        <ILInput size="large" />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </ILRadio>
                          </ILRadioGroup>
                        </div>
                      </div>
                    )}

                    <div>
                      <ILCheckbox
                        style={{
                          backgroundColor: "rgb(255,255,255)",
                          borderRadius: "0.5rem",
                          borderWidth: "1px",
                          borderColor: "rgb(229, 233, 237)",
                          padding: "12px 16px",
                        }}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium">
                            Make this the default travel card
                          </span>
                          <div className="text-caption1 text-gray-500">
                            This will be the default payment method for all the
                            company travel bookings.
                          </div>
                        </div>
                      </ILCheckbox>
                    </div>

                    <ILButton variant="secondary">Confirm</ILButton>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={false}
                    exit={{ opacity: 0, y: -16 }}
                    key="A"
                    transition={{ duration: 0.1, ease: "easeIn" }}
                    className="flex flex-col items-start gap-6"
                  >
                    <div className="text-title3 font-semibold">
                      Select card type
                    </div>
                    <CardType
                      title="Virtual card"
                      onClickFn={selectVirtual}
                      description="Virtual cards can be used for online purchases and are issued and activated instantly."
                    />
                    <CardType
                      title="Physical card"
                      onClickFn={selectPhysical}
                      physical
                      description="Physical cards used for any online or in-store purchases and will be delivered to you within 7-10 business days."
                    />
                    <Link className="block text-body2 text-gray-700 underline">
                      Learn more about card types
                      <span className="inline-block no-underline"> ↗</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {showDetails && (
              <div className="relative col-span-2 mx-4 flex flex-col items-center">
                <div className="fixed">
                  <div className="relative">
                    <div className="absolute">
                      <CardBack physical={!cardPhysical} />
                    </div>

                    <CardBack physical={cardPhysical} anim />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}

const users = [
  {
    value: "recommended",
    label: "Recommended",
  },
  {
    value: "price",
    label: "Price",
  },
  {
    value: "duration",
    label: "Duration",
  },
  {
    value: "earliestDeparture",
    label: "Earliest departure",
  },
  {
    value: "latestDeparture",
    label: "Latest departure",
  },
];

export default IssueCard;
