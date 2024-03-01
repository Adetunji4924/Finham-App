import PrimaryButton from "./Primary-Button.jsx";
import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <div className="md:px-[3rem] lg:px-[5rem] px-[1rem] py-[3rem] md:py-[5rem]">
      <div>
        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-Bricolage font-semibold mb-4">
          1. Information We Collect
        </h1>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">1.1 Personal Information:</span> When
          you use our Services, we may collect personal information that you
          provide to us voluntarily. This may include your full name, address,
          email address, telephone number, date of birth, occupation, location,
          means of identification, and any other information necessary for the
          provision of our Services. We will also ask about your relationship
          with the person on whose behalf you are making a payment, if different
          from you
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">1.2 Financial Information:</span> To
          facilitate remittances and payments, we may collect financial
          information such as bank account details, address, phone number, and
          government identification number or other payment instrument details.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">1.3 Usage Information:</span> We may
          collect information about your interactions with our website,
          including your IP address, device information, browser type,
          referring/exit pages, and usage patterns. This data is collected
          automatically through cookies and similar technologies
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">
            1.4 Messages and Support Requests:
          </span>{" "}
          We collect the information you submit when you communicate with us by
          email, chat, or other methods. This includes payer support where you
          may choose to submit information regarding a problem or whether you
          speak to one of our representatives directly or otherwise engage with
          our support team. A summary of the problem you are experiencing,
          screen shots, documentation or information that would be helpful in
          resolving the issue.
        </p>
      </div>
      <div>
        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-Bricolage font-semibold mb-4">
          2. Use of Information
        </h1>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">
            2.1 Providing and Improving our services:
          </span>{" "}
          We use your information to process remittances, communicate with you,
          verify your identity, and provide customer support. This information
          includes links you click on; the type, size, and filenames of
          attachments you upload to the Platform, content using analytics
          techniques that hash, filter or otherwise scrub the information and we
          collect clickstream data about how you interact with and use features
          of the Platform. We may also use your information to enhance and
          improve our Services, develop new features, and analyze user trends.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">
            2.2 Compliance with Legal Obligations:
          </span>{" "}
          We may use your information to comply with applicable laws,
          regulations, and legal processes. This includes anti-money laundering
          regulations, fraud prevention, and reporting obligations.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">2.3 Communication and Marketing:</span>{" "}
          We may use your contact information to send you promotional and
          marketing materials related to our Services. You can opt out of these
          communications at any time by following the instructions provided in
          the communication or contacting us directly.
        </p>
      </div>
      <div>
        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-Bricolage font-semibold mb-4">
          3. Data Sharing and Disclosure{" "}
        </h1>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">3.1 Service Providers:</span> We may
          share your information with trusted third-party service providers who
          assist us in operating our business, such as payment processors,
          customer support providers, and data analytics providers. These
          service providers are contractually bound to protect the
          confidentiality and security of your information.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">3.2 Legal requirements:</span> We may
          disclose your information in response to a valid court order,
          governmental request, or other legal process. We may also disclose
          your information to enforce our rights, protect our property, or
          comply with applicable laws and regulations.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">3.3 Business Transfers:</span> In the
          event of a merger, acquisition, or sale of all or a portion of our
          assets, your information may be transferred as part of the
          transaction. We will notify you via email and/or prominent notice on
          our website of any such change in ownership or control of your
          personal information.
        </p>
      </div>
      <div>
        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-Bricolage font-semibold mb-4">
          4. Data Security
        </h1>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          We implement reasonable security measures to protect your information
          from unauthorized access, alteration, disclosure, or destruction.
          However, please note that no method of transmission over the Internet
          or electronic storage is 100% secure. Therefore, while we strive to
          use commercially acceptable means to protect your information, we
          cannot guarantee its absolute security.
        </p>
      </div>
      <div>
        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-Bricolage font-semibold mb-4">
          5. Your Choices and Rights
        </h1>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">5.1 Access and Update:</span> You have
          the right to access and update your personal information held by
          Finham You can do this by logging into your account or by contacting
          us directly.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">5.2 Data Retention:</span> We will
          retain your personal information for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy unless a longer retention
          period is required or permitted by law. As a regulated business, we
          comply with statutory retention periods contained in regulations
          applicable to financial transactions, including those in anti-money
          laundering, anti-terrorist financing and other laws to which we are
          subject. After such time we will either delete or anonymize your
          information or if it is not possible then we will securely store your
          information and isolate it from any further use until deletion is
          possible.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">5.3 Marketing Communications:</span> You
          can opt out of receiving marketing communications from us by following
          the instructions provided in the communication or by contacting us
          directly.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          <span className="font-medium">5.4 International Data Transfers:</span>{" "}
          Your information may be transferred to and stored in countries outside
          of your own jurisdiction. These countries may have data protection
          laws that differ from those in your jurisdiction. By using our
          Services and providing your information, you consent to the transfer
          of your information to countries outside of your jurisdiction,
          including those with different data protection laws.
        </p>
      </div>
      <div>
        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-Bricolage font-semibold mb-4">
          6. Third-Party Links
        </h1>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          Our website or Services may contain links to third-party websites or
          services that are not owned or controlled by Finham We are not
          responsible for the privacy practices or the content of these
          thirdparty websites or services. We encourage you to review the
          privacy policies of any third-party websites or services that you
          visit.
        </p>
      </div>
      <div>
        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-Bricolage font-semibold mb-4">
          7. Changes to this privacy policy
        </h1>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          material changes by posting the updated Privacy Policy on our website
          or by sending you a notification. We encourage you to review this
          Privacy Policy periodically for any updates.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          By using our Services, you acknowledge that you have read this Privacy
          Policy and consent to the collection, use, disclosure, and retention
          of your information as described herein.
        </p>
        <p className="text-[.8rem] sm:text-[1.1rem] font-Inter mb-4">
          By using our Services, you acknowledge that you have read this Privacy
          Policy and consent to the collection, use, disclosure, and retention
          of your information as described herein.
        </p>
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

export default Policies;
