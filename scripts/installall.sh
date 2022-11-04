#!/bin/bash


read -p "Enter gitUser: " gitUser
echo -n Password:
read -s gitPassword

bash agcs.sh  $gitUser $gitPassword
bash als.sh  $gitUser $gitPassword
bash cas.sh $gitUser $gitPassword
bash lidar-gw.sh  $gitUser $gitPassword
bash movexy.sh  $gitUser $gitPassword
bash ob_rs.sh  $gitUser $gitPassword
bash ob_rth.sh  $gitUser $gitPassword
bash px_ob_cpp.sh $gitUser $gitPassword
bash  ob_node.sh   $gitUser $gitPassword
pm2 delete ardupilot
pm2 start  ardupilot.sh
pm2 delete  mavproxy
pm2 start mavproxy.sh

pm2 save --force
#############pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
