import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList category="Laptop" />} />
        <Route path="/product-detail" element={<ProductDetail />} />  {/* Product Detail Route */}
      </Routes>
    </Router>
  );
};

export default App;
