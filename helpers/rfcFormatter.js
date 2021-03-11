import { regexRFC } from '../constants/regex';

const rfcFormatter = (value) => value.replace(regexRFC, '').toUpperCase();

export default rfcFormatter;
