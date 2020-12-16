import { regexAlphanumeric } from '../constants/regex';

const alphanumericFormatter = (value) => value.replace(regexAlphanumeric, '');

export default alphanumericFormatter;
