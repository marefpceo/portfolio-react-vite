import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import ErrorBoundary from './ErrorBoundary';
import NotFound from '../components/NotFound';

function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      ErrorBoundary: ErrorBoundary,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
