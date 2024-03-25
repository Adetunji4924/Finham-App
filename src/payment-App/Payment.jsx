import { useContext, useState } from "react";
import Footer from "../Components/Footer";
import PaymentHeader from "./Payment-header";
import "./payment.css";
import { multiStepContext } from "./StepContext";
import PaymentOption2 from "./Payments-options2";
import PaymentInfo from "./Payment-info";
import PaymentOption1 from "./Payment-options1";
import PayerInformationAgent from "./Payer-InformationAgent";
import StudentDetails1 from "./Student-Details1";
import StudentDetails2 from "./Student-Details2";
import InvoiceGeneration2 from "./Invoice-generation2";

const Payment = () => {
  const {currentStep, setCurrentStep} = useContext(multiStepContext)
  const steps = [
    "Payment Info",
    "Payments Options",
    "Payer Information",
    "Student Details",
    "Invoice Generation",
  ];
  
  const [complete, setComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function showStep(step, options) {
    switch(step) {
      case 1:
        return <PaymentInfo setSelectedOption={setSelectedOption} />;
      case 2:
        return options === 'Agent' ? <PaymentOption1 /> : <PaymentOption2 />;
      case 3:
        return options === 'Agent' ? <StudentDetails1 /> : <PayerInformationAgent />;
      case 4:
        return <StudentDetails1 /> || <StudentDetails2 /> 
      case 5:
        return <InvoiceGeneration2 />
    }
  }
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
          {showStep(currentStep, selectedOption)}

          <div className="flex justify-between md:justify-end items-center mt-8 gap-4">
              <button
              onClick={() => {
                currentStep === 1
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev - 1);
              }} 
              className="rounded-md border border-secondary-0 px-[2.5rem] py-[.6rem] font-Inter text-secondary-0 font-medium hover:bg-secondary-0 hover:text-white transition ease-in-out delay-100">
              {currentStep === 1 ? "Cancel" : "Previous"}
              </button>
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

export default Payment;
