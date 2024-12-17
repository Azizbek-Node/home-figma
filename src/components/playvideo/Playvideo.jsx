import React from "react";

const PlayVideo = () => {
  return (
    <div className="text-center px-4 py-8 font-sans">
      <p className="text-blue-500 text-sm font-semibold mb-2">PROMOTION</p>
      <h1 className="text-3xl font-bold text-black mb-2">Winter Collections</h1>
      <p className="text-gray-600 text-base mb-6">
        Introducing the new winter jackets.
      </p>
      <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://via.placeholder.com/1120x544"
          alt=""
          className="w-full h-auto object-cover"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white bg-opacity-80 text-black rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
          <span className="text-2xl">&#9654;</span>
        </button>
      </div>
    </div>
  );
};

export default PlayVideo;
