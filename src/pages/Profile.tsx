import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { User, Mail, Briefcase, Lock } from 'lucide-react';
import { useState } from 'react';

export function Profile() {
  const [formData, setFormData] = useState({
    name: 'Mateus Nóbrega',
    email: 'mateus@mindwork.com',
    role: 'Desenvolvedor Frontend',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Alterações salvas com sucesso!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[#F2F2F2] mb-2">Perfil</h1>
        <p className="text-[#A0A0A5]">Gerencie suas informações pessoais</p>
      </div>

      <Card className="mb-6">
        {/* Avatar Section */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#2C2C2F]">
          <div className="w-24 h-24 rounded-full bg-[#3B82F6] flex items-center justify-center text-white">
            <span className="text-3xl">MN</span>
          </div>
          <div>
            <h2 className="text-[#F2F2F2] mb-1">Mateus Nóbrega</h2>
            <p className="text-[#A0A0A5]">Desenvolvedor Frontend</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="name"
            label="Nome"
            type="text"
            value={formData.name}
            onChange={handleChange}
            icon={<User size={20} />}
          />

          <Input
            name="email"
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon={<Mail size={20} />}
          />

          <Input
            name="role"
            label="Função"
            type="text"
            value={formData.role}
            onChange={handleChange}
            icon={<Briefcase size={20} />}
          />

          <Input
            name="password"
            label="Nova Senha"
            type="password"
            value={formData.password}
            onChange={handleChange}
            icon={<Lock size={20} />}
            placeholder="Deixe em branco para não alterar"
          />

          <div className="pt-4">
            <Button type="submit" className="w-full md:w-auto px-12">
              Salvar Alterações
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
