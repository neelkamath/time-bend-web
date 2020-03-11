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

### Storage

`localStorage` is used to store the following data. Since `localStorage` stores everything as a `string`, data types are listed to explain how to parse it. We use 24 hour clocks.

|Key|Explanation|Data type|Example|
|:---:|:---:|:---:|:---:|
|`startHour`|Day's start hour|`number`|3|
|`startMinute`|Day's start minute|`number`|17|
|`endHour`|Day's end hour|`number`|4|
|`endMinute`|Day's end minute|`number`|22|