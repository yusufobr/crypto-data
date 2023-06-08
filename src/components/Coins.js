import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import arrowIcon from './assets/arrow.svg';
import adjustNumber from '../helpers/adjustNumber';

function Coins() {
  const { coins } = useSelector((state) => state.coins);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredData = coins.filter((coin) => coin.id.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    document.title = 'Crypto Coins | Home';
  }, []);

  return (
    <div className="container p-2 mx-auto mb-8 mt-24 grid grid-cols-2 gap-4">
      <div className="col-span-2 relative shadow-md mt-6">
        <input
          type="text"
          placeholder="Search currency..."
          className="w-full h-14 text-white font-semibold p-2 pl-4 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          role="button"
          tabIndex={0}
        />
        <div className="absolute right-2 top-4">
          <BiSearchAlt2 size={28} />
        </div>
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
          className="flex flex-col h-[100%] gap-4 mygradien pb-[%100] relative cursor-pointer rounded-lg shadow-md glow-parent"
        >
          <div className="p-3 h-48 flex flex-col z-10 justify-between items-end">
            <img width={25} alt="arrow" src={arrowIcon} />
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold text-white">
                {coin.name}
              </span>
              <span>
                <span
                  className={`flex gap-1 items-center text-sm ${
                    coin.changePercent24Hr < 0
                      ? 'text-red-500'
                      : 'text-[#26E96C]'
                  }`}
                >
                  {coin.changePercent24Hr < 0 ? (
                    <span className="font-bold">
                      <AiOutlineArrowDown />
                      {' '}
                    </span>
                  ) : (
                    <span className="font-bold">
                      <AiOutlineArrowUp />
                      {' '}
                    </span>
                  )}
                  <span>
                    {adjustNumber(coin.priceUsd)}
                    {' '}
                    USD
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
            <span className="text-3xl uppercase font-black text-center text-[#161B19] glow-child">
              {coin.id.slice(0, 16)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coins;
