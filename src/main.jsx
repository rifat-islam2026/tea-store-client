import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddTea from './componentes/AddTea';
import UpdateTea from './componentes/UpdateTea';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/addTea",
    element:<AddTea/>
  },
  {
    path: "updateTea",
    element:<UpdateTea/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
