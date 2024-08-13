import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ContactUsImage from "/src/images/Image contact.png"

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="md:px-[3rem] lg:px-[5rem] px-[1rem] py-[3rem] flex justify-center md:justify-between items-center gap-8">
        <div>
          <div className="mb-6">
            <h1 className="text-[1.5rem] md:text-[2.1rem] font-Bricolage text-gray-900 font-semibold">
              Contact Us
            </h1>
            <p className="text-[.8rem] md:text-[1rem] font-Inter text-gray-600">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <form action="" className="">
            <div className="">
              <label
                htmlFor="Name"
                className="block  text-gray-800 text-[.8rem] md:text-[1rem] font-Bricolage font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="shadow appearance-none border rounded w-full py-3 px-5 mb-4 font-Inter text-[12px] text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 text-[.8rem] md:text-[1rem] font-Bricolage font-medium mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="you@company.com"
                required
                className="shadow appearance-none border rounded w-full py-3 px-5 mb-4 font-Inter text-[12px] text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 text-[.8rem] md:text-[1rem] font-Bricolage font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="50"
                rows="4"
                placeholder="Leave us a messsage..."
                className="shadow appearance-none border rounded w-full py-3 px-5 mb-4 font-Inter text-[12px] text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
          </form>
          <div>
            <button className="rounded bg-[#002147] px-[.8rem] md:px-[1.2rem] py-[.6rem] md:py-[.8rem] text-[.8rem] md:text-[1rem] font-Inter text-white font-medium hover:bg-secondary-0 transition ease-in-out delay-100 w-full">
              Send a Message
            </button>
          </div>
        </div>
        <div className="md:block hidden">
          <img src={ContactUsImage} alt="" className="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
