import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddTea from './componentes/AddTea';
import AuthProvider from './componentes/Providers/AuthProvider';
import SignIn from './componentes/SignIn';
import SignUp from './componentes/SignUp';
import UpdateTea from './componentes/UpdateTea';
import User from './componentes/User';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://tea-store-server-n7p6qptt4-rifats-projects-9101b4d5.vercel.app/teas')
  },
  {
    path: "/addTea",
    element:<AddTea/>
  },
  {
    path: "/updateTea/:id",
    element: <UpdateTea />,
    loader: ({ params }) => fetch(`https://tea-store-server-n7p6qptt4-rifats-projects-9101b4d5.vercel.app/teas/${params.id}`)
  },
  {
    path: "/signUp",
    element:<SignUp/>
  },
  {
    path: "/signIn",
    element:<SignIn/>
  },
  {
    path: "/user",
    element: <User />,
    loader: () => fetch('https://tea-store-server-n7p6qptt4-rifats-projects-9101b4d5.vercel.app/users')
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
