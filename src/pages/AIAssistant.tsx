import { useState } from 'react';
import { Send, Sparkles, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá, Mateus!  Sou seu Assistente IA de Requalificação Profissional. Posso te ajudar a criar trilhas de aprendizado personalizadas, recomendar cursos baseados no seu perfil e objetivos, ou tirar dúvidas sobre as profissões do futuro. Como posso ajudá-lo hoje?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestedQuestions = [
    'Quais profissões estarão em alta até 2030?',
    'Como posso migrar de TI para IA?',
    'Crie uma trilha para me tornar DevOps',
    'Quais habilidades preciso para UX Design?'
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = '';
      const lowercaseInput = inputValue.toLowerCase();

      if (lowercaseInput.includes('profiss') || lowercaseInput.includes('2030') || lowercaseInput.includes('alta')) {
        aiResponse = 'Ótima pergunta! Segundo o Fórum Econômico Mundial, as profissões em alta até 2030 incluem: Desenvolvedor IA/ML (+145%), Especialista em Cibersegurança (+98%), DevOps Engineer (+87%), Analista de Dados (+92%) e UX/UI Designer (+76%). Posso criar uma trilha personalizada para qualquer uma dessas áreas. Qual te interessa mais?';
      } else if (lowercaseInput.includes('trilha') || lowercaseInput.includes('devops')) {
        aiResponse = ' Perfeito! Vou criar uma trilha personalizada para DevOps:\n\n1️⃣ Fundamentos Linux (4 semanas)\n2️⃣ Docker e Containers (3 semanas)\n3️⃣ Kubernetes (4 semanas)\n4️⃣ CI/CD com Jenkins (3 semanas)\n5️⃣ AWS/Cloud Computing (4 semanas)\n6️⃣ Terraform e IaC (3 semanas)\n\nTempo total: ~5 meses | XP total: 3.200\n\nQuer que eu adicione essa trilha ao seu perfil?';
      } else if (lowercaseInput.includes('ux') || lowercaseInput.includes('design')) {
        aiResponse = 'Para se tornar UX/UI Designer, você vai precisar dominar:\n\n✅ Princípios de Design\n✅ Pesquisa com Usuários\n✅ Prototipagem (Figma/Adobe XD)\n✅ Design Thinking\n✅ Acessibilidade\n✅ Design Systems\n\nTenho 3 cursos recomendados para você. Quer conhecê-los?';
      } else if (lowercaseInput.includes('ia') || lowercaseInput.includes('migrar')) {
        aiResponse = 'Migração de TI para IA é uma ótima escolha! Como você já tem base técnica, sugiro:\n\n1. Fundamentos de Python (se ainda não domina)\n2. Estatística e Matemática para ML\n3. Machine Learning básico\n4. Deep Learning com TensorFlow\n5. Projetos práticos\n\nSeu perfil mostra que você está fazendo TypeScript. Isso é um bom sinal - a lógica de programação te ajudará muito!';
      } else {
        aiResponse = 'Entendo sua pergunta! Vou analisar seu perfil e histórico de aprendizado para te dar a melhor recomendação. Com base nos seus interesses em React e TypeScript, sugiro expandir para Full Stack ou explorar áreas como DevOps. Quer que eu elabore mais sobre alguma dessas opções?';
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-240px)] flex flex-col">
      {/* Header */}
      <div className="mb-6 flex items-start gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center flex-shrink-0">
          <Sparkles size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h2 className="text-[#F2F2F2] mb-1">Assistente IA de Requalificação</h2>
          <p className="text-[#A0A0A5]">
            Especializado em criar trilhas personalizadas e recomendar os melhores caminhos para sua carreira
          </p>
        </div>
      </div>

      {/* Suggested Questions - Only show when no messages from user */}
      {messages.length === 1 && (
        <div className="mb-6">
          <p className="text-[#A0A0A5] text-sm mb-3">Perguntas sugeridas:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedQuestions.map((question, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:border-[#3B82F6] border border-transparent transition-all"
                onClick={() => handleSuggestedQuestion(question)}
              >
                <div className="flex items-start gap-3">
                  <Lightbulb size={20} className="text-[#3B82F6] flex-shrink-0 mt-1" />
                  <p className="text-[#F2F2F2] text-sm">{question}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-[12px] px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-[#3B82F6] text-white'
                  : 'bg-[#232326] text-[#F2F2F2]'
              }`}
            >
              <p className={`whitespace-pre-line ${message.sender === 'user' ? 'text-white' : 'text-[#F2F2F2]'}`}>
                {message.text}
              </p>
              <span className={`text-xs mt-1 block ${
                message.sender === 'user' ? 'text-white/70' : 'text-[#A0A0A5]'
              }`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="flex gap-3 sticky bottom-0 bg-[#0E0E10] py-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Pergunte sobre trilhas, profissões, habilidades..."
          className="flex-1 h-12 bg-[#232326] border border-[#2C2C2F] rounded-[12px] px-4 text-[#F2F2F2] placeholder:text-[#A0A0A5] focus:outline-none focus:border-[#3B82F6]"
        />
        <Button type="submit" className="px-6">
          <Send size={20} />
        </Button>
      </form>
    </div>
  );
}