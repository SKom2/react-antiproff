import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Register from '@pages/Register/Register';
import Login from '@pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import { getAccessToken } from '@store/slices/auth/auth.helpers';
import UserProfile from '@pages/UserProfile/UserProfile';

const App = () => {
  const token = getAccessToken();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute token={token}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/:id"
        element={
          <ProtectedRoute token={token}>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default WrappedApp;
