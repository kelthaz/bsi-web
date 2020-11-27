const changeSelectModel = (value, label, items) => items.map((item) => ({ value: item[value], label: item[label] }));
export const createSelectModel = (items) => items.map((item, index) => ({ value: index, label: item }));

export default changeSelectModel;
