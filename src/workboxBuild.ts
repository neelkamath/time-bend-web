const workboxBuild = require('workbox-build');

workboxBuild.injectManifest({
    swSrc: 'public/sw.ts',
    swDest: 'dist/sw.js',
    globDirectory: 'dist',
    globPatterns: ['**\/*.{js,css,html,png,webmanifest,svg}'],
    maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
}).then(
    // @ts-ignore: Binding element 'size' implicitly has an 'any' type.
    ({count, size, warnings}) => {
        warnings.forEach(console.warn);
        console.log(`${count} files will be precached, totaling ${size} bytes.`);
    }
);