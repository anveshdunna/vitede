import Icon, { IconMap } from "../assets/Icon";
import PageHeader from "../components/PageHeader";
import Page from "./Page";

let iconArray = Object.entries(IconMap);

function Concierge() {
  return (
    <Page>
      <PageHeader title="Concierge" />
      <div className="mx-4 mt-8 flex flex-col gap-4">
        {iconArray.map((a, i) => {
          let [x, y] = a;
          return (
            <div
              key={i}
              className="flex items-center gap-2 text-body2 text-gray-700"
            >
              <div>
                <Icon name={x} color="currentColor" />
              </div>
              <span>{y.name}</span>
            </div>
          );
        })}
      </div>
    </Page>
  );
}

export default Concierge;
