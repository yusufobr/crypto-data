import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Coins() {
  const { coins } = useSelector((state) => state.coins);
  const navigate = useNavigate();

  return (
    <div className="container p-2 mx-auto grid grid-cols-2 gap-4">
      {coins.map((coin) => (
        <div
          onClick={() => navigate(`/coin/${coin.id}`)}
          className="flex flex-col h-[100%] gap-4 bg-gray-100 pb-[%100] relative"
        >
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
            <span className="text-3xl uppercase font-extrabold text-center text-gray-300 ">{coin.id}</span>
          </div>
          <div className="p-2 h-32">
            <span>{coin.symbol}</span>
            <span>{coin.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coins;
