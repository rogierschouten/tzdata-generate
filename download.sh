#!/bin/bash -e

if [ $# -eq 0 ]
  then
    echo "Please specify year+letter eg 2021b"
fi


rm -Rf ./input
mkdir -p ./input/tzdata-latest
pushd ./input
wget https://www.iana.org/time-zones/repository/releases/tzdata$1.tar.gz
pushd ./tzdata-latest
tar -xvf ../tzdata$1.tar.gz
sed -i -e 's/^\(Rule[\t ]*[^\t ]*[\t ]*[^\t ]*[\t ]*[^\t ]*[\t ]*[^\t ]*[\t ]*...\)[^\t ]*/\1/' *
popd
popd
