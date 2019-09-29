import { TAGS, BREAKS } from './regex';

export const removeTags = val => val && val.replace(TAGS, '');

export const removeBreaks = val => val && val.replace(BREAKS, '');
