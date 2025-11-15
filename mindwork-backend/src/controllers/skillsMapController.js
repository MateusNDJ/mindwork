const Skill = require('../models/Skill');

const listSkills = async (req, res) => {
  try {
    const skills = await Skill.find().limit(100);
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { listSkills };
