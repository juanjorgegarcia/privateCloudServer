#!/bin/bash
sudo apt install -y npm
sudo npm install
sudo npm install -g typescript ts-node
sudo apt install -y mongodb
sed -i 's/bind_ip = 127.0.0.1/bind_ip = 0.0.0.0/g' /etc/mongodb.conf
npm run prod
