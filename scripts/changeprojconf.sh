#!/bin/bash
myBranch=TST_2021-08-08_Pixhawk_1.0;
myroot=/home/ubuntu/git/;



read -p "Enter gitUser: " gitUser
echo -n Password:
read -s gitPassword
#gitUser=$1
#gitPassword=$2

mkdir -p $myroot

baseGitURL="https://${gitUser}:${gitPassword}@gitlab.com/simplexUI/"

projectName=changeprojconf
my_services=(main)


cd $myroot;

rm -rf "${myroot}${projectName}_/";
rm -rf "$projectName/";
git clone -b $myBranch  --single-branch  "${baseGitURL}${projectName}/" "${myroot}${projectName}_";

cd "${projectName}_";
mkdir -p "${myroot}${projectName}"
cp config.json  "${myroot}${projectName}/";
mkdir -p "${myroot}${projectName}/fakeweb"
cp -rp fakeweb "${myroot}${projectName}/"
cd $myroot;

cd "${projectName}_";

for i in "${my_services[@]}"; do
inLoop=$(pwd);
cd  $i;
rm -rf dist*;
npm i;
tsc;

javascript-obfuscator ./dist --output ./dist --options-preset high-obfuscation;

mkdir -p  "${myroot}${projectName}/${i}"
cp -r "dist/"  "${myroot}${projectName}/${i}/dist";
cp -r "node_modules/"  "${myroot}${projectName}/${i}/node_modules";
cd  "${myroot}${projectName}/${i}/dist";

pm2 delete "${projectName}/${i}"
pm2 start index.js -n "${projectName}/${i}"

cd $inLoop
done;

sleep 2s;
cd $myroot
#rm -rf "${myroot}${projectName}_/";

pm2 save
pm2 startup
