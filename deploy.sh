#!/bin/bash

# build
# docsファイルの作成
yarn run build

# gitにpush
git add .
today=$(date "+%Y/%m/%d")
git commit -m "${today} upload"
git push origin master

# デプロイ終了
echo "Deploy Completed!"