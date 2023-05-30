import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import arrowIcon from "./assets/arrow.svg";

function Coins() {
  const { coins } = useSelector((state) => state.coins);
  const navigate = useNavigate();

  return (
    <div className="container p-2 mx-auto grid grid-cols-2 gap-4">
      {coins.map((coin) => (
        <div
          onClick={() => navigate(`/coin/${coin.id}`)}
          className="flex flex-col h-[100%] gap-4 bg-gray-100 pb-[%100] relative cursor-pointer rounded"
        >
          <div className="p-3 h-48 flex flex-col z-10 justify-between items-end">
            <img width={25} alt="arrow" src={arrowIcon} />
            <div className="flex flex-col items-end">
              <span className="text-2xl font-semibold">{coin.name}</span>
              <span>
                <span>
                  {parseFloat(coin.priceUsd).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  USD
                </span>
              </span>
            </div>
          </div>
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
            <span className="text-3xl uppercase font-extrabold text-center text-gray-300 ">
              {coin.id.slice(0, 16)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coins;
