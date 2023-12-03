#!/bin/bash

# Copy .bashrc to home directory
cp ./.devcontainer/.bashrc ~/.bashrc || exit
sudo apt update
sudo apt -y full-upgrade
sudo pip3 install cpplint

sudo mkdir /usr/share/fonts/truetype/ComicMono
sudo cp ./.devcontainer/ComicMono.ttf /usr/share/fonts/truetype/ComicMono

# install Charm VHS
sudo apt install -y ffmpeg
sudo apt-get -y install build-essential cmake git libjson-c-dev libwebsockets-dev
git clone https://github.com/tsl0922/ttyd.git
cd ttyd || exit
mkdir build
cd build || exit
cmake ..
make && sudo make install
go install github.com/charmbracelet/vhs@latest
cd ../..
sudo rm -R ./ttyd

git config --global user.name "Mr Coxall"
git config --global user.email "mr.coxall@mths.ca"
git config pull.rebase false
# shellcheck source=/dev/null
source ~/.bashrc 
