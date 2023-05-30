import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adjustNumber } from "../helpers/adjustNumber";
import { fetchHistory } from "../redux/coin/coinsSlice";

function Coin() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const { coinId } = useParams();
  const { coins } = useSelector((state) => state.coins);
  const { history } = useSelector((state) => state.coins)

  const coinInfos = coins.find((coin) => coin.id === coinId);

  useEffect(() => {
    dispatch(fetchHistory(coinId))
  }, [])

  return (
    <div className="container mx-auto flex flex-col gap-4 bg-gray-100 p-2">
      <span className="mb-8" onClick={() => navigate("/")}>
        back
      </span>

      <div className="flex flex-col gap-2">
        <span className="text-3xl uppercase font-extrabold text-center text-gray-300 ">
          {coinInfos.id.slice(0, 16)}
        </span>

        <div>
          {Object.entries(coinInfos).map(([property, value], index) => (
            <div className="flex justify-between text-lg" key={property}>
              <span>{property}</span>
              {3 < index && index < 9 ? (
                <span>{value ? adjustNumber(value) + " $" : "not available"}</span>
              ) : index === 9 || index === 10 ? (
                <span>{adjustNumber(value) + " %"}</span>
              ) : (
                <span>{value ? value : 'not available'}</span>
              )}

            </div>
          ))}
        </div>

        {/* <span>{coinInfos.id}</span>
        <span>{coinInfos.symbol}</span>
        <span>{coinInfos.name}</span>
        <span>{coinInfos.rank}</span>
        <span>{adjustNumber(coinInfos.supply)}</span>
        <span>{adjustNumber(coinInfos.maxSupply)}</span>
        <span>{adjustNumber(coinInfos.marketCapUsd)}</span>
        <span>{adjustNumber(coinInfos.volumeUsd24Hr)}</span>
        <span>{adjustNumber(coinInfos.priceUsd)}</span>
        <span>{adjustNumber(coinInfos.changePercent24Hr)}</span>
        <span>{adjustNumber(coinInfos.vwap24Hr)}</span>
        <span>{coinInfos.explorer}</span> */}
      </div>
    </div>
  );
}

export default Coin;
