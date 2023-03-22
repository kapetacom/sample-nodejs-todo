#!/usr/bin/env bash

echo "Building docker image";
docker build . -t kapetacom/sample-nodejs-ui-gateway || exit 1

echo "Done. Image ready: kapetacom/sample-nodejs-ui-gateway";
