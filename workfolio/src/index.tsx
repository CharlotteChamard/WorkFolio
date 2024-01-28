import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './screens/Home';
import { ENSC } from './screens/ENSC';
import { Contact } from './screens/Contact';
import Connexion from './screens/Connexion';

const router = createBrowserRouter([{
  path: "/",
  element: <Home />
},
{
  path: "/ensc",
  element: <ENSC />
},
{
  path: "/contact",
  element: <Contact />
},
{
  path: "/connexion",
  element: <Connexion />
}
])

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
