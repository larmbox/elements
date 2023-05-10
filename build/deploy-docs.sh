#!/usr/bin/env sh

set -e

npm run build:vuepress

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Deploy'

git push -f https://github.com/larmbox/elements master:gh-pages

cd -
