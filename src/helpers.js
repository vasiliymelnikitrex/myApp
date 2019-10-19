import { TAGS, BREAKS } from './regex';

export const removeTags = val => val && val.replace(TAGS, '');

export const removeBreaks = val => val && val.replace(BREAKS, '');

export const sortData = data =>
  data.sort((a, b) => {
    if (a.species_name[0] > b.species_name[0]) {
      return 1;
    }
    if (a.species_name[0] < b.species_name[0]) {
      return -1;
    }
    return 0;
  });

export const filterByKey = (val, key) => item =>
  item[key].toLowerCase().includes(val.toLowerCase());

export const removeDuplicateData = news => {
  const titles = news.map(item => item.title);
  const filteredTitles = [...new Set(titles)];
  const filteredNews = filteredTitles.map(title => (
    news.find(item => title === item.title)
  ));

  return filteredNews;
};
