import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { getUserThunk } from '@store/slices/users/users';
import Header from '@components/Layout/Header/Header';
import UserInfo from '@components/User/UserInfo';
import Main from '@components/Layout/Main/Main';
import Loader from '@components/Loader/Loader';

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, data: userData } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    if (id) {
      const userId = parseInt(id, 10);
      dispatch(getUserThunk(userId));
    }
  }, [dispatch, id]);

  const userContent = useMemo(() => {
    if (isLoading) return <Loader />;
    if (userData && !Array.isArray(userData)) {
      return (
        <>
          <Header user={userData} />
          <Main>
            <UserInfo />
          </Main>
        </>
      );
    }
    return null;
  }, [isLoading, userData]);

  return <>{userContent}</>;
};

export default UserProfile;
