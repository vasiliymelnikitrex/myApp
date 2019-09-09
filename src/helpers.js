import { TAGS } from './regex';

export const removeTags = val => val.replace(TAGS, '');
