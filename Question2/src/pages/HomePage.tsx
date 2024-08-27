import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div>
      <h1>Top Laptops</h1>
      <ProductList category="Laptop" />
    </div>
  );
};

export default HomePage;
