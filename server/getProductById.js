const express = require('express');
const { knex } = require('../knex');
const router = express.Router();

const getProductsById = async (id) => {
  try {
    const products = await knex("products")
      .select("id", "name")
      .where({ id });
    return products
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

router.get('/', async (req, res) => {
  res.json(await getProductsById(req.params.id));
});

module.exports = router;