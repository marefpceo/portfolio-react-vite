import { Link, useLocation } from 'react-router';

function NavBar() {
  const location = useLocation();

  return (
    <nav className='hidden rounded-2xl h-5/6 w-fit xl:w-2/6 py-1 px-4 md:flex bg-nature-altLight'>
      <ul
        className='w-full flex gap-8 text-lg lg:text-xl font-mono items-center justify-center [&>li]:w-full [&>li]:text-center
        [&>li]:hover:text-nature-dark'
      >
        <li className={`${location.pathname === '/' ? 'hidden' : ''}`}>
          <Link to={'/'} viewTransition={true}>
            Home
          </Link>
        </li>
        <li className={`${location.pathname === '/about' ? 'hidden' : ''}`}>
          <Link to={'/about'} viewTransition={true}>
            About
          </Link>
        </li>
        <li className={`${location.pathname === '/projects' ? 'hidden' : ''}`}>
          <Link to={'/projects'} viewTransition={true}>
            Projects
          </Link>
        </li>
        <li className={`${location.pathname === '/contact' ? 'hidden' : ''}`}>
          <Link to={'#contact'} viewTransition={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
