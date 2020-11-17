const downloadFile = (data, name, extension) => {
  const downloadUrl = window.URL.createObjectURL(new Blob([data], { extension }));
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = `${name}.${extension}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export default downloadFile;
