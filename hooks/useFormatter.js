import phoneFormatter from '../helpers/phoneFormatter';
import uppercaseFormatter from '../helpers/uppercaseFormatter';
import rfcFormatter from '../helpers/rfcFormatter';
import passwordSpace from '../helpers/passwordSpace';
import emailFormatter from '../helpers/emailFormatter';
import textAreaFormatter from '../helpers/textAreaFormatter';
import numberFormatter from '../helpers/numberFormatter';
import alphanumericFormatter from '../helpers/alphanumericFormatter';

const defaultSelectionChange = (event) => {
  const { selectionStart, selectionEnd } = event.target;
  return { selectionStart, selectionEnd };
};

const useFormatter = (format) => {
  switch (format) {
    case 'phone':
      return {
        formatter: phoneFormatter,
        changeSelection: true,
      };

    case 'uppercase':
      return {
        formatter: uppercaseFormatter,
        changeSelection: true,
      };

    case 'rfcformatter':
      return { formatter: rfcFormatter, changeSelection: true };

    case 'passwordspace':
      return {
        formatter: passwordSpace,
        changeSelection: true,
      };

    case 'email':
      return {
        formatter: emailFormatter,
        changeSelection: false,
      };

    case 'number':
      return {
        formatter: numberFormatter,
        changeSelection: false,
      };

    case 'alphanumeric':
      return {
        formatter: alphanumericFormatter,
        changeSelection: false,
      };

    case 'textArea':
      return {
        formatter: textAreaFormatter,
        changeSelection: true,
      };

    default:
      return { formatter: (value) => value, changeSelection: false, changeSelectionFunc: defaultSelectionChange };
  }
};

export default useFormatter;
