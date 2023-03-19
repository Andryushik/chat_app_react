import { HOME_ROUTE, LOGIN_ROUTE, CHAT_ROUTE } from './utils/constants';
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Login />,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: CHAT_ROUTE,
    Component: <Chat />,
  },
];
