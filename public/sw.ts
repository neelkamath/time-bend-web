// In order for the service worker to have the scope of the root directory, it must be placed in this directory.

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

// @ts-ignore: Property '__WB_MANIFEST' does not exist on type 'Window & typeof globalThis'.
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);