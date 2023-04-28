import { useNav } from "../contexts/NavContext";

function Page({ children }) {
  const { pnavOpen } = useNav();
  return (
    <div
      className={`flex h-fit flex-1 flex-col items-stretch ${
        pnavOpen ? `md:ml-[17.5rem]` : `md:ml-16`
      }`}
      id="page"
    >
      {children}
    </div>
  );
}

export default Page;
