import Type from './types';
import { compareTime, compareTitle, compareDomain } from '../heplers';

const INIT_STATE = {
  news: [],
  lastItemId: null,
  page: 1
};

export const reducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case Type.GET_NEWS:
      return {...state, news: payload };

    case Type.SORT_BY_TIME:
      return {...state, news: state.news.sort(compareTime) };

    case Type.SORT_BY_TITLE:
      return {...state, news: state.news.sort(compareTitle) };

    case Type.SORT_BY_DOMAIN:
      return {...state, news: state.news.sort(compareDomain) };

    case Type.SET_LAST_ITEM_ID:
      return {...state, lastItemId: state.news[state.news.length - 1].id };

    case Type.INCREMENT_PAGE:
      return {...state, page: state.page += 1 };

    default:
      return state;
  }
};