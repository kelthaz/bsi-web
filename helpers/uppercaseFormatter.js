import { regexDiacritics, regexLettersSpace } from '../constants/regex';

const uppercaseFormatter = (value) =>
  value.replace(regexLettersSpace, '').normalize('NFD').replace(regexDiacritics, '$1').normalize().toUpperCase();

export default uppercaseFormatter;
