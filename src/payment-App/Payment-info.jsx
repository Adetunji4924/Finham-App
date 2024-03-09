import { useState } from "react";
import Footer from "../Components/Footer";
import PaymentHeader from "./Payment-header";
import "./payment.css";
import { Link } from "react-router-dom";

const PaymentInfo = () => {
  const steps = [
    "Payment Info",
    "Payments Options",
    "Student Details",
    "Invoice Generation",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenCountry, setIsOpenCountry] = useState(false);

  const options = ["Student", "Parent", "Agent"];
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "Australia",
    "Nigeria",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpenOption(false);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsOpenCountry(false);
  };
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
              Step 1
            </p>
            <p className="text-center mt-2 text-[.9rem] font-Inter text-gray-800 font-medium">
              Payment Info
            </p>
          </div>

          <div>
            <hr className="my-8 mx-4 bg-[#F1F1F1]" />
          </div>

          <div className="relative w-full md:max-w-xs my-8">
            <label
              className="flex items-center gap-2  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
              htmlFor="selectOption"
            >
              Payment Initiator
              <span>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.56016 6.00009C5.7169 5.55454 6.02626 5.17883 6.43347 4.93952C6.84067 4.7002 7.31943 4.61272 7.78495 4.69257C8.25047 4.77242 8.67271 5.01444 8.97688 5.37578C9.28106 5.73712 9.44753 6.19444 9.44683 6.66676C9.44683 8.00009 7.44683 8.66676 7.44683 8.66676M7.50016 11.3334H7.50683M14.1668 8.00009C14.1668 11.682 11.1821 14.6668 7.50016 14.6668C3.81826 14.6668 0.833496 11.682 0.833496 8.00009C0.833496 4.3182 3.81826 1.33343 7.50016 1.33343C11.1821 1.33343 14.1668 4.3182 14.1668 8.00009Z"
                    stroke="#98A2B3"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </label>
            <div
              className="relative bg-white w-full p-2 flex items-center justify-between border border-gray-300 rounded-md cursor-pointer focus:border-secondary-0 focus:outline-none"
              onClick={() => setIsOpenOption(!isOpenOption)}
            >
              <span
                className={`font-Inter text-[.8rem] md:text-[.9rem] ${
                  selectedOption ? "text-gray-800 font-medium" : "text-gray-500"
                }`}
              >
                {selectedOption || "Choose Payment Initiator"}
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

          <div className="flex flex-col md:flex-row justify-between items-center my-8">
            <div className=" w-full md:w-[40%] relative">
              <label
                className="flex items-center gap-2  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                htmlFor="selectCountry"
              >
                Country/Region
              </label>
              <div
                className="relative bg-white w-full p-2 flex items-center justify-between border border-gray-300 rounded-md cursor-pointer"
                onClick={() => setIsOpenCountry(!isOpenCountry)}
              >
                <span
                  className={`font-Inter text-[.8rem] md:text-[.9rem] ${
                    selectedCountry
                      ? "text-gray-800 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {selectedCountry || "Select where you are paying from"}
                </span>
              </div>
              {isOpenCountry && (
                <div className="absolute max-h-40 overflow-y-auto z-50 border border-gray-100 bg-white w-full mt-2 rounded-md shadow-lg shadow-[#1018280D]">
                  {countries.map((country) => (
                    <div
                      key={country}
                      className="hover:bg-[#F9FCFF] font-Inter text-[.9rem] text-gray-700 p-2 cursor-pointer"
                      onClick={() => handleCountryClick(country)}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full md:w-[40%] mt-8 md:mt-0">
              <label
                htmlFor="Amount"
                className="block  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
              >
                Tuition Fee (Waterloo University receives)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Amount"
                  className="bg-white w-full p-2 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                />
                <div className="absolute inset-y-0 right-1 flex items-center">
                  <label htmlFor="currency" className="sr-only"></label>
                  <select
                    id="currency"
                    name="currency"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 text-gray-900 font-Inter focus:border-secondary-0 focus:outline-none text-[.7rem] sm:text-sm"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start gap-2">
            <input type="checkbox" className="mt-1 cursor-pointer" />
            <p className="text-[.7rem] md:text-[.8rem] font-Inter text-gray-600">
              I agree to the{" "}
              <span className="text-secondary-0 underline">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-secondary-0 underline">Privacy Policy</span>{" "}
              understanding that my use of this service is subject to the
              guidelines outlined in the terms of service document. By checking
              this box, I acknowledge that I have read, comprehended, and
              consent to be bound by these terms.
            </p>
          </div>

          <div className="flex justify-between md:justify-end items-center mt-8 gap-4">
            <Link to="Payment-Option1" relative="path">
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

export default PaymentInfo;
