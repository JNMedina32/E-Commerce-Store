import CallAPI from './CallAPI';
import '../components/App.css';
import Banner from './Banner';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';


function App() {

  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
