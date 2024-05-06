"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { GrSend } from "react-icons/gr";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";

const initialState = {
  username: "",
  phoneNumber: "",
  email: "",
  subject: "",
  message: "",
  errMsg: "",
  successMsg: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, errMsg: action.message, successMsg: "" };
    case "SET_SUCCESS":
      return { ...state, successMsg: action.message, errMsg: "" };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isEmailAlreadySent, setisEmailAlreadySent] = useState<any>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  useEffect(() => {
    if (isEmailAlreadySent) {
      window.sessionStorage.setItem("emailSent", "EmailAlreadySent");
    }
    if (isEmailAlreadySent === "Send_again") {
      window.sessionStorage.removeItem("emailSent");
    }
    const storedvalue = window.sessionStorage.getItem("emailSent");
    if (storedvalue) {
      setisEmailAlreadySent(storedvalue);
    }
  }, [isEmailAlreadySent]);

  const { username, phoneNumber, email, subject, message, errMsg, successMsg } =
    state;

  const emailValidation = (email: any) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^[\w.]+([-]*[\w.]+)*@\w+([-]*\w+)*(\.\w{2,3}([-]*\w+)*)+$/);
  };
  const phoneNumberValidation = (phoneNumber: any) => {
    // Regular expression for phone number validation
    const phoneRegex = /^[0-9]{10}$/;

    // Check if the phone number matches the regular expression
    return phoneRegex.test(phoneNumber);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSend = (e: any) => {
    e.preventDefault();

    if (!username || !phoneNumber || !email || !subject || !message) {
      dispatch({ type: "SET_ERROR", message: "All fields are required!" });
    } else if (!emailValidation(email)) {
      dispatch({
        type: "SET_ERROR",
        message: "Please enter a valid email address.",
      });
    } else if (!phoneNumberValidation(phoneNumber)) {
      dispatch({
        type: "SET_ERROR",
        message: "Please enter a valid Phone Number.",
      });
    } else {
      // Assuming email sending logic here
      openModal();
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Say Hello !" />
      </div>
      <dialog id="my_modal_1" className="modal m-2" ref={modalRef}>
        <div className="modal-box bg-[#23272b]">
          <div className="flex justify-start gap-3 items-center">
            <h3 className="font-bold text-lg text-gray-300">
              {`Subject: `}
              <span className="text-yellow-400">{state?.subject}</span>
              {`!`}
            </h3>
          </div>
          <div className="w-full h-[2px] mt-2 bg-designColor"></div>
          <span className="py-1">
            {`Hey Chandrashekhar,`}
            <p className="py-1">{`I hope this email finds you well. I wanted to drop you a quick note to let you know that I stumbled upon your portfolio recently.`}</p>
          </span>
          <p className="py-1 text-yellow-400">{`${state.message}`}</p>
          <p className="py-1">
            {`You can contact me at `}
            <span className="text-yellow-400">{state.phoneNumber}</span>
            {` or email me at `}
            <span className="text-yellow-400">{state.email}</span>
            {`.`}
          </p>
          <span className="py-1">{`Keep up the amazing work. Wishing you continued success and endless inspiration.`}</span>{" "}
          <p className="py-1">{`Wishing you all the best,`}</p>
          <p className="py-1 text-yellow-400">{`${state.username}`}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn text-md font-semibold"
                onClick={() => {
                  modalRef.current?.close();
                  dispatch({
                    type: "SET_SUCCESS",
                    message: `Thank you dear ${username}, Your Messages has been sent Successfully!`,
                  });
                  dispatch({ type: "RESET_FORM" });
                  setisEmailAlreadySent(true);
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            {!(
              isEmailAlreadySent && isEmailAlreadySent === "EmailAlreadySent"
            ) ? (
              <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                <div className="text-base flex justify-start gap-2 items-center tracking-wide">
                  <SiGoogleforms className="w-8 h-8 text-designColor align-self-center " />
                  <h2 className="text-2xl font-bold text-white">
                    Contact Form
                  </h2>
                </div>
                {(errMsg || successMsg) && (
                  <p
                    className={`py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center ${
                      errMsg ? "text-orange-500" : "text-green-500"
                    } text-base tracking-wide animate-bounce`}
                  >
                    {errMsg || successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input
                      onChange={handleInputChange}
                      value={username}
                      name="username"
                      className={`contactInput ${
                        errMsg && "outline-designColor"
                      }`}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input
                      onChange={handleInputChange}
                      value={phoneNumber}
                      name="phoneNumber"
                      className={`contactInput ${
                        errMsg && "outline-designColor"
                      }`}
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={handleInputChange}
                    value={email}
                    name="email"
                    className={`contactInput ${
                      errMsg && "outline-designColor"
                    }`}
                    type="email"
                    placeholder="Enter your valid email"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    onChange={handleInputChange}
                    value={subject}
                    name="subject"
                    className={`contactInput ${
                      errMsg && "outline-designColor"
                    }`}
                    type="text"
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={handleInputChange}
                    value={message}
                    name="message"
                    className={`contactTextArea ${
                      errMsg && "outline-designColor"
                    }`}
                    cols={30}
                    rows={8}
                    placeholder="Type your message here"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                    <div className="flex justify-center items-center">
                      <GrSend className="w-8 h-8 mx-2 text-designColor" />
                      Send Message
                    </div>
                  </button>
                </div>
              </form>
            ) : (
              <div className="my-10 xs:text-md md:text-xl flex flex-col justify-center items-center ">
                <div className="flex justify-center items-center text-green-400 gap-2">
                  <IoCheckmarkDoneCircle className="w-12 h-12" />
                  <span>
                    You have already sent an e-mail recently. Thank You !
                  </span>
                </div>
                <button
                  onClick={() => {
                    setisEmailAlreadySent("Send_again");
                  }}
                  className="w-1/2 h-12 mt-5 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  <div className="flex justify-center items-center">
                    <GrSend className="w-8 h-8 mx-2 text-designColor" />
                    Send Again
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
