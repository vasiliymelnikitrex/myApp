import { TAGS, BREAKS } from './regex';

export const removeTags = val => val.replace(TAGS, '');

export const removeBreaks = val => val.replace(BREAKS, '');
