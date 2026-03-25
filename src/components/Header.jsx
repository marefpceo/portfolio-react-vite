import logoSmall from '../assets/logo-150w.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header role='banner' className='p-2 flex justify-between items-center'>
      <img src={logoSmall} alt='Logo' width={150} height={69} loading='lazy' />
      <FontAwesomeIcon
        icon={faBars}
        fontSize={48}
        className='text-nature-light'
      />
    </header>
  );
}

export default Header;
