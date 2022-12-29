#!/usr/bin/env bash

echo "Building docker image";
docker build . -t blockware/nodejs-sample-todo-service || exit 1

echo "Done. Image ready: blockware/nodejs-sample-todo-service";