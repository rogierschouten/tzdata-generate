#!/bin/bash

if [ $# -eq 0 ]
  then
    echo "Please specify year+letter eg 2021b"
fi

git pull --rebase
npm install
npm run clean
./download.sh $1
npm run build
node src/bump-version.js
