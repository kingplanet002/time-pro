
import React, { useState, useEffect } from 'react';
import type { City } from '../types';

interface WorldClockProps {
  city: City;
}

const WorldClock: React.FC<WorldClockProps> = ({ city }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: city.timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: city.timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const timeString = currentTime.toLocaleTimeString('en-GB', timeOptions);
  const dateString = currentTime.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 transform hover:scale-105 transition-transform duration-300 ease-in-out h-64">
      <img
        src={`https://picsum.photos/seed/${city.imageKeyword}/400/300`}
        alt={`View of ${city.name}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
        <div>
          <h2 className="text-2xl font-bold">{city.name}</h2>
          <p className="text-lg text-gray-300">{city.country}</p>
        </div>
        <div className="text-right">
          <p className="text-5xl font-mono font-extrabold tracking-wider">
            {timeString}
          </p>
          <p className="text-md text-gray-400">{dateString}</p>
        </div>
      </div>
    </div>
  );
};

export default WorldClock;
