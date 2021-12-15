import React, { ChangeEventHandler } from 'react';

interface InputProps {
  id: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Field({ id, value, placeholder, onChange }: InputProps) {
  return (
    <div className="input mb-1 relative rounded-md shadow-sm">
      <input
        id={id}
        value={value}
        type="text"
        className="input h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder ?? 'Start typing...'}
        autoComplete="off"
        onChange={onChange}
      />
    </div>
  );
}
