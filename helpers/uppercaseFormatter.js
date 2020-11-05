const uppercaseFormatter = (value) =>
  value
    .normalize('NFD')
    .replace(/[-$%&|<>#!@?^*()/'"{}|\s=+~_":;,.`]+$/, '')
    .replace(/[\u0300-\u036f](?!\u0303)/g, '')
    .toUpperCase();

export default uppercaseFormatter;
