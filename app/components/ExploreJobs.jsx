"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ExploreJobs = () => {
  const router = useRouter();
  return (
    <section className="relative w-full min-h-[250px] bg-white bg-[url('https://novajobs.us/hero-section/doodles/jobs-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-5 py-[60px] overflow-hidden">
      <div className="max-w-[1300px] w-full flex gap-[30px] justify-center flex-wrap">
        <div className="box-border relative w-[381px] min-h-[160px] bg-white border border-[#e0e0e0] rounded-[20px] p-5 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-[40px] h-[40px] bg-[#d02032] rounded-[6px] flex items-center justify-center shrink-0">
              <img
                className="w-6 h-6 object-contain align-middle border-none"
                src="https://novajobs.us/hero-section/doodles/observation.png"
                alt="Looking For a Job"
              />
            </div>
            <h3 className="font-semibold text-[16px] text-[#111111] m-0 flex-1">
              Looking For a Job
            </h3>
          </div>
          <p className="font-['Poppins',sans-serif] font-light text-[13px] leading-[18px] text-[#757575] mt-3 mr-0 mb-0 ml-0">
            Search Jobs with advanced filters and the power of AI
          </p>
          <div className="mt-1 self-start">
            <button
              onClick={() => {
                router.push("/user/login");
              }}
              variant="primary"
              className="font-['Poppins',sans-serif] font-medium cursor-pointer transition-all duration-300 ease-in-out text-[16px] px-5 py-2 rounded-[18px] bg-[#1c2957] text-white border-none hover:-translate-y-1 hover:shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
        <div className="box-border relative w-[381px] min-h-[160px] bg-white border border-[#e0e0e0] rounded-[20px] p-5 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-[40px] h-[40px] bg-[#d02032] rounded-[6px] flex items-center justify-center shrink-0">
              <img
                className="w-6 h-6 object-contain align-middle border-none"
                src="https://novajobs.us/hero-section/doodles/observation2.png"
                alt="Looking For a Job"
              />
            </div>
            <h3 className="font-semibold text-[16px] text-[#111111] m-0 flex-1">
              Are you an Employer?
            </h3>
          </div>
          <p className="font-['Poppins',sans-serif] font-light text-[13px] leading-[18px] text-[#757575] mt-3 mr-0 mb-0 ml-0">
            Post jobs and find the perfect candidates for your company
          </p>
          <div className="mt-1 self-start">
            <button
              onClick={() => {
                router.push("/employer");
              }}
              variant="primary"
              className="font-['Poppins',sans-serif] font-medium cursor-pointer transition-all duration-300 ease-in-out text-[16px] px-5 py-2 rounded-[18px] bg-[#1c2957] text-white border-none hover:-translate-y-1 hover:shadow-lg"
            >
              Post Job
            </button>
          </div>
        </div>
        <div className="box-border relative w-[381px] min-h-[160px] bg-white border border-[#e0e0e0] rounded-[20px] p-5 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1  hover:shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-[40px] h-[40px] bg-[#d02032] rounded-[6px] flex items-center justify-center shrink-0">
              <img
                className="w-6 h-6 object-contain align-middle border-none"
                src="https://novajobs.us/hero-section/doodles/observation.png"
                alt="Looking For a Job"
              />
            </div>
            <h3 className="font-semibold text-[16px] text-[#111111] m-0 flex-1">
              Discover Opportunities
            </h3>
          </div>
          <p className="font-['Poppins',sans-serif] font-light text-[13px] leading-[18px] text-[#757575] mt-3 mr-0 mb-0 ml-0">
            Discover career opportunities that match your skills
          </p>
          <div className="mt-1 self-start">
            <button
              onClick={() => {
                router.push("/user/jobs");
              }}
              variant="primary"
              className="font-['Poppins',sans-serif] font-medium cursor-pointer transition-all duration-300 ease-in-out text-[16px] px-5 py-2 rounded-[18px] bg-[#1c2957] text-white border-none hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Now
            </button>
          </div>
        </div>
        <div className="box-border relative w-[381px] min-h-[160px] bg-white border border-[#e0e0e0] rounded-[20px] p-5 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-[40px] h-[40px] bg-[#d02032] rounded-[6px] flex items-center justify-center shrink-0">
              <img
                className="w-6 h-6 object-contain align-middle border-none"
                src="https://novajobs.us/hero-section/doodles/observation2.png"
                alt="Looking For a Job"
              />
            </div>
            <h3 className="font-semibold text-[16px] text-[#111111] m-0 flex-1">
              White Label
            </h3>
          </div>
          <p className="font-['Poppins',sans-serif] font-light text-[13px] leading-[18px] text-[#757575] mt-3 mr-0 mb-0 ml-0">
            Get your own branded job portal with logo, colors & domain.
          </p>
          <div className="mt-1 self-start">
            <button
              onClick={() => {
                router.push("/white-label");
              }}
              variant="primary"
              className="font-['Poppins',sans-serif] font-medium cursor-pointer transition-all duration-300 ease-in-out text-[16px] px-5 py-2 rounded-[18px] bg-[#1c2957] text-white border-none hover:-translate-y-1 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreJobs;
