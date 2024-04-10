import React, { FC } from 'react';
import EyeSlashed from '@/assets/icons/EyeSlashed';

interface InputProps {
  type: 'text' | 'email' | 'password';
  htmlFor: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  type,
  htmlFor,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2 relative">
      <span className="text-t text-black">{name}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="text-ts bg-lightGray rounded-2xl h-12 pl-4 focus:outline-none focus:border-[1px] focus:border-gray"
        placeholder={placeholder}
      />
      {type === 'password' && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" className="absolute right-2 bottom-3">
          <EyeSlashed />
        </button>
      )}
    </label>
  );
};

export default Input;
