const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  provider: { type: String },
  description: { type: String },
  durationHours: { type: Number, default: 1 },
  tags: [{ type: String }],
  level: { type: String, enum: ['beginner','intermediate','advanced'], default: 'beginner' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
