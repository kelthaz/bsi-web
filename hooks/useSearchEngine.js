import { useEffect, useState } from 'react';

const useSearchEngine = (value, keywordsList) => {

  const [filteredList, setFilteredList] = useState(keywordsList);

  useEffect(() => {
    if (value.length >= 1) {
      setFilteredList(
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
      setFilteredList([]);
    }
  }, [value]);

  return [filteredList];
};

export default useSearchEngine;
