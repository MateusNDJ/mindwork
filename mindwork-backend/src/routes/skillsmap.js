const express = require('express');
const router = express.Router();
const { listSkills } = require('../controllers/skillsMapController');

router.get('/', listSkills);

module.exports = router;
