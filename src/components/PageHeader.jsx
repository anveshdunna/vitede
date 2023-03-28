import Icon from "../assets/Icon";
import { useNav } from "../contexts/NavContext";

function PageHeader() {
  const { changeNavOpen } = useNav();

  return (
    <header className="flex gap-2 px-6 py-2 text-title2 font-semibold">
      <button
        onClick={changeNavOpen}
        className="relative z-50 -ml-1 block md:hidden"
      >
        <Icon name="notification" />
      </button>
      PageHeader
    </header>
  );
}

export default PageHeader;
