import React, { FC } from 'react';

interface ButtonProps {
  type: 'submit' | 'button';
  text: string;
  customClasses: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ type, text, customClasses, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type} // eslint-disable-line react/button-has-type
      className={`w-full rounded-xl ${customClasses}`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
