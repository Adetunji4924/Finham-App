import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
            <img className="w-[60%]" src="./src/images/1bristol.png" alt="" />
          </div>
          <div>
            <img className="w-[60%]" src="./src/images/2rochester.png" alt="" />
          </div>
          <div>
            <img className="w-[60%]" src="./src/images/3queens.png" alt="" />
          </div>
          <div>
            <img className="w-[60%]" src="./src/images/4twente.png" alt="" />
          </div>
          <div>
            <img className="w-[60%]" src="./src/images/5mcg.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
