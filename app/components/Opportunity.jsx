'use client'
import React, { useEffect, useRef } from "react";

const Opportunity = () => {
    const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += 1; // speed (increase = faster)

      // reset when reached end
      if (
        scrollAmount >=
        container.scrollWidth - container.clientWidth
      ) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 20); // speed control (lower = smoother/faster)

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative py-[60px] bg-[linear-gradient(180deg,#f6fafe_0%,#f3f5fe_50%,#eff4fb_100%)]">
      <div className="mx-4 sm:mx-[30px] mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-black text-[45px] mb-2 font-medium leading-[1.2]">
            The <span className="text-[#1c2957]">Next Big Opportunity</span> Awaits
          </h2>
          <p className="text-[18px] text-[#666] mt-2.5">
            Find trending jobs at top-tier companies, handpicked daily
          </p>
        </div>

        <div className="flex gap-2.5">
          <button className="w-10 h-10 rounded-full bg-[#1c2957] text-white flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>

          <button className="w-10 h-10 rounded-full bg-[#1c2957] text-white flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-smooth gap-[25px] px-[80px]">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="min-w-[320px] h-[340px] bg-white rounded-[8px] p-5 flex-shrink-0 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
          >
            {/* top */}
            <div className="flex justify-between">
              <span className="bg-[#ff7a18] text-white py-[5px] px-[12px] rounded-[20px] text-[12px] font-semibold">
                Hot Jobs
              </span>

              <button className="bg-transparent border-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </div>

            {/* company */}
            <div className="flex items-center gap-3 my-3">
              <div className="bg-white border-2 border-[#f1f5f9] rounded-[16px] shadow-[0_8px_16px_rgba(0,0,0,0.1)] h-20 w-20 p-2">
                <img
                  className="w-full h-full object-contain rounded-full"
                  src="https://novajobs.us/static/media/circle.f619a646710240a7aa33.png"
                  alt="company"
                />
              </div>

              <div>
                <div className="text-black text-[14px] font-bold">NovaJobs.us</div>
                <div className="text-[12px] text-[#999]">
                  Posted 4/13/2026
                </div>
              </div>
            </div>

            {/* details */}
            <div className="flex-grow">
              <h3 className="text-[16px] font-semibold line-clamp-2 text-black">
                Java Tech Lead
              </h3>

              <div className="text-[13px] text-[#666] mt-1 flex items-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Chicago, Illinois, United States
              </div>

              <div className="text-[13px] text-[#666] mt-1 flex items-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                6-8 year
              </div>

              <div className="text-[14px] text-[#7c3aed] font-bold flex items-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                $50 /hr
              </div>
            </div>

            {/* buttons */}
            <div className="flex gap-2.5 mt-2.5">
              <button className="flex-1 bg-[#1c2957] text-white rounded-[8px] p-2">
                View Job
              </button>
              <button className="flex-1 bg-[#BD2130] text-white rounded-[8px] p-2">
                Quick Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunity;