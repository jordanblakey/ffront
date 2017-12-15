# FFront ⏩

**Performant, opinionated, but friendly front-end tooling.**

Start with a blazing fast build and `import` or `@include` if and when you need a feature. All scss and js utilities are modular, well documented, and easily added by uncommenting in `src/js/utils.js`, or `src/scss/app.scss`.

Designed for working mobile first and keeping a small footprint, includes Sass, [Foundation](https://foundation.zurb.com/sites.html), a gesture library for working with touch events, and automatic dead code removal/minification.

Includes [Jest](https://facebook.github.io/jest), a starter test suite, and code coverage reporting. Tests run with every save (for performance, checking only changed files). The standalone `yarn test` command provides detailed feedback, and runs randomized tests to identify edge cases.

Also includes an example [Travis CI](https://travis-ci.org) config for easy continuous integration setup.

## What's In the Box

**Core**: Gulp 4 - Webpack - Babel - Jest - Prettier - BrowserSync - Panini (Handlebars)

**Utilities**: Foundation Sites - Zingtouch - Axios - Lodash - Date-fns - Lodash - Rellax - Scroll Reveal

## Installation

Get set up in one line:

```sh
git clone git@github.com:jordanblakey/ffront.git; cd ffront; yarn
```

## Usage

FFront has only three commands:

```sh
yarn start # Start the development server (fast)
yarn test # Run an in-depth test suite
yarn build # Start the production build server (accurate)
```

Happy hacking ⏩