#!/usr/bin/env bash

echo "Building docker image";
docker build . -t blockware/nodejs-sample-user-ui || exit 1

echo "Done. Image ready: blockware/nodejs-sample-user-ui";
