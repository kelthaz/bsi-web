import { regexNumber } from '../constants/regex';

const numberFormatter = (value) => value.replace(regexNumber, '');

export default numberFormatter;
