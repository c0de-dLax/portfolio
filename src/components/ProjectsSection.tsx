import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { keyframes } from "@emotion/react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Reveal from "react-awesome-reveal";

const ProjectsSection: React.FC = () => {
  const [loadMorePopup, setLoadMorePopup] = useState(false);

  const openPopupOnBtnHover = () => {
    setLoadMorePopup(true);
  };

  const closePopupOnBtnHover = () => {
    setLoadMorePopup(false);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const slideFromLeftAnimation = keyframes`
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0%, 0, 0);
    }
  `;

  const slideFromRightAnimation = keyframes`
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
     transform: translate3d(0%, 0, 0);
    }
  `;

  return (
    <section
      id="projects"
      className="mt-4 mb-[120px] notOnMobile:scroll-my-[100px] mobile:scroll-my-[80px]"
    >
      <div className="mx-auto text-[calc(32px+1vw)] px-5 py-10 max-w-[calc(200px+10vw)] dark:text-white">
        <div className="flex relative justify-center">
          <h1 className="absolute z-0">
            <CodeBracketIcon className="my-[-4em] mx-auto inline-block w-[5.5em] text-blue-500 opacity-[70%] dark:opacity-[10%]" />
          </h1>
          <h1 className="z-[1] font-bold tracking-[.1em] [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]">
            Projects
          </h1>
        </div>
      </div>
      <h2 className="mx-auto px-10 text-gray-700 dark:text-gray-400 max-w-lg text-center mt-8">
        What's the best way to showcase my learning but to start doing projects!
      </h2>
      <div id="projectlist" className="mt-16 mb-28">
        <Reveal keyframes={slideFromLeftAnimation} duration={600} triggerOnce>
          <div id="basicCalcuContainer" className="basicCalcuContainer">
            <div className="basicCalcuPicContainer">
              <img
                className="w-full object-cover"
                alt="Basic Calculator Web App Preview Image"
                src="portfolio/images/basicCalcuMockUpReady.webp"
                decoding="async"
                loading="lazy"
                width="1620"
                height="1080"
              />
            </div>
            <div className="basicCalcuTextBox">
              <h1 className="text-2xl font-[700] tracking-[2px]">
                Classic Calculator
              </h1>
              <h2 className="my-4 text-base tracking-[0.5px]">
                Designed with essential functions including addition,
                subtraction, multiplication, division, and percentage
                calculations. Built with user convenience in mind, it's a go-to
                solution for quick and accurate computations.
              </h2>
              <a
                className="inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white"
                href="https://c0de-dlax.github.io/basiccalculatorapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
              <a
                className="inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white"
                href="https://github.com/c0de-dLax/basiccalculatorapp.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={slideFromRightAnimation} duration={600} triggerOnce>
          <div className="taxCalcuContainer">
            <div className="taxCalcuPicContainer">
              <img
                className="w-full object-cover"
                alt="Tax Calculator Web App Preview Image"
                src="portfolio/images/taxCalcuMockUpReady.webp"
                decoding="async"
                loading="lazy"
                width="1620"
                height="1080"
              />
            </div>
            <div className="taxCalcuTextBox">
              <h1 className="text-2xl font-[700] tracking-[2px]">
                Tax Calculator for PH Employees
              </h1>
              <h2 className="my-4 text-base tracking-[0.5px]">
                Built to streamline tax deductions and contributions for
                Filipino employees! Leveraged Material UI to create the
                user-friendly interface for this web app.
              </h2>
              <a
                className="inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white"
                href="https://c0de-dlax.github.io/taxcalculatorapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
              <a
                className="inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white"
                href="https://github.com/c0de-dLax/taxcalculatorapp.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={slideFromLeftAnimation} duration={600} triggerOnce>
          <div className="todoAppContainer">
            <div className="todoAppPicContainer">
              <img
                className="w-full object-cover"
                alt="Basic Calculator Web App Preview Image"
                src="portfolio/images/comingsoon.webp"
                decoding="async"
                loading="lazy"
                width="1620"
                height="1080"
              />
            </div>
            <div className="todoAppTextBox">
              <h1 className="text-2xl font-semibold tracking-[1px]">
                To-Do Productivity App
              </h1>
              <h2 className="my-4 text-base tracking-[0.5px]">
                A tool that will help you keep track and plan your daily routine
                to seize the day!
              </h2>
              <Link
                className="inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white"
                to="/portfolio/todoproductivityapp"
              >
                Live Soon!
              </Link>
              <a
                className="inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white"
                href="https://github.com/c0de-dLax"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="flex justify-center w-full">
        <button
          aria-label="Load more projects"
          onMouseEnter={openPopupOnBtnHover}
          onMouseLeave={closePopupOnBtnHover}
          onTouchStart={() => {
            openPopupOnBtnHover();
            setTimeout(() => {
              setLoadMorePopup(false);
            }, 1000);
          }}
          disabled={loadMorePopup}
          className="text-blue-700 text-lg font-[500] shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19);] dark:shadow-none border-2 border-blue-700  dark:text-blue-500 dark:border-blue-500 py-2 px-8 focus:outline-none rounded tracking-[1px] transition-colors duration-300 ease-in-out notOnMobile:hover:bg-blue-600 notOnMobile:hover:border-blue-600 notOnMobile:hover:text-white"
        >
          Load More
        </button>
      </div>
      <div
        id="comingSoonPopup"
        className="flex justify-center w-full h-[30px] mt-3 dark:text-white"
      >
        <h1
          className={`tracking-[1px] notOnmobile:text-md mobile:tracking-[0.5px] mobile:text-sm ${
            loadMorePopup ? "block" : "hidden"
          }`}
        >
          Exploring new project ideas — coming soon!
        </h1>
      </div>
      <div className="border-[1px] w-full max-w-[1060px] h-0 mt-[90px] border-slate-300 dark:border-slate-900 mx-auto"/>
    </section>
  );
};

export default ProjectsSection;