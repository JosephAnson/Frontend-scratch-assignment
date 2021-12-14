import React from 'react';

interface ButtonProps {
  children?: JSX.Element | string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Field(props: ButtonProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
    >
      {props.children}
    </button>
  );
}
