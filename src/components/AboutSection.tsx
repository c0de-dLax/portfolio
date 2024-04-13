import { IdentificationIcon } from "@heroicons/react/20/solid";
import { Fade, Zoom } from "react-awesome-reveal";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-36 scroll-mt-[100px] mobile:scroll-mt-[80px] max-w-[1060px] mx-auto text-black dark:text-white"
    >
      <div className="notOnMobile:mt-[30px] mobile:mt-4 text-[calc(26px+1vw)] px-5 pt-8 notOnMobile:pb-12 mobile:pb-6">
        <div className="flex relative justify-center mx-auto text-[1em] max-w-[calc(280px+10vw)]">
          <div className="absolute z-[0]">
            <IdentificationIcon className="my-[-4em] inline-block w-[6em] text-blue-500 opacity-[70%] dark:opacity-[10%]" />
          </div>
          <div className="tracking-[.1em] font-[600] z-[1] [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]">
            A bit about me...
          </div>
        </div>
      </div>
      <div className="about flex justify-center gap-10 text-center mx-auto">
        <div className="mt-[80px] px-10">
          <div className="flex justify-center">
            <Zoom duration={500} triggerOnce>
              <img
                alt="OJ Catanaoan Image"
                className="rounded-full shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19);] dark:shadow-none"
                src="/portfolio/icons/mypic.webp"
                decoding="async"
                loading="lazy"
                width="190"
                height="190"
              />
            </Zoom>
          </div>
          <Fade delay={300} duration={500} direction="up" triggerOnce>
            <div className="text-left max-w-lg mx-auto">
              <p className="mt-10 mb-10 leading-relaxed text-lg font-[400] dark:font-[100]">
                As a self-taught front-end developer, my game plan for now is to
                explore and learn current and emerging technologies, while
                bringing my problem-solving skills honed from my previous field,
                to develop top-notch web app experiences.
              </p>
            </div>
          </Fade>
        </div>
        <div id="technologies" className="mt-[30px] px-10">
          <div className="px-5 py-10 max-w-3xl mx-auto text-center">
            <Fade duration={500} triggerOnce>
              <h1 className="text-4xl font-medium title-font mb-4">
                Technologies
              </h1>
              <h2 className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mt-6">
                Technologies I'm starting with as I explore the world of
                programming.
              </h2>
            </Fade>
            <div className="overflow:hidden mx-auto flex space-x-[calc(26px+4vw)] justify-center mt-12 font-semibold drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]">
              <Fade
                cascade
                delay={500}
                damping={0.3}
                duration={500}
                direction="up"
                triggerOnce
              >
                <div className="w-[60px] h-[60px]">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mb-3 w-full"
                      alt="HTML Logo"
                      src="/portfolio/icons/htmlicon.webp"
                      decoding="async"
                      loading="lazy"
                      width="283"
                      height="319"
                    />
                    HTML
                  </a>
                </div>
                <div className="w-[60px] h-[60px]">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="CSS Logo"
                      className="mb-3"
                      src="/portfolio/icons/cssicon.webp"
                      decoding="async"
                      loading="lazy"
                      width="281"
                      height="317"
                    />
                    CSS
                  </a>
                </div>
                <div className="w-[60px] h-[60px] flex mt-1">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Javascript Logo"
                      className="mb-3 w-[90%] ml-auto mr-auto"
                      src="/portfolio/icons/jsicon.webp"
                      decoding="async"
                      loading="lazy"
                      width="500"
                      height="500"
                    />
                    Javascript
                  </a>
                </div>
              </Fade>
            </div>
            <div className="mx-auto flex overflow:hidden space-x-[calc(26px+4vw)] justify-center mt-20 font-semibold mr-2 drop-shadow-[4px_3px_2px_rgba(0,0,0,0.3)]">
              <Fade
                cascade
                delay={500}
                damping={0.3}
                duration={500}
                direction="down"
                triggerOnce
              >
                <div className="w-[70px] h-[70px]">
                  <a
                    href="https://react.dev/learn/describing-the-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="React js Logo"
                      className="mb-2"
                      src="/portfolio/icons/reactlogo.webp"
                      decoding="async"
                      loading="lazy"
                      width="500"
                      height="500"
                    />
                    React js
                  </a>
                </div>
                <div className="w-[60px] h-[60px]">
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Tailwind CSS Logo"
                      className="mb-[22px] mt-[20px]"
                      src="/portfolio/icons/tailwind.webp"
                      decoding="async"
                      loading="lazy"
                      width="287"
                      height="175"
                    />
                    Tailwind CSS
                  </a>
                </div>
                <div className="w-[55px] h-[55px]">
                  <a
                    href="https://nodejs.org/en/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Nodejs Logo"
                      className="mb-[8px] ml-[6px] mt-1"
                      src="/portfolio/icons/nodejslogo.webp"
                      decoding="async"
                      loading="lazy"
                      width="500"
                      height="563"
                    />
                    <span className="ml-[8px]">Nodejs</span>
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
