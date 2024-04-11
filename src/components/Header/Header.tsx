import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@hooks/redux';
import { logoutUser } from '@store/slices/auth/auth';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser()).then((resultAction) => {
      if (logoutUser.fulfilled.match(resultAction)) {
        navigate('/login');
      }
    });
  };

  return (
    <header className="bg-violet pt-8 pb-16 px-[20.5px]">
      <nav className="justify-end flex">
        <button
          type="button"
          className="text-white px-4 py-2 border-white border-[1px] rounded-xl"
          onClick={handleLogout}
        >
          Выход
        </button>
      </nav>
      <div className="text-white max-w-[846px] m-auto text-center">
        <h1 className="text-h1 mb-4">Наша команда</h1>
        <h2 className="text-t">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </h2>
      </div>
    </header>
  );
};

export default Header;
