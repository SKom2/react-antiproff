import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { getUserThunk } from '@store/slices/users/users';
import Header from '@components/Header/Header';

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userReducer);
  console.log(userData);

  useEffect(() => {
    if (id) {
      const userId = parseInt(id, 10);
      dispatch(getUserThunk(userId));
    }
  }, [dispatch, id]);

  return <Header />;
};

export default UserProfile;
