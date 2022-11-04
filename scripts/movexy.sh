#!/bin/bash

myBranch=DEV_2022_08_17_2.0
#read -p "Enter gitUser: " gitUser
#echo -n Password:
#read -s gitPassword
gitUser=$1
gitPassword=$2
my_services=(back/MoveXY)

myroot=/home/ubuntu/git/;
mkdir -p $myroot

baseGitURL="https://${gitUser}:${gitPassword}@gitlab.com/SimplexGroup/"
projectName=movedronexy


cd $myroot;

rm -rf "${myroot}${projectName}_/";
rm -rf "$projectName/";
git clone -b $myBranch  --single-branch  "${baseGitURL}${projectName}/" "${myroot}${projectName}_";

cd "${projectName}_";
mkdir -p "${myroot}${projectName}/";
cp -r config/ "${myroot}${projectName}/";
cp *.json  "${myroot}${projectName}/";
mkdir -p "${myroot}${projectName}/classes/schemas";
cp classes/schemas/*.json "${myroot}${projectName}/classes/schemas/";
mkdir -p "${myroot}${projectName}/classes/modeDefineTSSchemas";
#cp -r classes/modeDefineTSSchemas/*json "${myroot}${projectName}/classes/modeDefineTSSchemas/";
for f in classes/modeDefineTSSchemas/*; do
if [[ -d $f ]];
then  mkdir -p "${myroot}${projectName}/$f";
cp  $f/*.json "${myroot}${projectName}/$f/";
fi;
done;

#cp projConf.json "${myroot}${projectName}/";
#cp RTHconfig.json   "${myroot}${projectName}/";

for i in "${my_services[@]}"; do
inLoop=$(pwd);
cd  $i;
rm -rf dist*;
npm i;
tsc;
#mv dist dist_;
javascript-obfuscator ./dist --output ./dist --options-preset high-obfuscation;
# rm -rf dist_;


mkdir -p  "${myroot}${projectName}/${i}"
cp -r "dist/"  "${myroot}${projectName}/${i}/dist";
cp -r "node_modules/"  "${myroot}${projectName}/${i}/node_modules";
cd  "${myroot}${projectName}/${i}/dist/${i}/src";
pm2 delete "${projectName}/${i}"
pm2 start index.js -n "${projectName}/${i}"
#cd $inLoop
#cd $i
#rm -rf src
cd $inLoop
done;

sleep 10s;
cd $myroot
rm -rf "${myroot}${projectName}_/";


pm2 save
pm2 startup
