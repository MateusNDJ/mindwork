import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Sparkles, TrendingUp, Trophy, Flame, Star, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const userStats = {
    name: 'Mateus',
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    streak: 7,
    completedCourses: 3,
    badges: 8
  };

  const currentCourses = [
    { id: 1, name: 'Fundamentos de React', progress: 75, xp: 250, color: '#3B82F6', category: 'Desenvolvimento' },
    { id: 2, name: 'TypeScript Avançado', progress: 45, xp: 180, color: '#22C55E', category: 'Programação' },
    { id: 3, name: 'Design Patterns', progress: 20, xp: 80, color: '#EF4444', category: 'Arquitetura' },
  ];

  const aiRecommendations = [
    {
      title: 'Análise de Dados com Python',
      reason: 'Baseado no seu interesse em TypeScript, você pode gostar',
      demand: 'Alta demanda até 2030',
      color: '#3B82F6'
    },
    {
      title: 'UX/UI Design Thinking',
      reason: 'Complementa suas habilidades de desenvolvimento',
      demand: 'Crescimento de 35% previsto',
      color: '#22C55E'
    }
  ];

  const recentAchievements = [
    { title: 'Primeira Semana', icon: '🎯', date: 'Hoje' },
    { title: 'Aprendiz Dedicado', icon: '📚', date: 'Ontem' },
    { title: 'Streak de 7 dias', icon: '🔥', date: 'Hoje' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section with Gamification */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-white mb-2">Bem-vindo, {userStats.name} 👋</h2>
              <p className="text-white/90 mb-4">Continue sua jornada de requalificação profissional</p>
              
              {/* Level and XP */}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" size={20} />
                  <span className="text-white">Nível {userStats.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="text-yellow-300" size={20} />
                  <span className="text-white">{userStats.badges} Conquistas</span>
                </div>
              </div>

              {/* XP Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-white/90 text-sm mb-1">
                  <span>Experiência (XP)</span>
                  <span>{userStats.xp} / {userStats.nextLevelXp}</span>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-300 rounded-full transition-all duration-300"
                    style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            <TrendingUp size={48} className="text-white/50" />
          </div>
        </Card>

        {/* Streak Card */}
        <Card className="bg-gradient-to-br from-[#EF4444] to-[#F97316]">
          <div className="text-center">
            <Flame size={48} className="text-white mx-auto mb-3" />
            <h3 className="text-white mb-2">{userStats.streak} dias</h3>
            <p className="text-white/90">Sequência de estudo</p>
            <p className="text-white/70 text-sm mt-2">Continue assim para ganhar +50 XP!</p>
          </div>
        </Card>
      </div>

      {/* Recent Achievements */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Award size={24} className="text-[#3B82F6]" />
            <h3 className="text-[#F2F2F2]">Conquistas Recentes</h3>
          </div>
          <Link to="/gamification" className="text-[#3B82F6] hover:text-[#60A5FA]">
            Ver todas
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentAchievements.map((achievement, index) => (
            <Card key={index} className="flex items-center gap-4 hover:border-[#3B82F6] border border-transparent transition-all">
              <div className="text-4xl">{achievement.icon}</div>
              <div>
                <h3 className="text-[#F2F2F2]">{achievement.title}</h3>
                <p className="text-[#A0A0A5] text-sm">{achievement.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Current Courses Progress */}
      <div className="mb-8">
        <h3 className="text-[#F2F2F2] mb-6">Suas Trilhas em Progresso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map((course) => (
            <Card key={course.id}>
              <div className="mb-4">
                <div className="w-full h-32 bg-[#1A1A1D] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div 
                    className="w-16 h-16 rounded-full opacity-50 blur-xl absolute"
                    style={{ backgroundColor: course.color }}
                  />
                  <div 
                    className="w-12 h-12 rounded-full z-10"
                    style={{ backgroundColor: course.color }}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#3B82F6] text-sm">{course.category}</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" />
                    <span className="text-[#A0A0A5] text-sm">+{course.xp} XP</span>
                  </div>
                </div>

                <h3 className="text-[#F2F2F2] mb-3">{course.name}</h3>
                
                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-[#A0A0A5] mb-1">
                    <span>Progresso</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1D] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ 
                        width: `${course.progress}%`,
                        backgroundColor: course.color 
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <Button variant="secondary" className="w-full">
                Continuar Aprendizado
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={24} className="text-[#3B82F6]" />
          <h3 className="text-[#F2F2F2]">Recomendações Personalizadas por IA</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiRecommendations.map((rec, index) => (
            <Card key={index} className="hover:border-[#3B82F6] border border-transparent cursor-pointer transition-all">
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: rec.color + '20' }}
                >
                  <Target size={24} style={{ color: rec.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#F2F2F2] mb-2">{rec.title}</h3>
                  <p className="text-[#A0A0A5] text-sm mb-2">{rec.reason}</p>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-[#22C55E]/20 rounded text-[#22C55E] text-xs">
                      {rec.demand}
                    </div>
                  </div>
                </div>
                <Button variant="secondary" className="flex-shrink-0">
                  Começar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-[#1A1A1D] border border-[#2C2C2F]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#3B82F6]" size={24} />
              <div>
                <p className="text-[#F2F2F2]">Quer recomendações mais precisas?</p>
                <p className="text-[#A0A0A5] text-sm">Converse com nosso Assistente IA</p>
              </div>
            </div>
            <Link to="/ai-assistant">
              <Button>Abrir Assistente</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
