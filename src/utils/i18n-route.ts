// src/utils/i18n-route.ts
import { routeMap } from '@/config/route-map';

export function getRoute(key: keyof typeof routeMap, locale: 'en' | 'vi') {
  return `/${locale}/${routeMap[key][locale]}`;
}
