import axios from 'axios';
import { getNews, setLastItemId } from './actionCreators';
import { store } from '../index';

export const fetchNews = () => async dispatch => {
  const response = await axios.get(
    `https://api.hnpwa.com/v0/news/${store.getState().page}.json`
  );
  dispatch(getNews(response.data));
  dispatch(setLastItemId());
};