import FaqAccordion from "./Faqaccordion.jsx";
import PrimaryButton from "./Primary-Button.jsx";
import { Link } from "react-router-dom";

const Faq = () => {
  const faqData = [
    {
      question: "What is Finham",
      answer:
        "Finham is an easy to use tuition payment agent. We are simplifying the international tuition payment process for students from Africa.",
    },
    {
      question: "What payment methods does Finham accepts?",
      answer: "Finham currently accepts only bank transfers",
    },
    {
      question: "When will Finham make my payment?",
      answer:
        "We will make your tuition payment to your school in 24 hours after confirmation of your deposit with us.",
    },
    {
      question: "What are the charges for using Finham?",
      answer: "Finham does not charge any transfer fees on tuition payments.",
    },
    {
      question: "How do I contact Finham if I have questions or need help?",
      answer:
        "You can contact our support team by sending an email to studenthelp@finhampay.com or our through our contact us page. One of our team members will be happy to assist you with any questions or inquiries you may have.",
    },
    {
      question: "What if my institution is not listed?",
      answer:
        "If you cannot find them listed within the institution dropdown list, please click the “I can’t find my school” link. We will provide you with instructions to start your payment.",
    },
    {
      question: "What countries can Finham make payments to?",
      answer:
        "We currently make payments to institutions in Canada and the UK. However, you will be able to also send payments to institutions in Europe and USA soon.",
    },
    {
      question:
        'Whose information do I need to provide within the "Payer Information" section?',
      answer:
        "You will need to provide the details of the person whose bank account is being used to make the payment. If you are paying through a third party, you will enter the name and the address of that specific person as on the payer’s bank records and the country from which the sender is paying. This information is mandatory for compliance purposes and will also help Finham track your payment for you",
    },
    {
      question:
        "I have a bank account transfer limit, am I able to make split payments?",
      answer:
        "You have the ability to create more than one payment request at any time, allowing you to split up the amount that you are sending if you have hit the transfer limit on your bank account. If you choose to send multiple payments to fulfill a transaction, we recommend that you contact our Helpdesk.",
    },
  ];
  return (
    <div className="py-[5rem] px-[1rem] md:px-[3rem] lg:px-[5rem]">
      <div className="mb-[2rem]">
        <h1 className="text-[1.5rem] md:text-[2.2rem] font-Inter font-semibold text-gray-900 text-center">
          Frequently asked questions
        </h1>
        <p className="text-[.8rem] md:text-[1.2rem] font-Inter text-gray-600 text-center">
          Everything you need to know about Finham
        </p>
      </div>
      <div className="flex items-center justify-center">
        <FaqAccordion faqData={faqData} />
      </div>
      <div className="bg-gray-50 flex flex-col justify-center items-center mt-8 py-8 rounded">
        <h1 className="text-gray-900 font-Inter text-[1.2rem] font-semibold text-center mb-2">
          Still have questions?
        </h1>
        <p className="text-[1rem] font-Inter text-gray-600 text-center mb-8">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <div>
          <Link to="Contact-Us" relative="path">
            <PrimaryButton value={"Contact Us"} id={"nav-button"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
