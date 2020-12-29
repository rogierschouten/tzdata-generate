#!/bin/bash -e

rm -Rf ./input
mkdir -p ./input/tzdata-latest
pushd ./input
wget https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz
pushd ./tzdata-latest
tar -xvf ../tzdata-latest.tar.gz
popd
popd
