import { Routes, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { ProductDetail, ProductList } from './pages';

function App() {
  return (
    <div>
      <div className="header">
        <div className="menu">menu</div>
        SHOP
        <div className="cart">cart(0)</div>
      </div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="product" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
