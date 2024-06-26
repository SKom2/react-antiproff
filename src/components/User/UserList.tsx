import React, { useEffect, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { getUsersThunk } from '@store/slices/users/users';
import UserCard from '@components/User/UserCard';
import ArrowDown from '@assets/icons/ArrowDown';
import { IUser } from '@models/IUser';
import Loader from '@components/Loader/Loader';

const USERS_PER_PAGE = 8;

const UserList = () => {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: usersData, isLoading } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(getUsersThunk({ page: currentPage, per_page: USERS_PER_PAGE }));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (Array.isArray(usersData)) {
      setUsers((prevUsers) => {
        const newUsersToAdd = usersData.filter(
          (newUser) =>
            !prevUsers.some((existingUser) => existingUser.id === newUser.id)
        );
        return [...prevUsers, ...newUsersToAdd];
      });
    }
  }, [usersData]);

  const showMoreUsers = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-[1280px] m-auto">
          <ul className="grid grid-cols-auto-fill-100 gap-5 max-425:flex max-425:flex-col max-425:items-center">
            {users.map((user) => (
              <li key={user.id}>
                <UserCard {...user} />
              </li>
            ))}
          </ul>
          {users.length % USERS_PER_PAGE === 0 && (
            <button
              type="button"
              className="text-ts py-[9px] px-4 rounded-xl m-auto border-black border-[1px] mt-14 flex gap-2 max-sm:mt-8"
              onClick={showMoreUsers}
            >
              Показать еще <ArrowDown />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;
