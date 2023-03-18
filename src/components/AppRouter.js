import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants';
import Login from '../pages/Login';

const AppRouter = () => {
  const user = false;
  return;
  // <>
  //   {user
  //     ? privateRoutes.map(({ path, Component }) => (
  //         <Route key={path} path={path} element={Component} />
  //       ))
  //     : publicRoutes.map(({ path, Component }) => (
  //         <Route key={path} path={path} element={Component} />
  //       ))}
  // </>
};

export default AppRouter;
