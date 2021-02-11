import { useEffect } from 'react';

/**
 * Hook que trigger an event cuando se da clic afuera de la ref
 */
const useOnClickOutsideRef = (ref, toggle, handleToggle) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleToggle();
      }
    }

    if (toggle) {
      window.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };

  }, [ref, toggle]);
};

export default useOnClickOutsideRef;
