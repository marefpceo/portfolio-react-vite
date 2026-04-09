import IntroHeroMobile from '../components/IntroHeroMobile';

function Home() {
  return (
    <>
      <title>Web Developer | Lamar Stevens</title>
      <meta
        name='description'
        content='Freelance web developer creating responsive websites and client-centric web applications. Specializing in React, Express, and PostgreSQL. Time to create!'
      />
      <div className='flex flex-col h-full items-center'>
        <IntroHeroMobile />
      </div>
    </>
  );
}

export default Home;
