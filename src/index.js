import configureStore from './redux/store';
import { fetchNews } from './redux/operations';
import { incrementPage } from './redux/actionCreators';
import tableRows from './templates/tableRows.hbs';
import './styles.css';

export const store = configureStore();

window.addEventListener('DOMContentLoaded', showNews);

async function showNews() {
  await store.dispatch(fetchNews());
  const news = store.getState().news;
  const data = { items: news };
  const markup = tableRows(data);
  document.getElementById('table-body').insertAdjacentHTML('beforeend', markup);

  const lastItemId = news[news.length - 1].id;
  const lastDomItem = document.getElementById(lastItemId);

  const options = { threshold: 1.0 };

  const observer = new IntersectionObserver(onEntry, options);
  observer.observe(lastDomItem);

  function onEntry(entries) {
    if (entries[0].isIntersecting) {
      observer.unobserve(lastDomItem);
      store.dispatch(incrementPage());
      showNews();
    }
  }

  if (store.getState().page > 9) {
    observer.unobserve(lastDomItem);
  }
}