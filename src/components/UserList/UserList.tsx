import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { getUsersThunk } from '@store/slices/users/users';
import UserCard from '@components/UserCard/UserCard';
import ArrowDown from '@assets/icons/ArrowDown';
import { IUser } from '@models/IUser';

const USERS_PER_PAGE = 8;

const UserList = () => {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница
  const usersData = useAppSelector((state) => state.userReducer.data);
  const isLoading = useAppSelector((state) => state.userReducer.isLoading);

  useEffect(() => {
    dispatch(getUsersThunk({ page: currentPage, per_page: USERS_PER_PAGE }));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (usersData && Array.isArray(usersData)) {
      setUsers((prevUsers) => {
        const newUsersToAdd = usersData.filter(
          (newUser: IUser) =>
            !prevUsers.some((existingUser) => existingUser.id === newUser.id)
        );
        return [...prevUsers, ...newUsersToAdd];
      });
    }
  }, [usersData]);

  const showMoreUsers = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {isLoading ? (
        <>Идет загрузка...</>
      ) : (
        <div className="max-w-[1280px] m-auto">
          <ul className="grid grid-cols-4 gap-[20px]">
            {users &&
              users.map((user) => (
                <li key={user.id}>
                  <UserCard
                    id={user.id}
                    avatar={user.avatar}
                    first_name={user.first_name}
                    last_name={user.last_name}
                  />
                </li>
              ))}
          </ul>
          {users && users.length % 8 === 0 && (
            <button
              type="button"
              className="py-[9px] px-4 rounded-xl m-auto border-black border-[1px] text-t mt-14 flex gap-2"
              onClick={showMoreUsers}
            >
              Показать ещe <ArrowDown />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;
