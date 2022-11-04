#onboard-px4_node
myBranch=DEV_2022-09-15_VLANDING_ORDERED_1.1.9.8;
myroot=/home/ubuntu/git/;
mkdir -p $myroot

#read -p "Enter gitUser: " gitUser
#echo -n Password:
#read -s gitPassword

gitUser=
gitPassword=

baseGitURL="https://${gitUser}:${gitPassword}@gitlab.com/MarkinYuriy/"
projectName=px4_onboard_node
my_services=(OnBoardNode)


cd $myroot;

rm -rf "${myroot}${projectName}_/";
rm -rf "${myroot}${projectName}/";

rm -rf "$projectName/";
git clone -b $myBranch  --single-branch  "${baseGitURL}${projectName}/" "${myroot}${projectName}_";

cd "${projectName}_";
mkdir -p "${myroot}${projectName}/";
cp -r config/ "${myroot}${projectName}/";
cp *.json  "${myroot}${projectName}/";

cp projConf.json "${myroot}${projectName}/";
mkdir  "${myroot}${projectName}/RTHts/"
cp RTHts/start.json "${myroot}${projectName}/RTHts";


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
  cd  "${myroot}${projectName}/${i}/dist/${i}/src";
  pm2 delete "${projectName}/${i}"
  pm2 start index.js -n "${projectName}/${i}"

  cd $inLoop
done;


cd ${myroot}${projectName}_/back/logger
npm i;
javascript-obfuscator ./routes --output ./routes --options-preset high-obfuscation;
javascript-obfuscator ./app.js --output ./app.js --options-preset high-obfuscation;
javascript-obfuscator ./mongoConnector.js --output ./mongoConnector.js --options-preset high-obfuscation;


mkdir ${myroot}${projectName}/back/logger/

cp -r "./"  "${myroot}${projectName}/back/logger/";
cd "${myroot}${projectName}/back/logger/";
pm2 delete "${projectName}/logger";
pm2 start app.js -n "${projectName}/logger"

pm2 save;
pm2 startup;
sleep 10s;

echo  "${myroot}${projectName}_";
rm -rf  "${myroot}${projectName}_";
