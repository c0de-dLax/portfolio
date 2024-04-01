import { useState } from "react";
import Navbar from "../components/Navbar";
import ContactPageNav from "../components/ContactPageNav";

import { Fade } from "react-awesome-reveal";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
} from "react-icons/fa6";
import ContactPageFooter from "../components/ContactPageFooter";

export default function ContactPage() {
  const [formValid, setFormValid] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [formSubmitDelay, setFormSubmitDelay] = useState(false);
  const [nameFormEmpty, setNameFormEmpty] = useState(false);
  const [emailFormEmpty, setEmailFormEmpty] = useState(false);
  const [messageFormEmpty, setMessageFormEmpty] = useState(false);
  const [timeoutId, setTimeoutId] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formElement = document.querySelector("form");
    e.preventDefault();

    if (!formElement) {
      return;
    }

    const nameInput =
      formElement.querySelector<HTMLInputElement>('input[name="Name"]');
    const emailInput = formElement.querySelector<HTMLInputElement>(
      'input[name="Email"]'
    );
    const messageInput = formElement.querySelector<HTMLInputElement>(
      'textarea[name="Message"]'
    );

    if (!nameInput?.value || !emailInput?.value || !messageInput?.value) {
      setFormInvalid(true);
      setFormValid(false);

      const formInvalidTimeout = setTimeout(() => {
        setFormInvalid(false);
      }, 2500);

      setTimeoutId(formInvalidTimeout);

      if (!nameInput?.value) {
        setTimeout(() => {
          setNameFormEmpty(true);
        }, 100);
      } else setNameFormEmpty(false);

      if (
        !emailInput?.value ||
        !emailInput.value.match(
          /^\s*[^@\s]+@[^\s@.]+\.[a-zA-Z][a-zA-Z0-9]*\s*$/
        )
      ) {
        setTimeout(() => {
          setEmailFormEmpty(true);
        }, 100);
      } else setEmailFormEmpty(false);

      if (!messageInput?.value) {
        setTimeout(() => {
          setMessageFormEmpty(true);
        }, 100);
      } else setMessageFormEmpty(false);

      return;
    }

    setFormSubmitDelay(true);
    setFormInvalid(false);
    setNameFormEmpty(false);
    setEmailFormEmpty(false);
    setMessageFormEmpty(false);

    const formData = new FormData(formElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbwEB7rEinie_N4PNOwM-pEVKRT115gxD6Ke4sbkxvqATSPV5_-a1oiPeHD5_ivtIxU3rw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then(() => {
        formElement.reset();
        setFormSubmitDelay(false);
        setFormValid(true);
        const formValidTimeout = setTimeout(() => {
          setFormValid(false);
        }, 2500);
        setTimeoutId(formValidTimeout);
        // console.log(data);
      })
      .catch(() => {
        formElement.reset();
        setFormSubmitDelay(false);
        setFormValid(true);
        const formValidTimeout = setTimeout(() => {
          setFormValid(false);
        }, 2500);
        setTimeoutId(formValidTimeout);
        // console.error("Error submitting form:" + error);
      });
  };

  const closeNoticeCard = () => {
    setFormValid(false);
    setFormInvalid(false);
    clearTimeout(timeoutId);
  };

  return (
    <main className="bg-white dark:bg-[rgb(2,8,23)]">
      <Navbar />
      <div className="text-center notOnMobile:mt-12 mobile:mt-2 mb-8 tracking-[4px] max-w-[900px] mx-auto px-[6px]">
        <Fade triggerOnce cascade direction="up" duration={600} damping={0.4}>
          <h1 className="text-black dark:text-white text-[calc(30px+2vw)] font-[700]">
            Got some{" "}
            <span className="text-blue-700 dark:text-blue-500">questions</span>{" "}
            or just want to{" "}
            <span className="text-blue-700 dark:text-blue-500">connect</span>?
          </h1>
          <h2 className="text-gray-500 font-[500] dark:text-gray-300 dark:font-[400] mt-6 mb-12 text-[calc(12px+1vw)]">
            Send me a message and I'll reply back ASAP!
          </h2>
        </Fade>
      </div>
      <div
        onClick={closeNoticeCard}
        className={`noticeCard cursor-pointer bg-green-100 text-green-700 text-start ${
          formValid ? "open" : ""
        }`}
      >
        <h1 className="flex items-center justify-start text-2xl mb-2 px-4">
          <FaCircleCheck className="mr-2" />
          Success!
        </h1>
        <h2 className="text-base px-4">
          I'll respond back as soon as I read your message!
        </h2>
        <div
          className={`w-full notOnMobile:h-[8px] mobile:h-[6px] bg-green-500 mt-6 px-0 ${
            formValid ? "timerGreenBar" : ""
          }`}
        />
      </div>
      <div
        onClick={closeNoticeCard}
        className={`noticeCard cursor-pointer bg-red-100 text-red-700 text-start ${
          formInvalid ? "open" : ""
        }`}
      >
        <h1 className="flex items-center justify-start text-2xl mb-2 px-4">
          <FaCircleExclamation className="mr-2" />
          Oops!
        </h1>
        <h1 className="text-base px-4">
          Please fill out all input fields and try again.
        </h1>
        <div
          className={`w-full notOnMobile:h-[8px] mobile:h-[6px] bg-red-600 mt-5 px-0 ${
            formInvalid ? "timerRedBar" : ""
          }`}
        />
      </div>
      <div
        className={`noticeCard border-l-[8px] border-blue-600 bg-blue-200 text-blue-800 text-center pb-4 ${
          formSubmitDelay ? "open" : ""
        }`}
      >
        <h1 className="flex items-center justify-center text-2xl mb-2 px-4">
          <FaCircleInfo className="mr-2" />
          Please wait...
        </h1>
        <div className="loader bg-blue-800 mx-auto mt-2 mb-auto"></div>
      </div>
      <form
        name="contactForm"
        onSubmit={handleSubmit}
        className="flex flex-col space-y-1 max-w-lg w-[calc(100vw-30px)] mx-auto mt-5 tracking-[1px] text-black dark:text-white"
      >
        <label htmlFor="name" className="text-lg">
          Name
        </label>
        <input
          placeholder="Type your name here"
          type="text"
          id="Name"
          name="Name"
          className="border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"
        />
        <div className="w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]">
          {nameFormEmpty ? "Please enter your name" : ""}
        </div>
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          placeholder="Type your email here"
          type="text"
          id="Email"
          name="Email"
          className="border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"
        />
        <div className="w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]">
          {emailFormEmpty ? "Please enter a valid email" : ""}
        </div>
        <label htmlFor="message" className="text-lg">
          Message
        </label>
        <textarea
          id="Message"
          name="Message"
          placeholder="Type your message here"
          cols={30}
          rows={5}
          className="border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"
        />
        <div className="w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]">
          {messageFormEmpty ? "Please enter your message" : ""}
        </div>
        <br />
        <button
          aria-label="Submit Form"
          type="submit"
          disabled={formSubmitDelay || formInvalid}
          className={`border-[2px] border-blue-700 dark:border-blue-500 max-w-[160px] w-full h-[40px] tracking-[1px] mx-auto text-blue-700 dark:text-blue-500 font-[600] rounded-md transition duration-300 ease-in-out ${
            formSubmitDelay || formInvalid
              ? "border-gray-400 text-gray-400 dark:border-gray-400 dark:text-gray-400 cursor-not-allowed"
              : "notOnMobile:hover:text-white notOnMobile:hover:border-blue-600 notOnMobile:hover:bg-blue-600"
          }`}
        >
          {formSubmitDelay ? (
            <div className="flex mx-auto">
              <div className="mx-auto my-auto">Processing...</div>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <div className="w-full max-w-[960px] mx-auto border-[1px] h-0 mt-[calc(100px+2vh)] border-slate-300 dark:border-slate-900" />
      <ContactPageNav />
      <ContactPageFooter />
    </main>
  );
}
