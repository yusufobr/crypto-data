import React from 'react'
import { useSelector } from 'react-redux';


function Coins() {
    const { coins } = useSelector((state) => state.coins)


  return (
    <div>
        walu
    </div>
  )
}

export default Coins