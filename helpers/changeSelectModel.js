const changeSelectModel = (value, label, items) => items.map((item) => ({ value: item[value], label: item[label] }));

export default changeSelectModel;
