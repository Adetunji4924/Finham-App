import { Link } from "react-router-dom";
import { useState } from "react";

const CreateAccount = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen justify-center flex gap-8">
      <div className="hidden sm:flex bg-sidebar bg-no-repeat bg-cover w-[50%] flex-col justify-between px-[2rem] py-[5rem]">
        <div>
          <img src="./src/images/MASTERLOGO (white) 2.png" alt="" />
        </div>
        <div className="w-[75%]">
          <h1 className="font-Bricolage text-[2.5rem] text-white font-bold">
            Manage multiple tuition payments.
          </h1>
          <p className="font-Inter text-[1rem] text-gray-200">
            Manage tuition payments for multiple applicants, track payments with
            ease.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[80%] md:w-[50%]">
        <div className="md:w-[50%] mb-8">
          <h1 className="text-center text-[2rem] font-Bricolage font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-center text-[0.8rem] font-Bricolage">
            As an agent, create an account to make student tuition payments, its
            free and easy!
          </p>
        </div>
        <form action="" className="w-[100%] sm:w-[60%]">
          <div>
            <label
              htmlFor="email"
              className="block  text-gray-800 text-[1rem] font-Bricolage font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-5 mb-4 font-Inter text-[12px] text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-800 text-[1rem] font-Bricolage font-medium mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="shadow appearance-none border rounded w-full py-3 px-5 mb-4 text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
              id="password"
              value={password}
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.24967 3.53325C8.82328 3.39898 9.41056 3.33187 9.99967 3.33325C15.833 3.33325 19.1663 9.99992 19.1663 9.99992C18.6605 10.9463 18.0572 11.8372 17.3663 12.6582M11.7663 11.7666C11.5375 12.0122 11.2615 12.2092 10.9548 12.3459C10.6481 12.4825 10.3171 12.556 9.98142 12.5619C9.64574 12.5678 9.31231 12.5061 9.00102 12.3803C8.68972 12.2546 8.40694 12.0674 8.16955 11.83C7.93215 11.5926 7.745 11.3099 7.61926 10.9986C7.49353 10.6873 7.43178 10.3539 7.4377 10.0182C7.44362 9.6825 7.5171 9.35146 7.65374 9.04479C7.79038 8.73813 7.98738 8.46212 8.23301 8.23325M0.833008 0.833252L19.1663 19.1666M14.9497 14.9499C13.5252 16.0358 11.7906 16.6373 9.99967 16.6666C4.16634 16.6666 0.833008 9.99992 0.833008 9.99992C1.86958 8.06816 3.30729 6.38042 5.04967 5.04992L14.9497 14.9499Z"
                    stroke="#101828"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                </svg>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 text-[1rem] font-Bricolage font-medium mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-5 mb-4 text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
              id="company"
              placeholder="Input your company name"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-secondary-0 w-full px-4 py-2 rounded text-white text-[1rem] font-Bricolage font-medium hover:text-secondary-0 hover:bg-transparent hover:border border-secondary-0 transition ease-in-out delay-150">
              Login
            </button>
          </div>
        </form>

        <hr className="w-[55%] flex justify-center items-center bg-gray-500 mt-8" />

        <div className="flex justify-center flex-col items-center">
          <p className="text-center font-Inter text-[.8rem] font-semibold mt-4">
            Already have an account?
          </p>
          <Link
            to="/Login"
            relative="path"
            className="text-secondary-0 font-Inter text-[.8rem] font-medium underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
