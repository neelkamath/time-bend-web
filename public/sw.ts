// This file must be in the public directory because the service worker's scope needs to be the site's root.

import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';
import {precacheAndRoute} from 'workbox-precaching';

// @ts-ignore: Property '__WB_MANIFEST' does not exist on type 'Window & typeof globalThis'.
precacheAndRoute([self.__WB_MANIFEST]);
registerRoute(/\.(?:html|css|js|png|svg|webmanifest)$/, new StaleWhileRevalidate());