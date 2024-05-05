import { Link } from "react-router-dom";
import ContactLinksSection from "./ContactSectionNav";

import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { FaAnglesUp } from "react-icons/fa6";

const ContactSection = () => {
  const revealFromLeftBannerAnimation = keyframes`
    from {
      transform: scaleX(0);
      transform-origin: center left 0px;
    }
    to { 
      transform: scaleX(1);
      transform-origin: center left 0px;
    }
  `;

  const fadeInAnimation = keyframes`
    from {
      transform: translateZ(0);
      opacity: 0;
    }
    to {
      transform: translateZ(0);
      opacity: 1;
    }
  `;

  return (
    <section id="contact" className="scroll-my-[70px]">
      <div className="text-black dark:text-white py-6 font-[500] dark:font-[400]">
        <div className="flex relative justify-center mx-auto text-[calc(30px+1vw)] py-10 max-w-[calc(260px+10vw)]">
          <div className="absolute z-0 left-1/2 ml-[-2.55em]">
            <ChatBubbleLeftRightIcon className="my-[-3em] inline-block w-[5em] text-blue-500 opacity-[70%] dark:opacity-[10%]" />
          </div>
          <div className="z-[3] font-bold title-font tracking-widest [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]">
            Get in touch!
          </div>
        </div>
        <Reveal
          keyframes={revealFromLeftBannerAnimation}
          duration={400}
          triggerOnce
        >
          <div className="w-full mt-12 text-white bg-blue-600 text-center tracking-[2px] px-4 pt-8 pb-10">
            <Reveal
              keyframes={fadeInAnimation}
              duration={500}
              delay={400}
              triggerOnce
            >
              <h1 className="text-[calc(24px+1vw)] font-[600]">
                Let's Connect!
              </h1>
              <h2 className="text-[calc(14px+1vw)] font-[400]">
                Get in touch by sending me a message!
              </h2>
              <h2 className="mt-6">
                <Link
                  to="/contactform"
                  aria-label="Access contact form to send message"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }, 20);
                  }}
                  className="border-2 rounded-md px-8 pt-[6px] pb-[8px] text-[calc(10px+1vw)] font-[500] tracking-[3px] transition duration-300 ease-in-out hover:text-blue-500 notOnMobile:hover:bg-white"
                >
                  CONTACT
                </Link>
              </h2>
            </Reveal>
          </div>
        </Reveal>
        <ContactLinksSection />
      </div>
      <div className="relative w-[100%] bg-gray-300 dark:bg-[rgb(17,24,39)]">
        <button
          aria-label="Return to top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="absolute flex justify-center items-center p-2 bg-blue-600 rounded-full left-1/2 ml-[-12px] text-white w-[36px] h-[36px] mt-[-20px] cursor-pointer customBounce"
        >
          <FaAnglesUp className="w-full h-auto" />
        </button>
        <div
          id="copyright"
          className="flex xs:flex-col justify-center items-center w-full text-black font-[500] dark:text-white dark:font-[400] pt-8 pb-4 mx-auto text-[14px] tracking-[0.5px]"
        >
          <span>© 2024 designed and created by&nbsp;</span>
          <span>Ody James Catanaoan</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
