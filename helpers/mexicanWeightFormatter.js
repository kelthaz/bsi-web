const mexicanWeightFormatter = (value, minimumFractionDigits = 2) => {
  const moneyFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits,
  });

  return moneyFormatter.format(value).replace('MX', '');
};

export default mexicanWeightFormatter;
