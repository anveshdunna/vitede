import Icon from "../assets/Icon";
import { useNav } from "../contexts/NavContext";
import { useNavigate } from "react-router-dom";
import ILButton from "./core/ILButton";

function PageHeader({
  title,
  action1,
  action1function,
  action2,
  action2function,
  action3,
  action3function,
}) {
  const { changeNavOpen } = useNav();

  return (
    <header className="mx-4 flex justify-between gap-2 py-6 font-semibold">
      <button
        onClick={changeNavOpen}
        className="relative z-50 -ml-1 block text-gray-500 md:hidden"
      >
        <Icon name="menu" color="currentColor" />
      </button>
      <h1 className="text-largetitle">{title}</h1>
      <ILButton variant="secondary">{action1}</ILButton>
    </header>
  );
}

export default PageHeader;
