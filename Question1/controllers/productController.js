const { fetchProductsFromAPI } = require('../services/apiService');

const getProducts = async (req, res) => {
  const { categoryname } = req.params;
  const { minPrice = 0, maxPrice = 100000 } = req.query;  

  console.log(`Fetching products for category: ${categoryname} with price range ${minPrice}-${maxPrice}`);

  try {
    const products = await fetchProductsFromAPI(categoryname, minPrice, maxPrice);
    console.log('Products fetched:', products);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error in getProducts controller:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

module.exports = { getProducts };
