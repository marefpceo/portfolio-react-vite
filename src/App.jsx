import { useState } from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className='container min-w-full h-full'>
      <div
        role='main'
        className='relative flex flex-col min-h-screen md:max-w-full lg:max-w-4/5 mx-auto'
      >
        <Modal
          isOpen={isOpen}
          text={modalText}
          onClose={handleClose}
        />
        <Header />
        <div className='grow'>
          <Outlet
            context={{
              setModalText,
              handleOpen,
              handleClose,
            }}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
