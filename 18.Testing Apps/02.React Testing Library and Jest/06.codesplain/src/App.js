import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootRoute from './routes/RootRoute';
import HomeRoute from './routes/HomeRoute';
import NotFoundRoute from './routes/NotFoundRoute';
import RepositoriesSearchRoute from './routes/RepositoriesSearchRoute';
import EditorRoute from './routes/EditorRoute';
import SignUpRoute from './routes/SignUpRoute';
import SignInRoute from './routes/SignInRoute';
import SignOutRoute from './routes/SignOutRoute';
import TestRoute from './routes/TestRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    children: [
      {
        path: 'test',
        element: <TestRoute />,
      },
      {
        path: 'signout',
        element: <SignOutRoute />,
      },
      {
        path: 'signup',
        element: <SignUpRoute />,
      },
      {
        path: 'signin',
        element: <SignInRoute />,
      },
      {
        path: '',
        element: <HomeRoute />,
      },
      {
        path: 'repositories/:owner/:repoName/*',
        element: <EditorRoute />,
      },
      {
        path: 'repositories',
        element: <RepositoriesSearchRoute />,
      },
      {
        path: '*',
        element: <NotFoundRoute />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
