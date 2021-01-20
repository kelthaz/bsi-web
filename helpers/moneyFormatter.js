import mexicanWeightFormatter from './mexicanWeightFormatter';

const moneyFormatter = (value) => {
  const posWeight = value.indexOf('$');

  return value.match(/\d*/g).join('') === ''
    ? ''
    : mexicanWeightFormatter(
        value
          .slice(posWeight === -1 ? 0 : posWeight)
          .match(/\d*/g)
          .join(''),
        0
      );
};

export const changeSelectionMoneyFormatter = (keyPress, value, valueTarget, formattedValue, selectionStart, target) => {
  const deleteInValue = formattedValue.length - value.length < 0;
  let difference = formattedValue.length - valueTarget.length;

  if (formattedValue.split(',').length > value.split(',').length) {
    difference -= 1;
    if (selectionStart > formattedValue.split(',')[0].length) {
      difference += 1;
    }
  }
  if (formattedValue.split(',').length < value.split(',').length) {
    difference += 1;
    if (deleteInValue && selectionStart > value.split(',')[0].length) {
      difference -= 1;
    }
  }

  difference = keyPress === 'Delete' ? 0 : difference;
  target.setSelectionRange(selectionStart + difference, selectionStart + difference);
};

export default moneyFormatter;
