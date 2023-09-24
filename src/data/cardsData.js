const cardsData = [];

const cardNames = [
  "Figma subscription",
  "Shopify subscription",
  "Travel domestic",
  "Spotify Premium",
  "Adobe Suite",
  "Office Rent",
  "Netflix",
  "Web Hosting",
  "Mobile Plan",
  "Coffee Shop",
  // ... add more as needed
];

const cardHolders = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Emily Davis",
  "Robert Brown",
  "Linda Martinez",
  "William Garcia",
  "Elizabeth Wilson",
  "David Lee",
  "Jessica Lewis",
  // ... add more as needed
];

for (let i = 1; i <= 40; i++) {
  const statusArray = ["Active", "Locked", "Requested", "Closed"];
  const statusProbability = Math.random();
  let status;

  if (statusProbability < 0.7) {
    status = "Active";
  } else if (statusProbability < 0.9) {
    status = "Locked";
  } else if (statusProbability < 0.95) {
    status = "Requested";
  } else {
    status = "Closed";
  }

  const spentValue =
    status === "Requested" || status === "Closed"
      ? 0
      : Math.floor(Math.random() * 100);

  cardsData.push({
    key: i.toString(),
    name: cardNames[Math.floor(Math.random() * cardNames.length)],
    cardNumber: Math.floor(1000 + Math.random() * 9000),
    cardType: Math.random() > 0.5 ? "physical" : "virtual",
    status: status,
    cardholder: cardHolders[Math.floor(Math.random() * cardHolders.length)],
    // cardholderImg: `https://unsplash.com/image${i}`, // Still a placeholder, replace with real Unsplash URLs
    limit: Math.floor(Math.random() * 20000),
    limitType: Math.random() > 0.5 ? "week" : "month",
    spent: spentValue,
  });
}

console.log(cardsData);

export default cardsData;
