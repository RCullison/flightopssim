#!/bin/bash 
cd /home/ubuntu/git/onboardmavlink/build
#str=`ls /dev/serial/by-path/|grep "^platform-3610000.xhci-usb-[0-9]:[0-9].[0-9]:[0-9].[0-9]-port0$" |head -n 1`;echo $str

printf "DRONE_TYPE = 1\nNODE_CONNECTION_PORT = 34568\nNODE_CONNECTION_ADDRESS = http://0.0.0.0:\nDRONE_CONNECTION_UDP_PORT = 14550\nDRONE_CONNECTION_UDP_ADDRESS = 127.0.0.1\nDRONE_CONNECTION_SERIAL_BAUDRATE = 115200\nDRONE_CONNECTION_SERIAL_ADDRESS = /dev/ttyHS1
\nTELEMETRY_PORT = 10000\nTELEMETRY_IP = 127.0.0.1\nUSE_UDP = 1\nAUTOTAKEOFF = 1\nSIM_IP = 127.0.0.1\nPORT_SERVER_UDP = 10001" >../ConfigFile.txt

./onboardmavlink

