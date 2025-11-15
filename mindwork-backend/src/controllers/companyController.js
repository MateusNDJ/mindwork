const Company = require('../models/Company');

const listCompanies = async (req, res) => {
  try {
    const companies = await Company.find().limit(50);
    res.json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { listCompanies };
