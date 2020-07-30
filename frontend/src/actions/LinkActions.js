import { apiPost, apiGet, apiPut, apiDel } from '../helpers/api';

export const CREATE_LINK = 'CREATE_LINK';
export const EDIT_LINK = 'EDIT_LINK';
export const GET_LINK = 'GET_LINK';
export const LIST_LINK = 'LIST_LINK';
export const UPDATE_LINK = 'UPDATE_LINK';
export const LINK_TO_REMOVE = 'LINK_TO_REMOVE';
export const LINK_REMOVE = 'LINK_REMOVE';

export const createLink = (data) => {
  const isSocial = !!data.isSocial;

  const payload = apiPost('/link', { ...data, isSocial});
  return { type: CREATE_LINK, payload };
};

export const updateLink = (id, data) => {
  const isSocial = !!data.isSocial;

  const payload = apiPut(`/link/${id}`, { ...data, isSocial});
  return { type: UPDATE_LINK, payload };
};

export const getLink = (id) => {
  const payload = apiGet(`/link/${id}`);
  return { type: GET_LINK, payload };
};

export const listLink = () => {
  const payload = apiGet('/link');
  return { type: LIST_LINK, payload };
};

export const setLinkToRemove = (link) => {
  return { type: LINK_TO_REMOVE, payload: link};
};

export const linkRemove = (link) => {
  const payload = apiDel(`/link/${link.id}`);

  return { type: LINK_REMOVE, payload};
};
