import Header from '../components/Header';
import IntroHeroMobile from '../components/IntroHeroMobile';

function Home() {
  return (
    <>
      <Header />
      <div className='flex justify-center absolute top-1/3 right-1/5'>
        <IntroHeroMobile />
      </div>
    </>
  );
}

export default Home;
