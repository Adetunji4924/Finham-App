import Footer from "../Components/Footer";
import PaymentHeader from "./Payment-header";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./payment.css";
import "react-datepicker/dist/react-datepicker.css";
const InvoiceGeneration2 = () => {
  const steps = [
    "Payment Info",
    "Payments Options",
    "Payer Information",
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
              Step 5
            </p>
            <p className="text-center mt-2 text-[.9rem] font-Inter text-gray-800 font-medium">
              Invoice Generation
            </p>
          </div>

          <div>
            <hr className="my-8 mx-4 bg-[#F1F1F1]" />
          </div>

          <div className="alert flex items-center gap-2 border border-[#F7D394] rounded-md bg-[#FEF6E7] px-4 py-4">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.500092"
                  width="31"
                  height="31"
                  rx="15.5"
                  fill="#FEF6E7"
                />
                <rect
                  x="0.5"
                  y="0.500092"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#FBE2B7"
                />
                <path
                  d="M15.9997 12.0001C16.3679 12.0001 16.6663 12.2986 16.6663 12.6668V17.3334C16.6663 17.7016 16.3679 18.0001 15.9997 18.0001C15.6315 18.0001 15.333 17.7016 15.333 17.3334V12.6668C15.333 12.2986 15.6315 12.0001 15.9997 12.0001Z"
                  fill="#AD6F07"
                />
                <path
                  d="M15.1663 19.1668C15.1663 19.627 15.5394 20.0001 15.9997 20.0001C16.4599 20.0001 16.833 19.627 16.833 19.1668C16.833 18.7065 16.4599 18.3334 15.9997 18.3334C15.5394 18.3334 15.1663 18.7065 15.1663 19.1668Z"
                  fill="#AD6F07"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.33301 16.0001C9.33301 12.3182 12.3178 9.33343 15.9997 9.33343C19.6816 9.33343 22.6663 12.3182 22.6663 16.0001C22.6663 19.682 19.6816 22.6668 15.9997 22.6668C12.3178 22.6668 9.33301 19.682 9.33301 16.0001ZM15.9997 10.6668C13.0542 10.6668 10.6663 13.0546 10.6663 16.0001C10.6663 18.9456 13.0542 21.3334 15.9997 21.3334C18.9452 21.3334 21.333 18.9456 21.333 16.0001C21.333 13.0546 18.9452 10.6668 15.9997 10.6668Z"
                  fill="#AD6F07"
                />
              </svg>
            </span>
            <p className="font-Inter text-[.8rem] md:text-[.9rem] text-gray-600">
              Your reserved conversion rate will expire in 10:00
            </p>
          </div>

          <div className="mt-4">
            <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
              Payment Summary
            </p>
            <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
              Summary of your tuition payment{" "}
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-center items-center">
            <p className="font-Inter text-[.8rem] md:text-[1.1rem] font-semibold text-gray-600">
              Tuition Fee Payment for- Waterloo University
            </p>
            <p className="font-Inter text-[1.1rem] md:text-[1.4rem] text-gray-800 font-semibold">
              USD 20,000.00
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center items-center">
            <p className="font-Inter text-[.8rem] md:text-[1.1rem] font-semibold text-gray-600">
              You will send
            </p>
            <p className="font-Inter text-[1.1rem] md:text-[1.4rem] text-gray-800 font-semibold">
              NGN 20,750,000.00
            </p>
          </div>

          <div>
            <hr className="my-8 mx-4 bg-[#F1F1F1]" />
          </div>

          <div className="mt-4">
            <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
              Payment Initiator Summary
            </p>
            <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
              Summary of your tuition payment{" "}
            </span>
          </div>

          <div className="flex md:flex-nowrap flex-wrap justify-between my-4 gap-4">
            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Name
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                Ronald Reagan
              </p>
            </div>

            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Email
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                Ronald@gmail.com
              </p>
            </div>

            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Phone Number
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                070123456789
              </p>
            </div>

            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Status
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                Student
              </p>
            </div>
          </div>

          <div>
            <hr className="my-8 mx-4 bg-[#F1F1F1]" />
          </div>

          <div className="mt-4">
            <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
              Student Summary
            </p>
            <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
              Summary of your tuition payment{" "}
            </span>
          </div>

          <div className="flex md:flex-nowrap flex-wrap justify-between my-4 gap-4">
            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Name
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                Ronald Reagan
              </p>
            </div>

            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Email
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                Ronald@gmail.com
              </p>
            </div>

            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Phone Number
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                070123456789
              </p>
            </div>

            <div>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-600 font-semibold">
                Status
              </p>
              <p className="font-Inter text-[.9rem] md:text-[1.1rem] text-gray-800 font-semibold">
                Student
              </p>
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

export default InvoiceGeneration2;
