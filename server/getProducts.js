const express = require('express');
const router = express.Router();

// Mock data for to-dos
const todos = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Clean the house', completed: true },
  { id: 3, task: 'Pay bills', completed: false }
];

// Endpoint to get all to-dos
router.get('/', (req, res) => {
  res.json(todos);
});

module.exports = router;