#!/usr/bin/env bash

service=$(printf 'dist/%s.bundle.js' ${SERVICE//\-/\_})
scenario=${SCENARIO}
if [ -z "$SCENARIO" ] 
then
  scenario=ramping
fi

# SCENARIO=$scenario ./generator/payment/core/k6 run $service --out influxdb=http://172.16.2.87:8086/k6 --no-thresholds --logformat=raw --console-output=./errors.log 
SCENARIO=$scenario k6 run $service --out influxdb=http://172.16.2.87:8086/k6 --no-thresholds --logformat=raw --console-output=./errors.log 
