'use client'
import React from 'react'
import Link from 'next/link';

const Scope = () => {
  return (
    <div className="bg-[#1C2957] flex flex-col justify-center items-center py-[50px] px-[20px] text-white">
      <div className="flex flex-col items-center max-w-[1200px] w-full gap-5">
        <h1 className="font-['Poppins',sans-serif] font-bold text-[42px] leading-[120%] text-white m-0 relative z-10">Now serving South Florida!</h1>
        <p className="font-['Quicksand',sans-serif] font-medium text-base leading-[180%] text-white m-0 max-w-[600px]">Through our SCOPE Outreach Program, we're bringing AI-powered job tools, local dashboards, and direct employer connections to your community.</p>
      </div>
      <div className="flex flex-row items-center max-w-[1400px] w-full gap-5 mt-5">
        <div className="flex-1 relative flex flex-col gap-6">
            <div className='flex flex-col gap-5 mt-5'>
                <Link className="bg-[#D02032] rounded-[20px] flex items-center gap-5 px-[30px] py-5 relative overflow-hidden no-underline text-white transition-all duration-300 ease-in-out cursor-pointer" href="https://margatefl.novajobs.us/">
                <span className="font-['Poppins', sans-serif] font-bold text-[36px] text-white">01</span>
                <div className="w-[2px] h-[40px] bg-white/40" ></div>
                <h3 className="font-['Roboto',sans-serif] font-bold text-[18px] text-white m-0">City of Margate</h3>
                </Link>
                <Link className="bg-[#D02032] rounded-[20px] flex items-center gap-5 px-[30px] py-5 relative overflow-hidden no-underline text-white transition-all duration-300 ease-in-out cursor-pointer" href="https://hallandalebeach.novajobs.us/">
                <span className="font-['Poppins', sans-serif] font-bold text-[36px] text-white">02</span>
                <div className="w-[2px] h-[40px] bg-white/40" ></div>
                <h3 className="font-['Roboto',sans-serif] font-bold text-[18px] text-white m-0">Hallandale Beach</h3>
                </Link>
                <Link className="bg-[#D02032] rounded-[20px] flex items-center gap-5 px-[30px] py-5 relative overflow-hidden no-underline text-white transition-all duration-300 ease-in-out cursor-pointer" href="https://pompanobeach.novajobs.us/v">
                <span className="font-['Poppins', sans-serif] font-bold text-[36px] text-white">03</span>
                <div className="w-[2px] h-[40px] bg-white/40" ></div>
                <h3 className="font-['Roboto',sans-serif] font-bold text-[18px] text-white m-0">Pompano Beach</h3>
                </Link>
            </div>
        </div>
        <div className="flex-1 rounded-[20px] h-[300px] mt-5 w-[70%] bg-white bg-[url('https://novajobs.us/hero-section/doodles/scope-img.jpg')] bg-contain bg-no-repeat bg-center flex justify-center items-center"></div>
      </div>
    </div>
  )
}

export default Scope
