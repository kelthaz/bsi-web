const phoneFormatter = (value) => {
  console.log(
    value
      .match(/\d*/g)
      .join('')
      .match(/(\d{0,2})(\d{0,4})(\d{0,4})/)
      .slice(1)
      .join('-')
      .replace(/-*$/g, '')
  );
  return value
    .match(/\d*/g)
    .join('')
    .match(/(\d{0,2})(\d{0,4})(\d{0,4})/)
    .slice(1)
    .join('-')
    .replace(/-*$/g, '');
};

export default phoneFormatter;