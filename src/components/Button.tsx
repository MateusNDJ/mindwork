interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "h-12 px-6 rounded-[12px] transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-[#3B82F6] hover:bg-[#60A5FA] text-white",
    secondary: "bg-[#232326] hover:bg-[#2C2C2F] text-[#F2F2F2] border border-[#2C2C2F]"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
