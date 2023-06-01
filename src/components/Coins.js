import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrowIcon from './assets/arrow.svg';
import adjustNumber from '../helpers/adjustNumber';

function Coins() {
  const { coins } = useSelector((state) => state.coins);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredData = coins
    .filter((coin) => coin.id
      .toLowerCase()
      .includes(search.toLowerCase()));

  return (
    <div className="container p-2 mx-auto mb-8 grid grid-cols-2 gap-4">
      <div className="col-span-2 shadow-md mt-6">
        <input
          type="text"
          placeholder="Search currency..."
          className="w-full h-10 text-black p-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          role="button"
          tabIndex={0}
        />
      </div>
      {filteredData.map((coin) => (
        <div
          key={coin.id}
          onClick={() => navigate(`/coin/${coin.id}`)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              navigate(`/coin/${coin.id}`);
            }
          }}
          role="button"
          tabIndex={0}
          className="flex flex-col h-[100%] gap-4 mygradien pb-[%100] relative cursor-pointer rounded-lg shadow-md "
        >
          <div className="p-3 h-48 flex flex-col z-10 justify-between items-end">
            <img width={25} alt="arrow" src={arrowIcon} />
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold text-[#2911DF]">
                {coin.name}
              </span>
              <span>
                <span
                  className={`font-semibold ${
                    coin.changePercent24Hr < 0
                      ? 'text-red-500'
                      : 'text-green-700'
                  }`}
                >
                  {coin.changePercent24Hr < 0 ? (
                    <span className="text-lg font-bold">⇩ </span>
                  ) : (
                    <span className="text-lg font-bold">⇧ </span>
                  )}
                  {adjustNumber(coin.priceUsd)}
                  {' '}
                  USD
                </span>
              </span>
            </div>
          </div>
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
            <span className="text-3xl uppercase font-extrabold text-center opacity-50 text-white ">
              {coin.id.slice(0, 16)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coins;
