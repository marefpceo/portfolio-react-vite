import { Outlet } from 'react-router';
import Header from './components/Header';

function App() {
  return (
    <div className='max-w-10/12 mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
