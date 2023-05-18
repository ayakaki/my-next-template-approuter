import { SITE_TITEL } from '@/consts/meta';
import { isString } from './typeGuards';

export const getPageTitle = (title?: string): string => {
  if (isString(title)) {
    return `${title} - ${SITE_TITEL}`;
  }
  return SITE_TITEL;
};
