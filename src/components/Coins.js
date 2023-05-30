import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Coins() {
  const { coins } = useSelector((state) => state.coins);
  const navigate = useNavigate()

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4">
      {coins.map((coin) => (
        <div onClick={() => navigate(`/coin/${coin.id}`)} className="flex gap-4">
          <span>{coin.id}</span>
          <span>{coin.symbol}</span>
          <span>{coin.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Coins;
