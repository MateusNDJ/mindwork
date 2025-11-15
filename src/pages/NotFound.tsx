import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E0E10]">
      <div className="text-center">
        <h1 className="text-[#F2F2F2] mb-4" style={{ fontSize: '120px', fontWeight: '700' }}>
          404
        </h1>
        <h2 className="text-[#F2F2F2] mb-4">Página não encontrada</h2>
        <p className="text-[#A0A0A5] mb-8 max-w-md">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Button onClick={() => navigate('/dashboard')} className="inline-flex items-center gap-2">
          <Home size={20} />
          Voltar ao início
        </Button>
      </div>
    </div>
  );
}
