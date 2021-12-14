import React, { ChangeEventHandler } from 'react';

interface InputProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Field(props: InputProps) {
  return (
    <div className="input mb-1 relative rounded-md shadow-sm">
      <input
        id={props.id}
        value={props.value}
        type="text"
        name={props.name}
        className="input focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300
      rounded-md"
        placeholder={props.placeholder ?? "Start typing..."}
        autoComplete="off"
        onChange={props.onChange}
      />
    </div>
  );
}
