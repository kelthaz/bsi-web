import { useEffect } from 'react';

const useSearchEngine = (value, setData, keywordsList) => {
  useEffect(() => {
    if (value.length >= 1) {
      setData(
        keywordsList.filter(({ text }) => {
          const listData = text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
          const valData = value
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
          return listData.includes(valData);
        })
      );
    } else {
      setData([]);
    }
  }, [value]);
};

export default useSearchEngine;
