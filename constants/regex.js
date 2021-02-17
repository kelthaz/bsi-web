export const regexLettersSpace = /[^A-Za-zÁÉÍÓÚáéíóúñÑ ]+/g;
export const regexTextArea = /[^A-Za-zÁÉÍÓÚáéíóúñÑ1234567890,.!¡?¿"()'-:; ]+/g;
export const regexAlphanumeric = /[^A-Za-zÁÉÍÓÚáéíóúñÑ1234567890 ]+/g;
export const regexEmail = /[^A-Za-z1234567890@.]+/g;
export const regexNumber = /[^1234567890]+/g;
export const regexRFC = /[^A-Za-z1234567890]+/g;
export const regexDiacritics = /([^\u0300-\u036fn]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi;
export const regexMultipleSpaces = /\s+/g;

export const regexUpperAndLowerCase = /^(?=.*[a-z])(?=.*[A-Z])/;
export const regexNoConsecutives = /^(?!.*?\d{2}).+$/;
export const regexMinOneNumber = /\d{1,}/;
export const regexRFCMoral = /^([A-ZÑ&]{3})(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))([A-Z\d]{2})([A\d])$/;
export const regexRFCFisica = /^([A-ZÑ&]{4})(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))([A-Z\d]{2})([A\d])$/;
export const regexRFCFisicaMoral = /^([A-ZÑ&]{3,4})(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))([A-Z\d]{2})([A\d])$/;

export const regexClabeOCuenta = /^(\d{11}|\d{18})$/;
