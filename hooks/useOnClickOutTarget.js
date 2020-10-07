import { useEffect } from 'react';

const useOnClickOutTarget = (target, toggle, setToggle) => {
  console.log(target);
  const setFromEvent = ({ target: targetEvent }) => setToggle(target.contains(targetEvent));

  useEffect(() => {
    if (toggle) {
      window.addEventListener('click', setFromEvent);
    }

    return () => {
      console.log('cliick por fuera');
      if (target) {
        window.removeEventListener('click', setFromEvent);
      }
    };
  }, [toggle]);
};

export default useOnClickOutTarget;
