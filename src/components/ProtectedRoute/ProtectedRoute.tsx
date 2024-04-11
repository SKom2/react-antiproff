import { Navigate } from 'react-router-dom';
import React, { FC, ReactElement } from 'react';

interface ProtectedRouteProps {
  token: string | null;
  children: React.ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  token,
  children,
}): ReactElement | null => {
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default ProtectedRoute;
