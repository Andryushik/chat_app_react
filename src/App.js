import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constants';
import { useAuthContext } from './context/GlobalState';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';

function App() {
  const { user, loading, error } = useAuthContext();

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
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
  );
}

export default App;
