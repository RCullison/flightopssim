  GNU nano 2.9.3                                                                                    ardupilot.sh                                                                                              

#!/usr/bin/env bash;
. coord.txt
cd /home/ubuntu/git/ardupilot;
#Tools/environment_install/install-prereqs-ubuntu.sh -y
. ~/.profile
#export DISPLAY=:0 
#cd /home/rdp/git/ardupilot/ArduCopter;


cd /home/ubuntu/git/ardupilot/build/sitl/bin; ./arducopter -S --model + --speedup 5 --home ${lat},${lon},${alt},0 --base-port  5770 --defaults ../../../Tools/autotest/default_params/copter.parm
