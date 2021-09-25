
Generator for the tzdata-* NPM modules.


## Usage
Releasing a new version:

- ./newdata.sh <year><letter>  (without a space)
- commit and check changes
- ensure .npmrc points to world
- sync with Github
- node src/publish.js <authenticator code>
- create a release tag

## Troubleshooting

404 from src/publish.js means you are not logged in to NPM

