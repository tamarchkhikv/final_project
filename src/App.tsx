import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Counter from './pages/Counter';
import { store } from './store/store';
import { Provider } from 'react-redux';
import SuccessfulPayment from './pages/SuccessfulPayment';
import FailedPayment from './pages/FailedPayment';
import Checkout from './pages/Checkout';



function App() {
  return (
    <Provider store={store}>
      
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/payment" element={<SuccessfulPayment />} />
        <Route path="/failedpayment" element={<FailedPayment />} />
        <Route path="/checkout" element={<Checkout />} />



      </Routes>

    </Provider>

  );
}

export default App;
