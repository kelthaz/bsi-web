import phoneFormatter, { changeSelectionPhoneFormatter } from '../helpers/phoneFormatter';
import uppercaseFormatter from '../helpers/uppercaseFormatter';
import rfcFormatter from '../helpers/rfcFormatter';
import passwordSpace from '../helpers/passwordSpace';
import emailFormatter from '../helpers/emailFormatter';
import textAreaFormatter from '../helpers/textAreaFormatter';
import numberFormatter from '../helpers/numberFormatter';
import alphanumericFormatter from '../helpers/alphanumericFormatter';
import moneyFormatter, { changeSelectionMoneyFormatter } from '../helpers/moneyFormatter';

const changeSelectionDefault = (keyPress, value, valueTarget, formattedValue, selectionStart, target) => {
  const difference = keyPress === 'Delete' ? 0 : formattedValue.length - valueTarget.length;
  target.setSelectionRange(selectionStart + difference, selectionStart + difference);
};

const useFormatter = (format) => {
  switch (format) {
    case 'phone':
      return [phoneFormatter, changeSelectionPhoneFormatter];

    case 'uppercase':
      return [uppercaseFormatter, changeSelectionDefault];

    case 'rfcformatter':
      return [rfcFormatter, changeSelectionDefault];

    case 'passwordspace':
      return [passwordSpace, changeSelectionDefault];

    case 'money':
      return [moneyFormatter, changeSelectionMoneyFormatter];

    case 'email':
      return [emailFormatter, () => {}];

    case 'number':
      return [numberFormatter, () => {}];

    case 'alphanumeric':
      return [alphanumericFormatter, () => {}];

    case 'textArea':
      return [textAreaFormatter, changeSelectionDefault];

    default:
      return [(value) => value, () => {}];
  }
};

export default useFormatter;
