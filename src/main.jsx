import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './Pages/HomePage/Home';
import Library from './Pages/LibraryPage/Library';
import Detail from './Pages/DetailsPage/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // this renders App.jsx
    children: [
      { path: '/',
        element: <Home /> 
      },
      { 
        path: '/library', 
        element: <Library /> 
      },
      { 
        path: '/details/:id', 
        element: <Detail /> 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);