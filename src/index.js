import configureStore from './redux/store';
import { fetchNews } from './redux/operations';
import { incrementPage, sortByTime, setLastItemId } from './redux/actionCreators';
import tableRows from './templates/tableRows.hbs';
import './styles.css';

export const store = configureStore();

const refs = {
  tableBody: document.getElementById('table-body'),
  timeColumn: document.getElementById('time'),
  titleColumn: document.getElementById('title'),
  domainColumn: document.getElementById('domain'),

}

window.addEventListener('DOMContentLoaded', loadStartPage);
refs.timeColumn.addEventListener('click', handleTimeClick);
refs.titleColumn.addEventListener('click', handleTitleClick);
refs.domainColumn.addEventListener('click', handleDomainClick);

async function loadStartPage() {
  await store.dispatch(fetchNews());
  showNews();
}

function showNews() {
  const news = store.getState().news;
  const data = { items: news };
  const markup = tableRows(data);
  refs.tableBody.insertAdjacentHTML('beforeend', markup);

  console.log('id: ', store.getState().lastItemId)
  const lastDomItem = document.getElementById(store.getState().lastItemId);

  const options = { threshold: 1.0 };

  const observer = new IntersectionObserver(onEntry, options);
  observer.observe(lastDomItem);

  async function onEntry(entries) {
    if (entries[0].isIntersecting) {
      observer.unobserve(lastDomItem);
      store.dispatch(setLastItemId());
      store.dispatch(incrementPage());
      await store.dispatch(fetchNews());
      showNews();
    }
  }

  if (store.getState().page > 9) {
    observer.unobserve(lastDomItem);
  }
}

function handleTimeClick() {
  refs.tableBody.innerHTML = '';
  store.dispatch(sortByTime());
  store.dispatch(setLastItemId());
  showNews();
}

function handleTitleClick() {
  
}

function handleDomainClick() {
  
}