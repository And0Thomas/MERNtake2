import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CardPage from './pages/CardPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Products from './pages/Products';
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" index element={<Home />} />
<Route path="/cards" index element={<CardPage />} />
<Route path="/signin/Signup" index element={<Signup />} />
<Route path="/Signin" index element={<Signin />} />
<Route path="/products" index element={<Products />} />
</Routes>
</BrowserRouter>
);
}
export default App;