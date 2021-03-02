#!/bin/bash
if [ $# -lt 1 ]; then
    echo ${0} projectname
    exit 0
fi
PROJECT_NAME=$1
DEF_PN='projectname'
# Rename all the words
find . \( ! -regex '.*/\..*' \) -type f \( ! -iname "setproj" \) -exec sed -i "s/$DEF_PN/$PROJECT_NAME/g" {} +
# Rename all the files
PROJECT_NAME=$1 DEF_PN='projectname' find . \( ! -regex '.*/\..*' \) -type f \( ! -iname "setproj" \) -exec sh -c 'mv "$0" "${0/$DEF_PN/$PROJECT_NAME}"' '{}' \;
