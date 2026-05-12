import React from 'react'

const ChoosePlan = () => {
  return (
    <div className="bg-[#f9fafb] py-20 px-5 flex flex-col items-center text-center">

      <h2 className="font-['Poppins',sans-serif] text-[2.75rem] font-extrabold text-[#1c2957] mb-1">
        Choose Your <span className='text-[#d02032]'>Perfect Plan</span>
      </h2>

      <p className="text-[#6b7280] max-w-[820px] mx-auto mt-3 mb-4 text-[0.95rem]">
        Try Nova's Premium Tools Free for 7 Days! Enjoy a limited free trial with a set number of credits to explore resumes, jobs, and skill tests before you decide on a plan.
      </p>

      {/* GRID FIXED */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">

        {/* CARD */}
        {[1,2,3,4].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[14px] shadow-[0_6px_18px_rgba(16,24,40,0.06)] p-8 px-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
          >

            <div >

              <div className="mb-4 flex flex-col items-start text-left">
                <h3 className=" text-black text-xl font-extrabold mb-1">Explore</h3>

                <span className="text-[0.85rem] text-gray-500 mt-1">
                  Essential tools to get started
                </span>

                <p className="text-2xl font-extrabold text-[#d02032] mt-[6px] mb-0">
                  $18.95/mth
                </p>
              </div>

              <div className="h-px w-full bg-gray-200/60 my-5"></div>

              <ul className="list-none p-0 m-0 text-left">

                {[
                  "AI Resume + Cover Letter Builder",
                  "Profile Listing & Search",
                  "Search & Apply to Jobs",
                  "Access to Learning Hub",
                  "Career Assessments",
                  "Community Access",
                ].map((text, i) => (
                  <li key={i} className="flex items-center text-[0.95rem] text-gray-700 mb-3">
                    <img
                      className="w-5 h-5 mr-2.5 object-contain"
                      src="https://novajobs.us/hero-section/doodles/tick-icon.png"
                      alt="check"
                    />
                    <span>{text}</span>
                  </li>
                ))}

              </ul>
            </div>

            {/* FIXED BUTTON (was wrong earlier) */}
            <button className="mt-6 bg-[#d02032] text-white py-2.5 rounded-[10px] font-semibold hover:bg-[#b81a28] transition">
              Get Started
            </button>

          </div>
        ))}

      </div>

      <p className="text-[#6b7280] max-w-[820px] mx-auto mt-6 text-[0.95rem]">
        * means features are rolling out & may not be available immediately.
      </p>

    </div>
  )
}

export default ChoosePlan;