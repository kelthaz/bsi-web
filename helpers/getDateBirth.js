const extraerFechaNacimientoPersonaFisica = (rfc) => {
  const year = rfc.substring(4, 6);
  const mes = rfc.substring(6, 8);
  const dia = rfc.substring(8, 10);

  const dateBirth = new Date(`${mes}/${dia}/${year}`);
  return `${dia}/${mes}/${dateBirth.getFullYear()}`;
};

const extraerFechaNacimientoPersonaMoral = (rfc) => {
  const year = rfc.substring(3, 5);
  const mes = rfc.substring(5, 7);
  const dia = rfc.substring(7, 9);

  const dateBirth = new Date(`${mes}/${dia}/${year}`);
  return `${dia}/${mes}/${dateBirth.getFullYear()}`;
};

const getDateBirth = (rfc) =>
  rfc.length === 12 ? extraerFechaNacimientoPersonaMoral(rfc) : extraerFechaNacimientoPersonaFisica(rfc);

export default getDateBirth;
