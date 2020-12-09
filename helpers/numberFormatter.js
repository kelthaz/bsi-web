import { regexNumbers } from '../constants/regex';

const numberFormatter = (value) => value.replace(regexNumbers, '');

export default numberFormatter;
