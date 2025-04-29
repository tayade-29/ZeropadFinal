import background from "../Images/background.png";
import rectangleBackground from "../components/images/Group.png";
import blackRectangle from "../Images/Rectanglecopy.png"
import FullRectangle from "../Images/Rectangle308.png"
import cover from "../Images/cover.png"
import visionImg from "../Images/vision.png"; // Vision image
import missionImg from "../Images/go-green.png"; // Mission image
import pinkBackground from "../Images/staff/Rectangle269.png";
import sustainableBackground from "../Images/sustainable-background.png";
import Eprint1 from "../Images/SDGGoals/ePrint1.png";
import Eprint2 from "../Images/SDGGoals/ePrint2.png";
import Eprint3 from "../Images/SDGGoals/ePrint3.png";
import Eprint4 from "../Images/SDGGoals/ePrint4.png";
import Eprint5 from "../Images/SDGGoals/ePrint5.png";
import Eprint6 from "../Images/SDGGoals/ePrint6.png";
import rightwings from "./images/rightwings.png"
import ketki from "../Images/ketkimam.png"
import hemant from "../Images/staff/hemant.png"
import prasad from "../Images/staff/prasad.png"
import aa from "../Images/staff/aa.png"
import satish from "../Images/staff/satish-kharat.png"
import sohail from "../Images/staff/sohel-sheikh.png"
import sonali from "../Images/staff/sonali-sarkunde.png"
import tushar from "../Images/staff/tushar-patil.png"
import uddhav from "../Images/staff/uddhav-pattait.png"
import pradip from "../Images/staff/pradip-kulkarni.png"
import farhan from "../Images/staff/farhan.png"
import sarika from "../Images/staff/sarika.png"
import shubham from "../Images/staff/shubham.png"
import sidhesh from "../Images/staff/sidhesh.png"
import rohit from "../Images/staff/rohit-naik.png"
import gg from "../Images/staff/gg.png"
import LinkBackground from "../Images/LinkBackground.png"
import EcosenseLogo from "../Images/ecosenseLogo.png"




const About = () => {
  return (
    <div style={{ fontFamily: 'Raleway' }}>

      <section
        className="relative w-full min-h-[100vh] lg:min-h-[100vh] h-[120vh] md:h-[90vh] flex flex-col justify-start items-center bg-center bg-cover bg-no-repeat px-6 md:px-12 pt-12 md:pt-16 lg:pt-24 pb-10 lg:mb-20"
        style={{
          backgroundImage: `url(${rectangleBackground})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="relative text-5xl md:text-3xl font-bold text-white text-center mb-12 z-10 mt-10">
          About
        </h1>
        <div className="relative container mx-auto max-w-[100%] text-white text-sm md:text-2xl lg:text-2xl leading-relaxed space-y-4 text-center z-10">
          <p>
            ZeroPad is a pioneering solution designed to address the growing need for hygienic, eco-friendly, and efficient sanitary waste disposal. Our Sanitary Napkin Incinerator is a modern, user-friendly device that offers a safe and sustainable way to dispose of used sanitary napkins, ensuring cleanliness, privacy, and minimal environmental impact.
          </p>
          <p>
            With ZeroPad, we believe in the power of technology to make a positive difference in both our daily lives and the planet. That’s why our incinerator is built to provide an optimal solution for homes, workplaces, schools, public restrooms, and other community spaces. It ensures that sanitary waste is fully incinerated at high temperatures, leaving no trace of harmful bacteria, odor, or waste behind.
          </p>


        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="relative w-full lg:-mt-64">


        <div>
          <div className="container-fluid px-0 mt-10">
            <div className="row align-items-center flex-row-reverse">
              {/* Right Side Image - Decrease Width on Large Screens */}
              <div className="col-lg-5 col-md-6 col-sm-10 col-12 mx-auto mt-[-40px]  lg:mt-[-50px] xl:mt-[-70px] 2xl:mt-[-150px]">
                <img
                  src={visionImg}
                  alt="Corporate 2"
                  className="w-full h-auto rounded-lg rounded-tl-[50px] rounded-bl-[60px] lg:mt-[-80px] mt-[-50px]"
                />
              </div>

              {/* Left Side Text */}
              <div className="flex-1 text-black text-lg md:text-xl lg:text-2xl text-justify leading-relaxed px-4 sm:px-6 md:px-8 lg:pr-8 lg:mt-56 lg:ml-8 max-w-1xl">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  2xl:text-6xl font-raleway text-black mb-9 sm:mb-6 text-start mt-20 sm:mt-24 md:mt-28 lg:mt-56 xl:mt-40 2xl:ml-30">
                  VISION
                </h2>

                {/* Paragraph */}
                <p className="mb-4 w-auto sm:mb-6 text-lg sm:text-lg lg:text-xl xl:text-2xl  2xl:text-4xl leading-normal sm:leading-relaxed max-w-xl">
                  Ecosense Appliances, with Zeropad, aims to revolutionize menstrual waste management by offering sustainable and hygienic solutions that will empower individuals and communities to prioritize both health and the environment. We envision a future where menstrual hygiene management is a priority, and responsible waste disposal leads to a cleaner, healthier world.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid px-0 mt-16">
            <div className="row align-items-center">
              {/* Left Side Image - Decrease Width on Large Screens */}
              <div className="col-lg-5 col-md-6 col-sm-10 col-12 mx-auto gap-5 -mt-24 lg:-mt-40 relative z-10">
                <img
                  src={missionImg}
                  alt="Corporate 1"
                  className="w-full h-auto rounded-lg rounded-tr-[60px] rounded-br-[60px]"
                />
              </div>
              {/* Right Side Text */}
              <div className="flex-1 text-black text-lg md:text-xl lg:text-2xl text-justify leading-relaxed px-4 sm:px-6 md:px-8 lg:pl-8 lg:mb-40 lg:mr-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  2xl:text-6xl font-raleway text-black mb-4 sm:mb-6 text-left md:text-left mt-10">
                  MISSION
                </h2>
                <p className="mb-4 sm:mb-6 text-lg sm:text-lg lg:text-xl xl:text-2xl  2xl:text-4xl leading-normal sm:leading-relaxed max-w-xl">
                  Ecosense Appliances is dedicated to improving personal hygiene, promoting sustainability, and handling women's health waste with care. Our mission is to provide innovative, eco-friendly solutions that simplify waste management, reduce landfill impact, and create a cleaner future. With ZeroPad, make your waste disposal routine responsible, hygienic, and sustainable—one napkin at a time.
                </p>
              </div>
            </div>
          </div>
        </div>




        {/* Menstrual Waste Section */}
        <div className="relative w-full min-h-[660px] lg:min-h-[900px] flex flex-col justify-center items-center px-14 py-24 lg:-mt-56 -mt-20"
          style={{
            backgroundImage: `url(${pinkBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "top", // Moves the background image upward
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Raleway text-white text-center mb-12 sm:mb-16 lg:mb-20 mt-12 sm:mt-16 lg:mt-20">
            "MENSTRUAL WASTE IN INDIA”
          </h2>

          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-12 text-center">

              {/* First Section */}
              <section className="flex flex-col items-center">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-Raleway text-white mb-4 sm:mb-6 lg:mb-8">121 Million</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">Girls and women use sanitary pads in India</p>
              </section>

              {/* Second Section */}
              <section className="flex flex-col items-center">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-Raleway text-white mb-4 sm:mb-6 lg:mb-8">3840</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">Sanitary napkins used by a woman in her lifetime</p>
              </section>

              {/* Third Section */}
              <section className="flex flex-col items-center">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-Raleway text-white mb-4 sm:mb-6 lg:mb-8">113000 Tons</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">Of menstrual waste is generated per annum in India</p>
              </section>
            </div>
          </div>

        </div>

        <div
          className="relative w-full flex flex-col justify-center items-center text-center px-6 py-24"
          style={{
            backgroundImage: `url(${sustainableBackground})`,
            backgroundSize: "100% 100%", // Ensures the full image is visible
            backgroundPosition: "center center", // Properly centers the image
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "auto", // Adjusts height dynamically
            overflow: "hidden", // Ensures no extra content overflow
          }}
        >
          {/* Title */}
          <h4 className="text-4xl lg:text-5xl font-raleway text-black mb-6 lg:mb-10 max-w-4xl">
            Sustainable Development Goals
          </h4>

          {/* Description */}
          <p className="text-lg lg:text-xl text-black max-w-3xl leading-relaxed">
            The ZeroPad Sanitary Napkin Incinerator supports multiple SDGs, from advancing gender
            equality and health to promoting responsible consumption and environmental sustainability.
            By offering an innovative solution to menstrual waste, it empowers individuals, reduces
            environmental impact, and contributes to a cleaner, healthier world. Through the adoption
            of ZeroPad, communities can take a significant step toward achieving a more sustainable
            and equitable future.
          </p>

          {/* Image Grid */}
          <div className="mt-10 lg:mt-16 flex justify-center w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 w-full max-w-4xl">
              <img src={Eprint1} alt="Eprint1" className="w-full h-auto object-contain" />
              <img src={Eprint2} alt="Eprint2" className="w-full h-auto object-contain" />
              <img src={Eprint3} alt="Eprint3" className="w-full h-auto object-contain" />
              <img src={Eprint4} alt="Eprint4" className="w-full h-auto object-contain" />
              <img src={Eprint5} alt="Eprint5" className="w-full h-auto object-contain" />
              <img src={Eprint6} alt="Eprint6" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Background Section */}
          <div
            className="relative w-full min-h-[300px] sm:min-h-[500px] lg:min-h-[725px] flex flex-col justify-center items-center px-4 py-16 sm:py-16 lg:py-24"
            style={{
              backgroundImage: `url(${blackRectangle})`,
              backgroundSize: "cover",
              backgroundPosition: "top, center",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
          >
            {/* Section Title */}
            <h4 className="text-xl sm:text-3xl lg:text-3xl font-bold text-white text-center mt-24 lg:mt-44 md:mt-35">
              Meet The Team
            </h4>

            {/* Main Director */}
            <div className="text-center mt-8 px-4">
              <img
                src={ketki}
                alt="Ketki"
                className="w-[250px] h-[300px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[450px] lg:w-[450px] lg:h-[500px] xl:w-[500px] xl:h-[550px] 2xl:w-[550px] 2xl:h-[600px] mx-auto mb-3 object-cover rounded-lg shadow-md"
              />

              <h5 className="text-lg sm:text-xl font-bold text-white mt-4">Ms. Ketaki Kokil</h5>
              <p className="text-sm sm:text-md text-white mb-3">Director</p>
              <p className="text-sm sm:text-lg lg:text-xl text-white max-w-4xl sm:max-w-4xl mx-auto text-center mt-6">
                "Empowering women through dignity, health, and sustainability — with ZeroPad, we believe that every woman deserves safe, hygienic, and eco-friendly solutions for menstrual care. Our mission is not just to manage waste, but to transform the way the world views menstrual health, creating a future where women thrive with confidence and the planet prospers with responsibility."
              </p>
            </div>
          </div>
        </div>





        {/* Staff Section */}
        <div className="w-full bg-black pb-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6">
            {[
              { img: prasad, name: "Mr. Prasad Kokil", title: "Managing Director" },
              { img: hemant, name: "Mr. Hemant P Chaudhari", title: "VP Manufacturing" },
              { img: tushar, name: "Mr. Tushar Patil", title: "GM Operations & Business Development" },
              { img: aa, name: "Mr. Akshansh Kataria", title: "Head R & D" },
              { img: pradip, name: "Mr. Pradip V Kulkarni", title: "Dy Manager Production" },
              { img: uddhav, name: "Mr. Uddhav Patait", title: "Quality Engineer" },
              { img: farhan, name: "Mr. Farhan Miya Shaikh", title: "Design Engineer R&D" },
              { img: satish, name: "Mr. Satish Kharat", title: "Engineer Purchase" },
              { img: sohail, name: "Mr. Sohel Sheikh", title: "Engineer QA" },
              { img: sonali, name: "Ms. Sonali Sarkunde", title: "Quality Engineer" },
              { img: gg, name: "Ms. Giselle Naik Vaigankar", title: "Marketing Coordinator" },
              { img: shubham, name: "Mr. Shubham Swami", title: "Marketing Officer" },
              { img: sidhesh, name: "Mr. Siddhesh Surse", title: "Digital Marketing Officer" },
              { img: sarika, name: "Ms. Sarika Deshpande", title: "Industrial Designer" },
              { img: rohit, name: "Mr. Rohit Naik", title: "Industrial Design Trainee" },
            ].map((staff, index) => (
              <div key={index} className="text-center">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 mx-auto object-cover rounded-md"
                />
                <h5 className="text-lg sm:text-xl font-bold text-white mt-2">{staff.name}</h5>
                <p className="text-sm sm:text-md text-white">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative w-full h-auto min-h-[50vh] sm:min-h-[75vh] lg:min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${LinkBackground})`, backgroundSize: 'contain' }}
        >
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-green-700 opacity-50"></div>

          {/* Visit Text (Outside Clickable Area) */}
          <p className="relative text-white text-center font-semibold mb-4 text-lg z-10">
            Visit
          </p>

          {/* Clickable Logo */}
          <a
            href="https://www.ecosenseappliances.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex justify-center items-center z-10"
          >
            <div className="bg-black p-3 sm:p-4 md:p-5 lg:p-6 rounded-full flex justify-center items-center w-40 h-16 sm:w-48 sm:h-20 md:w-64 md:h-24 lg:w-80 lg:h-28">
              <img
                src={EcosenseLogo}
                alt="Ecosense Appliances"
                className="max-w-full max-h-full object-contain hover:opacity-80 transition-opacity"
              />
            </div>
          </a>
        </div>






      </div>
    </div>
  );
};

export default About;
