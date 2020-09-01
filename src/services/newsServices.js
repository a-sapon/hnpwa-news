export default {
  baseUrl: 'https://api.hnpwa.com/v0/newest/',
  page: 1,
  max_page: 9,

  async fetchNews() {
    const response = await fetch(
      `${this.baseUrl}${this.page}.json`,
    );
    return await response.json();
  },

  setCurrentPage(page) {
    this.page = page;
  },

  incrementPage() {
    this.page += 1;
  },

  decrementPage() {
    this.page -= 1;
  },

  resetPage() {
    this.page = 1;
  }
};