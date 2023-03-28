import Icon from "../assets/Icon";
import PageHeader from "../components/PageHeader";

function Home() {
  return (
    <div className="md:ml-[280px]">
      <PageHeader />
      <div className="h-72 w-96 bg-orange-100"></div>
      <div className="h-72 w-96 bg-blue-100"></div>
      <div className="h-72 w-96 bg-green-100"></div>
      <div className="h-72 w-96 bg-yellow-100"></div>
      <div className="h-72 w-96 bg-red-100"></div>
    </div>
  );
}

export default Home;
