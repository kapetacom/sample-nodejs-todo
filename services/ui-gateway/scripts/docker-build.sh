#!/usr/bin/env bash

echo "Building docker image";
docker build . -t kapeta/sample-nodejs-ui-gateway || exit 1

echo "Done. Image ready: kapeta/sample-nodejs-ui-gateway";
