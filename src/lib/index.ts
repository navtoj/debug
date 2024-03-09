import { browser, building, dev, version } from '$app/environment';

export const isBrowser = browser;
export const isBuilding = building;
export const mode = dev ? 'development' : 'production';
export const appVersion = version;
