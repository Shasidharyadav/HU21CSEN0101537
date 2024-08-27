import axios from 'axios';

export const fetchProducts = async (category: string, params: any) => {
  try {
    const response = await axios.get(`http://localhost:3000/categories/${category}/products`, {
      params: { ...params }, 
    });
    return response.data;  
  } catch (error: any) {
    console.error('Error fetching products:', error.response?.data || error.message);  // Log error
    throw new Error('Error fetching products');
  }
};
