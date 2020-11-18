import { useEffect } from 'react';

const useOnClick = (toggle, handleToggle) => {
  useEffect(() => {
    if (toggle) {
      window.addEventListener('click', handleToggle);
    }

    return () => {
      window.removeEventListener('click', handleToggle);
    };
  }, [toggle]);
};

export default useOnClick;
