import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaSun, FaMoon } from "react-icons/fa";
import {
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const initialTheme = localStorage.getItem("themeForPortfolio") || "dark";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 580) {
        setSidePanelOpen(false);
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const selectThemeHandler = (newTheme: string) => {
    if (newTheme === "dark" || newTheme === "light") {
      setTheme(newTheme);
      localStorage.setItem("themeForPortfolio", newTheme);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const openNav = () => {
    setSidePanelOpen(true);
  };

  const closeNav = () => {
    setSidePanelOpen(false);
  };

  return (
    <header className="sticky z-10 top-0 flex justify-center w-full h-[70px] border-b-2 overflow-hidden shadow-md bg-white border-gray-300 dark:border-[rgb(17,24,39)] dark:bg-[rgb(2,8,23)]">
      <div className="w-[1060px] flex items-center gap-[calc(20px+0.5vw)] text-[14px] text-black dark:text-white font-semibold px-[16px] focus:outline-none">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="first:mr-auto flex items-center pt-[5px] pb-[7px] notOnMobile:hover:text-blue-800 dark:notOnMobile:hover:text-blue-400 dark:active:text-blue-400 transition duration-300 ease-in-out"
        >
          <div className="w-[36px] mr-[6px]">
            <img
              alt="Portfolio Logo"
              src="/portfolio/images/myLogo1.webp"
              decoding="async"
              width="1000"
              height="1000"
            />
          </div>
          Ody James Catanaoan
        </Link>
        <Link
          to="/#about"
          aria-label="Jump to about section"
          className="navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out"
        >
          About Me
        </Link>
        <Link
          to="/#projects"
          aria-label="Jump to projects section"
          className="navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out"
        >
          Projects
        </Link>
        <Link
          to="/#contact"
          aria-label="Jump to contact section"
          className="navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out"
        >
          Contact
        </Link>
        {theme === "dark" ? (
          <FaSun
            title="Click to switch to Light theme"
            aria-label="Click to switch to Light theme"
            onClick={() => selectThemeHandler("light")}
            className="navLink flex items-center justify-center px-[7px] w-[34px] h-[34px] rounded-[8px] notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out cursor-pointer"
          />
        ) : (
          <FaMoon
            title="Click to switch to Dark theme"
            aria-label="Click to switch to Dark theme"
            onClick={() => selectThemeHandler("dark")}
            className="navLink flex items-center justify-center px-[8px] w-[34px] h-[34px] rounded-[8px] notOnMobile:hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
          />
        )}
        {/* --------------- Burger Menu --------------- */}
        <button
          aria-label="Navigation Menu"
          className="burgerButton"
          onClick={openNav}
        >
          <Bars3Icon className="burgerIcon" />
        </button>
        <div className={`overlay ${sidePanelOpen ? "open" : ""}`}></div>
        <menu
          className={`bg-white font dark:bg-[rgb(2,8,23)] sidePanel ${
            sidePanelOpen ? "open" : ""
          }`}
        >
          <li className="flex pb-[16px] justify-between items-center border-b-2 border-[rgb(17,24,39)]">
            <span className="ml-[16px] text-[20px] font-[400] tracking-[1px]">
              OJ Catanaoan
            </span>
            <button
              aria-label="Close Navigation Menu"
              className="w-[40px] py-[2px] px-[4px] border-2 border-[rgb(17,24,39)] rounded-md mr-[20px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)]"
              onClick={closeNav}
            >
              <XMarkIcon />
            </button>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                closeNav();
              }}
              className="flex items-center w-full h-[60px] mr-0 ml-0 mt-[20px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]"
            >
              <HomeIcon className="w-[26px] mr-[40px] ml-[16px]" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={() => {
                closeNav();
              }}
              className="flex items-center w-full h-[60px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]"
            >
              <UserIcon className="w-[26px] mr-[40px] ml-[16px]" />
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/#projects"
              onClick={() => {
                closeNav();
              }}
              className="flex items-center w-full h-[60px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]"
            >
              <CodeBracketSquareIcon className="w-[26px] mr-[40px] ml-[16px]" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contactform"
              onClick={() => {
                closeNav();
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="flex items-center w-full h-[60px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]"
            >
              <ChatBubbleLeftRightIcon className="w-[26px] mr-[40px] ml-[16px]" />
              Contact
            </Link>
          </li>
          <li>
            {theme === "dark" ? (
              <div
                onClick={() => {
                  selectThemeHandler("light");
                  closeNav();
                }}
                className="flex items-center w-full h-[60px] notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px] cursor-pointer"
              >
                <FaSun className="w-[26px] h-auto mr-[40px] ml-[16px]" />
                Theme
              </div>
            ) : (
              <div
                onClick={() => {
                  selectThemeHandler("dark");
                  closeNav();
                }}
                className="flex items-center w-full h-[60px] notOnMobile:hover:bg-gray-200 text-[18px] tracking-[1px] cursor-pointer"
              >
                <FaMoon className="w-[26px] h-[22px] mr-[40px] ml-[16px]" />
                Theme
              </div>
            )}
          </li>
        </menu>
      </div>
    </header>
  );
};

export default Navbar;
