#!/bin/bash

# docker-compose -f docker-compose.yml up
aws --endpoint-url=http://localhost:4566 s3 mb s3://overwatch-league-bucket
aws --endpoint-url=http://localhost:4566 s3 cp ../Parsing-Overwatch-League-Player-Stats-2022/kickoff-clash/ s3://overwatch-league-bucket/ --recursive
aws --endpoint-url=http://localhost:4566 s3 cp ../Parsing-Overwatch-League-Player-Stats-2022/countdown-cup/ s3://overwatch-league-bucket/ --recursive
aws --endpoint-url=http://localhost:4566 s3 cp ../Parsing-Overwatch-League-Player-Stats-2022/midseason-madness/ s3://overwatch-league-bucket/ --recursive
aws --endpoint-url=http://localhost:4566 s3 cp ../Parsing-Overwatch-League-Player-Stats-2022/summer-showdown/ s3://overwatch-league-bucket/ --recursive
aws --endpoint-url=http://localhost:4566 s3 cp ../Parsing-Overwatch-League-Player-Stats-2022/grand-finals/ s3://overwatch-league-bucket/ --recursive
aws configure