
Generator for the tzdata-* NPM modules.


## Usage
Releasing a new version:

- ensure working copy is up to date with origin/master
- extract tzdataXXX.tar.gz to input/tzdataXXX/
- npm run all
- node src/bump-version.js
- commit and check changes
- ensure .npmrc points to world
- sync with Github
- node src/publish.js
- create a release tag
