#!/usr/bin/env bash

service=$(printf 'dist/%s.bundle.js' ${SERVICE//\-/\_})

#example: k6 run script.js --vus 10 --duration 30s --http-debug=full
SCENARIO=verify k6 run $service --http-debug=full --summary-time-unit=ms
# SCENARIO=verify ./generator/payment/core/k6 run $service --http-debug=full --summary-time-unit=ms
# k6 run $scenario --vus 10 --duration 15m
