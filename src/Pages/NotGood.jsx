import React from 'react'
import pentol5 from '../images/pentol5.gif'
import { Link } from 'react-router-dom';

const NotGood = () => {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-xl mx-10" style={{fontFamily:"Poppins"}}>Loh kenapa ga baik??? sini cerita!</h1>
      <img src={pentol5} alt="Pentol 1" className="mr-10"/>
      <div className="flex grid-col-2 pt-10 gap-2" style={{fontFamily:"Poppins"}}>
        <div>
        <Link to="/GoodDua">
        <button className="text-white font-semibold bg-green-500 hover:bg-white hover:text-green-500 px-6 py-2">
        <h1 className="text-xs">Oke aku cerita</h1>
        </button>
        </Link>
        </div>
        <div>
        <Link to="/NotGooddua">
        <button className="text-white font-semibold bg-red-500 hover:bg-white hover:text-red-500 px-8 py-2">
        <h1 className="text-xs" >Males ah...</h1>
        </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default NotGood
