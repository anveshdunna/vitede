import PageHeader from "../components/PageHeader";
import Page from "./Page";
import Icon from "../assets/Icon";

const CardType = (props) => {
  const { title, description } = props;
  return (
    <div className="rounded-lg border border-gray-100 p-6">
      <div className="text-title3 font-medium text-gray-900">{title}</div>
      <div className="text-body2 text-gray-500">{description}</div>
    </div>
  );
};

function IssueCard() {
  return (
    <Page>
      <div className="relative flex grow items-center border-b border-solid border-gray-200 bg-white px-4 py-2">
        <div className="ml-6 flex flex-row items-center gap-3">
          <button className="rounded-lg p-1 text-gray-500 hover:bg-gray-80">
            <Icon name="crossSmall" color="currentColor" />
          </button>
          <span className="text-body2 font-semibold text-gray-700">
            Issue new card
          </span>
        </div>
      </div>
      <div className="section">
        <div className="fixed-container">
          <div className="mt-10 grid w-full grid-cols-4">
            <div className="col-span-3 mx-4 flex flex-col gap-6">
              <div className="text-title3 font-semibold">Select card type</div>
              <CardType
                title="Virtual card"
                description="Virtual cards can be used for online purchases and are issued and activated instantly."
              />
              <CardType
                title="Physical card"
                description="Physical cards used for any online or in-store purchases and will be delivered to you within 7-10 business days."
              />
            </div>

            <div className="mx-4 basis-1/4 bg-blue-100">Preview</div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default IssueCard;
