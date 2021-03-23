const mexicanStateDateFormatter = (date) => {
  const statesDate = [
    [0, 4, 'buenas noches'],
    [5, 11, 'buenos días'],
    [12, 17, 'buenas tardes'],
    [18, 24, 'buenas noches'],
  ];
  const currentHour = date.getHours();
  const [, , stateSelect] = statesDate.find((state) => {
    const [min, max] = state;
    return currentHour >= min && currentHour <= max;
  });

  return stateSelect;
};

export default mexicanStateDateFormatter;
