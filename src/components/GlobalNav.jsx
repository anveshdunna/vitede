import Icon from "../assets/Icon";
import Logo from "../assets/Logo";
import { NavLink, Link } from "react-router-dom";
import { globalNavLinks, globalNavUtils } from "../data/globalNavData.js";
import { useState } from "react";
import { useNav } from "../contexts/NavContext";

function ProductNavItem({ item }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex flex-col items-stretch gap-1 rounded-xl py-2 px-2 text-body2 font-medium no-underline ${
          isActive
            ? `bg-orange-50 text-orange-500`
            : `text-gray-700 hover:bg-gray-50`
        }`
      }
    >
      {item.title}
    </NavLink>
  );
}

function GlobalNavItem({ item, setIndex }) {
  return (
    <NavLink
      to={item.path}
      onClick={() => {
        setIndex && setIndex(item.id);
      }}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-2 no-underline ${
          isActive
            ? `bg-orange-50 text-orange-500`
            : `text-gray-700 hover:bg-gray-80`
        }`
      }
    >
      <Icon name={item.icon} color="currentColor" />
      {item.title && (
        <label className="cursor-pointer text-caption2">{item.title}</label>
      )}
    </NavLink>
  );
}

function GlobalNav() {
  const [index, setIndex] = useState(0);
  const { pnavOpen } = useNav();

  return (
    <nav className="flex w-16 flex-col justify-between py-2 px-1">
      <div className="flex flex-col items-stretch">
        <Link
          to="/"
          className="hidden h-12 flex-col items-center justify-center rounded-xl hover:bg-gray-80 md:flex"
          onClick={() => {
            setIndex(0);
          }}
        >
          <Logo />
        </Link>
        <div className="mt-10 flex flex-col gap-2 md:mt-2">
          {globalNavLinks.map((item) => {
            return (
              <GlobalNavItem item={item} setIndex={setIndex} key={item.key} />
            );
          })}
        </div>
      </div>

      {globalNavLinks.map((item) => {
        return (
          <>
            {pnavOpen && (
              <div
                hidden={index !== item.id}
                className={
                  item.id === 0
                    ? ``
                    : `absolute left-16 top-0 ${
                        index !== item.id ? `` : `flex flex-col gap-1`
                      } h-screen w-[216px] border-l border-r border-solid border-l-gray-100 border-r-gray-200 bg-white p-4`
                }
                key={item.key}
              >
                {item.subnav &&
                  item.subnav.map((item) => {
                    return <ProductNavItem item={item} key={item.key} />;
                  })}
              </div>
            )}
          </>
        );
      })}

      <div className="flex flex-col items-center gap-2">
        {globalNavUtils.map((item) => {
          return (
            <GlobalNavItem item={item} setIndex={setIndex} key={item.key} />
          );
        })}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 p-1"
        >
          {/* <img
            alt=""
            className="h-8 w-8 rounded-full object-cover outline outline-1 outline-offset-[-1px] outline-[#00000066]"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
          ></img> */}
        </button>
      </div>
    </nav>
  );
}

export default GlobalNav;
