import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import Verification from './pages/Verification';
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" index element={<LoginPage />} />
<Route path="/cards" index element={<CardPage />} />
<Route path="/verification" index element={<Verification />} />
</Routes>
</BrowserRouter>
);
}
export default App;