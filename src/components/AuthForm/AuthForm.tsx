import React, { FC, useState } from 'react';
import { AuthBlockProps } from '@components/AuthBlock/AuthBlock';
import Input from '@/ui/Input/Input';
import Button from '@/ui/Button/Button';

const AuthForm: FC<AuthBlockProps> = ({ type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <form>
      <div className="flex flex-col gap-4">
        {type === 'register' && (
          <Input
            type="text"
            htmlFor="name"
            name="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Артур"
          />
        )}
        <Input
          type="email"
          htmlFor="email"
          name="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.ru"
        />
        <Input
          type="password"
          htmlFor="password"
          name="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
        />
        {type === 'register' && (
          <Input
            type="password"
            htmlFor="passwordConfirm"
            name="Подтвердите пароль"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="******"
          />
        )}
      </div>
      <Button
        type="submit"
        text={type === 'register' ? 'Зарегистрироваться' : 'Войти'}
        customClasses="mt-6 text-white bg-violet h-12 transition-colors duration-500 hover:opacity-90"
      />
    </form>
  );
};

export default AuthForm;
