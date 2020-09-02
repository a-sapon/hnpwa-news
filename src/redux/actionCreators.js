import Type from './types';

export const getNews = news => ({
  type: Type.GET_NEWS,
  payload: news
});

export const incrementPage = () => ({
  type: Type.INCREMENT_PAGE
});

export const sortByTime = () => ({
  type: Type.SORT_BY_TIME
});

export const sortByTitle = () => ({
  type: Type.SORT_BY_TITLE
});

export const sortByDomain = () => ({
  type: Type.SORT_BY_DOMAIN
});

export const setLastItemId = () => ({
  type: Type.SET_LAST_ITEM_ID
});