import { useState } from "react";
import "./payment.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const StudentDetails1 = () => {
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Student", "Parent", "Agent"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpenOption(false);
  };
  const [dob, setDOB] = useState(null);

  const handleDOBChange = (date) => {
    setDOB(date);
  };

  return (
    <div className="bg-white">
      <div className="progress-bar h-[8px] bg-gray-100 rounded-full my-4">
        <div className="h-[8px] bg-[#12B76A] rounded-full w-[20%]"></div>
      </div>

      <div>
        <div>
          <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
            Student Details
          </p>
          <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
            Please enter the details of the student this payment is being made
            for{" "}
          </span>
        </div>
        <div className="my-8">
          <form action="">
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
              <div className="w-full md:w-[45%]">
                <label
                  htmlFor="Name"
                  className="block text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="As it appears on your account"
                  className="bg-white w-full p-2 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                />
              </div>
              <div className="w-full md:w-[45%]">
                <label
                  className="block text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                  htmlFor="dob"
                >
                  Date of Birth:
                </label>
                <DatePicker
                  id="dob"
                  selected={dob}
                  onChange={handleDOBChange}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={15}
                  placeholderText="Select Date of Birth"
                  wrapperClassName="datePicker"
                  className="border border-gray-300 rounded-md py-2 px-2 w-full leading-tight focus:outline-none focus:shadow-outline text-[.9rem] md:text-[1rem] font-Inter text-gray-700"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-4">
                <div className="w-full md:w-[45%]">
                  <label
                    htmlFor="Email"
                    className="block  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder=""
                      className="bg-white w-full py-2 pl-8 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                    />
                    <svg
                      className="absolute top-3 left-2"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3337 2.99992C18.3337 2.08325 17.5837 1.33325 16.667 1.33325H3.33366C2.41699 1.33325 1.66699 2.08325 1.66699 2.99992M18.3337 2.99992V12.9999C18.3337 13.9166 17.5837 14.6666 16.667 14.6666H3.33366C2.41699 14.6666 1.66699 13.9166 1.66699 12.9999V2.99992M18.3337 2.99992L10.0003 8.83325L1.66699 2.99992"
                        stroke="#667085"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full md:w-[45%]">
                  <label
                    htmlFor="Amount"
                    className="block  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="+(234)00-0000-0000"
                      className="bg-white w-full py-2 pl-16 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only"></label>
                      <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 text-gray-900 font-Inter focus:border-secondary-0 focus:outline-none text-[.7rem] sm:text-sm"
                      >
                        <option>NG</option>
                        <option>US</option>
                        <option>UK</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-4">
                <div className="relative w-full md:w-[45%]">
                  <label
                    className="flex items-center gap-2  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                    htmlFor="selectOption"
                  >
                    Country of Passport
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
                    htmlFor="Passport Number"
                    className="block text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                  >
                    Passport Number
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="bg-white w-full p-2 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full md:w-[45%] mt-4">
                <label
                  htmlFor="Name"
                  className="block text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                >
                  Student Number
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="bg-white w-full p-2 flex items-center justify-between text-[.9rem] md:text-[1rem] font-Inter text-gray-700 border border-gray-300 rounded-md focus:border-secondary-0 focus:outline-none"
                />
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
    </div>
  );
};

export default StudentDetails1;
