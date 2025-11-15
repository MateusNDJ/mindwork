import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
}

export function Input({ icon, label, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-[#F2F2F2]">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0A5]">
            {icon}
          </div>
        )}
        <input
          className={`w-full h-11 bg-[#232326] border border-[#2C2C2F] rounded-[12px] px-4 ${icon ? 'pl-12' : ''} text-[#F2F2F2] placeholder:text-[#A0A0A5] focus:outline-none focus:border-[#3B82F6] ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
