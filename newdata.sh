#!/bin/bash
git pull --rebase
npm install
npm run all
node src/bump-version.js
