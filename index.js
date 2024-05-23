const { knex } = require('./knex')



const getProducts = async () => {
  try {
    const products = await knex('products').select('id').limit(10);
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    knex.destroy();
  }
};

getProducts();