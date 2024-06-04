
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const getProducts = require('./server/getProducts.js');
const getProductsById = require('./server/getProductById')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'template', 'index.html'));
});


app.use('/api/products', getProducts);

app.use('/api/products/:id', getProductsById)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});