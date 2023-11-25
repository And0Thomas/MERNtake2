import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import HomeP from './pages/HomeP';
import CardPage from './pages/CardPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import ContactP from './pages/ContactP';
import CartPage from './pages/CartPage';
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" index element={<Home />} />
<Route path="/p" index element={<HomeP />} />
<Route path="/cards" index element={<CardPage />} />
<Route path="/Signup" index element={<Signup />} />
<Route path="/Signin" index element={<Signin />} />
<Route path="/products" index element={<Products />} />
<Route path="/Contacts" index element={<Contacts />} />
<Route path="/ContactP" index element={<ContactP />} />
<Route path="/Cart" index element={<CartPage />} />
</Routes>
</BrowserRouter>
);
}
export default App;