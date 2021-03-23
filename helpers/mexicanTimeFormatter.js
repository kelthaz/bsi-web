const mexicanTimeFormatter = (date) =>
  date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

export default mexicanTimeFormatter;
