# Contributing

## Forking

If you're forking the repo to develop the project as your own instead of just to send back a PR, you can deploy the site to [Netlify](https://www.netlify.com/) (there is already a [`netlify.toml`](../netlify.toml) written).

## Installation

1. Install [node.js v12](https://nodejs.org/en/download/).
1. Clone the repository using one of the following methods.
    - SSH: `git clone git@github.com:neelkamath/time-bend-web.git`
    - HTTPS: `git clone https://github.com/neelkamath/time-bend-web.git`
1. `cd time-bend-web`
1. `npm i`

## Developing

### Testing

```
npm t
```

### Development

```
npm run dev
```
Starts the development server on http://localhost:1234/ with hot module replacement enabled.

### Production

```
npm run build
```
Saves the production build to `dist/`.

### Support

We support the latest version of Chrome, Firefox, Safari, and Edge on desktops, tablets, and phones.

### [Storage](storage.md)

### Styles

- Use the [`CustomButton`](../src/components/CustomButton.tsx) instead of rmwc's [`Button`](https://rmwc.io/buttons) directly.
- Use the [`CustomDialog`](../src/components/CustomDialog.tsx) instead of rmwc's [Dialogs](https://rmwc.io/dialogs).
- Use the [`CustomTextField`](../src/components/CustomTextField.tsx) instead of rmwc's [`TextField`](https://rmwc.io/text-fields).
- Keep rmwc's style imports (e.g., `import '@material/button/dist/mdc.button.css';`) in [App.tsx](../src/components/App.tsx) so that is' easier to refactor components into different files.

### Analytics

The [service worker](../public/sw.ts) supports offline Google Analytics. There is no analytics code in the HTML since it is considered to be [injected by Netlify](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/) at the time of deployment.

### PWA

You can ignore any Workbox and service worker related errors while using the development server. To test the service worker, use a production build, preferably one deployed with Netlify.

## Branding

- [Images](../branding)
- Foreground color: `#2F3840`
- Background color: `#F3F3F3`