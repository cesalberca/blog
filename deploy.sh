#!/usr/bin/env bash

git subtree push --prefix docs origin gh-pages
git add .
git commit -m "[CI] Automatic commit"
datetime="$(date '+%Y%m%d.%H%M%S')"
tag_name="${datetime}"
git tag --annotate "${tag_name}" --message="Deployed on ${datetime}"
git push origin "${tag_name}" --no-verify
