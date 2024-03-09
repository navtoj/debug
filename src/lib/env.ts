import { browser, building, dev, version } from '$app/environment';

export const isBrowser = browser ? 'true' : 'false';
export const isBuilding = building ? 'true' : 'false';
export const devMode = dev ? 'development' : 'production';
export const appVersion = version;
