import React from "react";
import PageHeader from "../components/PageHeader";
import Page from "./Page";
import ILTable from "../components/core/ILTable";
import cardsData from "../data/cardsData";
import ILTabs from "../components/core/ILTabs";
import ILButton from "../components/core/ILButton";
import ILSelect from "../components/core/ILSelect";
import ILInput from "../components/core/ILInput";

function CardsCards() {
  return (
    <Page>
      <div className="section">
        <div className="fixed-container">
          <PageHeader title="Cards" action1="Issue card" />

          <ILTabs
            items={items}
            defaultActiveKey="1"
            tabBarExtraContent={<SegmentedToggle />}
          />
        </div>
      </div>
    </Page>
  );
}

const CardList = () => {
  return (
    <>
      <div className="mx-4 mb-4 flex justify-between">
        <div className="flex gap-3">
          <ILInput placeholder="Search" />

          <ILSelect defaultValue="All cardholders" />
          <ILSelect defaultValue="Any card status" />
        </div>
        <div>
          <ILSelect defaultValue="Latest issued" />
        </div>
      </div>
      <ILTable
        columns={Columns}
        dataSource={cardsData}
        pagination={false}
        rowClassName=""
        sticky={{
          offsetHeader: 0,
        }}
      />
    </>
  );
};

const SegmentedToggle = () => {
  return (
    <ILButton variant="secondarySubtle" size="small">
      List vs Grid
    </ILButton>
  );
};

const items = [
  {
    key: "1",
    label: "All",
    children: <CardList />,
  },
  {
    key: "2",
    label: "Physical",
    children: <CardList />,
  },
  {
    key: "3",
    label: "Virtual",
    children: <CardList />,
  },
];

const Columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
  },
  {
    title: "Card number",
    key: "cardNumber",
    render: (_, record) => (
      <div className="flex gap-2">
        <div>
          <Thumb cardType={record.cardType} />
        </div>
        ••{record.cardNumber}
      </div>
    ),
  },
  {
    title: "Cardholder",
    dataIndex: "cardholder",
    key: "cardholder",
  },
  {
    title: "Spend limit",
    dataIndex: "limit",
    key: "limit",
    align: "right",
    render: (_, record) => (
      <div className="inline-flex items-baseline justify-end">
        ${record.limit}
        <div className="w-12 text-caption1 text-gray-500">
          /{record.limitType}
        </div>
      </div>
    ),
  },
  {
    title: "Amount spent",
    dataIndex: "spent",
    key: "spent",
  },
];

const Thumb = (props) => {
  const { cardType } = props;
  return (
    <>
      {cardType === "physical" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="20"
          fill="none"
        >
          <rect width="30" height="20" fill="url(#a)" rx="3" />
          <rect width="5" height="3" x="4" y="8" fill="#B6BAC3" rx="1" />
          <circle cx="5.5" cy="4.5" r="1.5" fill="#000" />
          <rect width="6" height="1" x="8" y="4" fill="#000" rx=".5" />
          <circle cx="22" cy="15" r="2" fill="#EB001B" />
          <circle cx="25" cy="15" r="2" fill="#F79E1B" />
          <path
            fill="#FF5F00"
            fill-rule="evenodd"
            d="M23.5 16.32a2 2 0 0 0 0-2.64 2 2 0 0 0 0 2.64Z"
            clip-rule="evenodd"
          />
          <defs>
            <radialGradient
              id="a"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(30 20 -30 45 0 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4D5668" />
              <stop offset="1" stop-color="#212837" />
            </radialGradient>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="20"
          fill="none"
        >
          <rect width="29" height="19" x=".5" y=".5" fill="url(#b)" rx="2.5" />
          <circle cx="5.5" cy="4.5" r="1.5" fill="#D3D8DF" />
          <rect width="6" height="1" x="8" y="4" fill="#D3D8DF" rx=".5" />
          <circle cx="22" cy="15" r="2" fill="#EB001B" />
          <circle cx="25" cy="15" r="2" fill="#F79E1B" />
          <path
            fill="#FF5F00"
            fill-rule="evenodd"
            d="M23.5 16.32a2 2 0 0 0 0-2.64 2 2 0 0 0 0 2.64Z"
            clip-rule="evenodd"
          />
          <rect
            width="29"
            height="19"
            x=".5"
            y=".5"
            stroke="#D3D8DF"
            rx="2.5"
          />
          <defs>
            <radialGradient
              id="b"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(30 20 -30 45 0 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#F9FAFB" />
            </radialGradient>
          </defs>
        </svg>
      )}
    </>
  );
};

export default CardsCards;
