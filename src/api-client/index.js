import Fishes from './api/fishesClient';
import News from './api/newsClient';
import RestClient from './restClient';
import { FISH_LIST_BASE_URL, FISH_DESCRIPTION_URL, NEWS_LIST_BASE_URL } from '../constants';

class Client {
  constructor() {
    this.fishClient = new RestClient(FISH_LIST_BASE_URL);
    this.fishDescriptionClient = new RestClient(FISH_DESCRIPTION_URL);
    this.newsClient = new RestClient(NEWS_LIST_BASE_URL);

    this.fishes = new Fishes(this.fishClient);
    this.fishDescription = new Fishes(this.fishDescriptionClient);
    this.news = new News(this.newsClient);
  }
}

export default new Client();
