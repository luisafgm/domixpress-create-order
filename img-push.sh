#!/usr/bin/env bash

aws s3 sync cdn s3://domixpress-cdn/img/ --acl public-read --delete

echo "images pubished under https://domixpress-cdn.s3.amazonaws.com/img/"