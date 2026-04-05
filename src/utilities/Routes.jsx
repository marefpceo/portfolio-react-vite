import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
