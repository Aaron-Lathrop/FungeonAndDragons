#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run prod:build

# navigate into the build output directory

git add .
git commit -m "deploy"
git push

firebase deploy --only hosting

cd -