import React from "react";
import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <div style={{ fontFamily: 'Raleway, sans-serif' }}>
    <div className="bg-gray-800 text-white p-10 mt-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-3">Address</h3>
          <p className="mb-1">K-151, MIDC, Waluj Chhatrapati Sambhaji Nagar, Maharashtra</p>
          <p className="mb-3">www.ecosenseappliances.com</p>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="mb-1">admin@ecosenseappliances.com</p>
          <p className="mb-3">+91- 91588 90105</p>
          <h3 className="font-bold mb-3">Social</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" className="text-white text-2xl hover:text-pink-500">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com" className="text-white text-2xl hover:text-blue-700">
              <LinkedIn />
            </a>
            <a href="https://www.youtube.com" className="text-white text-2xl hover:text-red-600">
              <YouTube />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">About</h3>
          <p className="mb-1">Impact with Zeropad</p>
          <p className="mb-1">Sustainable Development Goals</p>
          <p className="mb-1">Meet the Team</p>
          <p className="mb-3">Visit Ecosense Appliances</p>
          <h3 className="font-bold mb-2">Product</h3>
          <p className="mb-1">Product Features</p>
          <p className="mb-1">Benefits</p>
          <p className="mb-1">Beneficiary</p>
          <p className="mb-1">Product Details</p>
          <p>Legal Certification(s)</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Community</h3>
          <p className="mb-1">Success Stories</p>
          <p className="mb-1">User Community Initiatives</p>
          <p className="mb-1">Social Feed</p>
          <p className="mb-1">Educating Society</p>
          <p className="mb-1">Book Workshop Session</p>
          <p className="mb-3">Community Forum</p>
          <h3 className="font-bold mb-2">Corporate</h3>
          <p className="mb-1">How to get started?</p>
          <p>Contact Form</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
