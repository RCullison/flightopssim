'use strict';const a4_0x5d93da=a4_0xcede;(function(_0x3644b0,_0x21a529){const _0x237dfa=a4_0xcede,_0x1fbf7c=_0x3644b0();while(!![]){try{const _0xc695da=parseInt(_0x237dfa(0x18e))/0x1+parseInt(_0x237dfa(0x19e))/0x2*(-parseInt(_0x237dfa(0x199))/0x3)+parseInt(_0x237dfa(0x1bd))/0x4*(-parseInt(_0x237dfa(0x1a4))/0x5)+-parseInt(_0x237dfa(0x1b8))/0x6+-parseInt(_0x237dfa(0x185))/0x7*(-parseInt(_0x237dfa(0x1bf))/0x8)+parseInt(_0x237dfa(0x1b7))/0x9+parseInt(_0x237dfa(0x17b))/0xa;if(_0xc695da===_0x21a529)break;else _0x1fbf7c['push'](_0x1fbf7c['shift']());}catch(_0x2cf82a){_0x1fbf7c['push'](_0x1fbf7c['shift']());}}}(a4_0x4c88,0x8d23a));Object[a4_0x5d93da(0x18d)](exports,'__esModule',{'value':!![]}),exports[a4_0x5d93da(0x170)]=void 0x0;const all_typings_1=require(a4_0x5d93da(0x1a8)),archiver=require(a4_0x5d93da(0x174)),schedule=require(a4_0x5d93da(0x19c)),fs=require('fs'),suf=a4_0x5d93da(0x180),path=require(a4_0x5d93da(0x181)),foldersForLogs=a4_0x5d93da(0x194),foldersForZippedLogs='zippedLogs',absPathfindersForLogs=path['join'](process[a4_0x5d93da(0x1bb)][process['platform']===a4_0x5d93da(0x197)?a4_0x5d93da(0x177):a4_0x5d93da(0x173)],foldersForLogs+'/'),absPathfindersForZips=path[a4_0x5d93da(0x1b4)](process[a4_0x5d93da(0x1bb)][process[a4_0x5d93da(0x175)]===a4_0x5d93da(0x197)?a4_0x5d93da(0x177):'HOME'],foldersForZippedLogs+'/'),isPrintLogs=!![];!fs['existsSync'](absPathfindersForLogs)&&fs['mkdirSync'](absPathfindersForLogs);!fs[a4_0x5d93da(0x179)](absPathfindersForZips)&&fs[a4_0x5d93da(0x193)](absPathfindersForZips);function a4_0xcede(_0x4a5c5a,_0x56c0b4){const _0x4c88a5=a4_0x4c88();return a4_0xcede=function(_0xcede62,_0xea9a99){_0xcede62=_0xcede62-0x16e;let _0x4f2cd7=_0x4c88a5[_0xcede62];return _0x4f2cd7;},a4_0xcede(_0x4a5c5a,_0x56c0b4);}class Logger{constructor(){const _0x2048d7=a4_0x5d93da;this['getFormattedDateTime']=()=>{const _0x5a6fa2=a4_0xcede,_0x2febe9=new Date(),_0x444b89=-_0x2febe9[_0x5a6fa2(0x186)](),_0x313b02=_0x444b89>=0x0?'+':'-',_0x1e872d=function(_0x5f15d0){const _0x8b9bbf=_0x5a6fa2,_0x339bb8=Math[_0x8b9bbf(0x1c1)](Math[_0x8b9bbf(0x189)](_0x5f15d0));return(_0x339bb8<0xa?'0':'')+_0x339bb8;};return _0x2febe9[_0x5a6fa2(0x1ae)]()+'-'+_0x1e872d(_0x2febe9[_0x5a6fa2(0x18c)]()+0x1)+'-'+_0x1e872d(_0x2febe9['getDate']())+'T'+_0x1e872d(_0x2febe9[_0x5a6fa2(0x18a)]())+':'+_0x1e872d(_0x2febe9['getMinutes']())+':'+_0x1e872d(_0x2febe9[_0x5a6fa2(0x17c)]())+_0x313b02+_0x1e872d(_0x444b89/0x3c)+':'+_0x1e872d(_0x444b89%0x3c);},this[_0x2048d7(0x1a2)]=(_0x110dd8=new Date())=>{const _0x3d6401=_0x2048d7,_0x3efbfc=_0x110dd8[_0x3d6401(0x1ae)]()+'-'+(_0x110dd8[_0x3d6401(0x18c)]()+0x1<0xa?'0'+(_0x110dd8[_0x3d6401(0x18c)]()+0x1):_0x110dd8[_0x3d6401(0x18c)]()+0x1)+'-'+(_0x110dd8[_0x3d6401(0x19d)]()<0xa?'0'+_0x110dd8[_0x3d6401(0x19d)]():_0x110dd8['getDate']()),_0x31f8ac=absPathfindersForLogs+_0x3efbfc+'_'+suf+_0x3d6401(0x17e);return!fs[_0x3d6401(0x179)](_0x31f8ac)&&fs['writeFileSync'](_0x31f8ac,''),_0x31f8ac;},this[_0x2048d7(0x1b5)]=_0x55feb0=>{Logger[_0x55feb0]=_0x55feb0;},this[_0x2048d7(0x18b)]=(_0xd2943f,_0x533521,_0x3281bb)=>{const _0x2fdfcd=_0x2048d7,_0x1e33ee=this[_0x2fdfcd(0x1a2)]();(!this[_0x2fdfcd(0x1b6)](_0xd2943f)||!this['isExist'](_0x1e33ee))&&this[_0x2fdfcd(0x1b5)](_0xd2943f);if(_0x533521){let _0x50c26d=undefined;if(typeof _0x533521==='object')try{_0x50c26d=JSON['stringify'](_0x533521);}catch(_0x32bd4c){_0x50c26d=undefined;}else _0x50c26d=_0x533521;switch(_0x3281bb){case all_typings_1[_0x2fdfcd(0x1ac)][_0x2fdfcd(0x1a9)]:{this[_0x2fdfcd(0x184)](_0x1e33ee,'['+this[_0x2fdfcd(0x1ab)]()+_0x2fdfcd(0x1aa)+all_typings_1[_0x2fdfcd(0x1ac)][_0x2fdfcd(0x1a9)]+_0x2fdfcd(0x1aa)+_0xd2943f+']\x20'+_0x50c26d);break;}case all_typings_1[_0x2fdfcd(0x1ac)][_0x2fdfcd(0x1be)]:{this[_0x2fdfcd(0x184)](_0x1e33ee,'['+this[_0x2fdfcd(0x1ab)]()+']\x20['+all_typings_1[_0x2fdfcd(0x1ac)][_0x2fdfcd(0x1be)]+']\x20['+_0xd2943f+']\x20'+_0x50c26d);break;}default:{this[_0x2fdfcd(0x184)](_0x1e33ee,'['+this[_0x2fdfcd(0x1ab)]()+_0x2fdfcd(0x1aa)+all_typings_1[_0x2fdfcd(0x1ac)]['info']+_0x2fdfcd(0x1aa)+_0xd2943f+']\x20'+_0x50c26d);break;}}if(isPrintLogs){if(typeof _0x533521===_0x2fdfcd(0x1b3))try{_0x533521=JSON[_0x2fdfcd(0x1a5)](_0x533521,undefined,0x2);}catch(_0x491142){_0x533521=undefined;}if(_0x533521)switch(_0x3281bb){case all_typings_1[_0x2fdfcd(0x1ac)][_0x2fdfcd(0x1a9)]:{console[_0x2fdfcd(0x1a9)](_0x2fdfcd(0x1b2)),console['error'](new Date()),console[_0x2fdfcd(0x1a9)](_0xd2943f),console[_0x2fdfcd(0x1a9)](_0x533521),console['error'](_0x2fdfcd(0x17f));break;}case all_typings_1['LEVEL'][_0x2fdfcd(0x1be)]:{console['log'](_0x2fdfcd(0x1b2)),console[_0x2fdfcd(0x19b)](new Date()),console['error'](_0xd2943f),console[_0x2fdfcd(0x19b)](_0x533521),console['log'](_0x2fdfcd(0x17f));break;}default:{console[_0x2fdfcd(0x19b)]('--LoggerBeginMessage-----------------------------------------------------------'),console[_0x2fdfcd(0x19b)](new Date()),console['log'](_0x533521),console['error'](_0xd2943f),console[_0x2fdfcd(0x19b)](_0x2fdfcd(0x17f));break;}}}}},this[_0x2048d7(0x1b0)]=_0x5788ae=>{const _0x286f6e=_0x2048d7,_0x100556=fs[_0x286f6e(0x179)](_0x5788ae);return _0x100556;},this['getDateXDaysAgo']=(_0x35976f,_0xb55058=new Date())=>{const _0x316f8c=_0x2048d7,_0xc0c150=new Date(_0xb55058['getTime']());return _0xc0c150['setDate'](_0xb55058[_0x316f8c(0x19d)]()-_0x35976f),_0xc0c150;},this[_0x2048d7(0x16e)]=(_0x30e898,_0x123f21)=>{const _0x37d651=_0x2048d7,_0x871111={};fs[_0x37d651(0x1a6)](_0x30e898,(_0x252ee2,_0x558d2f)=>{const _0xda9ada=_0x37d651;if(_0x252ee2!==undefined)_0x558d2f[_0xda9ada(0x196)](_0x5bb76d=>{const _0x4237aa=_0xda9ada;if(_0x5bb76d[_0x4237aa(0x172)](suf)){const _0x568145=_0x5bb76d['match'](/\d\d\d\d-\d\d-\d\d/);if(_0x568145&&_0x568145[_0x4237aa(0x198)]>0x0){const _0x246ee5=_0x568145[0x0],_0x2f62fe=_0x5bb76d['split']('.');let _0x416434='',_0x2a91a7=_0x5bb76d;if(_0x2f62fe['length']>0x1){_0x416434=_0x2f62fe[_0x2f62fe[_0x4237aa(0x198)]-0x1];const _0x40d3fb=_0x5bb76d[_0x4237aa(0x17d)]('.'+_0x416434);_0x2a91a7=_0x40d3fb[0x0];}else{}_0x871111[_0x246ee5]={'abs':absPathfindersForLogs,'fileName':_0x2a91a7,'ext':_0x416434};}}});else{}_0x123f21(_0x871111);});},this['getListFilesFromListXDaysAgo']=(_0x306030,_0xbff98f)=>{const _0x170eb4=_0x2048d7,_0x2dd7fe={},_0x23664b=Object[_0x170eb4(0x1a1)](_0x306030),_0x26d7ce=new Date();return _0x23664b['forEach'](_0x3c0d36=>{const _0x16eecf=_0x170eb4,_0x1c19fc=new Date(_0x3c0d36);_0x26d7ce[_0x16eecf(0x18f)]()-_0x1c19fc['getTime']()>_0xbff98f*0x3e8*0xe10*0x18&&(_0x2dd7fe[_0x3c0d36]=_0x306030[_0x3c0d36]);}),_0x2dd7fe;},this[_0x2048d7(0x1a0)]=(_0x67cbcd,_0x16d2e5=![])=>{const _0x35fcc6=_0x2048d7,_0x446f71=_0x67cbcd[_0x35fcc6(0x183)]+'.'+_0x67cbcd[_0x35fcc6(0x176)];let _0x536ad=fs['createWriteStream'](path['join'](absPathfindersForZips,_0x67cbcd[_0x35fcc6(0x183)]+_0x35fcc6(0x1b1))),_0x22089e=archiver(_0x35fcc6(0x16f),{'zlib':{'level':0x6}});_0x536ad['on']('close',()=>{const _0x136900=_0x35fcc6;_0x536ad=undefined,_0x22089e=undefined;if(_0x16d2e5)try{fs[_0x136900(0x171)](path['join'](_0x67cbcd['abs'],_0x446f71));}catch(_0x15a245){console['error'](_0x136900(0x16f),'remove',_0x446f71,_0x15a245);}}),_0x22089e['on'](_0x35fcc6(0x1a9),_0x136b65=>{const _0x2fe824=_0x35fcc6;console[_0x2fe824(0x1a9)](_0x2fe824(0x16f),_0x446f71,_0x136b65);}),_0x22089e['pipe'](_0x536ad),_0x22089e[_0x35fcc6(0x1ba)](fs[_0x35fcc6(0x1b9)](path[_0x35fcc6(0x1b4)](_0x67cbcd['abs'],_0x67cbcd['fileName']+'.'+_0x67cbcd[_0x35fcc6(0x176)])),{'name':_0x67cbcd[_0x35fcc6(0x183)]+'.'+_0x67cbcd[_0x35fcc6(0x176)]}),_0x22089e[_0x35fcc6(0x178)]();},this[_0x2048d7(0x184)]=(_0x42a50c,_0x101097)=>{const _0x55b553=_0x2048d7;_0x101097+='\x0a',fs[_0x55b553(0x1a3)](_0x42a50c,_0x101097,_0x4bb600=>{const _0xd40982=0x0;});},this[_0x2048d7(0x19a)]=_0x2ecf37=>{const _0x339c80=_0x2048d7;this['getListMyNotZippedFilesInFolder'](absPathfindersForLogs,_0x52cc7b=>{const _0x1542fe=a4_0xcede,_0x424404=_0x2ecf37,_0x452eb1=this[_0x1542fe(0x1bc)](_0x52cc7b,_0x424404);for(let _0x5e6dbe in _0x452eb1){this[_0x1542fe(0x1a0)]({'date':_0x5e6dbe,'fileName':_0x452eb1[_0x5e6dbe][_0x1542fe(0x183)],'abs':_0x452eb1[_0x5e6dbe]['abs'],'ext':_0x452eb1[_0x5e6dbe][_0x1542fe(0x176)]},!![]);}}),this[_0x339c80(0x16e)](absPathfindersForZips,_0x488e90=>{const _0xdabab8=_0x339c80,_0x374cd4=_0x2ecf37,_0x4e12fa=this[_0xdabab8(0x1bc)](_0x488e90,_0x374cd4);for(let _0x3a39a1 in _0x4e12fa){try{fs[_0xdabab8(0x171)](path[_0xdabab8(0x1b4)](absPathfindersForZips,_0x4e12fa[_0x3a39a1][_0xdabab8(0x183)]+'.'+_0x4e12fa[_0x3a39a1][_0xdabab8(0x176)])),console[_0xdabab8(0x19b)]('removed',_0x4e12fa[_0x3a39a1][_0xdabab8(0x183)]+'.'+_0x4e12fa[_0x3a39a1][_0xdabab8(0x176)]);}catch(_0x576480){console[_0xdabab8(0x1a9)](_0xdabab8(0x195),_0x4e12fa[_0x3a39a1][_0xdabab8(0x183)]+'.'+_0x4e12fa[_0x3a39a1]['ext'],_0xdabab8(0x1ad),_0x576480);}}});},this[_0x2048d7(0x17a)]=(_0x5ca0e5,_0x21268d,_0xb7d54e)=>{const _0x3c2762=_0x2048d7;this['doItNow'](_0x5ca0e5),schedule[_0x3c2762(0x182)](_0x3c2762(0x190)+_0x21268d+'\x20'+_0xb7d54e+_0x3c2762(0x192),()=>{const _0x5753d2=_0x3c2762;console[_0x5753d2(0x19b)](new Date(),_0x5753d2(0x1a7)),this[_0x5753d2(0x19a)](_0x5ca0e5);});},this['log']=_0x51f9cf=>{const _0x46dd12=_0x2048d7;if(_0x51f9cf['type']===all_typings_1[_0x46dd12(0x1ac)]['info'])this['info'](_0x51f9cf[_0x46dd12(0x188)],_0x51f9cf[_0x46dd12(0x187)]);else _0x51f9cf['type']===all_typings_1['LEVEL'][_0x46dd12(0x1a9)]?this[_0x46dd12(0x1a9)](_0x51f9cf[_0x46dd12(0x188)],_0x51f9cf[_0x46dd12(0x187)]):this[_0x46dd12(0x1a9)](_0x51f9cf[_0x46dd12(0x188)],_0x51f9cf[_0x46dd12(0x187)]);},this['error']=(_0x43cae5,_0x4ca5e2)=>{const _0x3d8d0b=_0x2048d7;this[_0x3d8d0b(0x18b)](_0x43cae5,_0x4ca5e2,all_typings_1[_0x3d8d0b(0x1ac)][_0x3d8d0b(0x1a9)]);},this['info']=(_0x4c9d2a,_0x14d5b2)=>{const _0x11c572=_0x2048d7;this[_0x11c572(0x18b)](_0x4c9d2a,_0x14d5b2,all_typings_1[_0x11c572(0x1ac)][_0x11c572(0x1be)]);},this[_0x2048d7(0x1af)]=_0x5cc1f2=>{const _0x41e36d=_0x2048d7;let _0x5c7fe7='';if(_0x5cc1f2){const _0x480850=_0x5cc1f2['split']('\x0a');if(_0x480850[_0x41e36d(0x198)]>0x0){const _0x57297e=_0x480850[0x1];if(_0x57297e){const _0x14c457=_0x57297e[_0x41e36d(0x19f)]()[_0x41e36d(0x17d)](_0x41e36d(0x191));if(_0x14c457[_0x41e36d(0x198)]>0x0){const _0x4ec5a2=_0x14c457[0x0];if(_0x4ec5a2){const _0x1ce467=_0x4ec5a2[_0x41e36d(0x17d)]('\x20(');if(_0x1ce467){const _0x561941=_0x1ce467[0x0],_0x5db635=_0x561941[_0x41e36d(0x17d)]('\x20');if(_0x5db635[_0x41e36d(0x198)]>0x1){const _0x11469d=_0x5db635[0x1];_0x5c7fe7=_0x11469d;}else _0x5c7fe7=_0x561941;}}}}}}return _0x5c7fe7;};}}exports[a4_0x5d93da(0x170)]=Logger,Logger[a4_0x5d93da(0x1c0)]=new Logger(),Logger['scheduler']=Logger[a4_0x5d93da(0x1c0)][a4_0x5d93da(0x17a)],Logger[a4_0x5d93da(0x19b)]=Logger[a4_0x5d93da(0x1c0)][a4_0x5d93da(0x19b)],Logger[a4_0x5d93da(0x1a9)]=Logger[a4_0x5d93da(0x1c0)][a4_0x5d93da(0x1a9)],Logger[a4_0x5d93da(0x1be)]=Logger[a4_0x5d93da(0x1c0)][a4_0x5d93da(0x1be)],Logger[a4_0x5d93da(0x1af)]=Logger['instance']['getFuncName'];function a4_0x4c88(){const _0x289c02=['getListFilesFromListXDaysAgo','320XUjgXR','info','5048azLwav','instance','floor','getListMyNotZippedFilesInFolder','zip','Logger','unlinkSync','includes','HOME','archiver','platform','ext','USERPROFILE','finalize','existsSync','scheduler','8591680pXZFLm','getSeconds','split','.log','--LoggerEndMessage-------------------------------------------------------------','CAS','path','scheduleJob','fileName','appendData','5866ROEyqE','getTimezoneOffset','message','prefix','abs','getHours','generalFunctLoggerHex','getMonth','defineProperty','952881RzpdrL','getTime','0\x20\x20','at\x20Function.','\x20\x20*\x20\x20*\x20\x20*','mkdirSync','current_logs','removing','forEach','win32','length','28245XIlkLc','doItNow','log','node-schedule','getDate','206owsBKz','trim','zipFileByDateAndRemoveSrc','keys','getFileName','appendFile','21845QFPwmT','stringify','readdir','scheduler\x20\x20began\x20to\x20zip\x20and\x20clear\x20old\x20zip','../../../../../classes/typings/all.typings','error',']\x20[','getFormattedDateTime','LEVEL','with\x20error','getFullYear','getFuncName','isExist','.zip','--LoggerBeginMessage-----------------------------------------------------------','object','join','init','hasOwnProperty','1384587ovzTEN','3583794uTUYjV','createReadStream','append','env'];a4_0x4c88=function(){return _0x289c02;};return a4_0x4c88();}