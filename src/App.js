import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constants';

import MainLayout from './layouts/MainLayout';

import './App.css';

function App() {
  const user = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to={user ? CHAT_ROUTE : LOGIN_ROUTE} />}
        />
        <Route path="/" element={<MainLayout />}>
          {user
            ? privateRoutes.map(({ path, Component }) => (
                <Route path={path} element={Component} />
              ))
            : publicRoutes.map(({ path, Component }) => (
                <Route path={path} element={Component} />
              ))}
        </Route>
        <Route
          path="*"
          element={<Navigate to={user ? CHAT_ROUTE : LOGIN_ROUTE} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
