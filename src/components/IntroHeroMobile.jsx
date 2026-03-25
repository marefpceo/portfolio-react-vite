import TypewriterComponent from 'typewriter-effect';

function IntroHeroMobile() {
  return (
    <div className='mt-48'>
      <p className='text-3xl text-nature-light indent-4'>Hi, I&apos;m </p>
      <h1 className='text-nature-accent text-4xl'>Lamar Stevens</h1>
      <div className='text-2xl text-center text-nature-light'>
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
