import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@hooks/redux';
import { logoutUser } from '@store/slices/auth/auth';
import { IUser } from '@models/IUser';

interface HeaderProps {
  user?: IUser;
}

const Header: FC<HeaderProps> = ({ user }) => {
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
    <header className="bg-violet pt-8 pb-16 px-20">
      <div className="grid grid-cols-[1fr_7fr_1fr]">
        {user ? (
          <div className="self-start flex max-w-[160px]">
            <button
              type="button"
              className="text-white px-4 py-2 border-white border-[1px] rounded-xl"
              onClick={() => navigate('/')}
            >
              Назад
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center max-w-[160px]" />
        )}
        <div className="text-white text-center">
          {user ? (
            <div className="ml-7 flex gap-8">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="rounded-[50%] w-[187px] h-[187px] object-cover"
              />
              <div>
                <p className="text-white mt-[29px] text-h1">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-white mt-2 text-[32px] text-start">
                  Партнер
                </p>
              </div>
            </div>
          ) : (
            <div className="text-white text-center mt-8">
              <h1 className="text-h1 mb-4">Наша команда</h1>
              <h2 className="text-t max-w-[846px] m-auto">
                Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                которые ложатся на их плечи, и умеющие находить выход из любых,
                даже самых сложных ситуаций.
              </h2>
            </div>
          )}
        </div>
        <div className="self-start justify-end flex max-w-[160px]">
          <button
            type="button"
            className="text-white px-4 py-2 border-white border-[1px] rounded-xl"
            onClick={handleLogout}
          >
            Выход
          </button>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  user: undefined,
};

export default Header;
