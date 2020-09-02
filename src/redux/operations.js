import axios from 'axios';
import { getNews } from './actionCreators';
import { store } from '../index';

export const fetchNews = () => async dispatch => {
  console.log('page: ', store.getState().page)
  const response = await axios.get(
    `https://api.hnpwa.com/v0/newest/${store.getState().page}.json`
  );
  dispatch(getNews(response.data));
};