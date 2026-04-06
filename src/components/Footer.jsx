import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='mt-24 h-40 text-nature-dark'>
      <div className='mx-auto w-11/12 md:w-3/5 lg:w-3/6 xl:w-5/12 h-8/12 flex flex-col justify-between items-center bg-nature-light rounded-full'>
        <div className='w-3/6 pt-4 flex justify-evenly'>
          <Link to={'https://www.linkedin.com/in/lamarstevens'} target='_blank'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='text-nature-dark hover:scale-110'
              fontSize={38}
            />
          </Link>
          <Link to={'https://github.com/marefpceo'} target='_blank'>
            <FontAwesomeIcon
              icon={faGithub}
              className='text-nature-dark hover:scale-110'
              fontSize={38}
            />
          </Link>
          <Link to={'https://x.com/stevens14704'} target='_blank'>
            <FontAwesomeIcon
              icon={faXTwitter}
              className='text-nature-dark hover:scale-110'
              fontSize={38}
            />
          </Link>
        </div>
        <p className='font-brunoAce'>Lamar Stevens &copy; 2026</p>
      </div>
    </footer>
  );
}

export default Footer;
