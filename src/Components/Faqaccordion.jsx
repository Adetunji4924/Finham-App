// FaqAccordion.js
import { useState } from 'react';

const FaqAccordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[60%]">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-200">
          <div
            className={`flex justify-between items-center p-4 cursor-pointer ${
              activeIndex === index ? 'bg-white' : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            <p className="font-semibold text-[1.1rem] font-Inter text-gray-900">{item.question}</p>
            <span className={`transform ${activeIndex === index ? 'hidden' : ''} transition-transform`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7.00024V15.0002M7 11.0002H15M21 11.0002C21 16.5231 16.5228 21.0002 11 21.0002C5.47715 21.0002 1 16.5231 1 11.0002C1 5.4774 5.47715 1.00024 11 1.00024C16.5228 1.00024 21 5.4774 21 11.0002Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </span>
            <span className={`transform ${activeIndex === index ? '' : 'hidden'} transition-transform`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </span>
          </div>
          {activeIndex === index && (
            <div className="p-4">
              <p className='font-Inter text-[1rem] text-gray-600'>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
