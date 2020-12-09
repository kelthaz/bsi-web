import { regexTextArea } from '../constants/regex';

const textAreaFormatter = (value) => value.replace(regexTextArea, '');

export default textAreaFormatter;
