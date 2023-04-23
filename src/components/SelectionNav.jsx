import { useNavigate } from "react-router-dom";
import ILButton from "./core/ILButton";
import SelectionNavItem from "./SelectionNavItem";

function SelectionNav({
  expand,
  changeExpand,
  queryData,
  selectionData,
  active,
  onClick,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="sticky top-0 z-10 flex w-full flex-col items-stretch">
        {expand && (
          <div
            className="fixed h-full w-full bg-gray-900/40"
            onClick={changeExpand}
          ></div>
        )}
        <div className="absolute top-0 z-10 flex w-full flex-row items-start justify-between gap-20 border-b border-solid border-gray-200 bg-white px-10 py-3">
          <div className="inline-flex gap-3 overflow-clip">
            {queryData.map((item, index) => {
              return (
                <SelectionNavItem
                  item={item}
                  key={index}
                  expand={expand}
                  active={active === index}
                  onClick={() => onClick(index)}
                />
              );
            })}
          </div>
          <div className="flex flex-none items-center gap-4">
            <div className="flex flex-col gap-0">
              <div className="text-body1">
                Total <span className="font-semibold">$400</span>
              </div>
              <button className="text-caption1" onClick={changeExpand}>
                View selection
              </button>
            </div>
            <ILButton
              onClick={() => navigate("/travel/confirm-details")}
              variant="secondary"
            >
              Proceed
            </ILButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectionNav;
