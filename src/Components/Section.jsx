import BgImageRight from "/src/images/Group 8.png";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="bg-gray-100 flex flex-wrap md:flex-nowrap justify-between">
      <div className="bg-left bg-cover bg-no-repeat bg-center md:w-[50%] px-4 py-8 md:pl-[3rem] lg:pl-[5rem] flex flex-col justify-center gap-3">
        <h2 className="font-Inter text-[0.9rem] text-gray-200 font-semibold">
          International Tuition Payments
        </h2>
        <h1 className="font-Bricolage text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white font-semibold">
          Simplifying Global Education Transactions
        </h1>
        <p className="font-Inter text-[.8rem] md:text-[1rem] text-gray-200 font-normal">
          Managing tuition payments on a global scale, ensuring a frictionless
          experience that allows you to pay for your tuition easily
        </p>
        <div className="mt-4">
          <Link to="page-not-found" relative="path">
          <button className="text-Inter text-gray-800 font-medium bg-white rounded px-4 md:px-5 md:py-4 py-3 hover:bg-secondary-0 hover:text-white ease-in-out transition delay-100">
            Make a Payment
          </button>
          </Link>
        </div>
      </div>
      <div className="md:w-[50%]">
        <img src={BgImageRight} alt="" />
      </div>
    </div>
  );
};

export default Section;
