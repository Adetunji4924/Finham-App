import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/sidebardata.jsx";
import classNames from "classnames";

const linkClass =
  "flex items-center gap-4 font-medium px-3 py-2 hover:text-secondary-0 hover:no-underline active:text-secondary-0 rounded-sm text-[1.1rem] font-Inter text-gray-400 transition delay-150 ease-in-out";
const SideBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-8 px-4 bg-white">
      {/* toggle button */}
      <div className="bar md:hidden">
        {isMenuOpen ? (
          <svg
            onClick={toggleMenu}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8L8 14M8 8L14 14M6.86 1H15.14L21 6.86V15.14L15.14 21H6.86L1 15.14V6.86L6.86 1Z"
              stroke="#101828"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            onClick={toggleMenu}
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H19M1 1H19M1 13H19"
              stroke="#101828"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div>
        <Link to="/" relative="path">
          <img
            className="hidden md:block"
            src="/MASTERLOGO (Black)-1 1.png"
            alt="Finham-logo"
          />
        </Link>
      </div>
      <div
        className={`mt-8 flex flex-col gap-8 absolute md:relative bg-white w-full md:w-auto transition-all duration-1000 ease-in-out z-20 ${
          isMenuOpen
            ? "translate-x-0 flex h-lvh top-8 pt-4"
            : "-translate-x-full md:translate-x-0 h-lvh top-8 md:flex"
        }`}
      >
        {/* for dashboard */}
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? "text-secondary-0" : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-[2rem]">{link.icon}</span>
      {link.label}
    </Link>
  );
}
