import React from 'react'
import pentol6 from '../images/pentol6.gif'
import { Link } from 'react-router-dom';


const NotGooddua = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full" style={{fontFamily:"Poppins"}}>
      <div className="absolute mr-80">
        <Link to="/NotGoodtiga">
        <button className="text-white font-semibold bg-red-500 hover:bg-white hover:text-red-500 px-5 py-1">
        <h1 className="text-sm" style={{fontSize:"10px"}}>Males ah...</h1>
        </button>
        </Link>
        </div>
      <h1 className="text-xl mx-10">Eaa gabisa! ayo cepet cerita dibilang...</h1>
      <img src={pentol6} alt="Pentol 1" className="mr-10"/>
      <div className="flex grid-col-2 pt-10 gap-2">
        <div>
        <Link to="/GoodDua">
        <button className="text-white font-semibold bg-green-500 hover:bg-white hover:text-green-500 px-6 py-2">
        <h1 className="text-sm">Oke aku cerita</h1>
        </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NotGooddua
