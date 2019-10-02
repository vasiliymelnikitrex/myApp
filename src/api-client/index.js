import Fishes from './api/fishesClient';
import News from './api/newsClient';
import RestClient from './restClient';
import { FISH_LIST_BASE_URL, FISH_DESCRIPTION_URL, NEWS_LIST_BASE_URL } from '../constants';

class Client {
  constructor() {
    this.fishCilent = new RestClient(FISH_LIST_BASE_URL);
    this.fishDescriptionCilent = new RestClient(FISH_DESCRIPTION_URL);
    this.newsCilent = new RestClient(NEWS_LIST_BASE_URL);

    this.fishes = new Fishes(this.fishCilent);
    this.fishDescription = new Fishes(this.fishDescriptionCilent);
    this.news = new News(this.newsCilent);
  }
}

export default new Client();
