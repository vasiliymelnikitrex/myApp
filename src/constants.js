export const STATES = {
  FISH_DESCRIPTION: 'FISH_DESCRIPTION',
};

export const TABS = {
  Home: 'Home',
  Calendar: 'Calendar',
  News: 'News',
  FishList: 'FishList',
  Settings: 'Settings',
  Details: 'Details',
  MapInfo: 'MapInfo',
  FoodInfo: 'FoodInfo',
};

export const TABBAR_ICONS = {
  [TABS.Home]: 'home',
  [TABS.Calendar]: 'calendar',
  [TABS.News]: 'list',
  [TABS.FishList]: 'fish',
  [TABS.Settings]: 'cog',
};

const API_BASE_URL = 'https://www.fishwatch.gov';

export const MAX_STRING_LIMIT = 105;

export const FISH_LIST_BASE_URL = 'https://api.myjson.com/bins/cig58';
export const FISH_IMG_BASE_URL = `${API_BASE_URL}/sites/default/files`;
export const FISH_DESCRIPTION_URL = `${API_BASE_URL}/api/species`;
export const NEWS_LIST_BASE_URL = 'https://newsapi.org/v2/everything';
export const DEFAULT_NEWS_URL_IMAGE = 'https://cdn.ymaws.com/www.itsmfusa.org/resource/resmgr/images/more_images/news-3.jpg'

//https://api.myjson.com/bins/69res' - prev
// https://api.myjson.com/bins/pbmro - locations (empty)
// https://www.fishwatch.gov/api/species - varieties
// https://www.fishwatch.gov/developers
// https://www.fishwatch.gov/sites/default/files - images
// https://api.myjson.com/bins/1cgxk1 - short list
// https://api.myjson.com/bins/1dxhj5 - short list without locations
// https://api.myjson.com/bins/m56cn - prev version
// q=fishing&from=2019-09-02&sortBy=publishedAt&apiKey=
