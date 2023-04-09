import Icon from "../assets/Icon";
import { useNav } from "../contexts/NavContext";
import { useNavigate } from "react-router-dom";

function PageHeader({ title, cta, ctafunction }) {
  const { changeNavOpen } = useNav();

  return (
    <header className="flex gap-2 px-6 py-2 font-semibold">
      <button
        onClick={changeNavOpen}
        className="relative z-50 -ml-1 block text-gray-500 md:hidden"
      >
        <Icon name="menu" color="currentColor" />
      </button>
      <h1 className="text-title2">{title}</h1>
      <button onClick={ctafunction}>{cta}</button>
    </header>
  );
}

export default PageHeader;
