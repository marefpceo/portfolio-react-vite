import logoSmall from '../assets/logo-150w.webp';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header role='banner' className='p-2 flex justify-between items-center'>
      <img src={logoSmall} alt='Logo' width={150} height={69} loading='lazy' />
      {/* Hide mobile menu bar for screen widths >= 768 */}
      <span className='flex md:hidden'>
        <FontAwesomeIcon
          icon={faBars}
          fontSize={44}
          className='text-nature-light'
        />
      </span>
      <NavBar />
    </header>
  );
}

export default Header;
