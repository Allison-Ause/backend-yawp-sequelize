const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const db = require('../models');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const data = await db.Movies.findAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
});
