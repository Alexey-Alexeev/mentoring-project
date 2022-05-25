import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../features/auth/authReducer';

export const CurrentUser = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  // return <>{children}</>;
  return <>{currentUser ? children : <div>Loading...</div>}</>;
};
