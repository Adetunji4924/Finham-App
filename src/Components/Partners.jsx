import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Logo1 from "/src/images/1bristol.png";
import Logo2 from "/src/images/2rochester.png";
import Logo3 from "/src/images/3queens.png";
import Logo4 from "/src/images/4twente.png";
import Logo5 from "/src/images/5mcg.png"

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="px-[1rem] md:px-[5rem] py-[3rem] flex flex-col justify-center border-y-2 border-gray-100">
      <h1 className="font-Inter text-gray-400 mb-[2rem] text-[0.9rem] uppercase text-center">
        Supporting payments worldwide
      </h1>
      <div className="px-[1rem] md:px-[3rem]">
        <Slider {...settings} className="">
          <div>
            <img className="w-[60%]" src={Logo1} alt="" />
          </div>
          <div>
            <img className="w-[60%]" src={Logo2} alt="" />
          </div>
          <div>
            <img className="w-[60%]" src={Logo3} alt="" />
          </div>
          <div>
            <img className="w-[60%]" src={Logo4} alt="" />
          </div>
          <div>
            <img className="w-[60%]" src={Logo5} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
