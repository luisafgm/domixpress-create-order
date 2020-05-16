#!/usr/bin/env bash

aws s3 sync build s3://domixpress-uat/ --acl public-read --delete

echo "UAT Environment deployed: https://domixpress-uat.s3.amazonaws.com/index.html"