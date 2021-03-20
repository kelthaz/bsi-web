const mexicanDateFormatter = (date) =>
  date.toLocaleDateString('es-MX', { weekday: 'long', month: 'long', day: 'numeric' });

export default mexicanDateFormatter;
