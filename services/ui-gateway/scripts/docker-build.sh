#!/usr/bin/env bash

echo "Building docker image";
docker build . -t blockware/sample-nodejs-ui-gateway || exit 1

echo "Done. Image ready: blockware/sample-nodejs-ui-gateway";
