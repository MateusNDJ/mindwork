import { Card } from '../components/Card';
import { TrendingUp, TrendingDown, Zap, Brain, Code, Palette, BarChart, Users, Shield, Cpu } from 'lucide-react';

export function SkillsMap() {
  const professionsTrending = [
    {
      name: 'Desenvolvedor IA/ML',
      growth: '+145%',
      demand: 'Muito Alta',
      salary: 'R$ 12.000 - R$ 25.000',
      icon: Brain,
      color: '#3B82F6',
      skills: ['Python', 'TensorFlow', 'Deep Learning', 'Data Science']
    },
    {
      name: 'Especialista em Cibersegurança',
      growth: '+98%',
      demand: 'Muito Alta',
      salary: 'R$ 10.000 - R$ 22.000',
      icon: Shield,
      color: '#EF4444',
      skills: ['Segurança de Redes', 'Ethical Hacking', 'Cloud Security']
    },
    {
      name: 'DevOps Engineer',
      growth: '+87%',
      demand: 'Alta',
      salary: 'R$ 9.000 - R$ 20.000',
      icon: Cpu,
      color: '#22C55E',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
    },
    {
      name: 'UX/UI Designer',
      growth: '+76%',
      demand: 'Alta',
      salary: 'R$ 7.000 - R$ 15.000',
      icon: Palette,
      color: '#F59E0B',
      skills: ['Figma', 'Design Thinking', 'Prototipagem', 'Pesquisa UX']
    },
    {
      name: 'Analista de Dados',
      growth: '+92%',
      demand: 'Muito Alta',
      salary: 'R$ 8.000 - R$ 18.000',
      icon: BarChart,
      color: '#8B5CF6',
      skills: ['SQL', 'Python', 'Power BI', 'Estatística']
    },
    {
      name: 'Desenvolvedor Full Stack',
      growth: '+65%',
      demand: 'Alta',
      salary: 'R$ 8.000 - R$ 16.000',
      icon: Code,
      color: '#06B6D4',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL']
    }
  ];

  const skillsInDemand = [
    { name: 'Inteligência Artificial', growth: '+150%', category: 'Tecnologia' },
    { name: 'Cloud Computing', growth: '+120%', category: 'Infraestrutura' },
    { name: 'Análise de Dados', growth: '+115%', category: 'Data Science' },
    { name: 'Cibersegurança', growth: '+105%', category: 'Segurança' },
    { name: 'DevOps', growth: '+95%', category: 'Desenvolvimento' },
    { name: 'UX Design', growth: '+85%', category: 'Design' },
    { name: 'Blockchain', growth: '+80%', category: 'Tecnologia' },
    { name: 'IoT', growth: '+75%', category: 'Hardware' },
  ];

  const decliningProfessions = [
    { name: 'Operador de Telemarketing', decline: '-35%' },
    { name: 'Caixa de Banco', decline: '-28%' },
    { name: 'Digitador', decline: '-42%' },
    { name: 'Operador de Manufatura', decline: '-25%' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#F2F2F2] mb-2">Mapa de Habilidades do Futuro</h1>
        <p className="text-[#A0A0A5]">Descubra as profissões e competências mais valorizadas até 2030</p>
      </div>

      {/* Alert Card */}
      <Card className="mb-8 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
        <div className="flex items-start gap-4">
          <Zap size={32} className="text-white flex-shrink-0" />
          <div>
            <h3 className="text-white mb-2">Mercado em Transformação</h3>
            <p className="text-white/90">
              Segundo o Fórum Econômico Mundial, 23% das profissões passarão por transformações significativas até 2027. 
              Prepare-se agora para garantir sua empregabilidade no futuro.
            </p>
          </div>
        </div>
      </Card>

      {/* Professions in High Demand */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp size={24} className="text-[#22C55E]" />
          <h2 className="text-[#F2F2F2]">Profissões em Alta Demanda</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionsTrending.map((profession, index) => {
            const Icon = profession.icon;
            return (
              <Card key={index} className="hover:border-[#3B82F6] border border-transparent transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: profession.color + '20' }}
                  >
                    <Icon size={24} style={{ color: profession.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#F2F2F2] mb-1">{profession.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[#22C55E] text-sm">{profession.growth}</span>
                      <span className="text-[#A0A0A5] text-sm">• {profession.demand}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[#A0A0A5] text-sm mb-2">Faixa salarial média:</p>
                  <p className="text-[#F2F2F2]">{profession.salary}</p>
                </div>

                <div className="mb-4">
                  <p className="text-[#A0A0A5] text-sm mb-2">Principais habilidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {profession.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-[#1A1A1D] rounded text-[#F2F2F2] text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2 bg-[#3B82F6] hover:bg-[#60A5FA] text-white rounded-[12px] transition-all">
                  Ver Trilha de Aprendizado
                </button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Skills in Demand */}
      <div className="mb-8">
        <h2 className="text-[#F2F2F2] mb-6">Habilidades Mais Valorizadas</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsInDemand.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-[#1A1A1D] rounded-lg hover:bg-[#232326] transition-all"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp size={20} className="text-[#22C55E]" />
                  <div>
                    <p className="text-[#F2F2F2]">{skill.name}</p>
                    <p className="text-[#A0A0A5] text-sm">{skill.category}</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-[#22C55E]/20 rounded text-[#22C55E]">
                  {skill.growth}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Declining Professions */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <TrendingDown size={24} className="text-[#EF4444]" />
          <h2 className="text-[#F2F2F2]">Profissões em Declínio</h2>
        </div>

        <Card className="bg-[#1A1A1D]">
          <p className="text-[#A0A0A5] mb-4">
            Essas profissões estão sendo substituídas por automação e IA. Se você trabalha em uma dessas áreas, 
            considere uma transição de carreira.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {decliningProfessions.map((profession, index) => (
              <div 
                key={index}
                className="p-4 bg-[#232326] rounded-lg border border-[#EF4444]/30"
              >
                <p className="text-[#F2F2F2] mb-2">{profession.name}</p>
                <div className="flex items-center gap-2">
                  <TrendingDown size={16} className="text-[#EF4444]" />
                  <span className="text-[#EF4444]">{profession.decline}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#3B82F6]/10 rounded-lg border border-[#3B82F6]/30">
            <p className="text-[#F2F2F2] mb-2">💡 Precisa de ajuda para fazer a transição?</p>
            <p className="text-[#A0A0A5] text-sm">
              Nosso Assistente IA pode criar uma trilha personalizada de requalificação para você.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
