const { knex } = require('./knex');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const getProducts = async () => {
  try {
    const products = await knex('products').select('id', 'description').limit(10);
    return products.map(e => e.description && (`<section><div>${e.id + " " + e.description}</div><div>_</div></section>`)).join('');
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    knex.destroy();
  }
};

const fetchProductsHtml = async () => {
  const productsHtml = await getProducts();
  return productsHtml;
};


app.get('/', async (req, res) => {
  try {
    const html = await fetchProductsHtml();
    res.send(html);
  } catch (error) {
    console.error('Error fetching product HTML:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});