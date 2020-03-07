# Contributing

## Forking

If you are forking the repo to develop the project as your own, instead of to send back a PR, you can deploy the site to [Netlify](https://www.netlify.com/) using [`netlify.toml`](netlify.toml).

## Installation

1. Install a [Java JDK 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html).
1. Clone the repository using one of the following methods.
    - SSH: `git clone git@github.com:neelkamath/time-bend-web.git`
    - HTTPS: `git clone https://github.com/neelkamath/time-bend-web.git`
    
## Usage

Replace `<GRADLE>` with `gradlew` on Windows, and `./gradlew` on others.

### Developing

```
<GRADLE> -t run
```
Opens http://localhost:8080/ with live reloading enabled.

### Production

```
`<GRADLE> browserProductionWebpack`
```
Saves the production build to `build/distributions/`.