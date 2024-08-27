const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();  

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/categories', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
