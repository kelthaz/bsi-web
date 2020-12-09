import { regexEmail } from '../constants/regex';

const emailFormatter = (value) => value.replace(regexEmail, '');

export default emailFormatter;
