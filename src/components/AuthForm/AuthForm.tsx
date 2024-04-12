import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthBlockProps } from '@components/AuthBlock/AuthBlock';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { loginUser, registerUser } from '@store/slices/auth/auth';
import Input from '@/ui/Input/Input';
import Button from '@/ui/Button/Button';

const AuthForm: FC<AuthBlockProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector((state) => state.authReducer.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitRegistrationForm = (e: any) => {
    e.preventDefault();
    dispatch(registerUser({ email, password })).then((resultAction) => {
      if (registerUser.fulfilled.match(resultAction)) {
        console.log('nunu');
        navigate('/');
      }
    });
  };

  const submitLoginForm = (e: any) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((resultAction) => {
      if (loginUser.fulfilled.match(resultAction)) {
        navigate('/');
        console.log('nunu');
      }
    });
  };

  return (
    <form
      onSubmit={type === 'register' ? submitRegistrationForm : submitLoginForm}
    >
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
      <Button
        type="submit"
        disabled={!email}
        text={type === 'register' ? 'Зарегистрироваться' : 'Войти'}
        customClasses={`mt-6 text-white h-12 transition-colors duration-500 ${!email ? 'bg-gray' : 'bg-violet hover:opacity-90'}`}
      />
    </form>
  );
};

export default AuthForm;
