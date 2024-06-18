import React from 'react'
import pentol4 from '../images/pentol4.gif'
import { Link } from 'react-router-dom';

const Love = () => {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-xl mx-10" style={{fontFamily:"Poppins"}}>Aku ada love buat kamu biar hari kamu berbunga-bunga💓💓💓</h1>
      <img src={pentol4} alt="Pentol 1" className="mr-10"/>
      <div className="pt-10">
        <Link to="/for-you/">
        <button className="text-white font-semibold bg-violet-500 hover:bg-white hover:text-violet-500 px-8 py-2">
        <h1 className="text-sm" style={{fontFamily:"Poppins"}}>Kabur!!!</h1>
        </button>
        </Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Love
