import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constants';
import { AuthContext } from './context/GlobalState';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';
import './App.css';

function App() {
  const { user, loading, error } = useContext(AuthContext);

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
