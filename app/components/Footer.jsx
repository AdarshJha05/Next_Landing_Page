"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-white border-t-[3px] border-t-[#1c2957] px-12.5 pt-15 pb-7.5 flex flex-col gap-10 text-[#1c2957] font-['Poppins',sans-serif]">
      {/* top */}
      <div className="flex justify-between items-start flex-wrap gap-10">
        {/* left */}
        <div className="flex-1 min-w-[250px] flex flex-col">
          <div className="flex items-center  h-[60px]">
            <Link className="inline-flex items-center" href="/">
              <img
                className="h-[42px] w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                src="https://apiwl.novajobs.us/novaJobs/assets/226/logo/NovaUS.649f79957e5090a75022.png"
                alt="Company Logo"
              />
            </Link>
          </div>
          <p className="text-[14px] leading-[24px] text-[#454545] mt-[15px] mb-[10px]">
            At NovaJobs.us, we connect skilled professionals with leading
            employers across industries through innovative hiring solutions. Our
            platform simplifies recruitment, enabling businesses to find
            qualified candidates efficiently while helping job seekers discover
            meaningful career opportunities.
          </p>
          <div className="flex gap-3.5 mt-5 ">
            <img
              className="h-[55px] w-auto max-w-full align-middle border-none"
              src="https://novajobs.us/hero-section/doodles/dbe-logo.png"
              alt="Cert 1"
            />
            <img
              className="h-[55px] w-auto max-w-full align-middle border-none"
              src="https://novajobs.us/hero-section/doodles/sbe-logo.png"
              alt="Cert 2"
            />
            <img
              className="h-[55px] w-auto max-w-full align-middle border-none"
              src="https://novajobs.us/hero-section/doodles/dbe-logo.png"
              alt="Cert 3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 min-w-[180px]">
          <h4 className="text-[18px] font-semibold mb-[10px] text-[#1c2957]">
            For Job Seekers
          </h4>
          <Link
            href="/user/jobs"
            className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
          >
            Search Jobs
          </Link>
          <Link
            href="/user/login"
            className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
          >
            Create Free account
          </Link>
          <Link
            href="/user/jobs"
            className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
          >
            Build AI resume
          </Link>
          <Link
            href="/user/jobs"
            className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
          >
            Skill Test
          </Link>
        </div>
        <div className="flex flex-col gap-2 min-w-[180px]">
          <h4 className="text-[18px] font-semibold mb-[10px] text-[#1c2957]">
            For Employers
          </h4>
          <Link
            href="/employer/login"
            className="text-[15px] leading-[24px] text-[#454545] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
          >
            Post Jobs
          </Link>
        </div>
        <div className="flex flex-col items-start gap-10">
          <div className="flex">
            <div className="flex flex-col gap-2 min-w-[180px]">
              <h4 className="text-[18px] font-semibold mb-[10px] text-[#1c2957]">
                Others
              </h4>
              <Link
                href="/cookies-policy"
                className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
              >
                Cookies Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
              >
                Privacy Policy
              </Link>
              <Link
                href="/support"
                className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
              >
                Support
              </Link>
            </div>
            <div className="flex flex-col gap-2 min-w-[180px]">
              <h4 className="text-[18px] font-semibold mb-[10px] text-[#1c2957]">
                Company
              </h4>
              <Link
                href="/aboutus"
                className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
              >
                Services
              </Link>
              <Link
                href="/terms-of-use"
                className="text-[15px] leading-[24px] text-[#1c2957] no-underline hover:text-[#1c2957] transition-colors duration-200 ease-in-out bg-transparent"
              >
                Terms of use
              </Link>
            </div>
          </div>
          <div className="min-w-[220px] flex flex-col gap-3">
            <form className="flex items-center gap-1.5" action="">
              <input
                className="border border-[#ccc] rounded-[3px] px-[10px] py-2 text-[14px] w-full"
                type="email"
                placeholder="Enter Your Email..."
                name=""
                id=""
                required
              />
              <button
                type="submit"
                className="bg-[#d02032] hover:bg-[#b3091d] text-[#fff] px-4 py-2 rounded-[3px] transition-colors duration-200 ease-in-out cursor=pointer text-[14px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#ddd] w-full"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
        <p className="text-[14px] text-[#454545]">
          © 2026 NovaJob.Us In All Rights Reserved
        </p>
        <div className="flex gap-3">
          <Link href="https://www.facebook.com/novajobs.us"
            target="_blank" className="w-[35px] h-[35px] bg-[#1c2957] text-white flex items-center justify-center rounded-[4px] transition-all duration-300 ease-in-out text-[18px] hover:bg-[#d02032] hover:-text-[#1c2957]">
            f
          </Link>
          <Link href="https://www.linkedin.com/company/novajobs-us"
            target="_blank" className="w-[35px] h-[35px] bg-[#1c2957] text-white flex items-center justify-center rounded-[4px] transition-all duration-300 ease-in-out text-[18px] hover:bg-[#d02032] hover:-text-[#1c2957]">
            in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
