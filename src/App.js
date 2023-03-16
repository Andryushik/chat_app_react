import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constants';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import MainLayout from './layouts/MainLayout';

import './App.css';

function App() {
  const user = false;

  return (
    <Container>
      <CssBaseline />
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
    </Container>
  );
}

export default App;
