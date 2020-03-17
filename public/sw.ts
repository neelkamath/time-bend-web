// This file must be in the public directory because the service worker's scope needs to be the site's root.

import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(/\.(?:html|css|js|png|svg|webmanifest)$/, new StaleWhileRevalidate());