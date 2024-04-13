import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthBlockProps } from '@components/Auth/AuthBlock';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { loginUser, registerUser } from '@store/slices/auth/auth';
import Input from '@ui/Input/Input';

const AuthForm: FC<AuthBlockProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector((state) => state.authReducer.error);
  const isLoading = useAppSelector((state) => state.authReducer.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const action = type === 'register' ? registerUser : loginUser;
    dispatch(action({ email, password })).then((resultAction) => {
      if (action.fulfilled.match(resultAction)) {
        navigate('/');
      }
    });
  };

  let buttonText;
  if (isLoading) {
    buttonText = 'Загрузка...';
  } else {
    buttonText = type === 'register' ? 'Зарегистрироваться' : 'Войти';
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          htmlFor="email"
          name="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.ru"
          error={error}
        />
        <Input
          type="password"
          htmlFor="password"
          name="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
          error={error}
        />
      </div>
      <button
        type="submit"
        disabled={!email || isLoading}
        className={`w-full rounded-xl mt-6 text-white h-12 transition-colors duration-500 ${!email || isLoading ? 'bg-gray' : 'bg-violet hover:opacity-90'}`}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
