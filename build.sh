#!/bin/bash
#
# Build Silicon UI
#
# Optimize and build Silicon:
# ./build.sh publish

function DELETE_TEMP {
    rm -rf ./build
    mkdir build
}

function BUILD {
    yarn build
}

function PUBLISH {
    yarn package
}

function COPY {
    mv ./build/src/* ./build
    rm -rf ./build/src
    rm -rf ./build/docs
}

function CLEAN {
    rm -rf build
}

if [[ $1 == "publish" ]]; then
DELETE_TEMP
BUILD
COPY
PUBLISH
CLEAN
echo "Silicon UI: Build & publish completed."
elif [ $# -eq 0 ]; then
DELETE_TEMP
BUILD
COPY
echo "Silicon UI: Build completed."
fi
