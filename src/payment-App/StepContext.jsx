import React, { useState } from "react";
// import PaymentInfo from "./Payment-info";
import Payment from "./Payment";

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <Payment />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
