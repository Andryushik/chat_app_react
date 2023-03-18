import { LOGIN_ROUTE, CHAT_ROUTE } from './utils/constants';
import Login from './pages/Login';
import Chat from './pages/Chat';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login />,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: <Chat />,
  },
];
