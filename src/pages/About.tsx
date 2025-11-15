import { Card } from '../components/Card';
import { BookOpen, Target, Lightbulb, Users, TrendingUp, Award, Globe } from 'lucide-react';

export function About() {
  const objectives = [
    'Mapear as competências mais demandadas pelas novas carreiras até 2030',
    'Criar um sistema que recomende cursos e trilhas personalizadas de upskilling e reskilling',
    'Integrar gamificação para estimular o aprendizado contínuo',
    'Estimular empresas a adotarem práticas de recrutamento ético e inclusivo',
    'Alinhar o projeto aos Objetivos de Desenvolvimento Sustentável (ODS 4, 8, 9 e 10)'
  ];

  const features = [
    {
      title: 'IA de Recomendação',
      description: 'Analisa o perfil do usuário e sugere cursos e trilhas com base em suas competências e objetivos'
    },
    {
      title: 'Mapa de Habilidades',
      description: 'Mostra quais profissões estão em alta e quais habilidades serão mais valorizadas'
    },
    {
      title: 'Sistema de Gamificação',
      description: 'Usuários ganham pontos e conquistas ao completar módulos e desafios'
    },
    {
      title: 'Integração com Empresas',
      description: 'Organizações podem buscar talentos requalificados de forma ética e inclusiva'
    },
    {
      title: 'Acompanhamento de Progresso',
      description: 'Dashboards simples mostram evolução e metas alcançadas'
    }
  ];

  const ods = [
    {
      number: '4',
      title: 'Educação de qualidade',
      description: 'Plataforma de aprendizado e requalificação profissional'
    },
    {
      number: '8',
      title: 'Trabalho decente e crescimento econômico',
      description: 'Estimula empregos sustentáveis e dignos no futuro digital'
    },
    {
      number: '9',
      title: 'Indústria, inovação e infraestrutura',
      description: 'Utiliza IA e tecnologia para inovação social'
    },
    {
      number: '10',
      title: 'Redução das desigualdades',
      description: 'Garante acesso igualitário à qualificação e oportunidades'
    }
  ];

  const technologies = [
    'React.js',
    'Node.js com API em Express',
    'MongoDB',
    'Machine Learning (TensorFlow)',
    'Figma',
    'Vercel / Render'
  ];

  const impacts = [
    'Aumentar o acesso à educação e ao aprendizado digital',
    'Reduzir desigualdades profissionais e sociais',
    'Estimular o desenvolvimento de novas competências digitais',
    'Promover a inclusão no mercado de trabalho futuro',
    'Fortalecer a sustentabilidade e o propósito no ambiente corporativo'
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-[#F2F2F2] mb-4">Global Solution – MindWork</h1>
        <div className="space-y-2 text-[#A0A0A5]">
          <p>Tema: O Futuro do Trabalho</p>
          <p>Instituição: FIAP | Aluno: Mateus Nóbrega | RM: 557223</p>
          <p>Curso: Análise e Desenvolvimento de Sistemas</p>
        </div>
      </div>

      {/* Introdução */}
      <Card className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <BookOpen size={32} className="text-[#3B82F6] flex-shrink-0" />
          <div>
            <h2 className="text-[#F2F2F2] mb-4">1. Introdução</h2>
            <p className="text-[#A0A0A5] leading-relaxed mb-4">
              Vivemos um momento de transformação profunda no mundo do trabalho. A convergência entre Inteligência Artificial (IA), automação, robótica e novas dinâmicas sociais está mudando a forma como nos relacionamos com o emprego, o aprendizado e o propósito.
            </p>
            <p className="text-[#A0A0A5] leading-relaxed mb-4">
              Profissões tradicionais estão desaparecendo, enquanto novas carreiras surgem em ritmo acelerado. Essa transição exige requalificação constante, adaptação às novas tecnologias e, principalmente, valorização das habilidades humanas como empatia, criatividade e colaboração.
            </p>
            <p className="text-[#A0A0A5] leading-relaxed">
              Nesse contexto, surge a MindWork, uma solução inovadora que conecta pessoas à educação e ao futuro do trabalho por meio da tecnologia, estimulando o aprendizado contínuo e o desenvolvimento humano.
            </p>
          </div>
        </div>
      </Card>

      {/* Justificativa */}
      <Card className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <Lightbulb size={32} className="text-[#3B82F6] flex-shrink-0" />
          <div>
            <h2 className="text-[#F2F2F2] mb-4">2. Justificativa</h2>
            <p className="text-[#A0A0A5] leading-relaxed mb-4">
              Segundo a ONU e a OIT, milhões de empregos serão transformados ou extintos até 2030 devido à automação e ao avanço da IA. Ao mesmo tempo, o mercado precisará de profissionais com novas competências digitais e socioemocionais.
            </p>
            <p className="text-[#A0A0A5] leading-relaxed">
              A falta de acesso à qualificação tecnológica aprofunda desigualdades e reduz oportunidades, principalmente entre populações vulneráveis. A MindWork nasce como resposta a esse cenário, propondo uma ferramenta inclusiva que ajuda profissionais a se requalificarem e empresas a encontrarem talentos preparados para os novos tempos.
            </p>
          </div>
        </div>
      </Card>

      {/* Objetivos */}
      <Card className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <Target size={32} className="text-[#3B82F6] flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-[#F2F2F2] mb-4">3. Objetivos</h2>
            
            <h3 className="text-[#F2F2F2] mb-3">Objetivo Geral</h3>
            <p className="text-[#A0A0A5] leading-relaxed mb-6">
              Desenvolver uma plataforma inteligente chamada MindWork, voltada à requalificação profissional, que utiliza tecnologia de IA para identificar perfis, recomendar trilhas de aprendizado e promover a inclusão digital no mercado de trabalho do futuro.
            </p>

            <h3 className="text-[#F2F2F2] mb-4">Objetivos Específicos</h3>
            <ul className="space-y-3">
              {objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                  <p className="text-[#A0A0A5]">{obj}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Fundamentação Teórica */}
      <Card className="mb-8">
        <h2 className="text-[#F2F2F2] mb-4">4. Fundamentação Teórica</h2>
        <p className="text-[#A0A0A5] leading-relaxed mb-4">
          O conceito de "Futuro do Trabalho" é amplamente discutido por organizações internacionais como a OIT e o Fórum Econômico Mundial. Estudos apontam que cerca de 23% das profissões sofrerão transformações significativas até 2027.
        </p>
        <p className="text-[#A0A0A5] leading-relaxed mb-4">
          A automação substituirá tarefas repetitivas, enquanto novas funções surgirão com foco em tecnologia, análise de dados e sustentabilidade.
        </p>
        <p className="text-[#A0A0A5] leading-relaxed">
          A requalificação contínua (reskilling) e o aperfeiçoamento constante (upskilling) tornam-se essenciais para garantir empregabilidade. Além disso, a educação personalizada por IA tem se mostrado eficaz para criar trilhas de aprendizado adaptadas às necessidades de cada indivíduo, potencializando resultados e reduzindo desigualdades.
        </p>
      </Card>

      {/* Proposta da Solução */}
      <Card className="mb-8">
        <h2 className="text-[#F2F2F2] mb-4">5. Proposta da Solução: MindWork</h2>
        <p className="text-[#A0A0A5] leading-relaxed mb-6">
          A MindWork é uma plataforma digital que combina Inteligência Artificial, gamificação e análise de dados para orientar profissionais em sua jornada de aprendizado e requalificação.
        </p>

        <h3 className="text-[#F2F2F2] mb-4">Funcionalidades Principais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1A1A1D] p-4 rounded-[12px]">
              <h3 className="text-[#F2F2F2] mb-2">{feature.title}</h3>
              <p className="text-[#A0A0A5]">{feature.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Tecnologias */}
      <Card className="mb-8">
        <h2 className="text-[#F2F2F2] mb-4">6. Tecnologias Utilizadas</h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-[#1A1A1D] px-4 py-2 rounded-[12px] text-[#3B82F6]">
              {tech}
            </div>
          ))}
        </div>
      </Card>

      {/* Público-Alvo */}
      <Card className="mb-8">
        <div className="flex items-start gap-4">
          <Users size={32} className="text-[#3B82F6] flex-shrink-0" />
          <div>
            <h2 className="text-[#F2F2F2] mb-4">7. Público-Alvo</h2>
            <ul className="space-y-2">
              {['Profissionais em transição de carreira', 'Jovens em busca de qualificação tecnológica', 'Empresas que desejam contratar de forma ética e inclusiva', 'Instituições de ensino e treinamentos corporativos'].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <p className="text-[#A0A0A5]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Impacto Esperado */}
      <Card className="mb-8">
        <div className="flex items-start gap-4">
          <TrendingUp size={32} className="text-[#22C55E] flex-shrink-0" />
          <div>
            <h2 className="text-[#F2F2F2] mb-4">8. Impacto Esperado</h2>
            <ul className="space-y-3">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 flex-shrink-0" />
                  <p className="text-[#A0A0A5]">{impact}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* ODS */}
      <Card className="mb-8">
        <div className="flex items-start gap-4 mb-6">
          <Globe size={32} className="text-[#3B82F6] flex-shrink-0" />
          <h2 className="text-[#F2F2F2]">9. Alinhamento com os ODS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ods.map((item, index) => (
            <div key={index} className="bg-[#1A1A1D] p-4 rounded-[12px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center text-white">
                  {item.number}
                </div>
                <h3 className="text-[#F2F2F2]">{item.title}</h3>
              </div>
              <p className="text-[#A0A0A5]">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Conclusão */}
      <Card className="mb-8">
        <div className="flex items-start gap-4">
          <Award size={32} className="text-[#3B82F6] flex-shrink-0" />
          <div>
            <h2 className="text-[#F2F2F2] mb-4">10. Conclusão</h2>
            <p className="text-[#A0A0A5] leading-relaxed mb-4">
              A MindWork representa uma resposta prática e ética aos desafios do futuro do trabalho. Mais do que uma plataforma, é um ecossistema de aprendizado contínuo que conecta pessoas, empresas e conhecimento.
            </p>
            <p className="text-[#A0A0A5] leading-relaxed">
              Ao combinar IA, empatia e inovação, a solução busca promover inclusão, propósito e sustentabilidade, preparando o mundo para uma nova era profissional — onde tecnologia e humanidade caminham lado a lado.
            </p>
          </div>
        </div>
      </Card>

      {/* Referências */}
      <Card>
        <h2 className="text-[#F2F2F2] mb-4">11. Referências</h2>
        <ul className="space-y-2 text-[#A0A0A5]">
          <li>• Organização Internacional do Trabalho (OIT). Relatório Futuro do Trabalho 2025.</li>
          <li>• Organização das Nações Unidas (ONU). Agenda 2030 e os Objetivos de Desenvolvimento Sustentável.</li>
          <li>• Fórum Econômico Mundial. The Future of Jobs Report 2023.</li>
          <li>• FIAP. Global Solution – O Futuro do Trabalho.</li>
          <li>• MIT Technology Review. AI and the Future of Learning.</li>
        </ul>
      </Card>
    </div>
  );
}
