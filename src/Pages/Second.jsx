import React from 'react'
import pentol2 from '../images/pentol2.gif';
import { Link } from 'react-router-dom';

const Second = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-xl" style={{fontFamily:"Poppins"}}>Gimana Kabarnya?</h1>
      <img src={pentol2} alt="Pentol 1" className="mr-10"/>
      <div className="flex grid-col-2 pt-10 gap-2">
        <div>
        <Link to="/Good">
        <button className="text-white font-semibold bg-green-500 hover:bg-white hover:text-green-500 px-8 py-2">
        <h1 className="text-sm">Baik Banget!</h1>
        </button>
        </Link>
        </div>
        <div>
        <Link to="/NotGood">
        <button className="text-white font-semibold bg-red-500 hover:bg-white hover:text-red-500 px-12 py-2">
        <h1 className="text-sm" style={{fontFamily:"Poppins"}}>Gabaik</h1>
        </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Second
