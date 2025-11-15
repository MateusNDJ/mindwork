const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/courses');
const companyRoutes = require('./routes/companies');
const skillsRoutes = require('./routes/skillsmap');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/skillsmap', skillsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'MindWork API - up' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
