import React from "react";
import consultationIcon from "./images/icons/consultation.png";
import demoIcon from "./images/icons/demo.png";
import workshopIcon from "./images/icons/workshop.png";
import installIcon from "./images/icons/install.png";
import awarenessIcon from "./images/icons/awareness.png";
import readyIcon from "./images/icons/ready.png";
import CO1 from "../Images/co1.jpg";
import CO2 from "../Images/co2.jpg";
import pinkBackground from "../Images/pinkbaground.png";
import fullwings from "./images/fullwings.png"
import rightwings1 from "./images/rightwing2.png"
const Corporate = () => {
  const steps = [
    { title: "Schedule consultation", icon: consultationIcon },
    { title: "Demonstration", icon: demoIcon },
    { title: "Menstrual hygiene workshop", icon: workshopIcon },
    { title: "Installation", icon: installIcon },
    { title: "Awareness session", icon: awarenessIcon },
    { title: "Ready to use", icon: readyIcon },
  ];

  return (
    <div style={{ fontFamily: "Raleway" }}>
      <div className="overflow-x-hidden">
        <div
          className="absolute top-30 left-0 w-full h-[60vh] bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${fullwings})`, opacity: 0.4 }}
        />
        {/* Responsive Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 mt-16 sm:mt-20 text-left">
          Get to know more behind Zeropad
        </h1>

        <div
          className=" relative min-h-[140vh] lg:h-[230vh] h-[220vh]  z-10 py-12 bg-cover bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${pinkBackground})` }}
        >
          {/* First Section */}
          <div className="container-fluid px-0 mt-16">
            <div className="row align-items-center w-100 mx-0">
              {/* Left Side Image */}
              <div className="col-lg-5 col-md-6 col-sm-12 px-0">
                <img
                  src={CO1}
                  alt="Corporate 1"
                  className="w-100 h-auto rounded-tr-[60px] rounded-br-[60px]"

                />
              </div>

              {/* Right Side Text */}
              <div className="col-lg-6 col-md-6 col-sm-12 px-3 sm:px-6 md:px-8 lg:px-5 text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-6 flex flex-col justify-start items-start ml-4 sm:ml-8 md:ml-12 lg:ml-14 ">
                <h5 className="text-xl font-bold text-white mt-3 sm:mt-4 md:mt-5 w-full text-left">
                  Easy-to-use & Dispose!
                </h5>
                <p className="">
                  A vital solution, especially in workplaces, schools, and
                  public restrooms.
                </p>

                <h5 className="text-xl font-bold text-white mt-3 sm:mt-4 md:mt-5 w-full text-left">
                  Maintain Hygiene
                </h5>
                <p className=" ">
                  Eliminates waste accumulation, reduces germ spread, and
                  lessens landfill burden.
                </p>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="container-fluid px-0 mt-5">
            <div className="row align-items-center flex-row-reverse w-100 mx-0">
              {/* Right Side Image */}
              <div className="col-lg-5 col-md-6 col-sm-12 px-0">
                <img
                  src={CO2}
                  alt="Corporate 2"
                  className="w-100 h-auto rounded-tl-[50px] rounded-bl-[60px]"

                />
              </div>


              {/* Left Side Text */}
              <div className="col-lg-6 col-md-6 col-sm-12 px-3 sm:px-6 md:px-8 lg:px-5 text-white text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 flex flex-col justify-start items-start">
                <h5 className="text-xl font-bold text-white mt-3 sm:mt-4 md:mt-5 ">
                  Employee Comfort
                </h5>
                <p>
                  We prioritize comfort with the ZeroPad Menstrual Waste
                  Incinerator, ensuring a hygienic and discreet solution for a
                  cleaner workplace environment.
                </p>

                <h5 className="text-xl font-bold text-white">
                  Ensuring Sustainability
                </h5>
                <p>
                  Through ZeroPad, the menstrual waste incinerator reflects the
                  innovative ideas of our team, committed to creating
                  eco-friendly solutions for a cleaner future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6  max-w-7xl mx-auto text-left relative">
        <div
          className="absolute right-[-1%] top-[10%] sm:top-[25%] md:top-[30%] lg:top-[10%] 
             w-[80vw] max-w-[910px] h-[100vh] max-h-[600px] bg-cover bg-no-repeat opacity-40 z-0"
          style={{ backgroundImage: `url(${rightwings1})`, }}
        />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Raleway text-[#FB6F92] text-left mb-12 sm:mb-16 lg:mb-20 -mt-40 sm:mt-0 lg:mt-20">
          "MENSTRUAL WASTE IN INDIA”
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 text-gray-700 text-left">
          <div>
            <p className="text-[#FB6F92]  text-5xl">121 Million</p>
            <p className="text-black text-lg">
              Girls and women use sanitary pads in India
            </p>
          </div>
          <div>
            <p className="text-[#FB6F92]  text-5xl">3840</p>
            <p className="text-black text-lg">
              Sanitary napkins used by a woman in her lifetime
            </p>
          </div>
          <div>
            <p className="text-[#FB6F92]  text-5xl">113000 Tons</p>
            <p className="text-black text-lg">
              Of menstrual waste is generated per annum in India
            </p>
          </div>
        </div>

        <h3 className="mt-32 text-4xl font-bold text-left">
          Getting Started!
        </h3>

        <p className="text-black text-2xl text-left mt-4">
          Interested in implementing Zeropad?
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 text-black">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-left text-left">
              <img src={step.icon} alt={step.title} className="w-16 h-16 mb-7" />
              <p className="text-2xl ">
                <span className="text-4xl ">{index + 1}</span>{" "}
                <span className="text-lg font-medium">{step.title}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FB6F92] text-white p-8 overflow-hidden relative h-[300px]">
  <h3 className="text-3xl font-bold text-center mb-6">
    Successful Zeropad Installations
  </h3>
  <div className="whitespace-nowrap overflow-hidden relative mt-20">
    <div className="flex space-x-8 animate-scroll">
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <div className="w-64 text-center">
            <p className="font-bold">NMU</p>
            <p className="text-sm">Jalgaon</p>
          </div>
          <div className="w-64 text-center">
            <p className="font-bold">Dinnapur, Grampanchayat </p>
            <p className="text-sm">Paithan</p>
          </div>
          <div className="w-64 text-center">
            <p className="font-bold">Panwadod, Grampanchayat</p>
            <p className="text-sm">Sillod</p>
          </div>
          <div className="w-64 text-center">
            <p className="font-bold">Sanjay Bhayade</p>
            <p className="text-sm">Mumbai</p>
          </div>
          <div className="w-64 text-center">
            <p className="font-bold">STPL, Pune</p>
            <p className="text-sm">Rajangaon, Pune</p>
          </div>
          <div className="w-64 text-center">
            <p className="font-bold">Govt. Institute of Industrial Training</p>
            <p className="text-sm">Sillod</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
  <style>
    {`
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        display: flex;
        width: max-content;
        animation: scroll 30s linear infinite;
      }
    `}
  </style>
</div>


      </div>
    </div>
  );
};

export default Corporate;
