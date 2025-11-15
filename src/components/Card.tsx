interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[#232326] rounded-[12px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.3)] ${className}`}>
      {children}
    </div>
  );
}
