export const globalNavLinks = [
  {
    id: 0,
    key: 1,
    title: "Home",
    icon: "home",
    iconActive: "homeFilled",
    path: "/",
  },
  {
    id: 1,
    key: 2,
    title: "Travel",
    icon: "travel",
    iconActive: "travelFilled",
    path: "/travel/overview",
    subnav: [
      {
        id: 0,
        key: 1,
        title: "Overview",
        path: "/travel/overview",
      },
      {
        id: 1,
        key: 2,
        title: "Trips",
        path: "/travel/trips",
      },
      {
        id: 2,
        key: 3,
        title: "Events",
        path: "/travel/events",
      },
      {
        id: 3,
        key: 4,
        title: "Concierge",
        path: "/travel/concierge",
      },
      {
        id: 4,
        key: 5,
        title: "Approvals",
        path: "/travel/approvals",
      },
    ],
  },
  {
    id: 2,
    key: 3,
    title: "Expense",
    icon: "expense",
    iconActive: "expenseFilled",
    path: "/expense/overview",
    subnav: [
      {
        id: 0,
        key: 1,
        title: "Overview",
        path: "/expense/overview",
      },
      {
        id: 1,
        key: 2,
        title: "Expenses",
        path: "/expense/expenses",
      },
      {
        id: 2,
        key: 3,
        title: "Reports",
        path: "/expense/reports",
      },
      {
        id: 3,
        key: 4,
        title: "Approvals",
        path: "/expense/approvals",
      },
    ],
  },
  {
    id: 3,
    key: 4,
    title: "Cards",
    icon: "expense",
    iconActive: "expenseFilled",
    path: "/cards/overview",
    subnav: [
      {
        id: 0,
        key: 1,
        title: "Overview",
        path: "/cards/overview",
      },
      {
        id: 1,
        key: 2,
        title: "Cards",
        path: "/cards/cards",
      },
      {
        id: 2,
        key: 3,
        title: "Transactions",
        path: "/cards/transactions",
      },
    ],
  },
];

export const globalNavUtils = [
  {
    id: 0,
    key: 1,
    icon: "help",
    iconActive: "helpFilled",
    path: "/help",
  },
  {
    id: 0,
    key: 2,
    icon: "notification",
    iconActive: "notificationFilled",
    path: "/notifications",
  },
];
