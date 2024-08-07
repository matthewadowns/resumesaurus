# Matthew's Resume and Blog Site

Powered by [Docusaurus](https://docusaurus.io/), a modern static website generator and hosted by [Cloudflare Pages](https://pages.cloudflare.com/).

## Installation

```sh
npm
```

## Local Development

```sh
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```sh
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```sh
USE_SSH=true npm deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
