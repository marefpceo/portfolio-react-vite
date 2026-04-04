import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container min-w-full h-full'>
      <div role='main' className='md:max-w-full lg:max-w-4/5 mx-auto'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
