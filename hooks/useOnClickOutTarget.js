import { useEffect } from 'react';

const useOnClickOutTarget = (current, toggle, setToggle) => {
  const { current: target } = current;

  const setFromEvent = ({ target: targetEvent }) => setToggle(target.contains(targetEvent));

  useEffect(() => {
    if (toggle) {
      window.addEventListener('click', setFromEvent);
    }

    return () => {
      console.log('cliick por fuera');
      window.removeEventListener('click', setFromEvent);
    };
  }, [toggle]);
};

export default useOnClickOutTarget;
