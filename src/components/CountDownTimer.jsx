// src/components/CountdownTimer.jsx
import React from "react";
import Countdown from "react-countdown";


const CountdownTimer = ({ targetDate }) => {
    // Custom renderer
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-red-500 text-xl font-bold">Deal Ended</span>;
    }
    return (
      <div className="flex space-x-6 text-center">
        <div>
          <p className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            {days}
          </p>
          <span className="text-sm mt-1 block">DAYS</span>
        </div>
        <div>
          <p className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            {hours}
          </p>
          <span className="text-sm mt-1 block">HRS</span>
        </div>
        <div>
          <p className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            {minutes}
          </p>
          <span className="text-sm mt-1 block">MINS</span>
        </div>
        <div>
          <p className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            {seconds}
          </p>
          <span className="text-sm mt-1 block">SECS</span>
        </div>
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
