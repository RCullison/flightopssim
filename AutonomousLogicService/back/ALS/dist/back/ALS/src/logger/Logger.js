'use strict';const a30_0x2b046a=a30_0xb10a;(function(_0x357fff,_0x2fca1f){const _0x188f10=a30_0xb10a,_0x250745=_0x357fff();while(!![]){try{const _0x1990d7=-parseInt(_0x188f10(0x21b))/0x1+-parseInt(_0x188f10(0x1ef))/0x2+-parseInt(_0x188f10(0x1ed))/0x3*(-parseInt(_0x188f10(0x210))/0x4)+-parseInt(_0x188f10(0x213))/0x5*(-parseInt(_0x188f10(0x1f8))/0x6)+parseInt(_0x188f10(0x226))/0x7+-parseInt(_0x188f10(0x202))/0x8+parseInt(_0x188f10(0x203))/0x9*(-parseInt(_0x188f10(0x1f2))/0xa);if(_0x1990d7===_0x2fca1f)break;else _0x250745['push'](_0x250745['shift']());}catch(_0x380f35){_0x250745['push'](_0x250745['shift']());}}}(a30_0x1a29,0x94005));function a30_0x1a29(){const _0x25c6ba=['isExist','removing','zipFileByDateAndRemoveSrc','scheduleJob','fileName','existsSync','getMinutes','getFuncName','scheduler\x20\x20began\x20to\x20zip\x20and\x20clear\x20old\x20zip','env','getListMyNotZippedFilesInFolder','appendFile','length','setDate','path','floor','with\x20error','6BiReod','getSeconds','205310kZNRWn','getFullYear','at\x20Function.','31080RcYQwh','ext','doItNow','getListFilesFromListXDaysAgo','keys','close','606Arfgiq',']\x20[','join','createWriteStream','pipe','win32','stringify','split','USERPROFILE','writeFileSync','2937368gEQdUd','1836luXVWZ','object','remove','LEVEL','HOME','getDateXDaysAgo','message','forEach','platform','zippedLogs','unlinkSync','prefix','__esModule','2190828krbmTP','\x20\x20*\x20\x20*\x20\x20*','appendData','29245adiBPv','node-schedule','generalFunctLoggerHex','getMonth','instance','getFormattedDateTime','archiver','defineProperty','432794ksOxeB','finalize','0\x20\x20','.zip','getTimezoneOffset','readdir','type','match','info','getDate','getFileName','3196914tgaocm','zip','mkdirSync','getTime','log','Logger','abs','scheduler','createReadStream','error'];a30_0x1a29=function(){return _0x25c6ba;};return a30_0x1a29();}Object[a30_0x2b046a(0x21a)](exports,a30_0x2b046a(0x20f),{'value':!![]}),exports[a30_0x2b046a(0x22b)]=void 0x0;const archiver=require(a30_0x2b046a(0x219)),schedule=require(a30_0x2b046a(0x214)),fs=require('fs'),all_typings_1=require('../../../../classes/typings/all.typings'),suf='ALS',path=require(a30_0x2b046a(0x1ea)),foldersForLogs='current_logs',foldersForZippedLogs=a30_0x2b046a(0x20c),absPathfindersForLogs=path[a30_0x2b046a(0x1fa)](process[a30_0x2b046a(0x1e5)][process['platform']===a30_0x2b046a(0x1fd)?a30_0x2b046a(0x200):a30_0x2b046a(0x207)],foldersForLogs+'/'),absPathfindersForZips=path['join'](process[a30_0x2b046a(0x1e5)][process[a30_0x2b046a(0x20b)]===a30_0x2b046a(0x1fd)?a30_0x2b046a(0x200):a30_0x2b046a(0x207)],foldersForZippedLogs+'/'),isPrintLogs=!![];!fs[a30_0x2b046a(0x1e1)](absPathfindersForLogs)&&fs['mkdirSync'](absPathfindersForLogs);function a30_0xb10a(_0xd5e011,_0x8ba555){const _0x1a2961=a30_0x1a29();return a30_0xb10a=function(_0xb10ae4,_0x166848){_0xb10ae4=_0xb10ae4-0x1da;let _0x4ca2b2=_0x1a2961[_0xb10ae4];return _0x4ca2b2;},a30_0xb10a(_0xd5e011,_0x8ba555);}!fs[a30_0x2b046a(0x1e1)](absPathfindersForZips)&&fs[a30_0x2b046a(0x228)](absPathfindersForZips);class Logger{constructor(){const _0x8b58ba=a30_0x2b046a;this[_0x8b58ba(0x218)]=()=>{const _0x3c6477=_0x8b58ba,_0x1adfce=new Date(),_0x294c3c=-_0x1adfce[_0x3c6477(0x21f)](),_0xebdb4c=_0x294c3c>=0x0?'+':'-',_0x5e5bb6=function(_0x2f0de8){const _0x119327=_0x3c6477,_0x4599c7=Math[_0x119327(0x1eb)](Math[_0x119327(0x22c)](_0x2f0de8));return(_0x4599c7<0xa?'0':'')+_0x4599c7;};return _0x1adfce['getFullYear']()+'-'+_0x5e5bb6(_0x1adfce[_0x3c6477(0x216)]()+0x1)+'-'+_0x5e5bb6(_0x1adfce[_0x3c6477(0x224)]())+'T'+_0x5e5bb6(_0x1adfce['getHours']())+':'+_0x5e5bb6(_0x1adfce[_0x3c6477(0x1e2)]())+':'+_0x5e5bb6(_0x1adfce[_0x3c6477(0x1ee)]())+_0xebdb4c+_0x5e5bb6(_0x294c3c/0x3c)+':'+_0x5e5bb6(_0x294c3c%0x3c);},this[_0x8b58ba(0x225)]=(_0x24bf68=new Date())=>{const _0x4abd79=_0x8b58ba,_0x34f707=_0x24bf68[_0x4abd79(0x1f0)]()+'-'+(_0x24bf68[_0x4abd79(0x216)]()+0x1<0xa?'0'+(_0x24bf68[_0x4abd79(0x216)]()+0x1):_0x24bf68[_0x4abd79(0x216)]()+0x1)+'-'+(_0x24bf68[_0x4abd79(0x224)]()<0xa?'0'+_0x24bf68[_0x4abd79(0x224)]():_0x24bf68[_0x4abd79(0x224)]()),_0x467760=absPathfindersForLogs+_0x34f707+'_'+suf+'.log';return!fs[_0x4abd79(0x1e1)](_0x467760)&&fs[_0x4abd79(0x201)](_0x467760,''),_0x467760;},this['init']=_0x5e8c41=>{Logger[_0x5e8c41]=_0x5e8c41;},this[_0x8b58ba(0x215)]=(_0x51eed5,_0x1e15c0,_0x36d68c)=>{const _0x36c906=_0x8b58ba,_0x46cc4a=this[_0x36c906(0x225)]();(!this['hasOwnProperty'](_0x51eed5)||!this[_0x36c906(0x1dc)](_0x46cc4a))&&this['init'](_0x51eed5);if(_0x1e15c0){let _0x1a4fd0=undefined;if(typeof _0x1e15c0===_0x36c906(0x204))try{_0x1a4fd0=JSON[_0x36c906(0x1fe)](_0x1e15c0);}catch(_0xb64bd){_0x1a4fd0=undefined;}else _0x1a4fd0=_0x1e15c0;switch(_0x36d68c){case all_typings_1['LEVEL']['error']:{this[_0x36c906(0x212)](_0x46cc4a,'['+this[_0x36c906(0x218)]()+_0x36c906(0x1f9)+all_typings_1[_0x36c906(0x206)][_0x36c906(0x1db)]+_0x36c906(0x1f9)+_0x51eed5+']\x20'+_0x1a4fd0);break;}case all_typings_1['LEVEL'][_0x36c906(0x223)]:{this[_0x36c906(0x212)](_0x46cc4a,'['+this[_0x36c906(0x218)]()+_0x36c906(0x1f9)+all_typings_1[_0x36c906(0x206)]['info']+_0x36c906(0x1f9)+_0x51eed5+']\x20'+_0x1a4fd0);break;}default:{this[_0x36c906(0x212)](_0x46cc4a,'['+this[_0x36c906(0x218)]()+_0x36c906(0x1f9)+all_typings_1[_0x36c906(0x206)]['info']+_0x36c906(0x1f9)+_0x51eed5+']\x20'+_0x1a4fd0);break;}}if(isPrintLogs){if(typeof _0x1e15c0===_0x36c906(0x204))try{_0x1e15c0=JSON[_0x36c906(0x1fe)](_0x1e15c0,undefined,0x2);}catch(_0x25f3f7){_0x1e15c0=undefined;}if(_0x1e15c0)switch(_0x36d68c){case all_typings_1[_0x36c906(0x206)][_0x36c906(0x1db)]:{break;}case all_typings_1[_0x36c906(0x206)]['info']:{break;}default:{break;}}}}},this[_0x8b58ba(0x1dc)]=_0x807684=>{const _0x1fe16f=_0x8b58ba,_0xc2a22e=fs[_0x1fe16f(0x1e1)](_0x807684);return _0xc2a22e;},this[_0x8b58ba(0x208)]=(_0xf933bf,_0x31e1dc=new Date())=>{const _0x3d9a7e=_0x8b58ba,_0x4acd20=new Date(_0x31e1dc[_0x3d9a7e(0x229)]());return _0x4acd20[_0x3d9a7e(0x1e9)](_0x31e1dc[_0x3d9a7e(0x224)]()-_0xf933bf),_0x4acd20;},this[_0x8b58ba(0x1e6)]=(_0x57d239,_0x3555ea)=>{const _0x5626c7=_0x8b58ba,_0x2e97bd={};fs[_0x5626c7(0x220)](_0x57d239,(_0x2d7186,_0x229f2b)=>{const _0x22e10a=_0x5626c7;if(_0x2d7186!==undefined)_0x229f2b[_0x22e10a(0x20a)](_0x54d18a=>{const _0x4b31ea=_0x22e10a;if(_0x54d18a['includes'](suf)){const _0x3c6e38=_0x54d18a[_0x4b31ea(0x222)](/\d\d\d\d-\d\d-\d\d/);if(_0x3c6e38&&_0x3c6e38[_0x4b31ea(0x1e8)]>0x0){const _0x397abf=_0x3c6e38[0x0],_0x529c41=_0x54d18a[_0x4b31ea(0x1ff)]('.');let _0x2e5f58='',_0x590fe0=_0x54d18a;if(_0x529c41[_0x4b31ea(0x1e8)]>0x1){_0x2e5f58=_0x529c41[_0x529c41[_0x4b31ea(0x1e8)]-0x1];const _0x266b8b=_0x54d18a[_0x4b31ea(0x1ff)]('.'+_0x2e5f58);_0x590fe0=_0x266b8b[0x0];}else{}_0x2e97bd[_0x397abf]={'abs':absPathfindersForLogs,'fileName':_0x590fe0,'ext':_0x2e5f58};}}});else{}_0x3555ea(_0x2e97bd);});},this[_0x8b58ba(0x1f5)]=(_0x5f2d77,_0x170350)=>{const _0x20acdc=_0x8b58ba,_0x343654={},_0x2c8d89=Object[_0x20acdc(0x1f6)](_0x5f2d77),_0x2dd81b=new Date();return _0x2c8d89[_0x20acdc(0x20a)](_0x3a4973=>{const _0x4e9a20=_0x20acdc,_0x58e36c=new Date(_0x3a4973);_0x2dd81b[_0x4e9a20(0x229)]()-_0x58e36c[_0x4e9a20(0x229)]()>_0x170350*0x3e8*0xe10*0x18&&(_0x343654[_0x3a4973]=_0x5f2d77[_0x3a4973]);}),_0x343654;},this[_0x8b58ba(0x1de)]=(_0x4d90ce,_0x513073=![])=>{const _0x31afe8=_0x8b58ba,_0x3cae74=_0x4d90ce[_0x31afe8(0x1e0)]+'.'+_0x4d90ce[_0x31afe8(0x1f3)];let _0x36753e=fs[_0x31afe8(0x1fb)](path[_0x31afe8(0x1fa)](absPathfindersForZips,_0x4d90ce[_0x31afe8(0x1e0)]+_0x31afe8(0x21e))),_0x5d23e0=archiver('zip',{'zlib':{'level':0x6}});_0x36753e['on'](_0x31afe8(0x1f7),()=>{const _0x46a6b6=_0x31afe8;_0x36753e=undefined,_0x5d23e0=undefined;if(_0x513073)try{fs[_0x46a6b6(0x20d)](path[_0x46a6b6(0x1fa)](_0x4d90ce[_0x46a6b6(0x22c)],_0x3cae74));}catch(_0x5c6e87){console[_0x46a6b6(0x1db)](_0x46a6b6(0x227),_0x46a6b6(0x205),_0x3cae74,_0x5c6e87);}}),_0x5d23e0['on'](_0x31afe8(0x1db),_0x44ba84=>{const _0x204917=_0x31afe8;console[_0x204917(0x1db)](_0x204917(0x227),_0x3cae74,_0x44ba84);}),_0x5d23e0[_0x31afe8(0x1fc)](_0x36753e),_0x5d23e0['append'](fs[_0x31afe8(0x1da)](path[_0x31afe8(0x1fa)](_0x4d90ce['abs'],_0x4d90ce['fileName']+'.'+_0x4d90ce[_0x31afe8(0x1f3)])),{'name':_0x4d90ce['fileName']+'.'+_0x4d90ce[_0x31afe8(0x1f3)]}),_0x5d23e0[_0x31afe8(0x21c)]();},this[_0x8b58ba(0x212)]=(_0x104107,_0x45e368)=>{const _0x7e859d=_0x8b58ba;_0x45e368+='\x0a',fs[_0x7e859d(0x1e7)](_0x104107,_0x45e368,()=>{});},this[_0x8b58ba(0x1f4)]=_0x9ffccc=>{const _0x325d09=_0x8b58ba;this[_0x325d09(0x1e6)](absPathfindersForLogs,_0x2888ee=>{const _0x42228b=_0x325d09,_0x2f668d=this['getListFilesFromListXDaysAgo'](_0x2888ee,_0x9ffccc);for(let _0x4efe70 in _0x2f668d){this[_0x42228b(0x1de)]({'date':_0x4efe70,'fileName':_0x2f668d[_0x4efe70][_0x42228b(0x1e0)],'abs':_0x2f668d[_0x4efe70][_0x42228b(0x22c)],'ext':_0x2f668d[_0x4efe70]['ext']},!![]);}}),this[_0x325d09(0x1e6)](absPathfindersForZips,_0x1ba8f7=>{const _0x3579f8=_0x325d09,_0x4e946b=_0x9ffccc,_0x38386b=this['getListFilesFromListXDaysAgo'](_0x1ba8f7,_0x4e946b);for(let _0x10f18c in _0x38386b){try{fs[_0x3579f8(0x20d)](path[_0x3579f8(0x1fa)](absPathfindersForZips,_0x38386b[_0x10f18c][_0x3579f8(0x1e0)]+'.'+_0x38386b[_0x10f18c]['ext'])),console['log']('removed',_0x38386b[_0x10f18c][_0x3579f8(0x1e0)]+'.'+_0x38386b[_0x10f18c][_0x3579f8(0x1f3)]);}catch(_0x2aff1a){console[_0x3579f8(0x1db)](_0x3579f8(0x1dd),_0x38386b[_0x10f18c][_0x3579f8(0x1e0)]+'.'+_0x38386b[_0x10f18c][_0x3579f8(0x1f3)],_0x3579f8(0x1ec),_0x2aff1a);}}});},this['scheduler']=(_0x3d40c2,_0x373942,_0x18f6af)=>{const _0x2cbc79=_0x8b58ba;this[_0x2cbc79(0x1f4)](_0x3d40c2),schedule[_0x2cbc79(0x1df)](_0x2cbc79(0x21d)+_0x373942+'\x20'+_0x18f6af+_0x2cbc79(0x211),()=>{const _0x4c1a25=_0x2cbc79;console[_0x4c1a25(0x22a)](new Date(),_0x4c1a25(0x1e4)),this['doItNow'](_0x3d40c2);});},this[_0x8b58ba(0x22a)]=_0x33e9bf=>{const _0x12fdc1=_0x8b58ba;if(_0x33e9bf[_0x12fdc1(0x221)]===all_typings_1[_0x12fdc1(0x206)][_0x12fdc1(0x223)])this[_0x12fdc1(0x223)](_0x33e9bf['prefix'],_0x33e9bf[_0x12fdc1(0x209)]);else _0x33e9bf[_0x12fdc1(0x221)]===all_typings_1[_0x12fdc1(0x206)][_0x12fdc1(0x1db)]?this[_0x12fdc1(0x1db)](_0x33e9bf[_0x12fdc1(0x20e)],_0x33e9bf[_0x12fdc1(0x209)]):this['error'](_0x33e9bf[_0x12fdc1(0x20e)],_0x33e9bf[_0x12fdc1(0x209)]);},this[_0x8b58ba(0x1db)]=(_0x3d212d,_0x190ce3)=>{const _0x4862ca=_0x8b58ba;this[_0x4862ca(0x215)](_0x3d212d,_0x190ce3,all_typings_1[_0x4862ca(0x206)][_0x4862ca(0x1db)]);},this[_0x8b58ba(0x223)]=(_0x486774,_0x7b84c)=>{const _0x439e21=_0x8b58ba;this[_0x439e21(0x215)](_0x486774,_0x7b84c,all_typings_1[_0x439e21(0x206)][_0x439e21(0x223)]);},this[_0x8b58ba(0x1e3)]=_0x1b8e3a=>{const _0x139caf=_0x8b58ba;let _0x4067ad='';if(_0x1b8e3a){const _0x264e1f=_0x1b8e3a[_0x139caf(0x1ff)]('\x0a');if(_0x264e1f['length']>0x0){const _0x39ad4f=_0x264e1f[0x1];if(_0x39ad4f){const _0x2d5aef=_0x39ad4f['trim']()[_0x139caf(0x1ff)](_0x139caf(0x1f1));if(_0x2d5aef['length']>0x0){const _0x1547f6=_0x2d5aef[0x0];if(_0x1547f6){const _0x57e584=_0x1547f6[_0x139caf(0x1ff)]('\x20(');if(_0x57e584){const _0x45270d=_0x57e584[0x0],_0x53427e=_0x45270d['split']('\x20');if(_0x53427e['length']>0x1){const _0x4d5d3e=_0x53427e[0x1];_0x4067ad=_0x4d5d3e;}else _0x4067ad=_0x45270d;}}}}}}return _0x4067ad;};}}exports[a30_0x2b046a(0x22b)]=Logger,Logger[a30_0x2b046a(0x217)]=new Logger(),Logger['scheduler']=Logger[a30_0x2b046a(0x217)][a30_0x2b046a(0x22d)],Logger[a30_0x2b046a(0x22a)]=Logger[a30_0x2b046a(0x217)]['log'],Logger[a30_0x2b046a(0x1db)]=Logger[a30_0x2b046a(0x217)][a30_0x2b046a(0x1db)],Logger[a30_0x2b046a(0x223)]=Logger[a30_0x2b046a(0x217)][a30_0x2b046a(0x223)],Logger['getFuncName']=Logger[a30_0x2b046a(0x217)][a30_0x2b046a(0x1e3)];