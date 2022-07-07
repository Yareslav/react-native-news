import requestResultFormatter from './utils/requestResultFormatter';
const makeARequest = async ({
  dateToSearchFrom,
  dateToSearchTo,
  searchText,
  sortBy,
  isAllowedToSearchByDate,
}) => {
  //date variables
  const key = '1d03526f0e7f41278ae4417fd180c62f';

  const from =
    isAllowedToSearchByDate && dateToSearchFrom
      ? `&from=${dateToSearchFrom}`
      : '';
  const to =
    isAllowedToSearchByDate && dateToSearchTo ? `&to=${dateToSearchTo}` : '';

  let requestData;

  function deleteCopies(data) {
    const objWithUniqueFields = {};

    data.forEach(elem => {
      const key = elem.key;
      if (!objWithUniqueFields[key]) objWithUniqueFields[key] = elem;
    });

    return Object.values(objWithUniqueFields);
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchText}&sortBy=${sortBy}&apiKey=${key}&searchIn=title,description${from}${to}`,
    );
    const result = await response.json();
    //! in most cases if user pasted invalid date in DataPicker
    if (result.code === 'parameterInvalid') {
      return {error: true, message: result.message};
    }

    requestData = result.articles;
  } catch (error) {
    return {error: true, message: ''};
  }

  const requestDataFormatted = requestData.map(elem =>
    requestResultFormatter(elem),
  );

  return {
    error: false,
    message: deleteCopies(requestDataFormatted),
  };
};

export default makeARequest;
