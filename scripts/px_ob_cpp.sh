#onboard-px4_cpp
myBranch=DEV_2022-08-28_ardupilot_asio_1.1.5.1;
myroot=/home/ubuntu/git/;
mkdir -p $myroot

#read -p "Enter gitUser: " gitUser
#echo -n Password:
#read -s gitPassword
gitUser=$1
gitPassword=$2
#gitUser=
#gitPassword=

baseGitURL="https://${gitUser}:${gitPassword}@gitlab.com/simplexUI/"
projectName=onboardmavlink

mkdir -p "${myroot}${projectName}/";
cp  mavlinkCpp.sh "${myroot}";
cd $myroot;

#rm -rf "${myroot}${projectName}/";
rm -rf "${myroot}${projectName}_/";
rm -rf "$projectName/";
git clone -b $myBranch  --single-branch  "${baseGitURL}${projectName}/" "${myroot}${projectName}_";

cd "${projectName}_";
#mkdir -p "${myroot}${projectName}/";
mkdir -p "${myroot}${projectName}_/build/";
mkdir -p "${myroot}${projectName}/build/";

cd "${myroot}${projectName}_/build/";
cmake ..; make -j4;
cd ..;
cp -r "build/"  "${myroot}${projectName}/";
cd "${myroot}";
pm2 delete "${projectName}/cpp"
pm2 start mavlinkCpp.sh -n "${projectName}/cpp"

pm2 save;
pm2 startup;
sleep 10s;

echo  "${myroot}${projectName}_";
rm -rf  "${myroot}${projectName}_";






