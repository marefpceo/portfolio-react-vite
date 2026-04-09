import TypewriterComponent from 'typewriter-effect';

function IntroHeroMobile() {
  return (
    <div className='mt-48'>
      <p className='mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-nature-altLight font-sans indent-4'>
        Hi, I&apos;m{' '}
      </p>
      <h1 className='text-nature-accent font-brunoAce text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
        Lamar Stevens
      </h1>
      <div className='mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-sans italic text-nature-light'>
        <TypewriterComponent
          options={{
            strings: [
              'Full Stack Developer',
              'Frontend Developer',
              'Backend Developer',
            ],
            autoStart: true,
            loop: true,
            pauseFor: 3000,
          }}
        />
      </div>
    </div>
  );
}

export default IntroHeroMobile;
