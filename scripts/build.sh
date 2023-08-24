#!/usr/bin/env bash

echo "Installing Kapeta CLI..."
npm i -g @kapeta/kap || exit 1

echo "Installing latest version of plan..."
kap registry install -n kapeta/sample-nodejs-plan || exit 1

echo "Creating tar file..."

TARFILE=sample-nodejs-todo.tar.gz
CURRENT_DIR=$(pwd)
if [ -f "$CURRENT_DIR/$TARFILE" ]; then
  rm "$CURRENT_DIR/$TARFILE"
fi

cd $HOME/.kapeta/repository/ || exit 1
tar -cvzf "$CURRENT_DIR/$TARFILE" kapeta/* || exit 1
cd "$CURRENT_DIR" || exit 1
echo "Tar file created: $TARFILE"