#!/bin/sh
sudo apt-get update 

sudo apt-get install ca-certificates curl gnupg lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io

bash -c "$(curl -fsSL https://sparrow-data.org/get-sparrow.sh)"

wget "https://raw.githubusercontent.com/Concord-EPMA/Concord-Sparrow/main/sparrow-config.sh"

sparrow

echo "Done installing Docker and Sparrow!"	

SELECT * FROM information_schema.columns WHERE table_schema = 'public' AND table_name   = 'user';