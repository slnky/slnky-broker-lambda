#!/bin/bash

set -e

if [[ -f /etc/profile.d/nvm.sh ]]; then
  source /etc/profile.d/nvm.sh
else
  source /usr/local/opt/nvm/nvm.sh
fi

if [[ -f ~scatanzarite/lambda.env ]]; then
  cp ~scatanzarite/lambda.env .env
fi

if [[ ! -e .env ]]; then
  echo "ENV file missing"
  exit 1
fi

nvm install 5.6.0
nvm use 5.6.0
npm install -g grunt grunt-cli
npm install

grunt deploy

rm -rf dist
