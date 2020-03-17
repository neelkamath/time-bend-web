# Contributing

## Forking

Follow these steps if you're forking the repo to develop the project as your own instead of just to send back a PR.
- Set up the CI/CD pipeline.
    1. Create a [GitLab](https://gitlab.com/users/sign_in#register-pane) account.
    1. [Connect](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html) the GitHub repo to a GitLab repo.
- Deploy the site to [Netlify](https://www.netlify.com/).

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

Parcel leaks an implementation detail for certain uses of `async`/`await` (see [this issue](https://github.com/parcel-bundler/parcel/issues/1762#issuecomment-504389468)). As a workaround, the statement `import 'regenerator-runtime/runtime';` is included in certain files.

### Production

```
npm run build
```
Saves the production build to `dist/`.

### Support

We support the latest version of Chrome, Firefox, Safari, and Edge on desktops, tablets, and phones which are at least 375 pixels in width (i.e., phones bigger than the iPhone SE).

### Style Guide

- We use [rmwc](https://rmwc.io/) for UI components. 
- Use the [`CustomButton`](../src/components/CustomButton.tsx) instead of rmwc's [`Button`](https://rmwc.io/buttons) directly.
- Use the [`CustomDialog`](../src/components/CustomDialog.tsx) instead of rmwc's [Dialogs](https://rmwc.io/dialogs).
- Keep rmwc's style imports (e.g., `import '@material/button/dist/mdc.button.css';`) in [App.tsx](../src/components/App.tsx) so that is' easier to refactor components into different files.

### Analytics

The [service worker](../public/sw.ts) supports offline Google Analytics. There is no analytics code in the HTML since it is considered to be [injected by Netlify](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/) at the time of deployment.

### [Storage](storage.md)

## Branding

- [Images](../branding)
- Foreground color: `#2F3840`
- Background color: `#F3F3F3`