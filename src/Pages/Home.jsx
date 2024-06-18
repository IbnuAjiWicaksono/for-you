import React from 'react'
import pentol1 from '../images/pentol1.gif';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl" style={{fontFamily:"Poppins"}}>Halo kamu!</h1>
      <img src={pentol1} alt="Pentol 1" className="mr-10"/>
      <div className="pt-10">
        <Link to="/Second">
        <button className="text-white font-semibold bg-violet-500 hover:bg-white hover:text-violet-500 px-8 py-2">
        <h1 className="text-sm" style={{fontFamily:"Poppins"}}>Halo!</h1>
        </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Home
