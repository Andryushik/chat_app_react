import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constants';
import { Context } from './index';

import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

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
                <Route key={path} path={path} element={Component} />
              ))
            : publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} />
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
