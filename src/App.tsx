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
import Profile from './pages/Profile';
import AdminLogin from './adminpages/AdminLogin';
import ListingPage from './pages/ListingPage';
import AdminPage from './adminpages/AdminPage';
import AddProductsPage from './adminpages/AddProductsPage';
import AboutAdminPage from './adminpages/AboutAdminPage';







function App() {
  return (
    <Provider store={store}>
      
      <Routes>

        <Route path="/homepage" element={<Homepage />} />
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
        <Route path="/profile" element={<Profile/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/listing" element={<ListingPage/>} />
        <Route path="/listing/:id" element={<Product/>} />
        <Route path="/adminpage" element={<AdminPage/>} />
        <Route path="addproducts" element={<AddProductsPage/>} />
        <Route path="/listing/cart" element={<Cart/>} />
        <Route path="/listing/checkout" element={<Checkout/>} />
        <Route path="/listing/profile" element={<Profile/>} />
        <Route path="/listing/listing" element={<ListingPage/>} />
        <Route path="/aboutadmin" element={<AboutAdminPage/>} />
        <Route path="/homepage/:id" element={<Product/>} />


       
       

        
      
        




      </Routes>

    </Provider>

  );
}

export default App;
