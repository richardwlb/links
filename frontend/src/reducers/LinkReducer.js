import {
    CREATE_LINK, 
    LIST_LINK, 
    GET_LINK, 
    UPDATE_LINK, 
    LINK_TO_REMOVE,
    LINK_REMOVE,
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
      case UPDATE_LINK:{

        const response = payload ? payload.data : null;
        const link = response ? response.data : null;

        return { ...state, link };
      }
      case LIST_LINK:{
        
        const response = payload ? payload.data : null;
        const links = response ? response.data : null;

        return { ...state, links};
      }
      case GET_LINK:{
        
          const response = payload ? payload.data : null;
          const link = response ? response.data : null;
  
          return { ...state, link};
      }
      case LINK_TO_REMOVE:{
        return { ...state, linkToRemove: payload};
      }
      case LINK_REMOVE:{
        // Tira o link que foi deletado do array links
        const links = state.links.filter( link => link.id !== state.linkToRemove.id);
        return { ...state, linkToRemove: null, links};
      }
      default:
        return state;
    }
  }

