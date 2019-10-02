import * as data from '../../../cfg.json';

class News {
  constructor(client) {
    this.client = client;
  }

  get date() {
    const date = new Date().toISOString().slice(0, 10).split('-');
    date[1] = (date[1] - 1).toString();
    if (date[1].length < 2) {
      date[1] = `0${date[1]}`;
    }
    return date.join('-');
  }

  get params() {
    const { NEWS_API_KEY } = data;

    return `q=fishing&from=${this.date}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
  }

  getNewsData = () => this.client.get(null, this.params);
}

export default News;
