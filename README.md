# FFront `⏩`

**Performant, opinionated, but friendly front-end tooling.**

![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg) [![Build Status](https://travis-ci.org/jordanblakey/ffront.svg?branch=master)](https://travis-ci.org/jordanblakey/ffront)

Start with a lightning fast build and `import` or `@include` if you need a feature. scss and js utilities are modular, well documented, and toggleable in `src/js/utils.js`, or `src/scss/app.scss`.

Designed for working mobile first and keeping a small footprint. Babel transpiles ES6 out of the box. Comes with Sass, Handlebars, and a minimalist's [Foundation Sites](https://foundation.zurb.com/sites.html). There's a gesture library for working with touch, and dead code removal/minification.

For testing, includes [Jest](https://facebook.github.io/jest) and a starter suite. While you work, tests run on every save, checking only changed files. `yarn test` uses random mocks to find edge cases and gives more detail, including code coverage.

Last, there's a [Travis CI](https://travis-ci.org) config for easy continuous integration.

## What's In the Box

**Core**: Gulp 4 - Webpack - Babel - Jest - Prettier - BrowserSync - Panini (Handlebars)

**Utilities**: Foundation Sites - Zingtouch - Axios - Lodash - Date-fns - Rellax - Scroll Reveal - Prism.js - Clipboard.js

**Layout Mode**: Exposes breakpoints & the box model as you work.

**Foundation Examples**: To show what's possible, there are examples for all basic usage.

**Code Rendering**: Easily show snippets with syntax highlighting and
'copy to clipboard' functionality.

## Installation

Requires [Node, npm](https://nodejs.org/en/), and [yarn](https://yarnpkg.com/lang/en/docs/install/).
Then, set up is one line:

```sh
git clone git@github.com:jordanblakey/ffront.git; cd ffront; yarn
```

## Usage

FFront has only three commands:

```sh
yarn start # Start the development server (fast)
yarn build # Build for production and run the server (accurate)
yarn test #  Run in-depth tests with coverage
```

---

Happy hacking `⏩`