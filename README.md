
Generator for the tzdata-* NPM modules.


## Usage
Releasing a new version:

- extract tzdataXXX.zip to input/tzdataXXX/
- npm run all
- commit and check changes
- sync with Github
- create a release tag
- node src/bump-version.js
- node src/publish.js
