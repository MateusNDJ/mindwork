import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useState } from 'react';

export function Settings() {
  const [settings, setSettings] = useState({
    theme: 'dark',
    notifications: true,
    language: 'pt-BR'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Preferências salvas com sucesso!');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[#F2F2F2] mb-2">Configurações</h1>
        <p className="text-[#A0A0A5]">Personalize sua experiência</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <h3 className="text-[#F2F2F2] mb-6">Aparência</h3>
          
          <div className="space-y-6">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#F2F2F2] mb-1">Tema</p>
                <p className="text-[#A0A0A5] text-sm">Escolha entre tema claro ou escuro</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSettings({ ...settings, theme: 'light' })}
                  className={`px-4 py-2 rounded-[12px] transition-all ${
                    settings.theme === 'light'
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-[#1A1A1D] text-[#A0A0A5] hover:bg-[#232326]'
                  }`}
                >
                  Claro
                </button>
                <button
                  type="button"
                  onClick={() => setSettings({ ...settings, theme: 'dark' })}
                  className={`px-4 py-2 rounded-[12px] transition-all ${
                    settings.theme === 'dark'
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-[#1A1A1D] text-[#A0A0A5] hover:bg-[#232326]'
                  }`}
                >
                  Escuro
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="mb-6">
          <h3 className="text-[#F2F2F2] mb-6">Notificações</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#F2F2F2] mb-1">Ativar notificações</p>
              <p className="text-[#A0A0A5] text-sm">Receba atualizações sobre seus cursos</p>
            </div>
            <button
              type="button"
              onClick={() => setSettings({ ...settings, notifications: !settings.notifications })}
              className={`relative w-14 h-7 rounded-full transition-all ${
                settings.notifications ? 'bg-[#3B82F6]' : 'bg-[#2C2C2F]'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                  settings.notifications ? 'left-8' : 'left-1'
                }`}
              />
            </button>
          </div>
        </Card>

        <Card className="mb-6">
          <h3 className="text-[#F2F2F2] mb-6">Idioma</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#F2F2F2] mb-1">Idioma da interface</p>
              <p className="text-[#A0A0A5] text-sm">Escolha o idioma de preferência</p>
            </div>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="bg-[#1A1A1D] border border-[#2C2C2F] rounded-[12px] px-4 py-2 text-[#F2F2F2] focus:outline-none focus:border-[#3B82F6]"
            >
              <option value="pt-BR">Português (BR)</option>
              <option value="en-US">English (US)</option>
              <option value="es-ES">Español</option>
            </select>
          </div>
        </Card>

        <Button type="submit" className="w-full md:w-auto px-12">
          Salvar Preferências
        </Button>
      </form>
    </div>
  );
}
