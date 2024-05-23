const { knex } = require('./knex');

const getProducts = async () => {
  try {
    const products = await knex('products').select('id', 'description').limit(10);
    return products.map(e => e.description && (`<section><div>${e.id + " " +e.description}</div><div>_</div></section>`)).join('');
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

const http = require('http');

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const productsHtml = await fetchProductsHtml();
  res.write(productsHtml);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
