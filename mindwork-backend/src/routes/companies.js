const express = require('express');
const router = express.Router();
const { listCompanies } = require('../controllers/companyController');

router.get('/', listCompanies);

module.exports = router;
