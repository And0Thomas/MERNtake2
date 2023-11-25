import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CardPage from './pages/CardPage';
import Signin from './pages/Signin';
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" index element={<Home />} />
<Route path="/cards" index element={<CardPage />} />
<Route path="/Signin" index element={<Signin />} />
</Routes>
</BrowserRouter>
);
}
export default App;