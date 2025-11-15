import { Card } from '../components/Card';
import { Trophy, Star, Flame, Target, Award, Crown, Zap, Gift } from 'lucide-react';

export function Gamification() {
  const userStats = {
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    totalXp: 15450,
    rank: 'Explorador',
    streak: 7,
    longestStreak: 14,
    coursesCompleted: 8,
    hoursLearned: 47,
    badges: 12
  };

  const allBadges = [
    { id: 1, name: 'Primeira Aula', icon: '🎯', description: 'Complete sua primeira aula', unlocked: true, date: '10/11/2025' },
    { id: 2, name: 'Maratonista', icon: '🏃', description: 'Estude por 3 horas seguidas', unlocked: true, date: '09/11/2025' },
    { id: 3, name: 'Especialista', icon: '🎓', description: 'Complete um curso completo', unlocked: true, date: '08/11/2025' },
    { id: 4, name: 'Streak de Fogo', icon: '🔥', description: 'Mantenha 7 dias de sequência', unlocked: true, date: 'Hoje' },
    { id: 5, name: 'Curioso', icon: '🔍', description: 'Explore 5 trilhas diferentes', unlocked: true, date: '07/11/2025' },
    { id: 6, name: 'Dedicado', icon: '⭐', description: 'Alcance nível 10', unlocked: true, date: '05/11/2025' },
    { id: 7, name: 'Colecionador', icon: '📚', description: 'Complete 5 cursos', unlocked: true, date: '04/11/2025' },
    { id: 8, name: 'Ajudante', icon: '🤝', description: 'Ajude 3 colegas no fórum', unlocked: true, date: '03/11/2025' },
    { id: 9, name: 'Mestre', icon: '👑', description: 'Alcance nível 25', unlocked: false, date: null },
    { id: 10, name: 'Lendário', icon: '💎', description: 'Complete 20 cursos', unlocked: false, date: null },
    { id: 11, name: 'Inabalável', icon: '🛡️', description: 'Mantenha 30 dias de streak', unlocked: false, date: null },
    { id: 12, name: 'Sábio', icon: '🧙', description: 'Acumule 50.000 XP', unlocked: false, date: null },
  ];

  const challenges = [
    {
      id: 1,
      title: 'Desafio Semanal',
      description: 'Complete 3 aulas esta semana',
      progress: 2,
      total: 3,
      reward: '+150 XP',
      timeLeft: '3 dias',
      active: true
    },
    {
      id: 2,
      title: 'Maratona de Aprendizado',
      description: 'Estude por 5 horas neste mês',
      progress: 3.5,
      total: 5,
      reward: '+300 XP + Badge',
      timeLeft: '18 dias',
      active: true
    },
    {
      id: 3,
      title: 'Explorador',
      description: 'Experimente 2 trilhas novas',
      progress: 1,
      total: 2,
      reward: '+100 XP',
      timeLeft: '10 dias',
      active: true
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Ana Silva', xp: 28450, level: 24, avatar: 'AS' },
    { rank: 2, name: 'Carlos Santos', xp: 25200, level: 22, avatar: 'CS' },
    { rank: 3, name: 'Julia Oliveira', xp: 22800, level: 20, avatar: 'JO' },
    { rank: 4, name: 'Pedro Costa', xp: 19500, level: 18, avatar: 'PC' },
    { rank: 5, name: 'Você', xp: 15450, level: 12, avatar: 'MN', isUser: true },
  ];

  const ranks = [
    { name: 'Iniciante', minXp: 0, color: '#A0A0A5' },
    { name: 'Aprendiz', minXp: 1000, color: '#22C55E' },
    { name: 'Explorador', minXp: 5000, color: '#3B82F6' },
    { name: 'Especialista', minXp: 15000, color: '#8B5CF6' },
    { name: 'Mestre', minXp: 30000, color: '#F59E0B' },
    { name: 'Lendário', minXp: 50000, color: '#EF4444' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#F2F2F2] mb-2">Sistema de Gamificação</h1>
        <p className="text-[#A0A0A5]">Acompanhe seu progresso, conquistas e recompensas</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="text-center bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]">
          <Star size={32} className="text-white mx-auto mb-2" />
          <h3 className="text-white mb-1">Nível {userStats.level}</h3>
          <p className="text-white/80 text-sm">{userStats.rank}</p>
          <div className="mt-3 text-white/90 text-sm">
            {userStats.xp} / {userStats.nextLevelXp} XP
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
            />
          </div>
        </Card>

        <Card className="text-center bg-gradient-to-br from-[#EF4444] to-[#F97316]">
          <Flame size={32} className="text-white mx-auto mb-2" />
          <h3 className="text-white mb-1">{userStats.streak} dias</h3>
          <p className="text-white/80 text-sm">Sequência Atual</p>
          <p className="text-white/70 text-sm mt-2">Recorde: {userStats.longestStreak} dias</p>
        </Card>

        <Card className="text-center bg-gradient-to-br from-[#22C55E] to-[#10B981]">
          <Trophy size={32} className="text-white mx-auto mb-2" />
          <h3 className="text-white mb-1">{userStats.badges}</h3>
          <p className="text-white/80 text-sm">Conquistas Desbloqueadas</p>
        </Card>

        <Card className="text-center bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA]">
          <Target size={32} className="text-white mx-auto mb-2" />
          <h3 className="text-white mb-1">{userStats.coursesCompleted}</h3>
          <p className="text-white/80 text-sm">Cursos Concluídos</p>
          <p className="text-white/70 text-sm mt-2">{userStats.hoursLearned}h de estudo</p>
        </Card>
      </div>

      {/* Active Challenges */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Zap size={24} className="text-[#F59E0B]" />
          <h2 className="text-[#F2F2F2]">Desafios Ativos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="border border-[#F59E0B]/30">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[#F2F2F2]">{challenge.title}</h3>
                <div className="px-2 py-1 bg-[#F59E0B]/20 rounded text-[#F59E0B] text-xs">
                  {challenge.timeLeft}
                </div>
              </div>
              <p className="text-[#A0A0A5] text-sm mb-4">{challenge.description}</p>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#A0A0A5]">Progresso</span>
                  <span className="text-[#F2F2F2]">{challenge.progress} / {challenge.total}</span>
                </div>
                <div className="w-full h-2 bg-[#1A1A1D] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F59E0B] rounded-full"
                    style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Gift size={16} className="text-[#3B82F6]" />
                <span className="text-[#3B82F6] text-sm">{challenge.reward}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Badges/Achievements */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Award size={24} className="text-[#3B82F6]" />
          <h2 className="text-[#F2F2F2]">Conquistas</h2>
        </div>
        <Card>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allBadges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-lg text-center transition-all ${
                  badge.unlocked
                    ? 'bg-[#1A1A1D] hover:bg-[#232326] cursor-pointer'
                    : 'bg-[#0E0E10] opacity-40'
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h3 className={`text-sm mb-1 ${badge.unlocked ? 'text-[#F2F2F2]' : 'text-[#A0A0A5]'}`}>
                  {badge.name}
                </h3>
                <p className="text-[#A0A0A5] text-xs mb-2">{badge.description}</p>
                {badge.unlocked && badge.date && (
                  <p className="text-[#3B82F6] text-xs">{badge.date}</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Leaderboard */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Crown size={24} className="text-[#F59E0B]" />
          <h2 className="text-[#F2F2F2]">Ranking Semanal</h2>
        </div>
        <Card>
          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                  user.isUser
                    ? 'bg-[#3B82F6]/20 border border-[#3B82F6]'
                    : 'bg-[#1A1A1D] hover:bg-[#232326]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${
                    user.rank === 1 ? 'bg-[#F59E0B] text-white' :
                    user.rank === 2 ? 'bg-[#A0A0A5] text-white' :
                    user.rank === 3 ? 'bg-[#CD7F32] text-white' :
                    'bg-[#232326] text-[#A0A0A5]'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white">
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-[#F2F2F2]">{user.name}</p>
                    <p className="text-[#A0A0A5] text-sm">Nível {user.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#F2F2F2]">{user.xp.toLocaleString()} XP</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Ranks System */}
      <div>
        <h2 className="text-[#F2F2F2] mb-6">Sistema de Classificação</h2>
        <Card>
          <div className="space-y-4">
            {ranks.map((rank, index) => {
              const isUnlocked = userStats.totalXp >= rank.minXp;
              const isCurrent = index < ranks.length - 1 
                ? userStats.totalXp >= rank.minXp && userStats.totalXp < ranks[index + 1].minXp
                : userStats.totalXp >= rank.minXp;

              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                    isCurrent ? 'bg-[#3B82F6]/20 border border-[#3B82F6]' : 
                    isUnlocked ? 'bg-[#1A1A1D]' : 'bg-[#0E0E10] opacity-40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: rank.color }}
                    />
                    <div>
                      <p className={isUnlocked ? 'text-[#F2F2F2]' : 'text-[#A0A0A5]'}>
                        {rank.name}
                      </p>
                      <p className="text-[#A0A0A5] text-sm">
                        {rank.minXp.toLocaleString()} XP necessários
                      </p>
                    </div>
                  </div>
                  {isCurrent && (
                    <div className="px-3 py-1 bg-[#3B82F6] rounded text-white text-sm">
                      Atual
                    </div>
                  )}
                  {isUnlocked && !isCurrent && (
                    <div className="text-[#22C55E]">✓</div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
