import { Link } from "react-router-dom";

import { FaAnglesUp } from "react-icons/fa6";

export default function ContactPageFooter() {
  return (
    <section>
      <div className="relative w-full h-full bg-gray-300 dark:bg-[rgb(17,24,39)]">
        <div className="absolute flex justify-center items-center p-2 bg-blue-600 rounded-full left-1/2 ml-[-12px] text-white w-[36px] h-[36px] mt-[-20px] cursor-pointer customBounce">
          <FaAnglesUp
            aria-label="Return to top"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="w-full h-auto"
          />
        </div>
        <menu className="flex justify-center items-center w-full max-w-[360px] mx-auto text-xl text-black dark:text-white pt-[40px]">
          <li className="mx-auto">
            <Link
              to="/"
              className="transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <div className="w-0 h-8 border-[1px] border-slate-700" />
          <li className="mx-auto">
            <Link
              to="/#about"
              aria-label="Return to about section"
              className="transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
            >
              About Me
            </Link>
          </li>
          <div className="w-0 h-8 border-[1px] border-slate-700" />
          <li className="mx-auto">
            <Link
              to="/#projects"
              aria-label="Return to projects section"
              className="transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
        </menu>
        <div
          id="copyright"
          className="flex xs:flex-col justify-center items-center w-full text-black font-[500] dark:text-white dark:font-[400] pt-[20px] pb-4 mx-auto text-[14px] tracking-[0.5px]"
        >
          <span>© 2024 designed and created by&nbsp;</span>
          <span>Ody James Catanaoan</span>
        </div>
      </div>
    </section>
  );
}
