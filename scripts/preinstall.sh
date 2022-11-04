#!/bin/bash
########check is installed apt   dpkg -l |awk '/^[hi]i/{print $2}' |grep packageName
killall -9 apt
killall -9 dpkg

rm -rf /var/lib/dpkg/lock-frontend
rm -rf /var/cache/apt/archives/lock
sudo dpkg --configure -a

apt update -y
#apt dist-upgrade -y

apt install mc nano mongodb htop screen -y
echo  SUBSYSTEM =="usb", ATTRS {idVendor} =="2ca3", MODE ="0666" > /etc/udev/rules.d/DJIDevice.rules
## adduser ubuntu
adduser --disabled-password --gecos "" ubuntu
usermod -aG sudo ubuntu
echo "ubuntu:simplex123"|chpasswd
# ssh root
echo PermitRootLogin yes >> /etc/ssh/sshd_config ; systemctl restart sshd.service
#passwd root
echo "root:simplex123"|chpasswd
#
cd /home/ubuntu
#install nodejs
apt install curl -y
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
bash nodesource_setup.sh
#
apt-get install -y gcc g++ make cmake libcpprest-dev rapidjson-dev nodejs libavcodec-dev libswresample-dev libusb-1.0-0-dev
#globals for nodejs
npm i -g javascript-obfuscator typescript pm2 @angular/cli
#install rtsp server
wget  https://github.com/aler9/rtsp-simple-server/releases/download/v0.17.11/rtsp-simple-server_v0.17.11_linux_arm64v8.tar.gz
tar xzvf rtsp-simple-server_v0.17.11_linux_arm64v8.tar.gz
echo ./rtsp-simple-server rtsp-simple-server.yml > rtsp-server.sh
#nano  rtsp-simple-server.yml
#search path:
#between "path:" and "all:" add new line(enter) and insert next to lines
#----
#  proxied:
#    source: rtsp://127.0.0.1:1234/drone
#----
#
#ctrl-x for exit and save
pm2 delete rtsp-server
pm2 start rtsp-server.sh
pm2 save; pm2 startup
sleep 2s
#install gstreamer and its depends
#apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-doc gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio -y

#apt install gstreamer1.0-rtsp -y

#rtsp-server for cpp
#apt install gir1.2-gst-rtsp-server-1.0 -y


#apt-get install -y libgstrtspserver-1.0-dev
##ffmpeg for cpp


#apt install libavcodec-dev libavfilter-dev libavformat-dev  libavutil-dev -y
#mkdir -p /home/ubuntu/git
#cd /home/ubuntu/git

#v4l utils
#apt-get install v4l-utils -y
#crontab
(crontab -l 2>/dev/null; echo "0 *  *   *   *    pm2 flush") | crontab -
#
echo '--------------end'
