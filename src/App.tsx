import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { SkillsMap } from './pages/SkillsMap';
import { AIAssistant } from './pages/AIAssistant';
import { Gamification } from './pages/Gamification';
import { Companies } from './pages/Companies';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route (no layout) */}
        <Route path="/" element={<Login />} />
        
        {/* Protected Routes (with layout) */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/skills-map" element={<Layout><SkillsMap /></Layout>} />
        <Route path="/ai-assistant" element={<Layout><AIAssistant /></Layout>} />
        <Route path="/gamification" element={<Layout><Gamification /></Layout>} />
        <Route path="/companies" element={<Layout><Companies /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}