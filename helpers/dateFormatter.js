const dateFormatter = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${year}-${month.length < 2 ? `0${month}` : month}-${day.length < 2 ? `0${day}` : day}`;
};

export default dateFormatter;
