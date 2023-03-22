#!/usr/bin/env bash

echo "Building docker image";
docker build . -t kapetacom/nodejs-sample-user-ui || exit 1

echo "Done. Image ready: kapetacom/nodejs-sample-user-ui";
