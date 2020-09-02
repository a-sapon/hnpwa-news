import Type from './types';

export const getNews = news => ({
  type: Type.GET_NEWS,
  payload: news
});

export const incrementPage = () => ({
  type: Type.INCREMENT_PAGE
});