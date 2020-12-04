export const regexLettersSpace = /[^A-Za-zÁÉÍÓÚáéíóúñÑ ]+/g;
export const regexUpperAndLowerCase = /^(?=.*[a-z])(?=.*[A-Z])/;
export const regexNoConsecutives = /^(?!.*?\d{2}).+$/;
export const regexMinOneNumber = /\d{1,}/;
export const regexRFC = /[^A-Za-z1234567890]+/g;
export const correo = /^[A-Za-z1234567890@.]+$/;
export const regexDiacritics = /([^\u0300-\u036fn]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi;
export const regex2 = /[^a-zA-Z 0-9.]+/g;
