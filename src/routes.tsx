
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import ErrorPage from './pages/error-page';
import RefExample from './pages/ref-example/ref-example';
import { LazyLoading } from "./pages/lazy-loading/lazy-loading";
import ProtectedRoute from "./pages/protected-routes/protected-route";
import Dashboard from "./pages/protected-routes/dashboard";
import Login from "./pages/login";
import Home from "./pages/home";
import MemoExample from "./pages/memo-example/memo-example";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'ref-example',
        element: <RefExample />
      },
      {
        path: 'memo-example',
        element: <MemoExample />
      },
      {
        path: 'lazy-loading',
        element: <LazyLoading />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          }
        ]
      }
    ]
  },
]);