import React, { FC } from 'react';

interface ButtonProps {
  type: 'submit' | 'button';
  text: string;
  customClasses: string;
}

const Button: FC<ButtonProps> = ({ type, text, customClasses }) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`w-full rounded-xl ${customClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
