import { Outlet } from 'react-router';
import Header from './components/Header';

function App() {
  return (
    <div className='md:max-w-full lg:max-w-4/5 mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
