'use client';
import React, { useRef, useState, useEffect } from "react";

const OurClients = () => {
  const testimonials = [1, 2, 3, 4];
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // scroll to card
  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth / 2; // adjust smoothness
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  // detect scroll → active dot
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;

    const index = Math.round(scrollLeft / (width / 2));
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#1c2957] py-20 px-5 flex flex-col items-center text-white">

      {/* Title */}
      <h2 className="text-[2.75rem] font-bold font-['Poppins',sans-serif] mb-8 text-center text-white">
        Our Clients <span className="text-[#d02032] ml-1">Feedback</span>
      </h2>

      <div className="w-full max-w-[1160px] overflow-hidden">

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth"
        >

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 flex-shrink-0 px-2.5"
            >

              <div className="w-full border border-white rounded-[18px] p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6 bg-transparent min-h-[260px] box-border">

                <img
                  className="w-20 h-20 sm:w-[100px] sm:h-[100px] object-cover rounded-[10px] border border-black"
                  src="https://novajobs.us/testimonials/sarah.jpg"
                  alt="Sarah"
                />

                <div className="flex flex-col justify-between text-left flex-1 min-h-[230px]">

                  <p className="font-['Hind',sans-serif] text-[14px] sm:text-[15px] leading-6 mb-4 text-white">
                   This website made finding a job so much easier. I love how simple it is to filter my search and set up alerts for the kinds of positions I'm interested in. I landed two interviews in my first week!
                  </p>

                  <div>
                    <h3 className="font-['Inter',sans-serif] text-[16px] sm:text-[18px] font-semibold m-0 text-white">
                      Sarah
                    </h3>

                    <p className="text-[12px] text-[#cccccc]">Seattle</p>

                    <div className="flex gap-[3px] text-[#d02032] text-[22px]">
                      <span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-[#d02032] scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurClients;