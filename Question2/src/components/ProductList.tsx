import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/apiService';  // API service to fetch products
import { Grid, Card, CardContent, Typography, CircularProgress, Button } from '@mui/material';

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<any[]>([]);  // State to hold product data
  const [loading, setLoading] = useState(true);  // State to manage loading
  const [error, setError] = useState<string | null>(null);  // State to manage errors
  const navigate = useNavigate();  // React Router's navigate function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProducts(category, { n: 10 });  // Call the API to fetch products
        setProducts(productData);  // Set the product data to state
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching products:', error.message);
        setError('Failed to load products: ' + error.message);  // Handle error
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const handleProductClick = (product: any) => {
    navigate(`/product-detail`, { state: { product } });  // Navigate to ProductDetail with product data
  };

  if (loading) return <CircularProgress />;  // Show a loading spinner while fetching data
  if (error) return <div>{error}</div>;  // Display error if something goes wrong

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.productName}>  {/* Use product name as key */}
          <Card>
            <CardContent>
              <Typography variant="h6">{product.productName}</Typography>  {/* Display product name */}
              <Typography>Price: ${product.price}</Typography>  {/* Display price */}
              <Typography>Rating: {product.rating}</Typography>  {/* Display rating */}
              <Typography>Discount: {product.discount}%</Typography>  {/* Display discount */}
              <Typography>Availability: {product.availability}</Typography>  {/* Display availability */}
              <Button onClick={() => handleProductClick(product)}>View Details</Button>  {/* View Details button */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
