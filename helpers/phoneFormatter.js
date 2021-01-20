const phoneFormatter = (value) =>
  value
    .match(/\d*/g)
    .join('')
    .match(/(\d{0,2})(\d{0,4})(\d{0,4})/)
    .slice(1)
    .join('-')
    .replace(/-*$/g, '');

export const changeSelectionPhoneFormatter = (keyPress, value, valueTarget, formattedValue, selectionStart, target) => {
  const deleteInValue = formattedValue.length - value.length < 0;
  let difference = formattedValue.length - valueTarget.length;

  if (valueTarget.charAt(selectionStart) === '-' && !deleteInValue) {
    difference += 1;
  }

  if (valueTarget.length !== selectionStart) {
    if (formattedValue.split('-').length > value.split('-').length) {
      difference -= 1;
    }
    if (formattedValue.split('-').length < value.split('-').length) {
      difference += 1;
    }
  }

  difference = keyPress === 'Delete' ? 0 : difference;
  target.setSelectionRange(selectionStart + difference, selectionStart + difference);
};

export default phoneFormatter;
