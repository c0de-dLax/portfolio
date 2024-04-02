import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const ContactSectionNav: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClickToCopy = () => {
    navigator.clipboard.writeText("ojtc.ops@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 800);
  };

  return (
    <section>
      <div className="flex sm:flex-col sm:gap-y-8 mx-auto mt-[34px] max-w-[1100px] justify-center mb-6 text-black dark:text-white font-[500] dark:font-[400]">
        <div className="sm:w-[270px] text-start text-[20px] mx-auto leading-[56px] tracking-[1px]">
          <span className="text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-6">
            Links
          </span>
          <menu>
            <li>
              <Link
                to="/portfolio/"
                className="transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/#about"
                aria-label="Return to about section"
                className="transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/#projects"
                aria-label="Return to projects section"
                className="transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
              >
                Projects
              </Link>
            </li>
          </menu>
        </div>
        <div className="mr-[calc(40px+0.5vw)] ml-auto sm:w-[270px] sm:mx-auto text-start text-[20px] leading-[56px] tracking-[1px]">
          <span className="text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-8">
            Contact
          </span>
          <menu>
            <li>
              <a
                href="https://github.com/c0de-dLax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
                  <FaGithub className="mr-[8px] w-[28px] h-[28px]" />
                  Github
                </div>
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="mailto:ojtc.ops@gmail.com"
                className={`${
                  isCopied
                    ? "cursor-default pointer-events-none"
                    : "cursor-pointer"
                }`}
              >
                <div className="w-[250px] notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
                  <EnvelopeIcon className="inline-block w-[28px] mr-[10px]" />
                  <span className={`${isCopied ? "text-green-500" : ""}`}>
                    {isCopied ? "Email Copied" : "ojtc.ops@gmail.com"}
                  </span>
                </div>
              </a>
              {isCopied ? (
                <LuCopyCheck className="inline-block text-green-500" />
              ) : (
                <LuCopy
                  onClick={handleClickToCopy}
                  onTouchStart={handleClickToCopy}
                  className="inline-block cursor-pointer"
                />
              )}
            </li>
            <li>
              <a
                href="https://www.google.com.ph/maps/place/Philippines/@11.8914137,119.3038832,6z/data=!4m6!3m5!1s0x324053215f87de63:0x784790ef7a29da57!8m2!3d12.879721!4d121.774017!16zL20vMDV2OGM?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
              >
                <div className="flex items-center">
                  <MapPinIcon className="inline-block w-[28px] mr-[10px]" />
                  Philippines
                </div>
              </a>
            </li>
          </menu>
        </div>
        <div className="sm:w-[270px] text-start text-[20px] mx-auto leading-[56px] tracking-[1px]">
          <span className="text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-6">
            Socials
          </span>
          <menu>
            <li>
              <a
                href="https://www.linkedin.com/in/ojtcatanaoan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
                  <FaLinkedin className="mr-[8px] w-[28px] h-[28px]" />
                  LinkedIn
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ojtcatanaoan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
                  <FaSquareFacebook className="mr-[8px] w-[28px] h-[28px]" />
                  Facebook
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/OCatanaoan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
                  <FaSquareXTwitter className="mr-[8px] w-[28px] h-[28px]" />X
                </div>
              </a>
            </li>
          </menu>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionNav;
