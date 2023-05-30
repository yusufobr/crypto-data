import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adjustNumber } from "../helpers/adjustNumber";
import { fetchHistory } from "../redux/coin/coinsSlice";
import Chart from "./Chart";

function Coin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [theGraphData, setTheGraphData] = useState({});

  const { coinId } = useParams();
  const { coins } = useSelector((state) => state.coins);
  const { history } = useSelector((state) => state.coins);

  const coinInfos = coins.find((coin) => coin.id === coinId);

  useEffect(() => {
    dispatch(fetchHistory(coinId));
  }, [coinId, dispatch]);

  setTimeout(() => {
    const modifiedHistory = history.map((item) => ({
      ...item,
      priceUsd: Number(item.priceUsd),
      date: item.date.split('T')[0],
    }));
    setTheGraphData(modifiedHistory);
  }, 1000);

  return (
    <div className="container mx-auto flex flex-col gap-4 bg-gray-100 p-2">
      <span className="mb-8" onClick={() => navigate("/")}>
        back
      </span>
      <div className="">
        <Chart history={theGraphData} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-3xl uppercase font-extrabold text-center text-gray-300 ">
          {coinInfos.id.slice(0, 16)}
        </span>

        <div>
          {Object.entries(coinInfos).map(([property, value], index) => (
            <div className="flex justify-between text-lg" key={property}>
              <span>{property}</span>
              {3 < index && index < 9 ? (
                <span>
                  {value ? adjustNumber(value) + " $" : "not available"}
                </span>
              ) : index === 9 || index === 10 ? (
                <span>{adjustNumber(value) + " %"}</span>
              ) : (
                <span>{value ? value : "not available"}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coin;
