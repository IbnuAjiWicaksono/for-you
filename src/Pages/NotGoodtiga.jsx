import React from 'react'
import pentol7 from '../images/pentol7.gif'
import { Link } from 'react-router-dom';


const NotGoodtiga = () => {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center h-full"  style={{fontFamily:"Poppins"}}>
      <div className="absolute ml-80">
        <Link to="/NotGoodEmpat">
        <button className="text-white font-semibold bg-red-500 hover:bg-white hover:text-red-500 px-2 py-2">
        <h1 className="text-xs" style={{fontSize:"8px"}}>Males bgt dah</h1>
        </button>
        </Link>
        </div>
      <h1 className="text-xl mx-10">Coba lagi besti kalau bisa~~</h1>
      <img src={pentol7} alt="Pentol 1" className="mr-10"/>
      <div className="flex grid-col-2 pt-10 gap-2">
        <div>
        <Link to="/GoodDua">
        <button className="text-white font-semibold bg-green-500 hover:bg-white hover:text-green-500 px-6 py-2">
        <h1 className="text-sm">iya aku cerita deh</h1>
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
