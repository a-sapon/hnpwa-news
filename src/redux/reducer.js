import Type from './types';
import { store } from '..';

const INIT_STATE = {
  news: [],
  lastItemId: null,
  page: 1
};

export const reducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case Type.GET_NEWS:
      return {...state, news: payload, 
        // lastItemId: payload[payload.length - 1].id 
      };

    case Type.SORT_BY_TIME:
      return {...state, news: state.news.sort(compare) };

    case Type.SET_LAST_ITEM_ID:
      return {...state, lastItemId: state.news[state.news.length - 1].id }

    case Type.INCREMENT_PAGE:
      return {...state, page: state.page += 1 };

    default:
      return state;
  }
};

function compare(a, b) {
  // var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  // var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (a.time > b.time) {
    return -1;
  }
  // if (nameA > nameB) {
  //   return 1;
  // }

  // // names must be equal
  return 0;
}