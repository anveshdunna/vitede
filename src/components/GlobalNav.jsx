import Icon from "../assets/Icon";
import Logo from "../assets/Logo";
import { NavLink, Link, useLocation } from "react-router-dom";
import { globalNavLinks, globalNavUtils } from "../data/globalNavData.js";
import { useState } from "react";
import { useNav } from "../contexts/NavContext";
import React from "react";

function ProductNavItem({ item }) {
  const { changeNavOpen, screenWidth } = useNav();
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `rounded-lg py-2 px-2 text-body2 font-medium no-underline transition duration-100 ${
          isActive
            ? `bg-orange-50 text-gray-900`
            : `text-gray-700 hover:bg-gray-80 active:bg-gray-100	`
        }`
      }
      onClick={screenWidth <= 1200 && changeNavOpen}
    >
      {item.title}
    </NavLink>
  );
}

function GlobalNavItem({ item, setIndex }) {
  const location = useLocation().pathname.split("/")[1];
  const isActive = location === item.path.split("/")[1];
  const { changeNavOpen, screenWidth } = useNav();
  const iconGrey = "#6b7280";

  return (
    <NavLink
      to={item.path}
      onClick={() => {
        setIndex && setIndex(item.id);
        screenWidth <= 1200 && changeNavOpen();
      }}
      className={`flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 px-2 text-caption2 font-medium no-underline transition duration-100 ${
        isActive
          ? `bg-orange-50 text-gray-900`
          : `text-gray-700 hover:bg-gray-80 active:bg-gray-100`
      }`}
    >
      <Icon
        name={isActive ? item.iconActive : item.icon}
        color={isActive ? "currentColor" : "#6b7280"}
      />
      {item.title && item.title}
    </NavLink>
  );
}

function GlobalNav() {
  const location = useLocation().pathname.split("/")[1];
  let initialIndex;
  const { navOpen, changeNavOpen, screenWidth } = useNav();

  const { pnavOpen } = useNav();
  const navOpenCondition = `(navOpen || screenWidth > 1200) &&`;

  switch (location) {
    case "":
      initialIndex = 0;
      break;
    case "travel":
      initialIndex = 1;
      break;
    case "expense":
      initialIndex = 2;
      break;
    default:
      initialIndex = 0;
  }

  const [index, setIndex] = useState(initialIndex);

  return (
    <>
      {
        <div className="fixed top-0 z-50 h-full flex-none overflow-y-auto">
          {(navOpen || screenWidth > 1200) && (
            <div
              className="fixed h-screen w-full md:hidden"
              onClick={changeNavOpen}
            ></div>
          )}
          <div
            className={`fixed ${
              navOpen ? `left-0 shadow-leftpanel` : `-left-[280px]`
            } flex h-screen flex-row border-r border-solid border-gray-200 bg-white transition-[left] md:sticky md:left-0 md:top-0 md:shadow-none`}
          >
            <nav className="flex w-16 flex-col justify-between py-2 px-1">
              <div className="flex flex-col items-stretch">
                <Link
                  to="/"
                  className="hidden h-12 flex-col items-center justify-center rounded-xl hover:bg-gray-80 active:bg-gray-100 md:flex"
                  onClick={() => {
                    setIndex(0);
                  }}
                >
                  <Logo />
                </Link>
                <div className="mt-10 flex flex-col gap-2 md:mt-2">
                  {globalNavLinks.map((item) => {
                    return (
                      <GlobalNavItem
                        item={item}
                        setIndex={setIndex}
                        key={item.key}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                {globalNavUtils.map((item) => {
                  return (
                    <GlobalNavItem
                      item={item}
                      setIndex={setIndex}
                      key={item.key}
                    />
                  );
                })}
                <button
                  type="button"
                  className="flex items-center justify-center rounded-xl p-1 transition hover:bg-gray-80 active:bg-gray-100"
                >
                  <img
                    alt=""
                    className="h-8 w-8 rounded-full object-cover outline outline-1 outline-offset-[-1px] outline-gray-900/40"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
                  ></img>
                </button>
              </div>
            </nav>

            {globalNavLinks.map((item) => {
              return (
                <React.Fragment key={item.key}>
                  {pnavOpen && (
                    <div
                      hidden={index !== item.id}
                      className={
                        item.id === 0
                          ? ``
                          : ` ${
                              index !== item.id ? `` : `flex flex-col gap-1`
                            } h-screen w-[216px] border-l border-solid border-l-gray-100 bg-white p-2`
                      }
                      key={item.key}
                    >
                      {item.subnav &&
                        item.subnav.map((item) => {
                          return <ProductNavItem item={item} key={item.key} />;
                        })}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      }
    </>
  );
}

export default GlobalNav;
