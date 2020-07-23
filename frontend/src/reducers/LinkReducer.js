import {
    CREATE_LINK, LIST_LINK
  } from '../actions/LinkActions';

  const initialState = {
    link: null,
    links: [],
  }

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_LINK:{

        const response = payload ? payload.data : null;
        const link = response ? response.data : null;

        return { ...state, link };
      }
      case LIST_LINK:{
        
        const response = payload ? payload.data : null;
        const links = response ? response.data : null;

        return { ...state, links};
        }
      default:
        return state;
    }
  }

