"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();
  return (
    <section className="bg-[#1c2957] text-white px-4 sm:px-6 lg:px-5 py-[90px] sm:py-[110px] lg:py-[120px] text-center relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* Top Badge */}
      <p className="text-white px-4 py-2 inline-block rounded-full border border-[#dee2e6] text-sm sm:text-base">
        Novajobs.us - Powered by AI, Driven by You.
      </p>

      {/* Heading */}
      <div className="flex justify-center mt-6">
        <h1 className="max-w-[950px] font-bold text-[38px] leading-[48px] sm:text-[52px] sm:leading-[62px] lg:text-[62px] lg:leading-[74px] mb-[30px] relative z-[3] text-white text-center">
          Hello, <span className="text-[#d02032]">I'm Aria,</span>
          <br />
          Your Personal Career Advisor!
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 sm:gap-5 mb-10 flex-wrap relative z-30">
        <button onClick={() => {
              router.push("/user/login");
        }} className="bg-[#d02032] hover:bg-[#b91c2c] transition-all duration-300 text-white px-6 py-3 rounded-full cursor-pointer text-sm sm:text-base hover:-translate-y-0.5 hover:shadow-lg">
          Jobseeker
        </button>

        <button onClick={() => {
              router.push("/employer");
        }} className="bg-[#d02032] hover:bg-[#b91c2c] transition-all duration-300 text-white px-6 py-3 rounded-full cursor-pointer text-sm sm:text-base hover:-translate-y-0.5 hover:shadow-lg">
          Employer
        </button>

        <button onClick={() => {
              router.push("/white-label");
        }} className="bg-[#d02032] hover:bg-[#b91c2c] transition-all duration-300 text-white px-6 py-3 rounded-full cursor-pointer text-sm sm:text-base hover:-translate-y-0.5 hover:shadow-lg">
          A Partner
        </button>
      </div>

      {/* Search Form */}
      <form className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center bg-white rounded-[24px] sm:rounded-[30px] overflow-hidden w-full max-w-[650px] mx-auto mb-5 relative z-[3] shadow-lg">
        
        <input
          type="text"
          placeholder="Job title, Salary, or Companies..."
          className="flex-1 border-none px-5 py-4 text-[#333] focus:outline-none text-[15px] sm:text-[16px] font-sans w-full"
        />

        <button
          type="submit"
          className="font-['Poppins',sans-serif] font-medium cursor-pointer transition-all duration-300 ease-in-out text-[15px] sm:text-[16px] px-5 py-3 sm:py-2 mx-3 my-3 sm:my-2 rounded-[18px] bg-[#d02032] hover:bg-[#b91c2c] text-white border border-[#d02032]"
        >
          Explore Now
        </button>
      </form>

      {/* Popular Categories */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 sm:gap-7 mt-10 relative z-30 flex-wrap">
        
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] sm:text-[18px] text-[#adacac] m-0">
          Popular Categories:
        </p>

        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          <Link
            className="bg-transparent font-['Clash_Display',sans-serif] font-light text-[15px] sm:text-[17px] tracking-[-0.017em] text-white cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#d02032]"
            href="/user/jobs"
          >
            Product Manager
          </Link>

          <Link
            className="bg-transparent font-['Clash_Display',sans-serif] font-light text-[15px] sm:text-[17px] tracking-[-0.017em] text-white cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#d02032]"
            href="/user/jobs"
          >
            Frontend Dev
          </Link>

          <Link
            className="bg-transparent font-['Clash_Display',sans-serif] font-light text-[15px] sm:text-[17px] tracking-[-0.017em] text-white cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#d02032]"
            href="/user/jobs"
          >
            Data Analyst
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;