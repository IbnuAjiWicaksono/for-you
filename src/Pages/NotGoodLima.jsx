import React from 'react'
import pentol9 from '../images/pentol9.gif'
import { Link } from 'react-router-dom';


const NotGoodtiga = () => {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center h-full"  style={{fontFamily:"Poppins"}}>
      <h1 className="text-xl mx-10">Yakin mau males terus? yaudah deh mungkin butuh waktu ya, kalau udh mau cerita langsung kabarin aja okey! </h1>
      <img src={pentol9} alt="Pentol 1" className="mr-10"/>
      <div className="flex grid-col-2 pt-10 gap-2">
        <div>
        <Link to="/">
        <button className="text-white font-semibold bg-violet-500 hover:bg-white hover:text-violet-500 px-8 py-3">
        <h1 className="text-sm">Iya Okey!</h1>
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
