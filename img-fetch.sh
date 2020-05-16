#!/usr/bin/env bash

mkdir -p cdn

aws s3 cp s3://domixpress-cdn/img/ cdn --recursive