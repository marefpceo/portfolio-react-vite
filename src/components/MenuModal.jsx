import useLockBodyScroll from '../hooks/useLockBodyScroll';
import useEscapeKey from '../hooks/useEscapeKey';
import { RiCloseLargeFill } from 'react-icons/ri';

export default function MenuModal({ open, closeMenuModal }) {
  const showMenu = open === true ? 'flex' : 'hidden';

  useLockBodyScroll(open);

  useEscapeKey(closeMenuModal);

  return (
    <div
      className={`${showMenu} bg-nature-dark/85  absolute min-h-lvh w-full z-50`}
    >
      <nav className={` w-full p-2 bg-nature-alt`}>
        <div>
          <RiCloseLargeFill
            className='absolute right-4 top-4 text-nature-accent'
            size={24}
            onClick={closeMenuModal}
          />
          <ul className='mx-4 mt-8 p-4 flex flex-col items-center text-lg gap-8 '>
            <li>
              <a href='#about' onClick={closeMenuModal}>
                About
              </a>
            </li>
            <li>
              <a href='#projects' onClick={closeMenuModal}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={closeMenuModal}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
