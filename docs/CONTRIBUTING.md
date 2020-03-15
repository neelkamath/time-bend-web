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
Opens http://localhost:1234/ with hot reload replacement.

### Production

```
npm run build
```
Saves the production build to `dist/`.

### Style Guide

- We use [rmwc](https://rmwc.io/) for UI components. 
- Use the [CustomButton](src/components/CustomButton.tsx) instead of rmwc's [`Button`](https://rmwc.io/buttons) directly.
- Keep rmwc's style imports (e.g., `import '@material/button/dist/mdc.button.css';`) in [App.tsx](src/components/App.tsx) so that is' easier to refactor components into different files.
- When building exported components, use `export default`, and name the functions (otherwise [Enzyme](https://enzymejs.github.io/enzyme/) cannot find them).

### Support

We support the latest version of Chrome, Firefox, Safari, and Edge on desktops, tablets, and phones which are at least 375 pixels in width (i.e., phones bigger than the iPhone SE).

### [Storage](storage.md)