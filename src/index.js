import './styles.css';

import newsServices from './services/newsServices';

const refs = {
  tableBody: document.getElementById('table-body'),
  backBtn: document.getElementById('back'),
  nextBtn: document.getElementById('next'),
}

window.addEventListener('DOMContentLoaded', showNews);
refs.backBtn.addEventListener('click', showPrevPage);
refs.nextBtn.addEventListener('click', showNextPage);

async function showNews() {
  refs.tableBody.innerHTML = '';
  const news = await newsServices.fetchNews();
  const markup = createMarkup(news);
  refs.tableBody.insertAdjacentHTML('beforeend', markup);

  console.log('news', news);
}

function createMarkup(arr) {
  return arr.reduce((acc, value) => {
    return acc += `
    <tr>
      <td>${value.time_ago}</td>
      <td>${value.title}</td>
      <td>${value.domain}</td>
    </tr>
    `;
  }, '');
}

function showPrevPage() {
  newsServices.decrementPage();
  showNews();
}

function showNextPage() {
  newsServices.incrementPage();
  showNews();
}