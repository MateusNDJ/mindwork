const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, enum: ['basic','intermediate','advanced'], default: 'basic' }
});

module.exports = mongoose.model('Skill', skillSchema);
