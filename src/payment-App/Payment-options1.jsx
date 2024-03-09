import Footer from "../Components/Footer";
import PaymentHeader from "./Payment-header";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./payment.css";

const PaymentOption1 = () => {
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
              Step 2
            </p>
            <p className="text-center mt-2 text-[.9rem] font-Inter text-gray-800 font-medium">
              Payment Info
            </p>
          </div>

          <div>
            <hr className="my-8 mx-4 bg-[#F1F1F1]" />
          </div>

          <div>
            <div>
              <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
                Payment Options
              </p>
              <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
                Select your preferred payment method{" "}
              </span>
            </div>
            <div className="flex justify-between items-center my-8">
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.52685 0.797411C9.18474 0.683374 8.81487 0.683375 8.47276 0.797411L1.80612 3.01963C1.12555 3.24648 0.666504 3.88338 0.666504 4.60076V6.50012C0.666504 7.42059 1.41269 8.16678 2.33316 8.16678H3.16649V12.3334H2.33316C1.41269 12.3334 0.666504 13.0796 0.666504 14.0001V15.6668C0.666504 16.5872 1.41269 17.3334 2.33316 17.3334H15.6664C16.5869 17.3334 17.3331 16.5872 17.3331 15.6668V14.0001C17.3331 13.0796 16.5869 12.3334 15.6664 12.3334H14.8331V8.16678H15.6664C16.5869 8.16678 17.3331 7.42059 17.3331 6.50012V4.60076C17.3331 3.88338 16.8741 3.24648 16.1935 3.01963L9.52685 0.797411ZM13.1665 12.3334V8.16678H11.4998V12.3334H13.1665ZM9.83314 12.3334V8.16678H8.16648V12.3334H9.83314ZM6.49982 12.3334V8.16678H4.83316V12.3334H6.49982ZM2.33316 14.0001V15.6668H15.6664V14.0001H2.33316ZM2.33316 6.50012L2.33316 4.60076L8.99981 2.37854L15.6664 4.60076V6.50012H2.33316Z"
                      fill="#7A5AF8"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[.9rem] md:text-[1rem] text-gray-800 font-Inter font-medium">
                    Domestic Bank Transfer
                  </p>
                  <p className="text-[.9rem] md:text-[1rem] text-gray-800 font-Inter font-semibold">
                    NGN 20,000,000.00
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-[#EEF5FE] text-secondary-0 px-[2rem] py-[.5rem] font-medium text-[.9rem] font-Inter rounded">
                  Select
                </button>
                <button className="hidden bg-[#EEF5FE] text-secondary-0 px-[3rem] py-[.8rem] font-medium text-[.9rem] font-Inter rounded">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1663 1.00012L5.99967 10.1668L1.83301 6.00012"
                      stroke="#1F39C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <hr className="my-8 mx-4 bg-[#F1F1F1]" />
            </div>
            <div className="flex justify-between items-center my-8">
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.3335 11.3336C3.3335 10.8734 3.70659 10.5003 4.16683 10.5003H10.8335C11.2937 10.5003 11.6668 10.8734 11.6668 11.3336C11.6668 11.7939 11.2937 12.167 10.8335 12.167H4.16683C3.70659 12.167 3.3335 11.7939 3.3335 11.3336Z"
                      fill="#4E5BA6"
                    />
                    <path
                      d="M13.3335 10.5003C12.8733 10.5003 12.5002 10.8734 12.5002 11.3336C12.5002 11.7939 12.8733 12.167 13.3335 12.167H15.0002C15.4604 12.167 15.8335 11.7939 15.8335 11.3336C15.8335 10.8734 15.4604 10.5003 15.0002 10.5003H13.3335Z"
                      fill="#4E5BA6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.833496 3.41695C0.833496 1.576 2.32588 0.0836182 4.16683 0.0836182H15.8335C17.6744 0.0836182 19.1668 1.576 19.1668 3.41695V12.5836C19.1668 14.4246 17.6744 15.917 15.8335 15.917H4.16683C2.32588 15.917 0.833496 14.4246 0.833496 12.5836V3.41695ZM4.16683 1.75028C3.24635 1.75028 2.50016 2.49648 2.50016 3.41695V3.83362H17.5002V3.41695C17.5002 2.49648 16.754 1.75028 15.8335 1.75028H4.16683ZM17.5002 5.50028H2.50016V12.5836C2.50016 13.5041 3.24635 14.2503 4.16683 14.2503H15.8335C16.754 14.2503 17.5002 13.5041 17.5002 12.5836V5.50028Z"
                      fill="#4E5BA6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[.9rem] md:text-[1rem] text-gray-500 font-Inter font-medium">
                    Credit/Debit Card
                  </p>
                  <p className="text-[.9rem] md:text-[1rem] text-gray-500 font-Inter font-semibold">
                    NGN 20,000,000.00
                  </p>
                </div>
              </div>
              <div className="bg-[#F2F4F7] rounded-lg px-[.8rem] py-[.2rem]">
                <p className="text-[.9rem] font-Inter font-medium text-gray-500">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between md:justify-end items-center mt-8 gap-4">
            <Link to="Payment-Option2" relative="path">
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

export default PaymentOption1;
