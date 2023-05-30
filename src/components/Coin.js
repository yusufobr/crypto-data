import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const { coins } = useSelector((state) => state.coins);

  console.log(coins);

  const coinInfos = coins.find((coin) => coin.id === coinId);
  console.log(coinInfos);

  return (
    <div className="container mx-auto flex flex-col gap-4 bg-gray-200 p-2">
      <span className="mb-8" onClick={() => navigate("/")}>
        back
      </span>
      <div className="flex flex-col gap-2">
        <span>{coinInfos.id}</span>
        <span>{coinInfos.symbol}</span>
        <span>{coinInfos.name}</span>
      </div>
    </div>
  );
}

export default Coin;
