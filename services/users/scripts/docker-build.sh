#!/usr/bin/env bash

echo "Building docker image";
docker build . -t kapeta/nodejs-sample-users-service || exit 1

echo "Done. Image ready: kapeta/nodejs-sample-users-service";
