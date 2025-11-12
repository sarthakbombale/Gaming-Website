import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
      {/* 🎮 Gaming-style loader */}
      <div className="flex flex-col items-center gap-4">
        {/* Logo with pulse effect */}
        <img
          src="/images/illu-logo.png"
          alt="logo"
          className="w-20 animate-pulse drop-shadow-[0_0_10px_#7c3aed]"
        />

        {/* Loading Text */}
        <p className="text-[#babaff] text-xl font-bold animate-bounce tracking-wide">
          Loading Arena...
        </p>

        {/* Spinner */}
        <div className="relative w-16 h-16">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 border-4 border-purple-700/40 rounded-full animate-ping"></div>

          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

          {/* Center dot */}
          <div className="absolute inset-3 bg-purple-400 rounded-full blur-[2px] opacity-80"></div>
        </div>

        {/* Optional tagline */}
        <p className="text-sm text-gray-400 mt-2 italic">
          Preparing your battleground...
        </p>
      </div>
    </div>
  );
};

export default Loader;

