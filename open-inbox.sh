#!/bin/bash

# Function to open URL on Linux
open_linux() {
  PORT=$(docker ps --format '{{.CreatedAt}} {{.ID}} {{.Image}} {{.Ports}}' | grep maildev | sort -r | head -n 1 | awk '{ for(i=4; i<=NF; i++) print $i }' | grep '8000/tcp' | awk -F':' '{print $2}' | awk -F'->' '{print $1}')
  if [ ! -z "$PORT" ]; then
    xdg-open "http://localhost:$PORT/"
  fi
}

# Function to open URL on macOS
open_mac() {
  PORT=$(docker ps --format '{{.CreatedAt}} {{.ID}} {{.Image}} {{.Ports}}' | grep maildev | sort -r | head -n 1 | awk '{ for(i=4; i<=NF; i++) print $i }' | grep '8000/tcp' | awk -F':' '{print $2}' | awk -F'->' '{print $1}')
  if [ ! -z "$PORT" ]; then
    open "http://localhost:$PORT/"
  fi
}

# Function to open URL on Windows
open_windows() {
  PORT=$(docker ps --format "{{.CreatedAt}} {{.ID}} {{.Image}} {{.Ports}}" | findstr "maildev" | sort /R | findstr /v "sort" | head -n 1 | awk "{ for(i=4; i<=NF; i++) print $i }" | findstr "8000/tcp" | awk -F':' "{print $2}" | awk -F'->' "{print $1}")
  if [ ! -z "$PORT" ]; then
    start "http://localhost:$PORT/"
  fi
}

# Determine OS and call the appropriate function
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  open_linux
elif [[ "$OSTYPE" == "darwin"* ]]; then
  open_mac
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
  open_windows
else
  echo "Operating system not supported."
fi
