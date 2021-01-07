import { useEffect } from 'react';

const useOnClickOutTarget = (id, toggle, setToggle, closeable) => {
  useEffect(() => {
    if (!closeable) return () => {};

    const setFromEvent = ({ target: targetEvent }) => {
      if (document.getElementById(id)) {
        setToggle(document.getElementById(id).contains(targetEvent));
      }
    };

    if (toggle) {
      window.addEventListener('click', setFromEvent);
    }

    return () => window.removeEventListener('click', setFromEvent);
  }, [toggle]);
};

export default useOnClickOutTarget;
