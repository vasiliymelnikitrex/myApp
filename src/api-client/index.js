import Fishes from './api/fishesClient';
import RestClient from './restClient';
import { API_BASE_URL, FISH_LIST_BASE_URL } from '../constants';

class Client {
  constructor() {
    this.apiCilent = new RestClient(API_BASE_URL);
    this.fishCilent = new RestClient(FISH_LIST_BASE_URL);

    this.fishes = new Fishes(this.fishCilent);
  }
}

export default new Client();
