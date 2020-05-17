#!/usr/bin/env sh

# abort on errors
set -e

# Build using vue.config.acceptance.js
# Note: using real path here, it didn't work with relative path
CONF=`realpath vue.config.acceptance.js`
VUE_CLI_SERVICE_CONFIG_PATH=$CONF npm run acceptance:build

# navigate into the build output directory
cd dist-acceptance

git init
git add -A
git commit -m 'deploy-acceptance'

git push -f https://github.com/Aaron-Lathrop/FungeonAndDragons gh-pages

cd -