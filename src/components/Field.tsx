import React from 'react';

export interface FieldProps {
  label: string;
  labelFor: string;
  children: JSX.Element;
}

export default function Field(props: FieldProps) {
  return (
    <div className="field mb-4">
      <label htmlFor={props.labelFor} className="block text-sm font-medium text-gray-700 mb-1">
        {props.label}
      </label>
      {props.children}
    </div>
  );
}
