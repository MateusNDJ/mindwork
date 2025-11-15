import { Home, BookOpen, Sparkles, User, Settings, Bell, FileText, Map, Trophy, Building2 } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Início', path: '/dashboard' },
    { icon: BookOpen, label: 'Cursos', path: '/courses' },
    { icon: Map, label: 'Mapa de Habilidades', path: '/skills-map' },
    { icon: Sparkles, label: 'Assistente IA', path: '/ai-assistant' },
    { icon: Trophy, label: 'Gamificação', path: '/gamification' },
    { icon: Building2, label: 'Portal Empresas', path: '/companies' },
    { icon: FileText, label: 'Sobre o Projeto', path: '/about' },
    { icon: User, label: 'Perfil', path: '/profile' },
    { icon: Settings, label: 'Configurações', path: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-[#0E0E10]">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1A1A1D] border-r border-[#2C2C2F] flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-[#2C2C2F]">
          <h2 className="text-[#F2F2F2]">MindWork</h2>
        </div>
        <nav className="flex-1 py-6 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-[12px] mb-2 transition-all ${
                  isActive 
                    ? 'bg-[#3B82F6] text-white' 
                    : 'text-[#A0A0A5] hover:bg-[#232326] hover:text-[#F2F2F2]'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-[#1A1A1D] border-b border-[#2C2C2F] flex items-center justify-between px-8">
          <div className="text-[#F2F2F2]"></div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#A0A0A5] hover:text-[#F2F2F2]">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white">
              MN
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}