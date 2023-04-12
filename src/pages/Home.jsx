import Icon from "../assets/Icon";
import PageHeader from "../components/PageHeader";
import Page from "./Page";

function Home() {
  return (
    <Page>
      <PageHeader title="Home" />
      <div className="h-72 w-96 bg-orange-100"></div>
      <div className="h-72 w-96 bg-blue-100"></div>
      <div className="h-72 w-96 bg-green-100"></div>
      <div className="h-72 w-96 bg-yellow-100"></div>
      <div className="h-72 w-96 bg-red-100"></div>
    </Page>
  );
}

export default Home;
