import { apiPost, apiGet } from '../helpers/api';

export const CREATE_LINK = 'CREATE_LINK';
export const LIST_LINK = 'LIST_LINK';

export const createLink = (data) => {
  const isSocial = !!data.isSocial;

  const payload = apiPost('/link', { ...data, isSocial});
  return { type: CREATE_LINK, payload };
};

export const listLink = () => {
  const payload = apiGet('/link');
  return { type: LIST_LINK, payload };
};

