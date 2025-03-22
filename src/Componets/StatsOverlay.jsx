
import React from "react";

const StatsOverlay = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="relative max-w-screen-lg w-[1440px] m-auto flex flex-col items-center sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-12">
        
        
        <div className="w-[410px] h-[542px] bg-gray-300 hidden sm:block sm:w-[410px] sm:h-[542px]" />
        
        
        <div className="absolute bottom-85 right-80 z-20 bg-green-600 sm:text-xl text-white font-bold text-xl p-4 rounded-md w-64">
          <span className="text-black text-3xl sm:text-3xl">3X</span> <br />
          <p className="text-black text-base">
            ESG High Performers Deliver A Higher Total Shareholder Return
          </p>
        </div>

      
        <div className="absolute bottom-45 left-80 z-10 transform -translate-y-1/2 bg-[#3A3A3A] text-white text-lg p-4 rounded-md w-72 hidden sm:block">
          <span className="text-3xl font-bold">98%</span> <br />
          Of CEOs Agree Sustainability Is Their Responsibility
        </div>

        
        <div className="absolute bottom-35 z-5 right-75 bg-gray-700 text-white text-md p-4 rounded-md w-64">
          <span className="text-2xl font-bold float-right">18%</span> <br />
          Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
        </div>

        
        <div className="absolute bottom-2 left-70 bg-white text-green-700 text-lg p-4 rounded-md w-80 hidden sm:block">
          <span className="text-3xl font-bold">37%</span> <br />
          Of The World's Largest Companies Have A Public Net Zero Target. Nearly
          All Are Off Track.
        </div>
      </div>

      
      <div className="sm:hidden w-full flex flex-col items-center justify-center gap-6 sm:gap-12 m-auto  ">
        
        
        <div className="bg-green-600 text-white font-bold text-xl p-4  rounded-md w-90 ">
          <span className="text-black text-3xl sm:text-3xl">3X</span> <br />
          <p className="text-black text-base">
            ESG High Performers Deliver A Higher Total Shareholder Return
          </p>
        </div>

        
        <div className="bg-[#3A3A3A] text-white text-lg p-4 rounded-md w-full">
          <span className="text-3xl font-bold">98%</span> <br />
          Of CEOs Agree Sustainability Is Their Responsibility
        </div>

        
        <div className="bg-gray-700 text-white text-md p-4 rounded-md w-full">
          <span className="text-2xl font-bold float-right">18%</span> <br />
          Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
        </div>

        
        <div className="bg-white text-green-700 text-lg p-4 rounded-md w-full ">
          <span className="text-3xl font-bold">37%</span> <br />
          Of The World's Largest Companies Have A Public Net Zero Target. Nearly
          All Are Off Track.
        </div>
      </div>
    </div>
  );
};

export default StatsOverlay;

