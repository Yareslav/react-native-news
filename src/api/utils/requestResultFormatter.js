function requestResultFormatter(obj) {
  const displayObj = {
    author: obj.author,
    source: obj.source?.name,
    title: obj.title,
    description: obj.description,
    urlToImage: obj.urlToImage,
    publishedAt: formatDate(obj.publishedAt),
    key: obj.title,
  };

  function formatDate(dateString) {
    if (!dateString) return '';

    const array = dateString.split('T');

    return `${array[1].replace('Z', '')},${array[0]}`;
  }

  //adds unknown to empty fields , except urlToImage
  Object.entries(displayObj).forEach(([key, field]) => {
    if (!field && key !== 'urlToImage') displayObj[key] = 'Unknown';
  });

  return displayObj;
}
export default requestResultFormatter;
