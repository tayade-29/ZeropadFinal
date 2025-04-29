import { useState } from "react";
import landingpage from "./images/landingpageimag.png";
import Zeropad from "./images/Zeropad.png";
import pinkbaground from "./images/pinkbaground.png";
import zeropad3d from "./images/zeropad3d.png";
import supportimage from "./images/supportimage.png";
import icon1 from "./images/icons/1.png";
import icon2 from "./images/icons/2.png";
import icon3 from "./images/icons/3.png";
import icon4 from "./images/icons/4.png";
import icon5 from "./images/icons/5.png";
import icon6 from "./images/icons/6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wast1 from "./images/wastproduced/1.png";
import wast2 from "./images/wastproduced/2.png";
import wast3 from "./images/wastproduced/3.png";
import wast5 from "./images/wastproduced/5.png";
import wast6 from "./images/wastproduced/6.png";
import wast7 from "./images/wastproduced/7.png";
import pinkBackground from "../Images/pinkbaground.png";
import lady from "../components/images/ladies.png";
import locationimg from "./images/Vector.png"
import rightwings from "./images/rightwings.png"
import leftwings from "./images/community2.png"
const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState("sambhajinagar");
  const images = [wast1, wast2, wast3, wast5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Smooth scrolling speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Delay before auto-scrolling
    cssEase: "linear",
    rtl: true, // Enables right-to-left scrolling
  };
  const locations = {
    sambhajinagar: {
      name: "Chh. Sambhaji Nagar Office",
      type: "Head Office",
      address:
        "K151, MIDC, Waluj Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra, INDIA - 431136",
      workingHours: "Mon - Sat : 9:00 AM – 5:00 PM",
      email: "admin@ecosenseappliances.com",
      phone: "+91- 91588 90105",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.0724966709836!2d75.20553319999999!3d19.8502816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b0056f28777%3A0x6c7b7bdc3dc13466!2sEcosense%20Appliances%20Pvt%20Ltd.!5e1!3m2!1sen!2sin!4v1740385100136!5m2!1sen!2sin",
    },
    goa: {
      name: "Goa Office",
      type: "Regional Office",
      address:
        "Ecosense Appliances Pvt Ltd, Flat No. TF-1, 4th Floor, Bhagat Residency, Corlim Indust. Estate, Corlim, Goa. 403110",
      workingHours: "Mon - Sat : 9:00 AM – 5:00 PM",
      email: "admin@ecosenseappliances.com",
      phone: " +91- 91588 90105",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.492689957511!2d73.93396247489152!3d15.499127685100767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbdf717e7d09d%3A0xbba6146feefce401!2sBHAGAT%20RESIDENCEY!5e1!3m2!1sen!2sin!4v1740385294028!5m2!1sen!2sin",
    },
  };

  return (
    <div style={{ fontFamily: "Raleway" }}>
      {/* Full-Screen Background Image */}
      <div
        className="w-full h-screen flex flex-col items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage: `url(${landingpage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium max-w-[80%] sm:max-w-[70%]">
          Improving every woman’s life with
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-6 sm:mt-10 tracking-wide sm:tracking-[0.2em] md:tracking-[0.3em]">
          ZEROPAD
        </h1>
      </div>

      {/* Section Below Background Image */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 mt-0 md:px-12 lg:px-20 py-12">


        

        <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-10 lg:ml-10 -mt-20 sm:mt-12 md:mt-8 lg:-mt-6">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl text-black text-start mb-4 mt-24 sm:mt-6 md:mt-4 lg:-mt-0">
            ZEROPAD
          </h1>

          {/* First Paragraph - Exactly 8 Lines */}
          <p className="text-gray-600 text-md sm:text-base md:text-2xl  lg:text-2xl xl:text-3xl leading-[1.75] mt-4 text-justify mx-auto lg:mx-20 
        line-clamp-8 overflow-hidden"
            style={{ maxWidth: "100%", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 8 }}>
            Introducing ZEROPAD, our advanced Sanitary Napkin Incinerator, a revolutionary device designed
            to tackle the growing concern of sanitary waste disposal in a hygienic, eco-friendly, and efficient manner.
            Specifically engineered to safely dispose of used sanitary napkins, the incinerator ensures that waste is completely
            destroyed without any harmful emissions, helping you maintain a clean and sustainable environment.
          </p>

          {/* Second Paragraph - Exactly 3 Lines */}
          <p className="text-gray-600 text-md sm:text-base md:text-2xl  lg:text-2xl xl:text-3xl  leading-[1.75] mt-4 text-justify mx-auto lg:mx-0 
        line-clamp-3 overflow-hidden"
            style={{ maxWidth: "100%", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}>
            Transform waste disposal into a responsible and efficient process with our Sanitary Napkin Incinerator – the
            smart choice for a cleaner, healthier planet.
          </p>
        </div>



        {/* Right Image Section (Touching Right Edge) */}
        <div className="relative w-full lg:w-1/2 flex justify-end lg:-mr-6 lg:-mt-16 -mt-32">
  <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[90%] flex justify-center items-center">
    <img
      src={Zeropad}
      alt="Zeropad Incinerator"
      className="w-full h-auto object-contain rounded-l-3xl max-h-[500px] sm:max-h-[360px] md:max-h-[680px] lg:max-h-[550px] xl:max-h-[640px]"
    />
  </div>
</div>




      </div>

      <section
        className="relative w-full min-h-[120vh] lg:min-h-[250vh] h-[250vh] md:h-[170vh] flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat px-4 sm:px-6 md:px-12 pt-12 md:pt-16 lg:pt-32 pb-24 -mt-5 lg:-mt-60"
        style={{
          backgroundImage: `url(${pinkBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto max-w-[95%] lg:max-w-[85%] text-white text-lg md:text-xl leading-relaxed space-y-6 z-10 flex flex-col lg:flex-row items-center">

          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-5 sm:mt-20 md:-mt-60 lg:mt-0">
            <img
              src={lady}
              alt="Lady"
              className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[80%] xl:w-[70%] rounded-lg"
            />
          </div>

          {/* Right Side - Details */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 rounded-lg text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-start lg:-mt-40">
              Designed to be used in...
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl  font-semibold mb-2 text-start">Personal Space</h2>
                <p className="text-base sm:text-lg md:text-2xl text-justify leading-relaxed">
                  Zeropad incinerator helps maintain a clean, organized, and hygienic home environment. It provides a private, hygienic, and environmentally responsible solution for waste disposal, ensuring that used sanitary napkins are managed safely and discreetly.
                </p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl  font-semibold mt-4 mb-2 text-start">Corporate Space</h2>
                <p className="text-base sm:text-lg md:text-2xl  text-justify leading-relaxed">
                  Zeropad Incinerators ensure that sanitary napkins are disposed of securely, without risk of contamination or odor, offering a clean environment for all. They are compact, easy to use, and promote good hygiene practices.
                </p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl  font-semibold mt-4 mb-2 text-start">Public Space</h2>
                <p className="text-base sm:text-lg md:text-2xl  text-justify leading-relaxed">
                  Zeropad Incinerators ensure that sanitary napkins are disposed of securely, without risk of contamination or odor, offering a clean environment for all. They are compact, easy to use, and promote good hygiene practices.                </p>
              </div>
            </div>
          </div>

        </div>
      </section>




      <div className="relative w-full lg:-mt-64 -mt-44 overflow-hidden">
        <div className="container-fluid px-0">
          <div className="row items-center flex-wrap">

            {/* Left Side Image - Touching Left Edge */}
            <div className="col-lg-5 col-md-6 col-sm-10 col-12 mb-8 lg:mb-0 flex justify-start lg:pl-0">
              <img
                src={supportimage}
                alt="Corporate 1"
                className="w-full max-w-none h-auto rounded-lg lg:ml-0"
              />
            </div>
            

            {/* Right Side Text */}
            <div className="col-lg-7 col-md-6 w-full px-4 sm:px-6 md:px-8 lg:pl-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-left w-full mb-6 sm:mb-10 md:mb-12 mt-8 lg:mt-16 md:mt-0 lg:ml-20">
                Zeropad providing support with...
              </h2>

              {/* Responsive Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-10 md:gap-y-10 lg:gap-y-20 first-letter: w-full lg:ml-20 ">
                {[
                  { img: icon1, text: "Responsible Disposal" },
                  { img: icon2, text: "Empowering Women" },
                  { img: icon3, text: "Health & Hygiene" },
                  { img: icon4, text: "Convenience" },
                  { img: icon5, text: "Embracing Cleanliness" },
                  { img: icon6, text: "Managing Waste" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-left space-y-2">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16"
                    />
                    <span className="text-gray-700 font-medium text-sm sm:text-base md:text-lg lg:text-xl text-left">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>




      <div className="relative w-full overflow-hidden mt-20">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative w-full">
              {/* Background Image */}
              <img
                src={image}
                alt={`Waste Image ${index + 1}`}
                className="w-full h-auto object-cover max-h-[500px]"
              />
              {/* Transparent Black Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </Slider>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            2.1 million waste produced which also includes used sanitary
            napkins!
          </h2>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <img
          src={zeropad3d}
          alt="Location Banner"
          className="w-[280px] md:w-[300px] rounded-lg "
        />
      </div>
      <div className="max-w-7xl max-h-5xl mx-auto p-6">
        <h2 className="text-center text-2xl font-bold mb-6">
          WE ARE BASED IN...
        </h2>

        {/* Flex container for horizontal alignment */}
        <div className="flex flex-col md:flex-row items-start gap-20 lg:gap-10 xl:gap-50 text-white p-6 rounded-lg flex-1 min-h-[350px]">
          {/* Office Details */}
          <div className="bg-black text-white p-6 rounded-lg flex-1 h-auto min-h-[350px]">
            <h3 className="text-2xl font-bold">
              {locations[selectedLocation].name}
            </h3>
            <p className="text-white font-bold text-xl">
              {locations[selectedLocation].type}
            </p>
            <p className="mt-2">{locations[selectedLocation].address}</p>

            {/* Working Hours - Heading & Below Timing */}
            <p className="text-xl font-semibold">Working Hours:</p>
            <p className="mt-1">{locations[selectedLocation].workingHours}</p>

            {/* Contact - Heading & Below Contact Details */}
            <p className="text-xl font-semibold">Contact:</p>
            <p className="mt-1">E: {locations[selectedLocation].email}</p>
            <p className="mt-1">P: {locations[selectedLocation].phone}</p>
          </div>


          {/* Map */}
          <iframe
            src={locations[selectedLocation].mapUrl}
            className="flex-1 h-full rounded-lg min-h-[400px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="origin"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            className="w-80 px-6 py-2 rounded-xl flex items-center justify-center gap-2 bg-[#FB6F92] text-white font-bold"
            onClick={() => setSelectedLocation("sambhajinagar")}
          >
            <img src={locationimg} alt="Sambhajinagar Logo" className="w-5 h-5 font-bold" />
            Chh. Sambhaji Nagar
          </button>

          <button
            className="w-80 px-6 py-2 rounded-xl flex items-center justify-center gap-2 bg-[#FB6F92] text-white font-bold"
            onClick={() => setSelectedLocation("goa")}
          >
            <img src={locationimg} alt="Goa Logo" className="w-5 h-5 font-bold " />
            Goa
          </button>
        </div>



      </div>
    </div>
  );
};

export default Home;
