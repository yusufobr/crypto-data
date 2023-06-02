import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCoins } from './redux/coin/coinsSlice';
import Coin from './components/Coin';
import Coins from './components/Coins';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Coins />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
