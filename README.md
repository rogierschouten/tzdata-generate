
Generator for the tzdata-* NPM modules.


## Usage
Releasing a new version:

- extract tzdataXXX.tar.gz to input/tzdataXXX/
- npm run all
- node src/bump-version.js
- commit and check changes
- ensure .npmrc points to world
- node src/publish.js
- sync with Github
- create a release tag
