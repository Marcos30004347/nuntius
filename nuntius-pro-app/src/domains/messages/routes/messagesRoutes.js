import { Home } from '../ui/screens/home';
import { Login } from '../ui/screens/login';
import { messagesPageRoutes } from '../application/routes';
import { Chat } from '../ui/screens/chat';

export const messagesRoutes = [
  {
    path: messagesPageRoutes.HOME,
    exact: true,
    element: <Home />
  },
  {
    path: messagesPageRoutes.LOGIN,
    exact: true,
    element: <Login />
  },
  {
    path: messagesPageRoutes.CHAT,
    exact: true,
    element: <Chat />
  }
];
