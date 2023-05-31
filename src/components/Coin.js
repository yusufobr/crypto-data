import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import adjustNumber from '../helpers/adjustNumber';
import { fetchHistory } from '../redux/coin/coinsSlice';
import Chart from './Chart';

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

  const nv = 'Not Available';

  return (
    <div className="container mx-auto flex flex-col gap-4 bg-gray-100 p-2">
      <button type="button" className="mb-8" onClick={() => navigate('/')}>
        back
      </button>
      <div className="">
        <Chart history={theGraphData} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-4xl uppercase font-extrabold text-center text-gray-300 ">
          {coinInfos.id.slice(0, 16)}
        </span>

        <div>
          <ul>
            <li className="flex justify-between">
              <span>Symbol</span>
              <span>{coinInfos.symbol}</span>
            </li>
            <li className="flex justify-between">
              <span>Rank</span>
              <span>{coinInfos.rank}</span>
            </li>
            <li className="flex justify-between">
              <span>Price USD</span>
              <span>{`${adjustNumber(coinInfos.priceUsd)} $`}</span>
            </li>
            <li className="flex justify-between">
              <span>Supply</span>
              <span>{`${adjustNumber(coinInfos.supply)} $`}</span>
            </li>
            <li className="flex justify-between">
              <span>Max Supply USD</span>
              <span>
                {`${
                  coinInfos.maxSupply ? adjustNumber(coinInfos.maxSupply) : nv
                }`}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Market Capital USD</span>
              <span>
                {`${
                  coinInfos.marketCapUsd
                    ? adjustNumber(coinInfos.marketCapUsd)
                    : nv
                } $`}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Volume 24h USD</span>
              <span>
                {`${
                  coinInfos.volumeUsd24Hr
                    ? adjustNumber(coinInfos.volumeUsd24Hr)
                    : nv
                } $`}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Last 24h Change</span>
              <span
                className={
                  coinInfos.changePercent24Hr < 0
                    ? 'text-red-500'
                    : 'text-green-500'
                }
              >
                {`${
                  coinInfos.changePercent24Hr
                    ? adjustNumber(coinInfos.changePercent24Hr)
                    : nv
                } %`}
              </span>
            </li>
          </ul>
          <a
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            href={coinInfos.explorer}
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default Coin;
