import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}

export const Button = ({
  children,
  isLoading = false,
  loadingText = 'Carregando...',
  type,
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = isLoading || disabled;
  return (
    <button
      type={type ?? 'button'}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-busy={isLoading || undefined}
      className="btn"
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};
