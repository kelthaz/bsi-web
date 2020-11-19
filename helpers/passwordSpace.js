const passwordSpace = (value) =>
  value
    .normalize('NFD')
    .replace(/[\s]+$/, '')
    .replace(/[\u0300-\u0302\u036f]/g, '');

export default passwordSpace;
