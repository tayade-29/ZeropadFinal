import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const fetchEmailData = async () => {
    try {
      const response = await fetch(
        'http://61.2.226.57:85/RIMMService.asmx/SendContactEmail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: firstName,
            surname: surname,
            designation: designation,
            company: company,
            email: email,
            subject: subject,
            message: message
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch email data. Status: ${response.status}`);
      }

      const textData = await response.text();

      // Check if the response is valid JSON
      let jsonData;
      try {
        jsonData = JSON.parse(JSON.parse(textData).d);
      } catch (error) {
        // If parsing fails, log the response and set an error message
        console.error('Error parsing JSON:', error);
        console.log('Response text:', textData);
        setEmailError("Email sent successfully...");
        return;
      }

      console.log('Email Data:', jsonData);
      setSuccessMessage("Email sent successfully!");
      resetForm();
    } catch (error) {
      console.error('Error fetching Email data:', error);
      setEmailError("An error occurred while sending the email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setSurname("");
    setDesignation("");
    setCompany("");
    setEmail("");
    setSubject("");
    setMessage("");
    setEmailError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format. Please enter a valid email.");
      setSuccessMessage("");
      return;
    }

    setEmailError("");
    setIsSubmitting(true);
    await fetchEmailData();
  };

  return (
    <div style={{ fontFamily: "Raleway" }}>
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="lg:w-1/2 w-full p-8">
          <h1 className="text-3xl font-bold">Contact</h1>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Visit us</h2>
            <p className="text-gray-700">
              Ecosense Appliances Pvt. Ltd., Flat No. TF-1, 4th Floor, Bhagat
              Residency, Corlim Indust. Estate, Corlim, Goa. 403110
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Write us at</h2>
            <a href="mailto:admin@ecosenseappliances.com" className="text-blue-600 hover:underline">
              admin@ecosenseappliances.com
            </a>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Call us</h2>
            <p className="text-gray-700">+91 - 9158890105</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Social</h2>
            <div className="flex space-x-4 mt-2">
              <i className="fab fa-linkedin text-2xl"></i>
              <i className="fab fa-instagram text-2xl"></i>
              <i className="fab fa-youtube text-2xl"></i>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full p-8 transform -translate-y-12 lg:translate-y-0">
          <h2 className="text-2xl font-bold">Contact Form</h2>
          <p className="text-gray-600">
            Fill the form below for "Partnerships & Collaboration".
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 p-3 border rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-1/2 p-3 border rounded bg-gray-200"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-1/2 p-3 border rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-1/2 p-3 border rounded bg-gray-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded bg-gray-200"
              />
            </div>
            <input
              type="text"
              placeholder="Subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 border rounded bg-gray-200"
            />
            <textarea
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded h-32 bg-gray-200"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;