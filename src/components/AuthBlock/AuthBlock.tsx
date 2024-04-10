import React, { FC } from 'react';
import AuthForm from '@components/AuthForm/AuthForm';
import { Link } from 'react-router-dom';

export interface AuthBlockProps {
  type: 'register' | 'login';
}

const AuthBlock: FC<AuthBlockProps> = ({ type }) => {
  const isLogin = type === 'login';
  const title = isLogin ? 'Логин' : 'Регистрация';
  const message = isLogin
    ? 'Еще не зарегестрированы?'
    : 'Уже зарегестрированы?';
  const linkText = isLogin ? 'Зарегестрироваться' : 'Войти';
  const linkTo = isLogin ? '/register' : '/login';

  return (
    <section className="max-w-[500px] shadow-custom rounded-2xl p-4 relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <h2 className="mb-4 text-black text-t">{title}</h2>
      <AuthForm type={type} />
      <p className="text-ts text-center mt-2">
        {message}
        <Link to={linkTo} className="text-blue-700">
          {' '}
          {linkText}
        </Link>
      </p>
    </section>
  );
};

export default AuthBlock;
