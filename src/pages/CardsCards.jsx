import React from "react";
import PageHeader from "../components/PageHeader";
import Page from "./Page";
import ILTable from "../components/core/ILTable";
import cardsData from "../data/cardsData";
import ILTabs from "../components/core/ILTabs";
import ILButton from "../components/core/ILButton";
import ILSelect from "../components/core/ILSelect";
import ILInput from "../components/core/ILInput";
import Icon from "../assets/Icon";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        rowClassName="cursor-pointer"
        sticky={{
          offsetHeader: 0,
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate("/cards/cards/card-details");
            }, // click row
          };
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
    key: "name",
    width: "30%",
    render: (_, record) => (
      <div className="flex items-center justify-between">
        {record.name}
        {record.status === "Active" ? null : (
          <CardStatus label={record.status} />
        )}
      </div>
    ),
  },
  {
    title: "Card number",
    key: "cardNumber",
    render: (_, record) => (
      <div className="flex max-w-xs gap-2">
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
    render: (_, record) => (
      <div className="flex items-center gap-2">
        <img
          src={record.cardholderImg}
          className="h-6 w-6 rounded-full bg-gray-100"
        />
        {record.cardholder}
      </div>
    ),
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
    render: (_, record) => (
      <div className="flex items-center">
        <div className="min-w-[3rem]">{record.spent}%</div>
        <div className="relative h-1 w-full max-w-[6rem] overflow-hidden rounded-full bg-green-200">
          <div
            className={`h-1 border-r border-white bg-gray-900`}
            style={{ width: `${record.spent}%` }}
          ></div>
        </div>
      </div>
    ),
  },
  {
    title: " ",
    key: "action",
    width: 56,
    render: (_, record) => (
      // <div className="text-orange-500">
      <Icon name="more" color="#6B7280" />
      // </div>
    ),
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

const CardStatus = (props) => {
  const { label } = props;
  const bgColor =
    label === "Requested"
      ? "bg-yellow-50 border-yellow-100 text-yellow-500"
      : label === "Locked"
      ? "bg-gray-50 border-gray-100 text-gray-500"
      : "bg-red-50 border-red-100 text-red-500";
  const icon =
    label === "Requested"
      ? "clockSmall"
      : label === "Locked"
      ? "lockSmall"
      : "closeAltSmall";
  return (
    <div
      className={`flex items-center gap-1 rounded-lg border ${bgColor} px-1 py-px`}
    >
      <Icon name={icon} color="currentColor" />
      <div className="text-caption1 font-medium">{label}</div>
    </div>
  );
};

export default CardsCards;
