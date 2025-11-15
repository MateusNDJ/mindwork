import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { BookOpen, Clock, Award } from 'lucide-react';

export function Courses() {
  const allCourses = [
    { 
      id: 1, 
      name: 'Fundamentos de React', 
      progress: 75, 
      color: '#3B82F6',
      duration: '12 horas',
      level: 'Intermediário'
    },
    { 
      id: 2, 
      name: 'TypeScript Avançado', 
      progress: 45, 
      color: '#22C55E',
      duration: '8 horas',
      level: 'Avançado'
    },
    { 
      id: 3, 
      name: 'Design Patterns', 
      progress: 20, 
      color: '#EF4444',
      duration: '10 horas',
      level: 'Avançado'
    },
    { 
      id: 4, 
      name: 'Node.js e APIs', 
      progress: 0, 
      color: '#3B82F6',
      duration: '15 horas',
      level: 'Intermediário'
    },
    { 
      id: 5, 
      name: 'CSS Moderno', 
      progress: 0, 
      color: '#22C55E',
      duration: '6 horas',
      level: 'Básico'
    },
    { 
      id: 6, 
      name: 'Testes Automatizados', 
      progress: 0, 
      color: '#EF4444',
      duration: '9 horas',
      level: 'Intermediário'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[#F2F2F2] mb-2">Cursos</h1>
        <p className="text-[#A0A0A5]">Explore e continue seus cursos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            {/* Thumbnail */}
            <div className="w-full h-40 bg-[#1A1A1D] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div 
                className="w-20 h-20 rounded-full opacity-50"
                style={{ backgroundColor: course.color }}
              />
            </div>

            {/* Course Info */}
            <div className="flex-1">
              <h3 className="text-[#F2F2F2] mb-3">{course.name}</h3>
              
              <div className="flex items-center gap-4 mb-4 text-[#A0A0A5]">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award size={16} />
                  <span className="text-sm">{course.level}</span>
                </div>
              </div>

              {/* Progress Bar */}
              {course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-[#A0A0A5] mb-1">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1D] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ 
                        width: `${course.progress}%`,
                        backgroundColor: course.color 
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Button */}
            <Button className="w-full">
              {course.progress > 0 ? 'Continuar' : 'Começar'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
