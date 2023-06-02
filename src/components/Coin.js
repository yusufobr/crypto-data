import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import adjustNumber from '../helpers/adjustNumber';
import { fetchHistory } from '../redux/coin/coinsSlice';
import Chart from './Chart';
import arrow from './assets/backArrow.svg';

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
      USD: Number(item.priceUsd),
      Date: item.date.split('T')[0],
    }));
    setTheGraphData(modifiedHistory);
  }, 1000);

  const nv = 'Not Available';

  return (
    <div className="container p-2 mx-auto flex flex-col gap-4 text-white py-2 mb-8">
      {/* back btn */}
      <button
        type="button"
        className="text-left"
        onClick={() => navigate('/')}
      >
        <img
          width={40}
          className="p-2 bg-[#1dd79c] rounded-full"
          src={arrow}
          alt="backarrow"
        />
      </button>

      <div className="rounded-lg shadow-md bg-[#1E2423] pt-16 pb-4">
        {/* chart */}
        <div className="">
          <Chart history={theGraphData} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl uppercase font-extrabold text-center mt-4 text-[#161B19] ">
            {coinInfos?.id?.slice(0, 16)}
          </span>
          <div>
            <ul className="flex flex-col text-lg myeven">
              <li className="flex justify-between items-center">
                <span>Symbol</span>
                <span>{coinInfos?.symbol}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Price USD</span>
                <span className="font-semibold">{`${adjustNumber(coinInfos?.priceUsd)} $`}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Supply</span>
                <span>{`${adjustNumber(coinInfos?.supply)} $`}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Max Supply USD</span>
                <span>
                  {`${
                    coinInfos?.maxSupply ? adjustNumber(coinInfos?.maxSupply) : nv
                  }`}
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>Market Capital USD</span>
                <span>
                  {`${
                    coinInfos?.marketCapUsd
                      ? adjustNumber(coinInfos?.marketCapUsd)
                      : nv
                  } $`}
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>Volume 24h USD</span>
                <span>
                  {`${
                    coinInfos?.volumeUsd24Hr
                      ? adjustNumber(coinInfos?.volumeUsd24Hr)
                      : nv
                  } $`}
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>Rank</span>
                <span>{coinInfos?.rank}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Last 24h Change</span>
                <span
                  className={
                  coinInfos?.changePercent24Hr < 0
                    ? 'text-red-500'
                    : 'text-green-500'
                }
                >
                  {`${
                    coinInfos?.changePercent24Hr
                      ? adjustNumber(coinInfos?.changePercent24Hr)
                      : nv
                  } %`}
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        href={coinInfos?.explorer}
        className="text-right pt-4"
      >
        <span className="py-2 text-black px-8 bg-[#1dd79c] rounded">Website</span>
      </a>
    </div>
  );
}

export default Coin;
