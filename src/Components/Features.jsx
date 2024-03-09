import PrimaryButton from "./Primary-Button";

const Features = () => {
  return (
    <div
      id="Features"
      className="bg-[#F8FBFF] flex flex-col justify-center items-center px-[1rem] md:px-[3rem] lg:px-[5rem] py-[3rem]"
    >
      <div>
        <h1 className="font-Bricolage text-[1.8rem] md:text-[2.5rem] lg:text-[4rem] text-center">
          Why Choose <br /> <span className="text-secondary-0">Finham</span>
        </h1>
      </div>
      <div className="pt-8 lg:w-[80%]">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-7">
          <div className="bg-white px-4 py-4 rounded flex flex-col gap-10 md:gap-5 items-start md:w-[50%]">
            <div>
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_458_1575)">
                    <path
                      d="M8 15.167C8 15.167 13.3333 12.5003 13.3333 8.50029V3.83362L8 1.83362L2.66667 3.83362V8.50029C2.66667 12.5003 8 15.167 8 15.167Z"
                      stroke="#1F39C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_458_1575">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.500244)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="uppercase font-Bricolage text-[.8rem] md:text-[1rem] text-secondary-0 font-semibold">
                  Secure Transactions
                </p>
              </div>
              <h1 className="text-[1.2rem] md:text-[2.2rem] font-Bricolage font-semibold text-gray-800 mt-2">
                Pay For Your tuition While Keeping Your Personal Information
                Secure
              </h1>
              <p className="text-[.8rem] md:text-[1rem] font-Inter text-gray-600 py-3">
                Finham employs state-of-the-art security measures to safeguard
                your personal and financial information
              </p>
              <div className="mt-8">
                <PrimaryButton value={"Pay Your Tuition"} id={"nav-button"} />
              </div>
            </div>
            <div className="">
              <img src="./src/images/Frame.png" alt="" className="w-[100%]" />
            </div>
          </div>
          <div className="bg-white px-4 py-4 rounded flex flex-col gap-5 items-start md:w-[50%]">
            <div>
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_206_665)">
                    <path
                      d="M9.33335 1.83362H4.00002C3.6464 1.83362 3.30726 1.97409 3.05721 2.22414C2.80716 2.47419 2.66669 2.81333 2.66669 3.16695V13.8336C2.66669 14.1872 2.80716 14.5264 3.05721 14.7764C3.30726 15.0265 3.6464 15.167 4.00002 15.167H12C12.3536 15.167 12.6928 15.0265 12.9428 14.7764C13.1929 14.5264 13.3334 14.1872 13.3334 13.8336V5.83362M9.33335 1.83362L13.3334 5.83362M9.33335 1.83362V5.83362H13.3334M10.6667 9.16695H5.33335M10.6667 11.8336H5.33335M6.66669 6.50028H5.33335"
                      stroke="#1F39C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_206_665">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.500244)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="uppercase font-Bricolage text-[.8rem] md:text-[1rem] text-secondary-0 font-semibold">
                  Transparency
                </p>
              </div>
              <h1 className="text-[1.2rem] md:text-[2.2rem] font-Bricolage font-semibold text-gray-800 mt-2">
                Real-Time Confidence: Instant Confirmation and Detailed Receipts
              </h1>
              <p className="text-[.8rem] md:text-[1rem] font-Inter text-gray-600 py-3">
                Stay informed throughout the process, receiving instant
                confirmation and detailed receipts for your records
              </p>
              <div className="mt-8">
                <PrimaryButton value={"Pay Your Tuition"} id={"nav-button"} />
              </div>
            </div>
            <div>
              <img src="./src/images/Frame (1).png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center mt-5 bg-white rounded px-4 py-6 gap-6">
          <div className="md:w-[60%]">
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.66667 3.11579C8.66667 2.25544 7.4944 2.00151 7.13838 2.78475L4.14545 9.3692C3.90469 9.89888 4.2919 10.5002 4.87374 10.5002H7.33334V13.8847C7.33334 14.7451 8.50562 14.999 8.86163 14.2157L11.8546 7.63128C12.0953 7.10161 11.7081 6.50024 11.1263 6.50024H8.66667V3.11579ZM5.70201 9.16691L7.33334 5.57798V7.03358C7.33334 7.4754 7.69151 7.83358 8.13334 7.83358H10.298L8.66667 11.4225V9.96691C8.66667 9.52508 8.3085 9.16691 7.86667 9.16691H5.70201Z"
                  fill="#1F39C4"
                />
              </svg>

              <p className="uppercase font-Bricolage text-[.8rem] md:text-[1rem] text-secondary-0 font-semibold">
                Speedy Transactions
              </p>
            </div>
            <h1 className="text-[1.2rem] md:text-[2.2rem] font-Bricolage font-semibold text-gray-800 mt-2">
              Effortless Transactions, Time Saved: Swift and Seamless Payments{" "}
            </h1>
            <p className="text-[.8rem] md:text-[1rem] font-Inter text-gray-600 py-3">
              Experience swift and efficient payments, saving you valuable time
              and ensuring a seamless process from start to finish
            </p>
            <div className="mt-8">
              <PrimaryButton value={"Pay Your Tuition"} id={"nav-button"} />
            </div>
          </div>
          <div>
            <img src="./src/images/div.benefits_image-wrapper.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
