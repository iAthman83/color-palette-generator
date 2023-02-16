import React from "react";

const ColorCard = ({ color }) => {
  return (
    <div className="bg-white rounded-lg w-60 h-80 flex flex-col items-center p-2 cursor-pointer transition-all hover:scale-110">
      <div className={`bg-[${color}] w-56 h-64 rounded-lg`}></div>
      <p className="mt-4 font-semibold uppercase">{color}</p>
    </div>
  );
};

export default ColorCard;
