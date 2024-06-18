import React from 'react'
import pentol8 from '../images/pentol8.gif'
import { Link } from 'react-router-dom';


const NotGoodtiga = () => {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center h-full" style={{fontFamily:"Poppins"}}>
      <div className="absolute ml-60 mb-60">
        <Link to="/NotGoodLima">
        <button className="text-white font-semibold bg-red-500 hover:bg-white hover:text-red-500 px-4 py-1">
        <h1 className="text-sm" style={{fontSize:"6px"}}>MALES TAU GA???</h1>
        </button>
        </Link>
        </div>
      <h1 className="text-xl mx-10">Uuu masih ga kena kan! dibilang ngeyel sih!</h1>
      <img src={pentol8} alt="Pentol 1" className="mr-10"/>
      <div className="flex grid-col-2 pt-10 gap-2">
        <div>
        <Link to="/GoodDua">
        <button className="text-white font-semibold bg-green-500 hover:bg-white hover:text-green-500 px-6 py-2">
        <h1 className="text-sm">Iya siap skarang cerita</h1>
        </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default NotGoodtiga
