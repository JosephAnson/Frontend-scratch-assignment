import React from 'react';

export interface FieldProps {
  label: string;
  labelFor: string;
  help?: string;
  children: JSX.Element | JSX.Element[];
}

export default function Field({ labelFor, label, help, children }: FieldProps) {
  return (
    <div className="field mb-4">
      <label htmlFor={labelFor} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {children}
      {help && <p className="text-xs text-gray-500 mb-2">{help}</p>}
    </div>
  );
}
