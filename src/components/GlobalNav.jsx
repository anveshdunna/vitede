import Icon from "../assets/Icon";
import Logo from "../assets/Logo";
import { NavLink, Link } from "react-router-dom";
import { globalNavLinks, globalNavUtils } from "../data/navData.js";

const itemClass =
  "flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-2 no-underline";
const itemActive = "bg-orange-50 text-orange-500";
const itemNotActive = "text-gray-700";

function GlobalNavItem({ item }) {
  return (
    <div
      to={item.link}
      className={({ isActive }) =>
        `${itemClass} + ${isActive ? itemActive : itemNotActive}`
      }
    >
      <Icon name={item.icon} color="currentColor" />
      {item.name && (
        <label className="cursor-pointer text-caption2">{item.name}</label>
      )}
    </div>
  );
}

export default function GlobalNav() {
  return (
    <nav className="bg-white fixed flex h-screen w-16 flex-none flex-col items-stretch justify-between border-r border-solid border-gray-200 py-4 px-1">
      <div className="flex flex-col items-stretch gap-2">
        {globalNavLinks.map((item) => {
          return <GlobalNavItem item={item} />;
        })}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-10 w-10 bg-red-100"></div>
        <div className="h-10 w-10 bg-red-100"></div>
        <div className="h-10 w-10 bg-red-100"></div>
        <div className="h-10 w-10 bg-red-100"></div>
        <div className="h-10 w-10 bg-red-100"></div>
        <div className="h-10 w-10 bg-red-100"></div>
      </div>
    </nav>
  );
}

// function GlobalNav() {
//   return (
//     <nav className="fixed flex h-screen w-16 flex-none flex-col items-stretch justify-between border-[0] border-r border-solid border-gray-200 bg-white py-4 px-1">
//       <div className="flex flex-col items-stretch justify-center gap-2">
//         <Link
//           to="/"
//           className="flex h-12 flex-col items-center justify-center rounded-xl hover:bg-orange-200"
//         >
//           <Logo />
//         </Link>
//         {globalNavLinks.map((item) => {
//           return <GlobalNavItem item={item} />;
//         })}
//       </div>
//       <div className="flex flex-col items-center justify-center gap-2">
//         {globalNavUtils.map((item) => {
//           return <GlobalNavItem item={item} />;
//         })}
//         <button>Text</button>
//         <button
//           type="button"
//           className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 p-1"
//         >
//           {/* <img
//             alt=""
//             className="h-8 w-8 rounded-full object-cover outline outline-1 outline-offset-[-1px] outline-[#00000066]"
//             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
//           ></img> */}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default GlobalNav;
