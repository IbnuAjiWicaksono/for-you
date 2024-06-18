import React from 'react';
import pentol4 from '../images/pentol4.gif';

const Good = () => {
  const redirectToExternalUrl = () => {
    window.location.href = 'https://ig.me/m/ibnuajiwicaksono';
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-xl mx-15" style={{fontFamily:"Poppins"}}>
        Ayo mau cerita apa? Jangan sungkan, setiap orang pasti butuh tempat cerita. Jangan malu, tidak semua orang kuat mendem sendirian.
      </h1>
      <img src={pentol4} alt="Pentol 1" className="mr-10" />
      <div className="pt-10">
        <button
          className="text-white font-semibold bg-violet-500 hover:bg-white hover:text-violet-500 px-8 py-2"
          onClick={redirectToExternalUrl}
        >
          <h1 className="text-sm" style={{fontFamily:"Poppins"}}>OTW!</h1>
        </button>
      </div>
    </div>
  );
};

export default Good;
