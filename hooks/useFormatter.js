import phoneFormatter from '../helpers/phoneFormatter';
import uppercaseFormatter from '../helpers/uppercaseFormatter';

const useFormatter = (format) => {
  switch (format) {
    case 'phone':
      return { formatter: phoneFormatter, changeSelection: true };

    case 'uppercase':
      return { formatter: uppercaseFormatter, changeSelection: true };

    default:
      return { formatter: (value) => value, changeSelection: false };
  }
};

export default useFormatter;
