import React, { FC, useState } from 'react';
import Eye from '@assets/icons/Eye';
import EyeSlashed from '@/assets/icons/EyeSlashed';

interface InputProps {
  type: 'text' | 'email' | 'password';
  htmlFor: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

export enum ErrorMessages {
  NoPassword = 'Missing password',
  UndefinedUser = 'Note: Only defined users succeed registration',
}

const Input: FC<InputProps> = ({
  type,
  htmlFor,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const inputError = (): boolean => {
    if (type === 'password' && error === ErrorMessages.NoPassword) {
      return true;
    }
    return type === 'email' && error === ErrorMessages.UndefinedUser;
  };

  const togglePasswordVisibility = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setIsPasswordShown(!isPasswordShown);
  };

  const actualInputType =
    type === 'password' && isPasswordShown ? 'text' : type;

  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-t text-black">{name}</span>
      <div className="relative">
        <input
          type={actualInputType}
          id={htmlFor}
          name={name}
          value={value}
          onChange={onChange}
          className={`text-ts bg-lightGray rounded-2xl h-12 pl-4 focus:outline-none focus:border-[1px] focus:border-gray w-full ${inputError() ? 'border-error focus:border-error border-[1px]' : ''}`}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-2 bottom-3"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            {isPasswordShown ? <Eye /> : <EyeSlashed />}
          </button>
        )}
      </div>
      {inputError() && <span className="text-error">{error}</span>}
    </label>
  );
};

Input.defaultProps = {
  error: '',
};

export default Input;
