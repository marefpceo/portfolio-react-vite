import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';

function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
