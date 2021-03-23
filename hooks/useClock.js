import { useEffect, useState } from 'react';
import mexicanDateFormatter from '../helpers/mexicanDateFormatter';
import mexicanStateDateFormatter from '../helpers/mexicanStateDateFormatter';
import mexicanTimeFormatter from '../helpers/mexicanTimeFormatter';

const useClock = () => {
  const [date, setDate] = useState(new Date());

  const checkTime = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => checkTime(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return [mexicanStateDateFormatter(date), mexicanDateFormatter(date), mexicanTimeFormatter(date)];
};

export default useClock;
