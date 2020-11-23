import phoneFormatter, { phoneSelectionChange } from '../helpers/phoneFormatter';
import uppercaseFormatter from '../helpers/uppercaseFormatter';
import rfcFormatter from '../helpers/rfcFormatter';
import passwordSpace from '../helpers/passwordSpace';

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
        changeSelectionFunc: phoneSelectionChange,
      };

    case 'uppercase':
      return {
        formatter: uppercaseFormatter,
        changeSelection: true,
        changeSelectionFunc: defaultSelectionChange,
      };

    case 'rfcformatter':
      return { formatter: rfcFormatter, changeSelection: true };

    case 'passwordspace':
      return {
        formatter: passwordSpace,
        changeSelection: true,
        changeSelectionFunc: defaultSelectionChange,
      };

    default:
      return { formatter: (value) => value, changeSelection: false, changeSelectionFunc: defaultSelectionChange };
  }
};

export default useFormatter;
