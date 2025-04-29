import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, User } from 'lucide-react';
import m1 from '../Images/medi1.png';
import m2 from '../Images/medi2.png';
import b1 from '../Images/b1.png';
import b2 from '../Images/b2.png';
import b3 from '../Images/b3.png';
import b4 from '../Images/b4.png';
import img1 from '../Images/Gallery/Group 893.png';
import img2 from '../Images/Gallery/Group 898.png';
import img3 from '../Images/Gallery/Group 900.png';
import img4 from '../Images/Gallery/Group 901.png';
import img5 from '../Images/Gallery/Group 902.png';
import img6 from '../Images/Gallery/Group 903.png';
import image from './images/Group 905.png';
import certificate from '../Images/Gallery/image 191.png';
import final from '../Images/final.png';
import Gallery from '../Images/Gallery/Gallery section.png'

import f1 from '../Images/Features/f1.gif';
import f2 from '../Images/Features/f2.gif';
import f3 from '../Images/Features/f3.gif';
import f4 from '../Images/Features/f4.gif';
import f5 from '../Images/Features/f5.gif';
import f6 from '../Images/Features/f6.gif';
import f7 from '../Images/Features/f7.gif';
import f8 from '../Images/Features/f8.gif';
import f9 from '../Images/Features/f9.gif';
import f10 from '../Images/Features/f10.gif';
import v1 from '../Images/Gallery/Vector1.png';
import v2 from '../Images/Gallery/Vector2.png'


const images = [img1, img2, img3, img4, img5, img6];

const features = [
  { img: f8, title: "Less Emission" },
  { img: f4, title: "Improved Design" },
  { img: f2, title: "Auto Switch-Off" },
  { img: f7, title: "Easy to Install" },
  { img: f9, title: "Low Operational Cost Per Pad" },
  { img: f6, title: "High Chamber Temp." },
  { img: f1, title: "Optimized Air Fuel Ratio" },
  { img: f3, title: "Higher Efficiency" },
  { img: f5, title: "Safe Body Temp. & Short Circuit Proof" },
  { img: f10, title: "Certified by Authority" },
];

const beneficiaries = [
  {
    title: "Females in Academia and Learning",
    image: b1,
    icon: <GraduationCap className="w-6 h-6 text-gray-600" />
  },
  {
    title: "Women professionals in the workplace",
    image: b2,
    icon: <Briefcase className="w-6 h-6 text-gray-600" />
  },
  {
    title: "Females in Public Spaces and Environments",
    image: b3,
    icon: <Users className="w-6 h-6 text-gray-600" />
  },
  {
    title: "Females at personal residence and homes",
    image: b4,
    icon: <User className="w-6 h-6 text-gray-600" />
  }
];


const Products = () => {
  const [selectedSession, setSelectedSession] = useState('');
const handleSessionSelect = (session) => {
  setSelectedSession(session);
};



return (

<div style={{ fontFamily: 'Raleway' }}>


{/*Hero section */}
<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image Container */}
  <div className="absolute inset-0 w-full h-full">
    <img 
      src={require('./images/Mask group.png')} 
      alt="ZeroPad Product" 
      className="w-full h-full object-cover" // Use object-cover to maintain aspect ratio
      style={{ maxHeight: '100vh', objectFit: 'cover' }} // Ensure it covers the area without exceeding viewport height
    />
  </div>
  {/* Content Container */}
  <div className="relative z-10 text-center text-white px-6 md:px-10 max-w-4xl mx-auto pt-[0px] pb-[20px]">
    <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wider mt-[-80px]" style={{ fontFamily: 'Raleway' }}>
      The Product 
    </h2>
    <p className="text-sm md:text-lg leading-relaxed mt-10" style={{ fontFamily: 'Raleway' }}>
      ZeroPad is an innovative, eco-friendly device designed to provide a hygienic and sustainable solution for the disposal of sanitary napkins. This compact and efficient sanitary napkin incinerator is crafted to address the growing need for safe menstrual waste management in both personal and community spaces, ensuring privacy, cleanliness, and minimal environmental impact. Whether at home, in schools, offices, public restrooms, or healthcare facilities, ZeroPad allows you to safely incinerate sanitary napkins at the push of a button, converting waste into harmless ash with no residual impact. It's the perfect solution for those seeking a modern, responsible, and discreet way to manage menstrual hygiene waste.
    </p>
  </div>
  {/* Diagonal Cut at Bottom */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg 
      className="w-full h-24 md:h-40 lg:h-48" 
      viewBox="0 0 1440 96" 
      fill="none" 
      preserveAspectRatio="none"
    >
      <path 
        d="M0 96L1440 10L1440 96L0 96Z" 
        fill="white"
      />
    </svg>
  </div>
</section>
{/*Hero Section ended*/}


{/* Mediation Section */}
    <section className="w-full px-4 md:px-16 py-12 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
    Our Mediation Towards Menstrual Hygiene
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
    {/* Before Implementation Card */}
    <div className="relative w-full max-w-[490px] h-550px md:h-[405px] mx-auto">
      <img
        src={m1} // Replace with actual image path
        alt="Before implementing Zeropad"
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center p-4 text-white rounded-2xl">
        <h3 className="text-[14px] md:text-[18px] font-semibold mb-2 md:mb-4 sm:mb-2">Before Implementing Zeropad</h3>
        <p className="text-[14x] md:text-[16px]">
          Lack of privacy, social taboos, leading to health risks and environmental pollution problems.
        </p>
      </div>
    </div>

    {/* After Implementation Card */}
    <div className="relative w-full max-w-[500px] h-550px md:h-[405px] mx-auto">
      <img
        src={m2} // Replace with actual image path
        alt="After implementing Zeropad"
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center p-4 text-white rounded-2xl">
        <h3 className="text-[14px] md:text-[18px] font-semibold  mb-2 md:mb-4 sm:mb-2">After Implementing Zeropad</h3>
        <p className="text-[14x] md:text-[16px]">
          Provides a  safe disposal of menstrual waste, ensuring hygiene and enviromental safety,
        </p>
      </div>
    </div>
  </div>
</section>


{/* Product features */}
<motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="bg-white py-16 text-center"
    >
      <h2 className="text-2xl font-bold mb-8">Product Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto pt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <img src={feature.img} alt={feature.title} className="w-24 h-24 mb-4" />
            <p className="text-sm font-bold">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>


    {/* Benefits */}
    <section className="bg-[#FB6F92] text-white py-16 px-0 md:px-15 ">
      <h2 className="text-32px md:text-4xl font-bold text-center mb-0">Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10 sm:p-20">
        {/* Benefit Item */}
        {[
          { title: "Hygienic Disposal", text: "Ensuring safe, hygienic disposal of used sanitary products, reducing the risk of diseases and infections associated with improper waste management." },
          { title: "Environmentally Friendly", text: "By incinerating sanitary napkins, these devices reduce waste volume by up to 90%, minimizing landfill pressure and preventing the environmental hazards posed by non-biodegradable products." },
          { title: "Convenience", text: "Provide a convenient, low-maintenance solution for workplaces, schools, and public facilities, offering a sustainable alternative to managing menstrual waste." },
          { title: "Reduced Health Risks", text: "Unlike traditional disposal methods, which may involve burning or improper dumping, incinerators destroy the waste at immense heat, minimizing harmful fumes and pathogens." },
          { title: "Odor Control", text: "The incineration process helps neutralize odors associated with the sanitary waste, making the environments like offices or public spaces more pleasant​." },
          { title: "Assurance", text: "Offers the assurance of safe and efficient disposal of sanitary products, ensuring a disposable solution for every woman’s comfort and peace of mind." }
        ].map((benefit, index) => (
          <div key={index} className="max-w-[500px] w-full mx-auto sm:mx-0 px-6 text-center sm:text-left  md:text-start lg:text-start">
            <h3 className="text-xl font-bold  md:text-start lg:text-start">{benefit.title}</h3>
            <p className="text-lg mt-2 md:text-start lg:text-start">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>



{/* Beneficiary */}
<div className="bg-white py-20 px-4 sm:px-6 lg:px-8 mt-[10px] md:mt-[30px]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
      Beneficiary
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
      {beneficiaries.map((item, index) => (
        <div key={index} className="flex flex-col items-center max-w-[280px] w-full">
          <div className="relative w-full">
            {/* Circular Image Container */}
            <div className="aspect-square w-full max-w-[192px] mx-auto rounded-full overflow-hidden mb-4">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Icon Circle */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
              {item.icon}
            </div>
          </div>
          
          <h3 className="text-center text-gray-700 mt-4 text-sm font-medium px-4">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Gallery - Added mt-5 */}

<div className="min-h-screen bg-white py-2 mb-0 sm:mb-0">
  <section className="w-full mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">The Product</h2>

    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-hidden">
        <img 
          src={Gallery} 
          alt="Main Product" 
          className="w-full h-full object-cover bg-gray-100"
        />
      </div>
    </div>
  </section>
</div>


{/* Capabilities - Added mt-5 */}
<div className="min-h-screen bg-white">
  <section className="w-full ]">
    {/* Header Section */}
    <div className="bg-[#FB6F92] text-white text-center py-5 h-[88px] flex items-center justify-center">
      <h2 className="text-2xl font-bold text-center">Know what Zeropad is capable of!</h2>
    </div>

    {/* Main Image & Features */}
    <div className="flex flex-col items-center my-10 px-4">
      <div className="relative max-w-3xl">
        {/* Main Product Image */}
        <img src={final} alt="Zeropad" className="w-full" />
      </div>
    </div>

    {/* Footer Section with Buttons */}
    <div className="bg-[#FB6F92] text-white text-center py-2 gap-20 h-[100px] flex items-center justify-center">
      {/* E-Brochure Button */}
      <a
        href="/Zeropad document.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-40 p-3 border-2 rounded-full flex items-center gap-2
          bg-white text-black font-semibold border-white no-underline"
        style={{ textDecoration: 'none' }}
      >
        <img src={v1} alt="File Icon" className="w-6 h-6" />
        <span className="text-sm">E-Brochure</span>
      </a>

      {/* How to Use Button */}
      <a
        href="https://youtu.be/82GtROuJars?feature=shared"
        target="_blank"
        rel="noopener noreferrer"
        className="w-40 p-3 border-2 rounded-full flex items-center gap-2
          bg-white text-black font-semibold border-white no-underline"
        style={{ textDecoration: 'none' }}
      >
        <img src={v2} alt="Video Icon" className="w-6 h-6" />
        <span className="text-sm">How to Use?</span>
      </a>
    </div>
  </section>

  {/* Certificates*/}
  <section className="py-10 px-6 md:px-20 flex flex-col items-center">
    <img 
      src={image}
      alt="Certificate" 
      className="rounded-lg mb-6 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5"
    />

    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Certification(s)</h2>
    <img 
      src={certificate}
      alt="Official Certificate" 
      className="rounded-lg "
      style={{ width: 'auto' }}
    />
  </section>
</div>


    </div>
  );
};

export default Products;
