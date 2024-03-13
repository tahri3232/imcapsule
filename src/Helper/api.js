const BASE_URL = 'https://fakestoreapi.com';

const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const parseJSON = (response) => response.json();

const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);
    handleErrors(response);
    return parseJSON(response);
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export default fetchData;
