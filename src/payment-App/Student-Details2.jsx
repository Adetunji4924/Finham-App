import Footer from "../Components/Footer";
import PaymentHeader from "./Payment-header";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./payment.css";
import "react-datepicker/dist/react-datepicker.css";
const StudentDetails2 = () => {
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Student", "Parent", "Agent"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpenOption(false);
  };
  const steps = [
    "Payment Info",
    "Payments Options",
    "Student Details",
    "Invoice Generation",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <div className="bg-[#FBFBFB]">
      <PaymentHeader />
      <div className="flex justify-center items-center py-[3rem]">
        <div className="bg-white border border-[#F1F1F1] rounded w-[90%] md:w-[80%] px-[1rem] md:px-[2rem] py-[2rem]">
          <div className="md:flex justify-center gap-5 hidden">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  (i + 1 < currentStep || complete) && "complete"
                }`}
              >
                <div className="step w-12 h-12 flex items-center justify-center bg-white border-2 border-secondary-0 z-10 relative rounded-full font-semibold text-secondary-0">
                  {i + 1 < currentStep || complete ? (
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1668 1L6.00016 10.1667L1.8335 6"
                        stroke="#1F39C4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="step-text font-Inter text-[.8rem] pt-4">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center md:hidden">
            <p className="text-center text-[.9rem] font-Inter text-gray-600">
              Step 3
            </p>
            <p className="text-center mt-2 text-[.9rem] font-Inter text-gray-800 font-medium">
              Student Details
            </p>
          </div>

          <div>
            <hr className="my-8 mx-4 bg-[#F1F1F1]" />
          </div>

          <div className="progress-bar h-[8px] bg-gray-100 rounded-full my-4">
            <div className="h-[8px] bg-[#12B76A] rounded-full w-[70%]"></div>
          </div>

          <div>
            <div>
              <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
                Student Details
              </p>
              <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
                Please enter the details of the student this payment is being
                made for{" "}
              </span>
            </div>
            <div className="my-8">
              <form action="">
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
                  <div className="relative w-full md:w-[45%]">
                    <label
                      className="flex items-center gap-2  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                      htmlFor="selectOption"
                    >
                      Country
                    </label>
                    <div
                      className="relative bg-white w-full p-2 flex items-center justify-between border border-gray-300 rounded-md cursor-pointer focus:border-secondary-0 focus:outline-none"
                      onClick={() => setIsOpenOption(!isOpenOption)}
                    >
                      <span
                        className={`font-Inter text-[.8rem] md:text-[.9rem] ${
                          selectedOption
                            ? "text-gray-800 font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {selectedOption || "Choose Country"}
                      </span>
                      <div>
                        <svg
                          className="h-4 w-4 absolute right-0 top-0 m-3 pointer-events-none"
                          width="13"
                          height="8"
                          viewBox="0 0 13 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 1.50009L6.5 6.50009L11.5 1.50009"
                            stroke="#667085"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {isOpenOption && (
                      <div className="absolute z-50 border border-gray-100 bg-white w-full mt-2 rounded-md shadow-lg shadow-[#1018280D]">
                        {options.map((option) => (
                          <div
                            key={option}
                            className="hover:bg-[#F9FCFF] font-Inter text-[.9rem] text-gray-700 p-2 cursor-pointer"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-[45%]">
                    <label
                      htmlFor="Name"
                      className="block text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="bg-white w-full p-2 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-4">
                    <div className="w-full md:w-[45%]">
                      <label
                        htmlFor="Street Address"
                        className="block text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="bg-white w-full p-2 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                      />
                    </div>
                    <div className="w-full md:w-[45%]">
                      <label
                        htmlFor="Name"
                        className="block text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                      >
                        Postcode
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="bg-white w-full p-2 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-Inter text-gray-800 text-[.9rem] md:text-[1rem] font-medium">
                    National ID Card
                  </p>
                  <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
                    We require a copy of your National ID Card to confirm your
                    identity.{" "}
                  </span>
                  <div className="flex flex-col md:flex-row justify-between mt-4">
                    <div className="w-full md:w-[45%]">
                      <p className="font-Inter text-gray-800 text-[.9rem] md:text-[1rem] font-medium">
                        Passport
                      </p>
                      <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
                        We require a copy of your passport to confirm your
                        identity.{" "}
                      </span>
                      <div className="flex justify-between border rounded-md border-gray-300 py-4 px-4 mt-2">
                        <div className="flex items-center gap-2">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_952_1557)">
                              <path
                                d="M11.1666 10.6667L8.49997 8.00007M8.49997 8.00007L5.83331 10.6667M8.49997 8.00007V14.0001M14.0933 12.2601C14.7435 11.9056 15.2572 11.3447 15.5532 10.6658C15.8493 9.98698 15.9108 9.22889 15.7281 8.5112C15.5454 7.7935 15.129 7.15708 14.5444 6.70237C13.9599 6.24766 13.2406 6.00056 12.5 6.00007H11.66C11.4582 5.21956 11.0821 4.49496 10.5599 3.88073C10.0378 3.2665 9.3832 2.77864 8.64537 2.45381C7.90754 2.12898 7.10567 1.97564 6.30005 2.00533C5.49443 2.03501 4.70602 2.24694 3.99409 2.62518C3.28216 3.00342 2.66525 3.53814 2.18972 4.18913C1.7142 4.84011 1.39243 5.59043 1.24863 6.38367C1.10482 7.17691 1.14271 7.99242 1.35945 8.76891C1.57619 9.5454 1.96613 10.2626 2.49997 10.8667"
                                stroke="#1F39C4"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_952_1557">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <div>
                            <p className="font-Inter text-gray-900 text-[.9rem] font-medium">
                              Click to Upload
                            </p>
                            <span className="font-Inter text-[.6rem] md:text-[.8rem] text-gray-400">
                              PNG, JPG | 10MB max.
                            </span>
                          </div>
                        </div>

                        <button className="bg-[#EEF5FE] text-secondary-0 px-[2rem] py-[.5rem] font-medium text-[.9rem] font-Inter rounded">
                          Upload
                        </button>
                      </div>
                    </div>

                    <div className="w-full md:w-[45%]">
                      <p className="font-Inter text-gray-800 text-[.9rem] md:text-[1rem] font-medium">
                        Offer letter/Invoice
                      </p>
                      <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
                        We require a copy of your invoice to confirm your
                        identity.{" "}
                      </span>
                      <div className="flex justify-between border rounded-md border-gray-300 py-4 px-4 mt-2">
                        <div className="flex items-center gap-2">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_952_1557)">
                              <path
                                d="M11.1666 10.6667L8.49997 8.00007M8.49997 8.00007L5.83331 10.6667M8.49997 8.00007V14.0001M14.0933 12.2601C14.7435 11.9056 15.2572 11.3447 15.5532 10.6658C15.8493 9.98698 15.9108 9.22889 15.7281 8.5112C15.5454 7.7935 15.129 7.15708 14.5444 6.70237C13.9599 6.24766 13.2406 6.00056 12.5 6.00007H11.66C11.4582 5.21956 11.0821 4.49496 10.5599 3.88073C10.0378 3.2665 9.3832 2.77864 8.64537 2.45381C7.90754 2.12898 7.10567 1.97564 6.30005 2.00533C5.49443 2.03501 4.70602 2.24694 3.99409 2.62518C3.28216 3.00342 2.66525 3.53814 2.18972 4.18913C1.7142 4.84011 1.39243 5.59043 1.24863 6.38367C1.10482 7.17691 1.14271 7.99242 1.35945 8.76891C1.57619 9.5454 1.96613 10.2626 2.49997 10.8667"
                                stroke="#1F39C4"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_952_1557">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <div>
                            <p className="font-Inter text-gray-900 text-[.9rem] font-medium">
                              Click to Upload
                            </p>
                            <span className="font-Inter text-[.6rem] md:text-[.8rem] text-gray-400">
                              PNG, JPG | 10MB max.
                            </span>
                          </div>
                        </div>

                        <button className="bg-[#EEF5FE] text-secondary-0 px-[2rem] py-[.5rem] font-medium text-[.9rem] font-Inter rounded">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-Inter text-[.9rem] font-medium text-gray-600">
                    Your data is collected solely for KYC purposes, prioritizing
                    security and confidentiality.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="flex justify-between md:justify-end items-center mt-8 gap-4">
            <Link to="" relative="path">
              <button className="rounded-md border border-secondary-0 px-[2.5rem] py-[.6rem] font-Inter text-secondary-0 font-medium hover:bg-secondary-0 hover:text-white transition ease-in-out delay-100">
                Cancel
              </button>
            </Link>
            <button
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
              className="rounded-md bg-[#002147] px-[3rem] py-[.6rem] border border-[#002147] hover:border-secondary-0 font-Inter text-white font-medium hover:bg-secondary-0 transition ease-in-out delay-100"
            >
              {currentStep === steps.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDetails2;
