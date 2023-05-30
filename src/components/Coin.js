import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Coin() {
  const { coinId } = useParams()
  const navigate = useNavigate()
  const {coins}  = useSelector((state) => state.coins)

  console.log(coins)

  const coinInfos = coins.find((coin) => coin.id === coinId)
  console.log(coinInfos)
  
  return (
    <div>
      <span onClick={() => navigate('/')}>back</span>
      <div>
        <span>{coinInfos.id}</span>
        <span>{coinInfos.symbol}</span>
        <span>{coinInfos.name}</span>
      </div>
    </div>
  )
}

export default Coin