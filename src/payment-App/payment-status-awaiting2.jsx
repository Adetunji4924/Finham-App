import Footer from "../Components/Footer";
import PaymentHeader from "./Payment-header";
import { useState } from "react";
import "./payment.css";
import "react-datepicker/dist/react-datepicker.css";
const PaymentStatusAwaiting2 = () => {
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
                  rx="3.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.500092"
                  width="31"
                  height="31"
                  rx="3.5"
                  stroke="#FBE2B7"
                />
                <g clipPath="url(#clip0_952_992)">
                  <path
                    d="M15.9997 9.33343V12.0001M15.9997 20.0001V22.6668M11.2863 11.2868L13.173 13.1734M18.8263 18.8268L20.713 20.7134M9.33301 16.0001H11.9997M19.9997 16.0001H22.6663M11.2863 20.7134L13.173 18.8268M18.8263 13.1734L20.713 11.2868"
                    stroke="#B47806"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_952_992">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(8 8.00009)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div>
              <p className="font-Inter text-[.9rem] md:text-[1rem] text-gray-900 font-semibold">
                Payment Status
              </p>
              <span className="font-Inter text-[.8rem] md:text-[.9rem] text-gray-600">
                Awaiting Payment
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
              Payment Initiated
            </p>
            <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
              Please download your payment invoice below and complete the bank
              transfer within the next 1-3 business days. You will also receive
              an email copy of these payment instructions to arala@email.com{" "}
            </span>
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
              className="rounded-md bg-[#002147] px-[3rem] py-[.6rem] border border-[#002147] hover:border-secondary-0 font-Inter text-white font-medium hover:bg-secondary-0 transition ease-in-out delay-100"
            >
              Download Invoice
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentStatusAwaiting2;
