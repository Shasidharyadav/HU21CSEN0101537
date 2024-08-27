import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state;  // Access the product data from the location state

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product?.productName}</Typography>  {/* Display product name */}
        <Typography>Price: ${product?.price}</Typography>  {/* Display price */}
        <Typography>Rating: {product?.rating} stars</Typography>  {/* Display rating */}
        <Typography>Discount: {product?.discount}%</Typography>  {/* Display discount */}
        <Typography>Availability: {product?.availability}</Typography>  {/* Display availability */}
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
