const axios = require('axios');

// Replace with your actual Bearer token
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzQ1NTExLCJpYXQiOjE3MjQ3NDUyMTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVhZDc2N2Y1LTU5ODItNGRmZC05MmQ4LTZhNTk0M2ZlNzBkYiIsInN1YiI6InNyb2RkYUBnaXRhbS5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiNWFkNzY3ZjUtNTk4Mi00ZGZkLTkyZDgtNmE1OTQzZmU3MGRiIiwiY2xpZW50U2VjcmV0IjoianlLTkdScVd3R3hFS3ZwWiIsIm93bmVyTmFtZSI6IlNoYXNpZGhhciIsIm93bmVyRW1haWwiOiJzcm9kZGFAZ2l0YW0uaW4iLCJyb2xsTm8iOiJIVTIxQ1NFTjAxMDE1MzcifQ.v8WCzivQcmEmQ0qM05qf6t3FABTEdJY9076YI28WwaM';

// Ensure `minPrice` and `maxPrice` are passed correctly
const fetchProductsFromAPI = async (category, minPrice = 0, maxPrice = 100000) => {
  try {
    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
    let allProducts = [];

    for (let company of companies) {
      console.log(`Fetching products from ${company} in category: ${category}`);

      const response = await axios.get(
        `http://20.244.56.144/test/companies/${company}/categories/${category}/products`,
        {
          headers: { Authorization: `Bearer ${authToken}` },  // Add Authorization token
          params: { minPrice, maxPrice, top: 10 },  // Ensure minPrice and maxPrice are passed
        }
      );

      console.log(`Products from ${company}:`, response.data);
      allProducts = allProducts.concat(response.data);
    }

    return allProducts;
  } catch (error) {
    console.error('Error fetching products from external API:', error.response?.data || error.message);
    throw new Error('Error fetching products from external API');
  }
};

module.exports = { fetchProductsFromAPI };
