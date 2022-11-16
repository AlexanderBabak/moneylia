export const BASE_URL = 'https://6374a81308104a9c5f852e22.mockapi.io/';

const request = async (url: string, data: any, token: string | undefined) => {
  const headersToken = token ? { Authorization: `Bearer ${token}` } : {};
  const headersMultiPart =
    typeof data.body === 'string'
      ? { 'Content-type': 'application/json;charset=utf-8' }
      : {};

  const response = await fetch(url, {
    ...data,
    headers: {
      ...headersToken,
      ...headersMultiPart,
    },
  });

  if (response.ok) {
    if (response.headers.get('Content-Length') === '0') {
      return true;
    }
    const typeResponse = response.headers.get('Content-type');
    let result;
    if (typeResponse === 'aplication/text') {
      result = await response.text();
      return result;
    }
    result = await response.json();
    return result;
  } else {
    if (response.status === 401 || response.status === 403) {
      throw new Error('Unauthorized user');
    }
    // eslint-disable-next-line curly
    if (response.status === 409) throw new Error('Already exists');
    // eslint-disable-next-line curly
    else throw { status: response.status };
  }
};

export const get = (url: string, token?: string) =>
  request(`${BASE_URL}${url}`, { method: 'GET' }, token);

export const post = (url: string, body: string | FormData, token?: string) => {
  return request(`${BASE_URL}${url}`, { method: 'POST', body }, token);
};
export const put = (url: string, body: string, token: string) => {
  return request(`${BASE_URL}${url}`, { method: 'PUT', body }, token);
};
export const remove = (url: string, token: string) =>
  request(`${BASE_URL}${url}`, { method: 'DELETE' }, token);
