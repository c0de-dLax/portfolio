import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLocation } from "react-router-dom";

const HomeSection: React.FC = () => {
  const [celebrateAnimated, setCelebrateAnimated] = useState(false);

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

  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full max-w-[1050px] notOnMobile:pt-[22px] mobile:mt-[0px] text-start scroll-my-[90px] mx-auto"
    >
      <div className="w-[calc(100vw-10px)] text-black dark:text-white px-[16px] text-[calc(30px+1vw)] pb-6 font-bold">
        <Fade cascade direction="up" damping={0.2} duration={500} triggerOnce>
          <h2 className="pt-[16px]">
            Mabuhay!{" "}
            <span
              onMouseEnter={() => setCelebrateAnimated(() => true)}
              onAnimationEnd={() => setCelebrateAnimated(() => false)}
              onClick={() => setCelebrateAnimated(() => true)}
              className={`handsUp prevent-select ${
                celebrateAnimated ? "handsUpCelebrate" : ""
              }`}
            >
              🙌
            </span>
          </h2>
          <h2 className="pb-[20px] text-[calc(24px+1vw)] font-[600]">
            and Hello,{" "}
          </h2>
          <h1 className="text-[calc(60px+1vw)] tracking-[0.5vw]">
            I'm
            <span className="text-blue-700 dark:text-blue-400"> Ody James</span>
            ! <span className="wave prevent-select">👋</span>
          </h1>
          <p className="max-w-[850px] dark:max-w-[840px] pt-[20px] font-[400] dark:font-[200]">
            An aspiring Front-End Developer from the Philippines, focusing on
            web apps and responsive design. Learn more&nbsp;
            <Link
              to="/#about"
              className="textHighlight bg-gradient-to-r from-[rgb(209,213,219)_50%] to-[rgb(255,255,255)_50%] dark:bg-gradient-to-r dark:from-[rgb(23,32,52)_50%] dark:to-[rgb(2,8,23)_50%]"
            >
              <span className="font-[700] dark:font-[500]">about me</span>
            </Link>{" "}
            or my{" "}
            <Link
              to="/#projects"
              className="textHighlight bg-gradient-to-r from-[rgb(209,213,219)_50%] to-[rgb(255,255,255)_50%] dark:bg-gradient-to-r dark:from-[rgb(23,32,52)_50%] dark:to-[rgb(2,8,23)_50%]"
            >
              <span className="font-[700] dark:font-[500]">projects</span>
            </Link>
            .
          </p>
        </Fade>
      </div>
      <div className="block border-[1px] w-full h-0 border-slate-300 my-[100px] dark:border-slate-900" />
    </section>
  );
};

export default HomeSection;
