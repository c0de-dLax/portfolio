import React from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";

const ContactSectionNav: React.FC = () => {
  return (
    <section>
      <div className="flex sm:flex-col sm:gap-y-8 mx-auto mt-[34px] max-w-[1100px] justify-center mb-6 text-black dark:text-white font-[500] dark:font-[400]">
        <div className="sm:w-[256px] text-start text-[20px] mx-auto leading-[56px] tracking-[1px]">
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
        <div className="mr-[calc(40px+0.5vw)] ml-auto sm:w-[256px] sm:mx-auto text-start text-[20px]  leading-[56px] tracking-[1px]">
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
            <li>
              <a
                href="mailto:ojtc.ops@gmail.com"
                className="notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400"
              >
                <EnvelopeIcon className="inline-block w-[28px] mr-[10px]" />
                ojtc.ops@gmail.com
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <MapPinIcon className="inline-block w-[28px] mr-[10px]" />
                Philippines
              </div>
            </li>
          </menu>
        </div>
        <div className="sm:w-[256px] text-start text-[20px] mx-auto leading-[56px] tracking-[1px]">
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
                  <FaSquareXTwitter className="mr-[8px] w-[28px] h-[28px]" />
                  X
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
