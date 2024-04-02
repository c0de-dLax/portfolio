import { useState } from "react";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function ContactPageNav() {
  const [isEmailClicked, setIsEmailClicked] = useState(false);

  const clickToCopyEmail = () => {
    navigator.clipboard.writeText("ojtc.ops@gmail.com");
    setIsEmailClicked(true);
    setTimeout(() => {
      setIsEmailClicked(false);
    }, 800);
  };

  return (
    <section>
      <div className="flex flex-col gap-y-20 tracking-[1px] text-start w-full max-w-[700px] mx-auto text-4xl text-black dark:text-white px-2 mt-[calc(100px+2vh)]">
        <div className="flex justify-between xs:flex-col xs:justify-center xs:items-center">
          <div className="text-blue-700 dark:text-blue-500 font-[700] xs:mb-5">
            <a href="mailto:ojtc.ops@gmail.com">Get in touch</a>
          </div>
          <div className="flex flex-col text-3xl xs:text-center xs:justify-center">
            <span className="opacity-[0.6] text-[26px]">Email Address</span>
            <div className="flex flex-col items-star xs:items-center w-[300px]">
              <div className="mt-1 font-[500] mx-auto">ojtc.ops@gmail.com</div>
              <button
                aria-label="Click to copy email address to clipboard"
                onClick={clickToCopyEmail}
                className="flex items-center justify-start xs:justify-center mt-4 text-xl"
                disabled={isEmailClicked}
              >
                {isEmailClicked ? (
                  <div className="flex text-green-600 dark:text-green-500">
                    <LuCopyCheck className="mr-2" />
                    Email copied to clipboard
                  </div>
                ) : (
                  <div className="flex text-blue-700 dark:text-blue-500 ">
                    <LuCopy className="mr-2" />
                    Click here to copy email
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between xs:flex-col xs:justify-center xs:items-center">
          <div className="text-blue-700 dark:text-blue-500 font-[700] xs:mb-5">
            <a
              href="https://www.google.com.ph/maps/place/Philippines/@11.8914137,119.3038832,6z/data=!4m6!3m5!1s0x324053215f87de63:0x784790ef7a29da57!8m2!3d12.879721!4d121.774017!16zL20vMDV2OGM?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </a>
          </div>
          <div className="flex-col text-3xl xs:text-center w-[300px]">
            <span className="block opacity-[0.6] text-[26px]">
              Current living in
            </span>
            <span className="block mt-1 font-[500]">Philippines</span>
          </div>
        </div>
      </div>
      <menu className="flex w-full max-w-[660px] justify-center items-center text-start text-sm leading-[36px] mt-32 mb-24 mx-auto tracking-[1px] text-black font-[500] dark:text-white dark:font-[400]">
        <li className="mx-auto">
          <a
            href="https://github.com/c0de-dLax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
              <FaSquareGithub className="w-[32px] h-[32px]" />
              <span className="opacity-[0.6]">Github</span>
            </div>
          </a>
        </li>
        <li className="mx-auto">
          <a
            href="https://www.linkedin.com/in/ojtcatanaoan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
              <FaLinkedin className="w-[32px] h-[32px]" />
              <span className="opacity-[0.6]">LinkedIn</span>
            </div>
          </a>
        </li>
        <li className="mx-auto">
          <a
            href="https://www.facebook.com/ojtcatanaoan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
              <FaSquareFacebook className="w-[32px] h-[32px]" />
              <span className="opacity-[0.6]">Facebook</span>
            </div>
          </a>
        </li>
        <li className="mx-auto">
          <a
            href="https://twitter.com/OCatanaoan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400">
              <FaSquareXTwitter className="w-[32px] h-[32px]" />
              <span className="opacity-[0.6]">X</span>
            </div>
          </a>
        </li>
      </menu>
    </section>
  );
}
