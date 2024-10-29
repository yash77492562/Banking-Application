// @/components/ui/alert.tsx
import React from 'react';

interface AlertProps {
  variant?: 'default' | 'destructive';
  children: React.ReactNode;
}

interface AlertDescriptionProps {
  children: React.ReactNode;
}

export function Alert({ variant = 'default', children, ...props }: AlertProps) {
  const baseStyles = "rounded-lg border p-4";
  const variantStyles = {
    default: "bg-gray-100 border-gray-200 text-gray-800",
    destructive: "bg-red-100 border-red-200 text-red-800",
  };

  return (
    <div
      role="alert"
      className={`${baseStyles} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ children, ...props }: AlertDescriptionProps) {
  return (
    <div className="text-sm" {...props}>
      {children}
    </div>
  );
}