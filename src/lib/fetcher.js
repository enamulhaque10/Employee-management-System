const baseUrl = process.env.REACT_APP_BASE_API_URL;
const protocol = process.env.REACT_APP_API_PROTOCOL;

const fetcher = async (route, options = {}) => {

  const url = new URL(`${route}`);
  const method = options.method || 'get';

  if (method === 'get') {
    Object.keys(options).forEach(key => url.searchParams.append(key, options[key]));
  }

  const response = await fetch(url, {
    headers: {
      // 'Authorization': `Bearer ${auth.getToken()}`,
      'Content-Type': 'application/json; charset=utf-8'
    },
    ...options
  });

  return response.json();

};

export default fetcher;
