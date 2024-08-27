const { fetchProductsFromAPI } = require('../services/apiService');

const getProducts = async (req, res) => {
  const { categoryname } = req.params;
  console.log(`Fetching products for category: ${categoryname}`);

  try {
    const products = await fetchProductsFromAPI(categoryname);
    console.log('Products fetched:', products);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error in getProducts controller:', error); 
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

module.exports = { getProducts };
