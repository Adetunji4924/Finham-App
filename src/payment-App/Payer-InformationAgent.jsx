import "./payment.css";
const PayerInformationAgent = () => {
  return (
    <div className="bg-white">
      <div>
        <div>
          <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
            Agent Details
          </p>
          <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
            Please enter the details of the agent making this payment{" "}
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
            </div>
            <div>
              <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-4">
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
                <div className="w-full md:w-[45%]">
                  <label
                    htmlFor="Address"
                    className="block  text-gray-800 font-Inter text-[.9rem] md:text-[1rem] font-medium mb-2"
                  >
                    Address
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayerInformationAgent;
