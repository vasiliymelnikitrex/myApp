
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
