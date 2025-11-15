import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Building2, Users, TrendingUp, Award, Search, Filter, MapPin, Briefcase } from 'lucide-react';

export function Companies() {
  const talents = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Desenvolvedora Full Stack',
      level: 24,
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      coursesCompleted: 15,
      xp: 28450,
      location: 'São Paulo, SP',
      available: true,
      avatar: 'AS'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      role: 'Especialista em IA/ML',
      level: 22,
      skills: ['Python', 'TensorFlow', 'Deep Learning', 'Data Science'],
      coursesCompleted: 12,
      xp: 25200,
      location: 'Rio de Janeiro, RJ',
      available: true,
      avatar: 'CS'
    },
    {
      id: 3,
      name: 'Julia Oliveira',
      role: 'UX/UI Designer',
      level: 20,
      skills: ['Figma', 'Design Thinking', 'Prototipagem', 'Pesquisa UX'],
      coursesCompleted: 10,
      xp: 22800,
      location: 'Belo Horizonte, MG',
      available: true,
      avatar: 'JO'
    },
    {
      id: 4,
      name: 'Pedro Costa',
      role: 'DevOps Engineer',
      level: 18,
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Terraform'],
      coursesCompleted: 9,
      xp: 19500,
      location: 'Porto Alegre, RS',
      available: false,
      avatar: 'PC'
    },
    {
      id: 5,
      name: 'Mariana Lima',
      role: 'Analista de Dados',
      level: 19,
      skills: ['SQL', 'Python', 'Power BI', 'Estatística', 'Excel'],
      coursesCompleted: 11,
      xp: 21000,
      location: 'Brasília, DF',
      available: true,
      avatar: 'ML'
    },
    {
      id: 6,
      name: 'Rafael Souza',
      role: 'Especialista em Cibersegurança',
      level: 21,
      skills: ['Segurança de Redes', 'Ethical Hacking', 'Cloud Security'],
      coursesCompleted: 13,
      xp: 24000,
      location: 'Curitiba, PR',
      available: true,
      avatar: 'RS'
    }
  ];

  const stats = [
    { label: 'Talentos Cadastrados', value: '12.500+', icon: Users, color: '#3B82F6' },
    { label: 'Empresas Parceiras', value: '350+', icon: Building2, color: '#22C55E' },
    { label: 'Contratações Este Mês', value: '187', icon: TrendingUp, color: '#F59E0B' },
    { label: 'Taxa de Satisfação', value: '94%', icon: Award, color: '#EF4444' }
  ];

  const benefits = [
    {
      title: 'Talentos Qualificados',
      description: 'Acesso a profissionais requalificados e certificados pela plataforma',
      icon: Award
    },
    {
      title: 'Recrutamento Ético',
      description: 'Processo transparente e inclusivo, sem vieses discriminatórios',
      icon: Users
    },
    {
      title: 'Fit Cultural',
      description: 'Matches baseados em competências e valores da empresa',
      icon: TrendingUp
    },
    {
      title: 'Suporte Contínuo',
      description: 'Acompanhamento após a contratação para garantir adaptação',
      icon: Building2
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#F2F2F2] mb-2">Portal Empresas</h1>
        <p className="text-[#A0A0A5]">Encontre talentos requalificados de forma ética e inclusiva</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center">
              <Icon size={32} className="mx-auto mb-3" style={{ color: stat.color }} />
              <h2 className="text-[#F2F2F2] mb-1">{stat.value}</h2>
              <p className="text-[#A0A0A5]">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-[#F2F2F2] mb-6">Por que contratar pela MindWork?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="text-[#F2F2F2] mb-2">{benefit.title}</h3>
                    <p className="text-[#A0A0A5]">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0A5]" />
            <input
              type="text"
              placeholder="Buscar por habilidades, cargo ou localização..."
              className="w-full h-12 bg-[#1A1A1D] border border-[#2C2C2F] rounded-[12px] pl-12 pr-4 text-[#F2F2F2] placeholder:text-[#A0A0A5] focus:outline-none focus:border-[#3B82F6]"
            />
          </div>
          <Button variant="secondary" className="gap-2">
            <Filter size={20} />
            Filtros
          </Button>
          <Button className="gap-2">
            <Search size={20} />
            Buscar
          </Button>
        </div>
      </Card>

      {/* Talents List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#F2F2F2]">Talentos Disponíveis</h2>
          <p className="text-[#A0A0A5]">{talents.length} profissionais encontrados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {talents.map((talent) => (
            <Card key={talent.id} className="hover:border-[#3B82F6] border border-transparent transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-xl">{talent.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[#F2F2F2]">{talent.name}</h3>
                    {talent.available && (
                      <div className="px-2 py-1 bg-[#22C55E]/20 rounded text-[#22C55E] text-xs">
                        Disponível
                      </div>
                    )}
                  </div>
                  <p className="text-[#A0A0A5] mb-2">{talent.role}</p>
                  <div className="flex items-center gap-3 text-sm text-[#A0A0A5]">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{talent.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-[#1A1A1D] rounded-lg">
                <div className="text-center">
                  <p className="text-[#3B82F6] mb-1">Nível {talent.level}</p>
                  <p className="text-[#A0A0A5] text-xs">Experiência</p>
                </div>
                <div className="text-center border-x border-[#2C2C2F]">
                  <p className="text-[#3B82F6] mb-1">{talent.coursesCompleted}</p>
                  <p className="text-[#A0A0A5] text-xs">Cursos</p>
                </div>
                <div className="text-center">
                  <p className="text-[#3B82F6] mb-1">{talent.xp.toLocaleString()}</p>
                  <p className="text-[#A0A0A5] text-xs">XP Total</p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <p className="text-[#A0A0A5] text-sm mb-2">Principais habilidades:</p>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.slice(0, 4).map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-[#1A1A1D] rounded text-[#F2F2F2] text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {talent.skills.length > 4 && (
                    <span className="px-2 py-1 bg-[#1A1A1D] rounded text-[#A0A0A5] text-xs">
                      +{talent.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="flex-1 gap-2">
                  <Briefcase size={18} />
                  Ver Perfil Completo
                </Button>
                <Button variant="secondary">
                  Contatar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA for Companies */}
      <Card className="mt-8 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
        <div className="text-center">
          <h2 className="text-white mb-3">É uma empresa e quer contratar?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Cadastre sua empresa gratuitamente e tenha acesso a milhares de profissionais requalificados, 
            prontos para os desafios do futuro do trabalho.
          </p>
          <Button variant="secondary" className="mx-auto">
            Cadastrar Minha Empresa
          </Button>
        </div>
      </Card>
    </div>
  );
}
