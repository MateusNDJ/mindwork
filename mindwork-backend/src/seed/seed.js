const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Course = require('../models/Course');
const Company = require('../models/Company');
const Skill = require('../models/Skill');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('Please set MONGO_URI in .env before running seed script.');
  process.exit(1);
}

const seed = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to DB for seeding...');

  // clear
  await User.deleteMany({});
  await Course.deleteMany({});
  await Company.deleteMany({});
  await Skill.deleteMany({});

  const pwd = await bcrypt.hash('password123', 10);
  const users = [
    { name: 'Alice', email: 'alice@example.com', passwordHash: pwd, role: 'user', skills: ['communication','js'], points: 120 },
    { name: 'Bob', email: 'bob@example.com', passwordHash: pwd, role: 'user', skills: ['python','ml'], points: 250 },
    { name: 'Company Admin', email: 'hr@company.com', passwordHash: pwd, role: 'company', skills: [], points: 0 }
  ];

  const courses = [
    { title: 'Intro to JavaScript', provider: 'Udemy', description: 'Basics of JS', durationHours: 5, tags: ['js','web'] },
    { title: 'Data Analysis with Python', provider: 'Coursera', description: 'Pandas and plotting', durationHours: 8, tags: ['python','data'] },
    { title: 'Design Thinking', provider: 'Alura', description: 'Problem solving', durationHours: 4, tags: ['design','ux'] }
  ];

  const companies = [
    { name: 'Acme Corp', website: 'https://acme.example', description: 'Empresa fictícia', tags: ['tech'] },
    { name: 'Green Labs', website: 'https://green.example', description: 'Soluções verdes', tags: ['sustainability'] }
  ];

  const skills = [
    { name: 'communication', level: 'basic' },
    { name: 'js', level: 'intermediate' },
    { name: 'python', level: 'intermediate' },
    { name: 'ml', level: 'advanced' }
  ];

  await User.insertMany(users);
  await Course.insertMany(courses);
  await Company.insertMany(companies);
  await Skill.insertMany(skills);

  console.log('Seeding complete.');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });
