import phoneFormatter from '../helpers/phoneFormatter';
import uppercaseFormatter from '../helpers/uppercaseFormatter';
import passwordSpace from '../helpers/passwordSpace';

const useFormatter = (format) => {
  switch (format) {
    case 'phone':
      return { formatter: phoneFormatter, changeSelection: true };

    case 'uppercase':
      return { formatter: uppercaseFormatter, changeSelection: true };

    case 'passwordspace':
      return { formatter: passwordSpace, changeSelection: true };

    default:
      return { formatter: (value) => value, changeSelection: false };
  }
};

export default useFormatter;
