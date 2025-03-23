
Generator for the tzdata-* NPM modules.


## Usage
Releasing a new version:

- ./newdata.sh <year><letter>  (without a space)
- commit and check changes
- ensure .npmrc points to world
- sync with Github
- node src/publish.js <authenticator code>   (note: wait for the auth code to regenerate otherwise it will time out)
- create a release tag

## Troubleshooting

404 from src/publish.js means you are not logged in to NPM

