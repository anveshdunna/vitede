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
          {/* Items */}

          <div className="inline-flex gap-3 overflow-clip">
            {/* Skeleton */}
            <div className="relative w-[17.5rem] rounded-lg border border-solid border-gray-100 p-2 before:absolute before:bg-gradient-to-r before:from-transparent before:via-gray-50 before:to-transparent">
              <div className="relative flex gap-2">
                <div className="h-4 w-4 animate-shimmerbg rounded-full bg-gray-100 bg-gradient-to-r from-transparent from-40% via-gray-50 to-transparent to-60% bg-double bg-fixed"></div>
                <div className="flex w-full flex-col gap-1">
                  <div className="my-0.5 h-3 w-3/4 animate-shimmerbg rounded-lg bg-gray-100 bg-gradient-to-r from-transparent from-40% via-gray-50 to-transparent to-60% bg-double bg-fixed"></div>
                  <div className="my-0.5 h-3 w-1/4 animate-shimmerbg rounded-lg bg-gray-100 bg-gradient-to-r from-transparent from-40% via-gray-50 to-transparent to-60% bg-double bg-fixed"></div>
                  <div className="my-0.5 h-3 w-1/4 animate-shimmerbg rounded-lg bg-gray-100 bg-gradient-to-r from-transparent from-40% via-gray-50 to-transparent to-60% bg-double bg-fixed"></div>
                </div>
              </div>
            </div>
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
          {/* Actions */}
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
