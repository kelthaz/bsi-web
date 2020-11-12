const uppercaseFormatter = (value) =>
  value
    .normalize('NFD')
    .replace(/[-$%&|<>#!@?^*()/'"{}|\s=+~_":;,.\\‘«{}❤❥´`ª·¢∞¬÷“”≠‚„…–¨Ç¿·ª≤.\\‘«{}❤❥´`[]+$/, '')
    // .replace(/[\u0300-\u036f](?!\u0303)/g, '')
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    )
    .replace(/[\u0300-\u0302\u036f]/g, '')
    .toUpperCase();

export default uppercaseFormatter;
