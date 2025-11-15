import { Mail, Lock } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0E0E10] to-[#1A1A1D]">
      <div className="w-full max-w-md">
        <div className="bg-[#232326] rounded-[12px] p-12 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-[#F2F2F2] mb-2">MindWork</h1>
            <p className="text-[#A0A0A5]">Bem-vindo de volta</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              type="email"
              placeholder="E-mail"
              icon={<Mail size={20} />}
              required
            />

            <Input
              type="password"
              placeholder="Senha"
              icon={<Lock size={20} />}
              required
            />

            <Button type="submit" className="w-full">
              Entrar
            </Button>

            <div className="text-center">
              <a href="#" className="text-[#A0A0A5] hover:text-[#3B82F6] transition-colors">
                Esqueceu a senha?
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-[#A0A0A5] mt-8">
          © 2025 MindWork
        </p>
      </div>
    </div>
  );
}
