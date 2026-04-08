import { isRouteErrorResponse, useRouteError, Link } from 'react-router';

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className='h-full flex flex-col justify-center items-center'>
        <h1 className='text-xl md:text-4xl lg:text-6xl text-center text-nature-accent text-shadow-sm text-shadow-nature-altLight'>
          <span className='text-2xl sm:text-3xl md:text-6xl lg:text-9xl'>
            {error.status}
          </span>{' '}
          <br /> {error.statusText}
        </h1>
        <p className='mt-8 not-md:text-center md:text-xl text-nature-light '>
          {error.data}
        </p>
        <Link to={'/'} replace>
          <p className='mt-8 underline text-xl text-nature-accent hover:text-nature-light'>
            Return to Home
          </p>
        </Link>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
        <Link to={'/'} replace>
          <p className='mt-8 underline text-xl text-nature-accent hover:text-nature-light'>
            Return to Home
          </p>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <h1>Unknown Error</h1>
        <Link to={'/'} replace>
          <p className='mt-8 underline text-xl text-nature-accent hover:text-nature-light'>
            Return to Home
          </p>
        </Link>
      </>
    );
  }
}

export default ErrorBoundary;
