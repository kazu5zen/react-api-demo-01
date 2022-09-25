const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');
requestHeaders.set('X-API-KEY', `${process.env.REACT_APP_API_KEY}`);

export const fetchWrapper = {
  get: async <T>(url: string): Promise<T> => {
    const res = await fetch(url, {
      method: 'GET',
      headers: requestHeaders,
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result);
    }
    return result;
  },
};

export default fetchWrapper;
