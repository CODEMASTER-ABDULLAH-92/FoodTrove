import React, { useState, useEffect } from 'react';
import { asset } from '../assets/asset';

const TimeBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check if targetDate exists in localStorage
    let targetDate = localStorage.getItem('targetDate');
    if (!targetDate) {
      // If no targetDate in localStorage, calculate and store it
      const newTargetDate = new Date();
      newTargetDate.setDate(newTargetDate.getDate() + 365); // 365 days from now
      targetDate = newTargetDate.toISOString();
      localStorage.setItem('targetDate', targetDate);
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const timeDifference = target - now;

      if (timeDifference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Update countdown every second
    const interval = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Runs only on initial mount

  return (
    <div className="relative">
      <div className="absolute max-h-[275px] max-w-[440px] sm:max-w-[500px] shadow-lg p-6 bg-[#FDECE8] left-[5%] sm:left-[10%] top-[13%] lg:top-[20%] rounded-md">
        <h1 className="md:text-4xl text-2xl font-bold text-[#F53E32]">
          35% <span className="text-2xl text-black">OFF</span>
        </h1>
        <h1 className="sm:text-2xl text-[20px] font-semibold text-gray-800 mt-2">
          Amazing Deal on Organic Food!
        </h1>
        <p className="text-[#7a7a7a] sm:text-sm text-[10px] sm:mt-2">
          Don't miss out on this special offer! Fresh and organic products delivered right to your doorstep.
        </p>

        {/* Countdown Timer */}
        <div className="sm:mt-6 mt-1 flex items-center justify-between border-2 border-[#7a7a7a] rounded-md px-6 py-4 sm:max-w-[350px] max-w-[300px] bg-white shadow-md">
          <div className="text-center">
            <span className="text-2xl font-bold text-black">{timeLeft.days}</span>
            <p className="text-sm text-gray-500">Days</p>
          </div>
          <span className="text-2xl font-extrabold text-gray-800">:</span>
          <div className="text-center">
            <span className="text-2xl font-bold text-black">{String(timeLeft.hours).padStart(2, '0')}</span>
            <p className="text-sm text-gray-500">Hrs</p>
          </div>
          <span className="text-2xl font-extrabold text-gray-800">:</span>
          <div className="text-center">
            <span className="text-2xl font-bold text-black">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <p className="text-sm text-gray-500">Min</p>
          </div>
          <span className="text-2xl font-extrabold text-gray-800">:</span>
          <div className="text-center">
            <span className="text-2xl font-bold text-black">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <p className="text-sm text-gray-500">Sec</p>
          </div>
        </div>
      </div>
      <img src={asset.sale} alt="Sale Banner" className="w-full min-h-[400px]" />
    </div>
  );
};

export default TimeBanner;

