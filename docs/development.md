# Development

## Running

```
npm run dev
```
Starts the development server on http://localhost:1234/ with hot module replacement enabled.

## Styles

- We use [rmwc](https://rmwc.io/) for UI components. 
- Use the [`CustomButton`](../src/components/CustomButton.tsx) instead of rmwc's [`Button`](https://rmwc.io/buttons) directly.
- Use the [`CustomDialog`](../src/components/CustomDialog.tsx) instead of rmwc's [Dialogs](https://rmwc.io/dialogs).
- Keep rmwc's style imports (e.g., `import '@material/button/dist/mdc.button.css';`) in [App.tsx](../src/components/App.tsx) so that is' easier to refactor components into different files.

## Analytics

The [service worker](../public/sw.ts) supports offline Google Analytics. There is no analytics code in the HTML since it is considered to be [injected by Netlify](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/) at the time of deployment.

## PWA

You can ignore any Workbox and service worker related errors while using the development server. To test the service worker, use a production build, preferably one deployed with Netlify.

## Regenerator Runtime

Parcel leaks an implementation detail for certain uses of `async`/`await` (see [this issue](https://github.com/parcel-bundler/parcel/issues/1762#issuecomment-504389468)). As a workaround, the statement `import 'regenerator-runtime/runtime';` is included in certain files.