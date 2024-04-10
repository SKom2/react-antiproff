import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Register from '@pages/Register/Register';
import Login from '@pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from '@store/store';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
