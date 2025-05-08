import React, { useState, useEffect } from 'react';
import { init, send } from "@emailjs/browser";
import CommunityImage from './images/Community1.png';
import CommunityImage2 from './images/community2.png';
import { Instagram, Youtube } from 'lucide-react';
import initiatives1 from './images/initiatives1.png';
import initiatives2 from './images/initiative2.png';
import character1 from './images/character1.png';
import character2 from './images/character2.png';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ChevronLeft, ChevronRight, ChevronDown, X } from 'lucide-react';
import logo from '../Images/Gallery/logo.png';
import ig1 from '../Images/Gallery/igImage2.png';
import ig2 from '../Images/Gallery/igImage1.png';
import info from '../Images/infographs.png';
import axios from "axios";
import left from '../Images/LeftArrow.png';
import right from '../Images/RightArrow.png';
import Story1 from '../Images/Story1.png';
import Story2 from '../Images/Story2.png';
import Story3 from '../Images/Story3.png';
import { Link } from 'react-router-dom';
import video1 from './images/video1.png';
import video2 from './images/video2.png';
import video3 from './images/video3.png';
import play from './images/play.png';
import article1 from '../Images/Article01.png';
import article2 from '../Images/Article02.png';
import article3 from '../Images/Article03.png';
import article4 from '../Images/Article04.png';
import { useLocation } from 'react-router-dom';

const Community = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);
  const location = useLocation();
  const [wordLimit, setWordLimit] = useState(20); // Default word limit

  // Update word limit based on screen size
  const updateWordLimit = () => {
    const width = window.innerWidth;
    if (width < 640) { // Small screens
      setWordLimit(5); // Limit to 10 words
    } else if (width < 768) { // Medium screens
      setWordLimit(8); // Limit to 20 words
    } else { // Large screens
      setWordLimit(12); // Limit to 30 words
    }
  };

useEffect(() => {
  updateWordLimit(); // Set initial word limit
  window.addEventListener('resize', updateWordLimit); // Update on resize

  return () => {
    window.removeEventListener('resize', updateWordLimit); // Cleanup
    };
  }, []);



  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  useEffect(() => {
      init("FTAQL3ICrGmk58Zyq"); // Replace with your EmailJS user ID
    }, []);
   
    const [successMessage, setSuccessMessage] = useState("");
   
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobileNo: "",
    countryCode: "+91",
    address: "",
    sessionType: "",
    emailId: "",
    selectedDate: null,
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    company: false,
    mobileNo: false,
    address: false,
    sessionType: false,
    emailId: false,
    selectedDate: false,
  });

  const countryCodes = ["+91", "+1", "+44", "+61", "+81", "+49", "+33"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  

  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day) => {
    if (day) {
      const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setFormData({ ...formData, selectedDate });
      setFieldErrors({ ...fieldErrors, selectedDate: false });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });

    if (name === "emailId") {
      validateEmail(value);
    }

    if (name === "mobileNo") {
      validateMobileNo(value);
    }
  };

  const handleCountryCodeChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co|in|gov|org|net|edu|io|info)$/i;
    if (!email) {
      setEmailError("");
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email with domain like .com, .co, .in, .gov, etc.");
    } else {
      setEmailError("");
    }
  };

  const validateMobileNo = (number) => {
    const mobileRegex = /^\d{10}$/;
    setFieldErrors({ ...fieldErrors, mobileNo: !mobileRegex.test(number) });
  };

  const handleSessionTypeSelect = (type) => {
    setFormData({ ...formData, sessionType: type });
    setFieldErrors({ ...fieldErrors, sessionType: false });
  };

  const validateForm = () => {
    const errors = {
      name: !formData.name,
      company: !formData.company,
      mobileNo: !formData.mobileNo || fieldErrors.mobileNo,
      address: !formData.address,
      sessionType: !formData.sessionType,
      emailId: !formData.emailId || !!emailError,
      selectedDate: !formData.selectedDate,
    };

    setFieldErrors(errors);

    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const requestData = {
      name: formData.name,
      company: formData.company,
      mobileno: `${formData.countryCode}${formData.mobileNo}`,
      address: formData.address,
      selectiondate: formData.selectedDate.toLocaleDateString("en-GB"), // Updated parameter name
      sessiontype: formData.sessionType,
      email: formData.emailId,
    };

    console.log('Request Data:', requestData); // Log the request data
    const templateParams = {
      name: formData.name,
      company: formData.company,
      mobileno: `${formData.countryCode}${formData.mobileNo}`,
      address: formData.address,
      selectiondate: formData.selectedDate.toLocaleDateString("en-GB"), // Updated parameter name
      sessiontype: formData.sessionType,
      email: formData.emailId,        
    };
    send("service_uv6b075", "template_jb88c5c", templateParams)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      setSuccessMessage("Email sent successfully!");
      setSuccessMessage("Session booked successfully!");
     // resetForm();
    })
    .catch((error) => {
      console.error("Error while sending email:", error);
      setEmailError("Failed to send email. Please try again later.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
    /*try {
      const response = await fetch(
        'http://61.2.226.57:85/RIMMService.asmx/SendSessionEmail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text(); // Get the error response text
        throw new Error(`Failed to fetch session data. Status: ${response.status}, Message: ${errorText}`);
      }

      const textData = await response.text(); // Get the response text
      console.log('Response Data:', textData); // Log the response data

      // Check if the response is valid JSON
      let jsonData;
      try {
        jsonData = JSON.parse(textData);
      } catch (e) {
        // If parsing fails, handle it as plain text
        jsonData = { message: textData }; // Wrap the plain text in an object
      }

      console.log('Session Data:', jsonData);
      alert(jsonData.message || "Session booked successfully!"); // Use the message from the response
    } catch (error) {
      console.error("Error booking session:", error);
      alert(`Failed to book session. Please try again later. Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }*/
  };
  const isSelectedDate = (day) => {
    if (!formData.selectedDate || !day) return false;

    return (
      formData.selectedDate.getDate() === day &&
      formData.selectedDate.getMonth() === currentMonth.getMonth() &&
      formData.selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isPastDate = (day) => {
    if (!day) return false;

    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < today;
  };

  const stories = [
    {
      id: 1,
      image: Story1,
      title: 'August Homes Society',
      heading: 'The Menstrual Incinerator Project',
      shortDescription: 'Zeropad, has been a resounding success in transforming the way which August Homes...',
      fullDescription:
        'Zeropad, has been a resounding success in transforming the way which August Homes society in Chh. Sambhaji Nagar to manage their menstrual waste. By introducing the Zeropad and installing in each tower within society, resident have access to affordable, eco-friendly incinerators. we’ve empowered all women and girls in society to dispose of menstrual products safely and hygienically, addressing both health and environmental concerns. The Zeropad device has been installed in society since past 3 years with success.',
    },
    {
      id: 2,
      image: Story2,
      title: 'Endress + Hauser',
      heading: 'Success Story of Corporate Company',
      shortDescription: 'Zeropad, installed at Endress+Hauser company in Chhatrapati Sambhajinagar .....',
      fullDescription: 'Zeropad, installed at Endress+Hauser company in Chhatrapati Sambhajinagar industrial area has empowered their lady employees to dispose their menstrual waste with dignity. The project has not only reduced the stigma surrounding menstruation but also provided a sustainable solution to the growing issue of waste disposal. Over the course of the initiative, the company has seen a significant increase in awareness about menstrual health and hygiene, with more women employee’s confidently managing their periods with dignity.',
    },
    {
      id: 3,
      image: Story3,
      title: 'Sanjay Techno Products Pvt Ltd',
      heading: 'Success Story from Manufacturing shopfloor workforce',
      shortDescription: 'The Menstrual Incinerator Project..',
      fullDescription: 'The Menstrual Incinerator Project using Zeropad Incinerator has successfully transformed menstrual waste management at Sanjay Techno Products Pvt Ltd, not just by introducing a practical and environmentally friendly solution but also by empowering women in the process. Beyond the environmental benefits, the project has sparked important conversations about menstrual health, lifting the veil of taboo and silence that surrounds menstruation. Women who work on the shopfloor are also empowered to not only switch to sanitary napkins with installation of vending machine but also to proper disposal system within company...',
    },
  ];

  const [expandedStory, setExpandedStory] = useState(null);
  const toggleReadMore = (id) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  const testimonials = [
    { id: 1, name: "Ms. Aparna Deshpande", designation: "Manager (Rytnow Systems)", description: "Zeropad as a facility dedicated to promoting hygiene and environmental responsibility, this product has significantly improved our waste management process. Effectively handles disposal, making it a safe and sustainable solution for managing sanitary waste." },
    { id: 2, name: "Ms. Mamta Kudale", designation: "Sr. Engg Quality Management (Endress+Hauser)", description: "We initially used to face problems to dispose the used pads, and now with Zeropad it has become an easier solution! The ashes created are used as fertilizers leading to a great environmental friendly practice." },
    { id: 3, name: "Dr. Namita Sony", designation: "Physician (MGM College & Hospital)", description: "Very useful, easy to use, no maintenance, and need of hour to protect our environment from non degradable sanitary napkin waste" },
    { id: 4, name: "Dr. Smita Bajaj", designation: "Pediatrician Govt. Medical college Sambhaji Nagar", description: "Installing the sanitary napkin disposal machine has been extremely beneficial in maintaining hygiene and cleanliness. It provides a convenient and eco-friendly way to dispose of used napkins, reducing waste-related issues and ensuring a more sanitary environment. The machine is easy to use, even by adolescent girls, efficient, and has significantly improved overall hygiene standards. Since its installation, there has been a noticeable reduction in improper disposal, making the space cleaner and more comfortable for everyone. This initiative has truly enhanced menstrual hygiene management. Kudos to the team for installing it at August homes." },
  ];

  const getLimitedDescription = (description) => {
    const words = description.split(' ');
    return words.length > wordLimit ? words.slice (0, wordLimit).join(' ') + '...' : description;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = window.innerWidth < 768 ? 1 : 3;

  const handleArrowClick = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    if (direction === "right" && currentIndex < testimonials.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const initiatives = [
    {
      title: 'Zero Waste Drives',
      description: 'Encourage proper disposal methods and reduce environmental impact by advocating for reusable options.',
      image: 'path-to-image-1.jpg',
    },
    {
      title: 'Hygiene Awareness Workshop',
      description: 'Raising awareness about menstrual health, proper usage, safe disposal practices, and promoting sustainable alternatives.',
      image: 'path-to-image-2.jpg',
    },
    {
      title: 'Medical Awareness',
      description: 'Understanding potential health risks of certain materials and promoting proper menstrual care.',
      image: 'path-to-image-3.jpg',
    },
    {
      title: 'Responsible Disposal',
      description: 'Promoting proper waste management with dedicated disposal bins or composting options.',
      image: 'path-to-image-4.jpg',
    }
  ];

  const content = {
    videos: [
      { id: 1, title: "How to Use?", image: video1, link: "https://youtu.be/82GtROuJars?feature=shared" },
      { id: 2, title: "The Disposal Dilemma!", image: video2, link: "https://www.instagram.com/reel/DGzsNriIMxK/?igsh=MXV2aDdnYjgwdzJo" },
      { id: 3, title: "Success Stories", image: video3, link: "https://youtu.be/ZROoG2d-zzw?si=4rR1L978YemrPSdB" }
    ],
    articles: [
      { id: 1, title: "Understanding Menstrual Health", image: article1, pdf: "/A1 Article.pdf" },
      { id: 2, title: "Understanding Menstrual Health", image: article2, pdf: "/Article 2.pdf" },
      { id: 3, title: "Understanding Menstrual Health", image: article3, pdf: "/A3 Artical.pdf" },
      { id: 4, title: "Understanding Menstrual Health", image: article4, pdf: "/A4 Artical.pdf" }
    ],
    info: [
      {
        id: 1,
        description: "Ira’s period challenges",
        image: info,
        link: "/Infographs"
      }
    ]
  };

  const [currentTab, setCurrentTab] = useState('instagram');
  const [activeTab, setActiveTab] = useState("videos");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({
    username: '_zeropad_',
    profile_picture_url: logo
  });

  const fetchInstagramPosts = async () => {
    try {
      setIsLoading(true);
      setError(false);

      const mockPosts = [
        {
          id: '1',
          caption: 'Say hello to Prerana! Prerana is here to guide, support, and inspire your journey with Zeropad.',
          media_url: ig1,
          permalink: 'https://www.instagram.com/_zeropad_/',
          timestamp: '2024-03-15T10:00:00Z'
        },
        {
          id: '2',
          caption: 'Introducing ZeroPad! Say goodbye to unhygienic waste disposal.',
          media_url: ig2,
          permalink: 'https://www.instagram.com/_zeropad_/',
          timestamp: '2024-03-14T09:00:00Z'
        }
      ];

      setPosts(mockPosts);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  return (
    <div className='lg:-mb-28 -mb-96'>
      {/* Community image */}
      <div className="relative w-full max-w-[2500px] mx-auto px-4">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={CommunityImage}
              alt="Community"
              className="w-full h-full object-cover" // Changed to object-cover
            />
            <div className="absolute inset-0 bg-[#FB6F92] bg-opacity-50 pointer-events-none"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Our Community
            </h1>
          </div>
        </div>
      </div>
      {/* Community Success Stories */}
      <section id="Success_Stories" >
        <div className="max-w-[1328px] mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 mt-10">Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {stories.map((story, index) => (
              <div key={story.id} className="bg-white flex flex-col items-start">
                <div className="relative w-full max-w-[348px] h-[273px] mb-4">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="w-full max-w-[348px] text-left">
                  <h3 className="text-xl font-bold mb-2 text-left">{story.title}</h3>
                  <h4 className="text-lg font-semibold mb-2">{story.heading}</h4>
                  <p className="text-gray-600 mb-4 text-justify">
                    {expandedStory === story.id
                      ? story.fullDescription
                      : story.shortDescription}
                  </p>
                  <button
                    className="text-white bg-[#000000] px-4 py-2 rounded-[25px] hover:bg-[#000000] transition"
                    onClick={() => toggleReadMore(story.id)}
                  >
                    {expandedStory === story.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="max-w-[1500px] mt-10 mx-auto px-0 py-8">
  <div className="w-full bg-[#FB6F92] h-auto sm:h-[555px] rounded-[20px] flex flex-col items-center justify-center relative">
    <h2 className="text-4xl font-bold text-white text-center w-full mt-4 mb-10">Testimonials</h2>
    <div className="w-full flex overflow-hidden justify-center">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col items-center text-center"
          >
            <h4 className="font-semibold text-xl text-white mb-2">{testimonial.name}</h4>
            <p className="text-white text-sm mb-4">{testimonial.designation}</p>
            <div className="w-full sm:w-[70%] flex items-center justify-center">
  <p className="text-white text-xs sm:text-sm md:text-base lg:text-base break-words leading-relaxed w-full text-pretty max-w-[80ch] mx-auto">
    {expandedTestimonial === testimonial.id
      ? testimonial.description
      : getLimitedDescription(testimonial.description)}
  </p>
</div>
            {testimonial.description.split(' ').length > wordLimit && (
              <button
                className="text-white underline mt-2"
                onClick={() =>
                  setExpandedTestimonial(
                    expandedTestimonial === testimonial.id ? null : testimonial.id
                  )
                }
              >
                {expandedTestimonial === testimonial.id ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Arrow buttons remain same */}
    <div className="absolute bottom-4 left-4">
      <button
        className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => handleArrowClick("left")}
        disabled={currentIndex === 0}
      >
        <img src={left} alt="Left Arrow" className="w-14 h-14" />
      </button>
    </div>

    <div className="absolute bottom-4 right-4">
      <button
        className={`${currentIndex >= testimonials.length - visibleCards ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => handleArrowClick("right")}
        disabled={currentIndex >= testimonials.length - visibleCards}
      >
        <img src={right} alt="Right Arrow" className="w-14 h-14" />
      </button>
    </div>
  </div>
</div>


      {/* Community Initiatives Section */}
      <section id="community-initiatives" className="relative mt-24 pb-24 py-12 mb-10">
        <div className="absolute left-0 top-[-50px] w-auto text-left">
          <div className="relative w-full max-w-[90%] md:max-w-[700px] ml-0 md:ml-0">
            <img src={CommunityImage2} alt="Community Awareness" className="w-full h-auto rounded-lg" />
            <h2 className="absolute top-1/3 left-4 transform -translate-y-1/2 text-[clamp(16px, 4vw, 24px)] lg:text-3xl xl:text-4xl font-bold text-black px-2 sm:px-4 py-1 sm:py-2 rounded-md max-w-[90%] whitespace-nowrap text-left mt-10 sm:mt-10 md:mt-8 ">
              User Community Initiatives
            </h2>
          </div>
        </div>

        <div className="relative w-full min-h-[calc(100vh+10vw)] md:min-h-[calc(120vh+25vw)] sm:min-h-[calc(150vh+5vw)] mt-80">
          <div className="absolute inset-0 bg-[#FB6F92] transform -skew-y-[15deg] origin-top-left z-[-1] mt-32 min-h-[100vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[80vh]"></div>

          <div className="absolute bottom-[20px] left-0 lg:left-70 w-[clamp(40px,30vw,280px)] hidden lg:block max-w-[280px] character">
            <img src={character2} alt="Character" className="w-full h-auto" />
          </div>

          <div className="absolute right-0 lg:right-70 w-[clamp(40px,30vw,280px)] hidden lg:block max-w-[280px] character" style={{ top: 'calc(-23.9px - 26.8vw)' }}>
            <img src={character1} alt="Character" className="w-full h-auto" />
          </div>
        </div>

        <div className="absolute top-[calc(180px+18vw)] md:top-[calc(150px+5vw)] sm:top-[calc(120px+15vw)] left-1/2 transform -translate-x-1/2 w-full max-w-[2528px] px-0 lg:px-0 mx-0 z-10 pt-12 md:pt-16 pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center">
            <div className="flex justify-center md:justify-start w-full pl-0">
              <div className="relative w-full max-w-[650px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[600px] aspect-[7/5]">
                <img src={initiatives1} alt="Initiative 1" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 text-white text-left w-full">
              <div className="px-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-20 text-left">Zero Waste Drives</h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">Encourage proper disposal methods, and reduce environmental impact by advocating for reusable options.</p>
              </div>
              <div className="px-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-left">Hygiene Awareness Workshop</h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">Raising awareness about menstrual health, proper usage, safe disposal practices, and promoting sustainable alternatives, ensuring health.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 mt-8 md:mt-12 items-center">
            <div className="flex flex-col gap-4 md:gap-6 text-white text-left w-full">
              <div className="px-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-left">Medical Awareness</h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">Understanding the potential health risks of certain materials, and promoting proper menstrual care to prevent infections and discomfort.</p>
              </div>
              <div className="px-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-left">Responsible Disposal</h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">Proper waste management systems, such as dedicated disposal bins or composting options, to ensure the reduction of landfill waste, promoting hygiene.</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full pr-0">
              <div className="relative w-full max-w-[650px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[600px] aspect-[7/5] mb-5">
                <img src={initiatives2} alt="Initiative 2" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Workshop */}
      <section class ="Book_Workshop_Session">
      <div className="w-full mt-30 px-4 md:px-10 lg:px-20">
        <h1 className="text-3xl font-bold text-center mb-8">Book a Workshop Session!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Details</h2>

            {['name', 'company', 'emailId'].map((field) => (
              <input
                key={field}
                type={field === 'emailId' ? 'email' : 'text'}
                name={field}
                placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}*`}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full p-3 bg-gray-100 rounded-md ${fieldErrors[field] ? 'border-2 border-red-500' : ''}`}
              />
            ))}

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="flex flex-col w-full sm:w-1/2 md:w-1/2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="p-3 bg-gray-100 rounded-md w-full h-15" // Set a fixed height
                  >
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                </div>
              <input
                type="text"
                name="mobileNo"
                placeholder="Mobile Number*"
                value={formData.mobileNo}
                onChange={handleChange}
                className={`w-full lg:w-full md:w-full xl:w-3/4 2xl:w-3/4 p-3 bg-gray-100 rounded-md ${fieldErrors.mobileNo ? 'border-2 border-red-500' : ''}`}
              />
            </div>

            <textarea
              name="address"
              placeholder="Address*"
              value={formData.address}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-100 rounded-md h-24 ${fieldErrors.address ? 'border-2 border-red-500' : ''}`}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          <div className="p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Select Date</h2>
            {formData.selectedDate && (
              <p className="text-lg">Selected Date: {formData.selectedDate.toLocaleDateString("en-GB")}</p>
            )}

            <div className={`bg-white w-full rounded-md ${fieldErrors.selectedDate ? 'border-red-500 p-2' : 'p-2'}`}>
              <div className="flex items-center justify-between mb-4">
                <button onClick={handlePrevMonth} className="p-2 rounded-full bg-[#FB6F92]">
                  <ChevronLeft size={20} />
                </button>
                <span className="text-lg font-medium">{formatMonthYear(currentMonth)}</span>
                <button onClick={handleNextMonth} className="p-2 rounded-full bg-[#FB6F92]">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={index} className="text-sm font-medium">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`h-8 w-8 flex items-center justify-center rounded-full mx-auto ${!day ? 'invisible' : ''} ${isSelectedDate(day) ? 'bg-[#FB6F92] text-white' : ''} ${!isSelectedDate(day) && !isPastDate(day) ? 'hover:bg-gray-100 cursor-pointer' : ''} ${isPastDate(day) ? 'text-gray-300 cursor-not-allowed' : ''}`}
                    onClick={() => !isPastDate(day) && handleDateSelect(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Preferred Session Type</h2>

            <div className={`space-y-4 ${fieldErrors.sessionType ? 'border-2 border-red-500 p-2 rounded-md' : ''}`}>
              {['In-Person', 'Virtual'].map((type) => (
                <button
                  key={type}
                  className={`w-full max-w-[238px] h-20 py-4 px-3 rounded-full border-2 transition-colors ${formData.sessionType === type ? 'bg-[#FB6F92] text-white' : 'border-[#FB6F92] text-[#FB6F92] hover:bg-[#FB6F92] hover:text-white'}`}
                  onClick={() => handleSessionTypeSelect(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="mt-10 w-full flex flex-col items-center">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-32 h-12 text-white font-semibold rounded-md transition-colors ${isSubmitting ? "bg-[#FB6F92] cursor-not-allowed" : "bg-[#FB6F92] hover:bg-[#FB6F92]"
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                {/* Success Message Below the Button */}
                {successMessage && <p className="text-green-600 font-medium mt-4">{successMessage}</p>}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Menstrual Waste Statistics Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center mt-10 md:mt-30 lg:mt-10 font-['Raleway']">
        <h2 className="text-center text-[clamp(20px,4vw,36px)] font-semibold text-[#FB6F92] mb-8">
          “MENSTRUAL WASTE IN INDIA”
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
          <div>
            <h3 className="text-[clamp(24px,3vw,32px)] font-bold text-[#FB6F92]">121 Million</h3>
            <p className="text-lg text-gray-700">Girls and women use sanitary pads in India</p>
          </div>
          <div>
            <h3 className="text-[clamp(24px,3vw,32px)] font-bold text-[#FB6F92]">3840</h3>
            <p className="text-lg text-gray-700">Sanitary napkins used by a woman in her lifetime</p>
          </div>
          <div>
            <h3 className="text-[clamp(24px,3vw,32px)] font-bold text-[#FB6F92]">113000 Tons</h3>
            <p className="text-lg text-gray-700">Of menstrual waste is generated per annum in India</p>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section id="Social_Feed">
  <section className="w-full px-4 py-10 flex flex-col items-center mt-10">
    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
      Social Feed
    </h2>
    <div className="flex space-x-6 mb-8">
      <button
        className="p-3 rounded-full flex items-center justify-center bg-[#FB6F92] w-[60px] h-[60px] transition-all duration-200 "
        style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
      >
        <Instagram className="text-white w-[30px] h-[30px]" />
      </button>
    </div>

    <div
      className="bg-[#FB6F92] p-10 rounded-[20px] w-full max-w-[1100px]"
      style={{ minHeight: '350px' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center p-0">
        {posts.slice(0, 2).map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 w-full max-w-[400px] h-[550px] hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={profile.profile_picture_url}
                alt={profile.username}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#FB6F92]"
              />
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{profile.username}</h3>
              </div>
              <Instagram className="text-black w-6 h-6 ml-auto" />
            </div>

            <p className="text-sm text-gray-700 line-clamp-3 mb-4">{post.caption}</p>

            <div
              className={`rounded-xl overflow-hidden w-full  ${post.id === '1' ? 'h-[400px]' : 'h-[350px]'}`}
            >
              <img
                src={post.media_url}
                alt="Post content"
                className={`w-full h-full object-contain ${post.id === '1' ? 'py-1' : 'py-1  '}`}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
</section>


      {/*Educating Society*/}
      <section className="Educating_the_Society">
        <div className="min-h-screen flex flex-col items-center py-12 mt-[50px] mb-80 sm:mb-80 lg:mb-10 xl:mb-10 2xl:mb-0 md:mb-50">
          <h1 className="text-black font-bold text-3xl lg:text-4xl">
            Educating the Society!
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
            {["videos", "articles", "infographs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border-2 border-[#FB6F92] transition-all duration-300 ${activeTab === tab ? "bg-white text-[#FB6F92]" : "bg-[#FB6F92] text-white"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="w-full max-w-full bg-[#FB6F92] rounded-lg p-5 sm:p-10 overflow-hidden">
  {
    activeTab === "videos" ? (
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.videos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="relative group flex-shrink-0">
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={play}
                    alt="Play Button"
                    className="w-12 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 lg:w-18 lg:h-12"
                  />
                </div>
              </div>
              <h3 className="text-left text-white mt-2 text-lg sm:text-xl font-semibold">
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    ) : activeTab === "articles" ? (
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-2">
        <div className="flex flex-row space-x-6 py-4 min-w-max">
          {content.articles.map((article, index) => (
            <a
              key={index}
              href={article.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-96"
            >
              <img
                src={article.image}
                alt="Open Article PDF"
                className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    ) : activeTab === "infographs" ? (
      <div className="flex justify-center">
        <Link to={content.info[0].link}>
          <img
            src={content.info[0].image}
            alt="Open Infograph"
            className="w-full h-auto max-h-[300px] object-contain rounded-lg cursor-pointer"
          />
        </Link>
      </div>
    ) : null
  }
</div>


        </div>
      </section>

    </div>
  );
};

export default Community;