import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import Home from '../pages/Home';

function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
