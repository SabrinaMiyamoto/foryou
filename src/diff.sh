#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Usage: $0 file1 file2"
  exit 1
fi

if [ ! -f $1 ]; then
  echo "$1 does not exist or is not a regular file."
  exit 1
fi

if [ ! -f $2 ]; then
  echo "$2 does not exist or is not a regular file."
  exit 1
fi

diff $1 $2 > differences.txt

if [ -s differences.txt ]; then
  echo "Differences found and saved to differences.txt"
else
  echo "No differences found"
  rm differences.txt
fi
