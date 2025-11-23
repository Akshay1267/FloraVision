import React, { useState } from "react";
import border from "../assets/border.png";
import borderDown from "../assets/borderDown.png";
import blurrect from "../assets/blurrect.png";
import dots from "../assets/dots.png";
import besto2plant from "../assets/besto2plant.png";

export default function OurBesto2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const plants = [
    { name: "Plant 1", image: besto2plant },
    { name: "Plant 2", image: besto2plant },
    { name: "Plant 3", image: besto2plant },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plants.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plants.length) % plants.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-[#1B2316]">
      <div className="max-w-6xl w-full">
        {/* Header with border */}
        <div className="relative text-center mb-32">
          <h4 className="text-white text-5xl font-light tracking-wide relative z-10">
            Our Best o2
          </h4>
          {/* <img 
            src={borderDown} 
            alt="border decoration" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto pointer-events-none mt-2"
          /> */}
          <img
            src={border}
            alt="border decoration"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto pointer-events-none ml-28"
          />
        </div>

        {/* Main Content Card */}
        <div className="relative min-h-[600px]">
     
          <img
            src={blurrect}
            alt="blur background"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12">
            {/*  Plant Image */}
            <div className="flex items-center justify-center">
              <img
                src={plants[currentSlide].image}
                alt="plant"
                className="w-full h-auto object-contain scale-150"
                // className='w-150 h-150'
              />
            </div>

          
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-medium text-white opacity-75">
                We Have Small And Best O2 Plants Collection's
              </h2>

              <p className="leading-relaxed text-white opacity-75">
                Oxygen-producing plants, often referred to as "O2 plants," are
                those that release oxygen into the atmosphere through the
                process of photosynthesis.
              </p>

              <p className="leading-relaxed text-white opacity-75">
                Many plants can help filter out pollutants and toxins from the
                air, such as formaldehyde, benzene, and trichloroethylene. This
                makes the air cleaner and healthier to breathe.
              </p>

              {/* Controls */}
              <div className="flex items-center justify-between pt-4 ">
                <button className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300">
                  Explore
                </button>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="text-white text-2xl hover:text-green-300 transition-all duration-300"
                  >
                    <i className="ri-arrow-left-s-line"></i>
                  </button>

                  <span className="text-white/70 text-sm">
                    0{currentSlide + 1}/0{plants.length}
                  </span>

                  <button
                    onClick={nextSlide}
                    className="text-white text-2xl hover:text-green-300 transition-all duration-300"
                  >
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="flex justify-center mt-20 mb-8 text-white">
          <img src={dots} alt="pagination dots" className="h-2" />
        </div>
      </div>
    </div>
  );
}
