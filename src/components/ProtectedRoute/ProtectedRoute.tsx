import { Navigate } from 'react-router-dom';
import React, { FC, ReactElement } from 'react';
import { getAccessToken } from '@store/slices/auth/auth.helpers';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
}): ReactElement | null => {
  const token = getAccessToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
