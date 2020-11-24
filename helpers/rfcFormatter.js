import { regexRFC } from '../constants/regex';

const rfcFormatter = (value) => value.replace(regexRFC, '').normalize().toUpperCase();

export default rfcFormatter;
