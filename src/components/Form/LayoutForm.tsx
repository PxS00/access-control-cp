import React from 'react';

interface LayoutFormProps {
  title: string;
  children: React.ReactNode;
}

export const LayoutForm = ({ title, children }: LayoutFormProps) => {
  return (
    <div className="layout-form">
      <div className="form-card">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};
