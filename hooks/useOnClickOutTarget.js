import { useEffect } from 'react';

const useOnClickOutTarget = (id, toggle, setToggle) => {
  const setFromEvent = ({ target: targetEvent }) => {
    if (document.getElementById(id)) {
      setToggle(document.getElementById(id).contains(targetEvent));
    }
  };

  useEffect(() => {
    if (toggle) {
      window.addEventListener('click', setFromEvent);
    }

    return () => {
      window.removeEventListener('click', setFromEvent);
    };
  }, [toggle]);
};

export default useOnClickOutTarget;
