const phoneFormatter = (value) =>
  value
    .match(/\d*/g)
    .join('')
    .match(/(\d{0,2})(\d{0,4})(\d{0,4})/)
    .slice(1)
    .join('-')
    .replace(/-*$/g, '');

export const phoneSelectionChange = (event, keyPress) => {
  let { selectionStart, selectionEnd } = event.target;

  if (keyPress !== 'Delete' && keyPress !== 'Backspace' && (selectionStart === 3 || selectionStart === 8)) {
    selectionStart += 1;
    selectionEnd += 1;
  }
  if (keyPress === 'Backspace' && (selectionStart === 2 || selectionStart === 7)) {
    selectionStart += 1;
    selectionEnd += 1;
  }

  return { selectionStart, selectionEnd };
};

export default phoneFormatter;
