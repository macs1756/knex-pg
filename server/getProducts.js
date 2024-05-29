const express = require('express');
const { knex } = require('../knex');
const router = express.Router();

const getProducts = async () => {
  try {
    const products = await knex("products")
      .select("id", "name")
      .limit(20);
    return products
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};


router.get('/', async (req, res) => {
  res.json(await getProducts());
});

module.exports = router;