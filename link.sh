#!/bin/bash
for s in services/*; do
	blockctl registry link $s
done;
