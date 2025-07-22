import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Post from "./components/Post";
import PostForm from './components/PostForm';
import RootLayout from './components/RootLayout';
import { store } from './redux/store';
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "register",
        element: <RegisterForm />
      },
      {
        path: "login",
        element: <LoginForm />
      },
      {
        path: "post",
        element: <Post />
      },
      {
        path: "create-post",
        element: <PostForm />
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
