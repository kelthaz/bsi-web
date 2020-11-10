const uppercaseFormatter = (value) =>
  value
    .normalize('NFD')
    .replace(/[-$%&|<>#!@?^*()/'"{}|\s=+~_":;,.\\‘«{}❤❥💞💙💚💛💜😍😘😗😙😚😻💏😽💎´`[]+$/, '')
    // .replace(/[\u0300-\u036f](?!\u0303)/g, '')
    .replace(/[\u0300-\u0302\u036f]/g, '')
    .toUpperCase();

export default uppercaseFormatter;
