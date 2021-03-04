const dateFormatter = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${year}-${month.toString().length < 2 ? `0${month}` : month}-${day.toString().length < 2 ? `0${day}` : day}`;
};

export default dateFormatter;
