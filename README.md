
Generator for the tzdata-* NPM modules.


## Usage
Releasing a new version:

- extract tzdataXXX.tar.gz to input/tzdataXXX/
- ./newdata.sh
- commit and check changes
- ensure .npmrc points to world
- sync with Github
- node src/publish.js
- create a release tag
