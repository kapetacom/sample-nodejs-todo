#!/usr/bin/env bash

echo "Building docker image";
docker build . -t blockware/nodejs-sample-users-service || exit 1

echo "Done. Image ready: blockware/nodejs-sample-users-service";
