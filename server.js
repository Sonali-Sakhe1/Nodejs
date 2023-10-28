
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/yourDBName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,

});

const Product = mongoose.model('Product', productSchema);


app.get('/products', async (req, res) => {
  try {
    
    const products = await Product.find({});
    res.json(products); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
