export const TABS = {
  Home: 'Home',
  Calendar: 'Calendar',
  News: 'News',
  FishInfo: 'FishInfo',
  Settings: 'Settings',
  Details: 'Details',
  MapInfo: 'MapInfo',
  FoodInfo: 'FoodInfo',
};

export const TABBAR_ICONS = {
  [TABS.Home]: 'home',
  [TABS.Calendar]: 'calendar',
  [TABS.News]: 'list',
  [TABS.FishInfo]: 'fish',
  [TABS.Settings]: 'cog',
};


export const API_BASE_URL = 'https://www.fishwatch.gov';
export const FISH_LIST_BASE_URL = 'https://api.myjson.com/bins/x71ex';
export const FISH_IMG_BASE_URL = `${API_BASE_URL}/sites/default/files`;
export const FISH_DESCRIPTION_URL = `${API_BASE_URL}/api/species`;

// https://www.fishwatch.gov/api/species - varieties
// https://www.fishwatch.gov/developers

// https://www.fishwatch.gov/sites/default/files - images
// https://api.myjson.com/bins/1cgxk1 - short list
// https://api.myjson.com/bins/1dxhj5 - short list without locations