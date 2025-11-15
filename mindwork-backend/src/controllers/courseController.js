const Course = require('../models/Course');

const listCourses = async (req, res) => {
  try {
    const courses = await Course.find().limit(50);
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { listCourses };
