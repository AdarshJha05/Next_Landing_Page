import React from "react";

const GetStartedNow = () => {
  return (
    <div className="relative w-full min-h-[755px] bg-white flex justify-center items-center py-[80px] px-[20px]">
      <div className="flex flex-row justify-center items-center p-0 gap-[93px] w-full max-w-[1160px]">
        <div className="w-[553.93px] h-[594.56px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('https://novajobs.us/hero-section/doodles/recurtment.jpg')] bg-cover bg-center bg-no-repeat shadow-[0px_0px_8px_rgba(0,0,0,0.25)] rounded-[20px] flex-none"></div>
        <div className="flex flex-col items-start p-0 gap-6 w-[513.3px] max-w-full flex-none">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full relative">
                <h1 className="font-['Roboto',sans-serif] not-italic font-bold text-[41.62px] leading-[120%] text-[#111111] mb-6 m-0">Effortless Recruitment Websites For Your Business</h1>
                <p className="font-['Roboto',sans-serif] not-italic font-normal text-[16px] leading-[180%] text-[#111111] mb-6">Empower Your recruitment Agency With The Ultimate Solution For Creation Professional, Feature-rich Website At An Affordable Monthly Cost.</p>
                <button className="font-['Poppins',sans-serif] font-medium cursor-pointer transition-all duration-300 text-[18px] py-[10px] px-[28px] rounded-[20px] bg-[#1c2957] text-white border-0" variant="primary">Get Started Now</button>
            </div>
          </div>
          <div className="w-full flex flex-col items-start p-0 gap-6">
            <p className="font-['Roboto',sans-serif] not-italic font-semibold text-[16px] leading-[180%] text-[#111111] m-0">Trusted By</p>
            <div className="flex flex-row items-center p-0 gap-6">
                <img className="w-[89.13px] h-[81.46px] flex-none object-contain" src="https://novajobs.us/hero-section/doodles/duns-Logo.png" alt="Trusted Company 1" />
                <img className="w-[89.13px] h-[81.46px] flex-none object-contain" src="https://novajobs.us/hero-section/doodles/sbe-logo.png" alt="Trusted Company 2" />
                <img className="w-[89.13px] h-[81.46px] flex-none object-contain" src="https://novajobs.us/hero-section/doodles/dbe-logo.png" alt="Trusted Company 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedNow;
