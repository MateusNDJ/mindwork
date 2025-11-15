const express = require('express');
const router = express.Router();
const { listCourses } = require('../controllers/courseController');

router.get('/', listCourses);

module.exports = router;
