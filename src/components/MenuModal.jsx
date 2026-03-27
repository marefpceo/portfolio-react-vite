import { Link, useLocation } from 'react-router';
import useLockBodyScroll from '../hooks/useLockBodyScroll';
import useEscapeKey from '../hooks/useEscapeKey';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function MenuModal({ open, closeMenuModal }) {
  const location = useLocation();
  const showMenu = open === true ? 'flex' : 'hidden';

  useLockBodyScroll(open);
  useEscapeKey(closeMenuModal);

  return (
    <div
      className={`${showMenu} bg-nature-altLight absolute min-h-lvh w-full z-50`}
    >
      <nav className={`w-full p-2 bg-nature-alt`}>
        <div>
          <FontAwesomeIcon
            icon={faXmark}
            className='absolute p-1 right-4 top-4 text-nature-accent bg-nature-altDark rounded-full'
            fontSize={32}
            onClick={closeMenuModal}
          />
          <ul className='mx-4 mt-20 p-4 flex flex-col items-center text-2xl gap-8 '>
            <li className={`${location.pathname === '/' ? 'hidden' : ''}`}>
              <Link to={'/'} onClick={closeMenuModal}>
                Home
              </Link>
            </li>
            <li className={`${location.pathname === '/about' ? 'hidden' : ''}`}>
              <Link to={'/about'} onClick={closeMenuModal}>
                About
              </Link>
            </li>
            <li
              className={`${location.pathname === '/projects' ? 'hidden' : ''}`}
            >
              <Link to={'#projects'} onClick={closeMenuModal}>
                Projects
              </Link>
            </li>
            <li
              className={`${location.pathname === '/contact' ? 'hidden' : ''}`}
            >
              <Link to={'#contact'} onClick={closeMenuModal}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
