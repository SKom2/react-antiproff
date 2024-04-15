import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Register from '@pages/Register/Register';
import Login from '@pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import UserProfile from '@pages/UserProfile/UserProfile';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/:id"
        element={
          <ProtectedRoute>
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
    <Provider store={store}>
      <BrowserRouter basename="/react-antiproff">
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default WrappedApp;
