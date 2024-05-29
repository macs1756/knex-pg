
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const getProducts = require('./server/getProducts.js');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'template', 'index.html'));
});


app.use('/products', getProducts);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});