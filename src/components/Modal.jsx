import { useEffect } from 'react';

function Modal({ isOpen, onClose, text }) {
  //
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='modal-overlay fixed inset-0 w-full h-screen flex z-50 justify-center items-center 
    bg-nature-altDark/85'
    >
      <div
        className='modal-content w-11/12 min-h-40 flex flex-col bg-linear-to-t from-nature-light via-90% 
          via-nature-altLight to-nature-dark rounded-b-md rounded-md border border-nature-light/60'
      >
        <p className='px-5 py-8 flex-1'>{text}</p>
        <button
          type='button'
          className='bg-nature-light h-11 text-nature-dark border-t border-nature-accent/35 rounded-b-md'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
