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
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import WriteReviw from './pages/WriteReviw';




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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/writereviw" element={<WriteReviw />} />
        
      
        




      </Routes>

    </Provider>

  );
}

export default App;
