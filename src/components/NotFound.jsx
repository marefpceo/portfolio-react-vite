import { Link } from 'react-router';

function NotFound() {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <h1 className='text-xl md:text-4xl lg:text-6xl text-center text-nature-accent text-shadow-sm text-shadow-nature-altLight'>
        <span className='text-2xl sm:text-3xl md:text-6xl lg:text-9xl'>
          404
        </span>{' '}
        <br />
      </h1>
      <p className='mt-8 not-md:text-center md:text-xl text-nature-light '>
        This page does not exist
      </p>
      <Link to={'/'} replace>
        <p className='mt-8 underline text-xl text-nature-accent hover:text-nature-light'>
          Return to Home
        </p>
      </Link>
    </div>
  );
}

export default NotFound;
