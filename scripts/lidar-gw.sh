#!/bin/bash

#	myBranch=TST_2022-08-17_CAS_with_Lidar_0.3
#	read -p "Enter gitUser: " gitUser
#	echo -n Password:
#	read -s gitPassword
gitUser=$1
gitPassword=$2



	myroot=/home/ubuntu/git/;
	mkdir -p $myroot

	baseGitURL="https://${gitUser}:${gitPassword}@gitlab.com/simplexUI/"
	projectName=lidar-gw


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
	mkdir -p "${myroot}${projectName}/back/RTHts/";
	cp back/RTHts/start.json "${myroot}${projectName}/back/RTHts/";
	mkdir -p "${myroot}${projectName}/classes/modeDefineTSSchemas";
	#cp -r classes/modeDefineTSSchemas/*json "${myroot}${projectName}/classes/modeDefineTSSchemas/";
	for f in classes/modeDefineTSSchemas/*; do
	if [[ -d $f ]];
	then  mkdir -p "${myroot}${projectName}/$f";
	cp  $f/*.json "${myroot}${projectName}/$f/";
	fi;
	


	inLoop=$(pwd);

	rm -rf dist*;
	npm i;
	tsc;

	javascript-obfuscator ./dist --output ./dist --options-preset high-obfuscation;



	cp -r "dist"  "${myroot}${projectName}/";
	cp -r "node_modules"  "${myroot}${projectName}/";
	cd  "${myroot}${projectName}/dist/";
	pm2 delete "${projectName}"
	pm2 start index.js -n "${projectName}"
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

