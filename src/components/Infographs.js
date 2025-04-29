// src/pages/InfographPage.js
import React from 'react';
import infoWeb from '../Images/infoWebPagge.png';

const InfographPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <img
        src={infoWeb}
        alt="Infographic"
        className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
      />
    </div>
  );
};

export default InfographPage;
