import { useEffect } from 'react';

function useLockBodyScroll(isLocked) {
  useEffect(() => {
    // Check if we are in a browser environment
    if (typeof window !== 'undefined' && document.body) {
      if (isLocked) {
        // Store the original overflow style to restore it later
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        // Optional: prevent the page from shifting when the scrollbar is removed
        const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
        if (scrollbarWidth > 0) {
          document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
          // Revert styles when the component unmounts or isLocked becomes false
          document.body.style.overflow = originalStyle;
          document.body.style.paddingRight = '';
        };
      }
    }
  }, [isLocked]); //Rerun the effect when the modal state changes
}

export default useLockBodyScroll;
