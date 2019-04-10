#!/usr/bin/env bash

function deploy() {
  _vcs_assert_everything_committed
  _vcs_assert_all_changes_pushed

  git subtree push --prefix docs origin gh-pages
  git add .
  git commit -m "[CI] Automatic commit"
  datetime="$(date '+%Y%m%d.%H%M%S')"
  tag_name="${datetime}"
  git tag --annotate "${tag_name}" --message="Deployed on ${datetime}"
  git push origin "${tag_name}" --no-verify
}

function _vcs_assert_everything_committed() {
    local not_everything_commited=`git diff --exit-code && git diff --cached --exit-code`
    if [[ $not_everything_commited ]] ; then
      echo 'Cannot continue if you have pending commits'
      exit 1
    fi
}

function _vcs_assert_all_changes_pushed() {
  declare local_branch="${1:-}" remote_branch="${2:-}"

  if [[ -z ${local_branch} ]] ; then
      local_branch=$(git rev-parse --abbrev-ref HEAD)
  fi
  if [[ -z ${remote_branch} ]] ; then
      remote_branch="refs/heads/${local_branch}"
  fi

  local local_master_sha1=$(git rev-parse --verify "${local_branch}")
  local remote_master_sha1=$(git ls-remote | grep -e ".*\s${remote_branch}$" | cut -f1)
  if [[ "$local_master_sha1" != "$remote_master_sha1" ]] ; then
    echo "Cannot continue if your local '$local_branch' ($local_master_sha1) is not the same than remote '$remote_branch' ($remote_master_sha1)"
    exit 1
  fi
}

deploy
