#!/usr/bin/env bash

echo "Building docker image";
docker build . -t kapetacom/nodejs-sample-users-service || exit 1

echo "Done. Image ready: kapetacom/nodejs-sample-users-service";
