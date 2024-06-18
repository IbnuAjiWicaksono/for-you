import React from 'react'
import pentol3 from '../images/pentol3.gif'
import { Link } from 'react-router-dom';

const Good = () => {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-xl mx-10" style={{fontFamily:"Poppins"}}>Yeayy semoga terus baik dan bahagia selalu ya! Aku punya sesuatu buat kamu!</h1>
      <img src={pentol3} alt="Pentol 1" className="mr-10"/>
      <div className="pt-10">
        <Link to="/Love">
        <button className="text-white font-semibold bg-violet-500 hover:bg-white hover:text-violet-500 px-8 py-2">
        <h1 className="text-sm" style={{fontFamily:"Poppins"}}>Iya makasi. Apatu!</h1>
        </button>
        </Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Good
