import { useState } from 'react';
import logoSmall from '../assets/logo-150w.webp';
import MenuModal from './MenuModal';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenuModal() {
    setIsOpen(true);
  }

  function closeMenuModal() {
    setIsOpen(false);
  }

  return (
    <>
      <MenuModal open={isOpen} closeMenuModal={closeMenuModal} />
      <header role='banner' className='p-2 flex justify-between items-center'>
        <img
          src={logoSmall}
          alt='Logo'
          width={150}
          height={69}
          loading='lazy'
        />
        {/* Hide mobile menu bar for screen widths >= 768 */}
        <span className='flex md:hidden' onClick={openMenuModal}>
          <FontAwesomeIcon
            icon={faBars}
            fontSize={44}
            className='text-nature-light'
          />
        </span>

        <NavBar />
      </header>
    </>
  );
}

export default Header;
