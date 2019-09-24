import Fishes from './api/fishesClient';
import RestClient from './restClient';
import { API_BASE_URL, FISH_LIST_BASE_URL, FISH_DESCRIPTION_URL } from '../constants';

class Client {
  constructor() {
    this.apiCilent = new RestClient(API_BASE_URL);
    this.fishCilent = new RestClient(FISH_LIST_BASE_URL);
    this.fishDescriptionCilent = new RestClient(FISH_DESCRIPTION_URL);

    this.fishes = new Fishes(this.fishCilent);
    this.fishDescription = new Fishes(this.fishDescriptionCilent);
  }
}

export default new Client();
