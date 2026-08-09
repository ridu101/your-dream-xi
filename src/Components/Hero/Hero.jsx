// import React from 'react';
import heroBg from "../../assets/bg-shadow.png";
import cricLogo from "../../assets/banner-main.png";

const Hero = () => {
    return (
        <div className="max-w-350  mx-auto">
                {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 mt-4">
        <div
          className="relative min-h-105 md:min-h-125 rounded-2xl overflow-hidden  "
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Hero Content */}
          <div className="relative z-10 min-h-105 md:min-h-125 flex items-center justify-center text-center">
            <div className="flex flex-col items-center max-w-4xl px-4">
              {/* Cricket Logo */}
              <img
                src={cricLogo}
                alt="Cricket"
                className="w-40 md:w-52 lg:w-60 mb-4 object-contain"
              />

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base md:text-lg text-black-300">
                Beyond Boundaries Beyond Limits
              </p>

              {/* Button */}
              <button className="mt-5 btn bg-[#E7FE29] text-black border-none hover:bg-[#d4eb1f] font-bold rounded-xl">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Hero;