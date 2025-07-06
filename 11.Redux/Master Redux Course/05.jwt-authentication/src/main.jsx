import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PostForm from './components/PostForm';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/register",
    element: <RegisterForm />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/post",
    element: <PostForm />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
