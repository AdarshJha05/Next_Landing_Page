"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleJobseekerLogin = () => {
    router.push("/user/login");
    setIsOpen(false);
  };

  const handleEmployerLogin = () => {
    router.push("/employer");
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/aboutus" },
    { name: "Jobs", href: "/user/jobs" },
    { name: "Media", href: "/media" },
  ];

  return (
    <header className="w-full bg-white border-b-[3px] border-b-[#1c2957] shadow-[0px_2px_5px_rgba(0,0,0,0.05)] sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-[60px] py-4 relative">
        {/* Logo */}
        <div className="mr-4 border-none shrink-0">
          <Link href="/">
            <img
              className="h-[36px] sm:h-[40px] w-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out border-none hover:scale-105"
              src="https://apiwl.novajobs.us/novaJobs/assets/226/logo/NovaUS.649f79957e5090a75022.png"
              alt="company logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans font-medium text-[17px] text-[#454545] no-underline relative transition-colors duration-200 ease-in-out hover:text-[#1C2957]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3 relative">
          <button
            onClick={handleJobseekerLogin}
            className="font-sans font-medium cursor-pointer transition-all duration-300 ease-in-out text-[15px] px-5 py-2 rounded-[18px] bg-transparent text-[#1c2957] border border-[#1c2957] hover:bg-[#1c2957] hover:-translate-y-0.5 hover:text-white hover:shadow-lg"
          >
            Jobseeker Login
          </button>

          <button
            onClick={handleEmployerLogin}
            className="font-sans font-medium cursor-pointer transition-all duration-300 ease-in-out text-[15px] px-5 py-2 rounded-[18px] bg-[#1c2957] text-white border border-[#1c2957] hover:bg-[#212529] hover:-translate-y-0.5 hover:text-white hover:shadow-lg"
          >
            Employer Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center text-[#1c2957]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-6 pt-2 bg-white border-t border-gray-100 gap-5">
          {/* Mobile Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-medium text-[16px] text-[#454545] transition-colors duration-200 hover:text-[#1C2957]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={handleJobseekerLogin}
              className="w-full font-sans font-medium cursor-pointer transition-all duration-300 ease-in-out text-[15px] px-5 py-3 rounded-[18px] bg-transparent text-[#1c2957] border border-[#1c2957] hover:bg-[#1c2957] hover:text-white"
            >
              Jobseeker Login
            </button>

            <button
              onClick={handleEmployerLogin}
              className="w-full font-sans font-medium cursor-pointer transition-all duration-300 ease-in-out text-[15px] px-5 py-3 rounded-[18px] bg-[#1c2957] text-white border border-[#1c2957] hover:opacity-90"
            >
              Employer Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
