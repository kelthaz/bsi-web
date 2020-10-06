const mexicanWeightFormatter = (value) => {
  const moneyFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  });

  return moneyFormatter.format(value).replace('MX', '');
};

export default mexicanWeightFormatter;
