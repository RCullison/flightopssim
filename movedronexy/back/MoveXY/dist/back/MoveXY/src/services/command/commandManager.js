'use strict';function a13_0x556b(_0x2f7753,_0xff48ec){const _0x1c76ea=a13_0x1c76();return a13_0x556b=function(_0x556bd9,_0x1636ef){_0x556bd9=_0x556bd9-0xa3;let _0x1de988=_0x1c76ea[_0x556bd9];return _0x1de988;},a13_0x556b(_0x2f7753,_0xff48ec);}const a13_0x557e43=a13_0x556b;(function(_0x649d7,_0x193553){const _0x30d9bb=a13_0x556b,_0x302be1=_0x649d7();while(!![]){try{const _0x4c5e6f=-parseInt(_0x30d9bb(0xbe))/0x1*(-parseInt(_0x30d9bb(0xb6))/0x2)+-parseInt(_0x30d9bb(0xbd))/0x3*(parseInt(_0x30d9bb(0xd3))/0x4)+-parseInt(_0x30d9bb(0xc0))/0x5+parseInt(_0x30d9bb(0xdc))/0x6+parseInt(_0x30d9bb(0xcc))/0x7+parseInt(_0x30d9bb(0xd0))/0x8+parseInt(_0x30d9bb(0xcb))/0x9*(-parseInt(_0x30d9bb(0xa7))/0xa);if(_0x4c5e6f===_0x193553)break;else _0x302be1['push'](_0x302be1['shift']());}catch(_0x4a6f88){_0x302be1['push'](_0x302be1['shift']());}}}(a13_0x1c76,0x8a478));function a13_0x1c76(){const _0x3394e9=['toJsonForOnboardNEW','onboardNode','323584DqLGHr','instance','Command\x20Manager:\x20MoveToLocation\x20-\x20START\x20TO\x20MOVE','stopMoveToLocation','defaultConfig','lodash','description','./algorithms/flightAlgorithms/moveToLocation','log','5876874QpqMEG','ALGORITHM_MOVE_SERVICE_STATUS','MoveXY','stop','error','listen','CommandManager','Command\x20Manager:\x20sendCommandInterval\x20-\x20START\x20TO\x20sendCommandInterval','sendRemoteCommand','run','moveToLocation','The\x20','27520xrDmLN','success','portUDP_joystickControl','moveToXY','updateAlgorithmStatuses','The\x20send\x20command\x20interval\x20didn\x27t\x20stop.\x20','../../../../../classes/dataClasses/remote/remote','getServiceObject','ALGORITHM_TYPE','algorithmStatuses','toISOString','servicesConfig','Turn','getAlgorithmStatus','sendCommandInterval','321378UzbOYE','./algorithms/flightAlgorithms/moveXY','stopMoveToXY','\x20is\x20running.\x20','commandLoopInterval','status','stopRotateAirVehicle','6HuMyxs','3cKpTid','start','2050960rnzxSb','stopAllXY','stopCommandInterval','./algorithms/flightAlgorithms/turn','The\x20airVehicle\x20is\x20busy\x20now','stopCommandIntervalIfNeed','MoveToLocation','updateDefaultConfig','data','remote','The\x20send\x20command\x20interval\x20is\x20stopped','4842NWyZgZ','5262159gGmMaC','send','rotateAirVehicle','host','3245352JnNoWO'];a13_0x1c76=function(){return _0x3394e9;};return a13_0x1c76();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a13_0x557e43(0xe2)]=void 0x0;const _=require(a13_0x557e43(0xd8)),remote_1=require(a13_0x557e43(0xad)),all_typings_1=require('../../../../../classes/typings/all.typings'),UDP_Socket_1=require('../../AppService/UDP/UDP_Socket'),moveToLocation_1=require(a13_0x557e43(0xda)),moveXY_1=require(a13_0x557e43(0xb7)),turn_1=require(a13_0x557e43(0xc3));class CommandManager{constructor(){const _0x53873d=a13_0x557e43;this[_0x53873d(0xc9)]=new remote_1['Remote'](),this[_0x53873d(0xb2)]={},this['defaultConfig']={},this[_0x53873d(0xb0)]={[all_typings_1['ALGORITHM_TYPE'][_0x53873d(0xde)]]:all_typings_1[_0x53873d(0xdd)]['stop'],[all_typings_1[_0x53873d(0xaf)]['MoveToLocation']]:all_typings_1[_0x53873d(0xdd)][_0x53873d(0xdf)],[all_typings_1[_0x53873d(0xaf)][_0x53873d(0xb3)]]:all_typings_1[_0x53873d(0xdd)][_0x53873d(0xdf)]},this['listen']=(_0x101d7f,_0x38b869)=>{const _0x21793d=_0x53873d;this[_0x21793d(0xb2)]=_0x101d7f,this[_0x21793d(0xd7)]=_0x38b869;},this['sendCommandInterval']=()=>{const _0x14276d=_0x53873d;console[_0x14276d(0xdb)](new Date()[_0x14276d(0xb1)](),_0x14276d(0xe3)),!this[_0x14276d(0xba)]&&(this[_0x14276d(0xba)]=setInterval(()=>{this['sendRemoteCommand']();},this['defaultConfig']['SEND_COMMAND_INTERVAL']));},this[_0x53873d(0xc5)]=()=>{const _0x106330=_0x53873d,_0x4d218f={'success':![],'description':_0x106330(0xac)};let _0x4fae58=![];for(let _0x1f7820 in this[_0x106330(0xb0)]){this[_0x106330(0xb0)]['hasOwnProperty'](_0x1f7820)&&(this['algorithmStatuses'][_0x1f7820]===all_typings_1['ALGORITHM_MOVE_SERVICE_STATUS'][_0x106330(0xa4)]?(_0x4d218f['description']+=_0x106330(0xa6)+_0x1f7820+_0x106330(0xb9),_0x4fae58=!![]):_0x4fae58=_0x4fae58||this[_0x106330(0xb0)][_0x1f7820]===all_typings_1[_0x106330(0xdd)][_0x106330(0xa4)]);}if(!_0x4fae58)this[_0x106330(0xc2)](),_0x4d218f[_0x106330(0xa8)]=!![],_0x4d218f[_0x106330(0xd9)]=_0x106330(0xca);else{}return _0x4d218f;},this[_0x53873d(0xab)]=_0xd5dda9=>{const _0x5c3a04=_0x53873d;this['algorithmStatuses'][_0xd5dda9['algorithmName']]=_0xd5dda9[_0x5c3a04(0xbb)];},this[_0x53873d(0xc2)]=()=>{const _0x37b993=_0x53873d;if(this[_0x37b993(0xba)])try{clearInterval(this[_0x37b993(0xba)]),this[_0x37b993(0xba)]=undefined;}catch(_0x3d5acd){console[_0x37b993(0xe0)](new Date()['toISOString'](),_0x3d5acd);}},this[_0x53873d(0xa3)]=()=>{const _0xd9b212=_0x53873d;this[_0xd9b212(0xc9)][_0xd9b212(0xd1)]();const _0x2d65dd=this[_0xd9b212(0xc9)]['toJsonForOnboardNEW']();UDP_Socket_1['UDP_Socket'][_0xd9b212(0xcd)](_0x2d65dd,this[_0xd9b212(0xb2)][_0xd9b212(0xd2)][_0xd9b212(0xa9)],this[_0xd9b212(0xb2)]['onboardNode'][_0xd9b212(0xcf)]);},this[_0x53873d(0xaa)]=_0x332690=>{const _0x5cedbe=_0x53873d;let _0x5e1e82={'success':![]};return this[_0x5cedbe(0xb0)][all_typings_1['ALGORITHM_TYPE'][_0x5cedbe(0xc6)]]!==all_typings_1[_0x5cedbe(0xdd)][_0x5cedbe(0xdf)]?(_0x5e1e82=moveXY_1['MoveXY'][_0x5cedbe(0xbf)]({'remote':this['remote'],'requestParameters':_0x332690}),_0x5e1e82[_0x5cedbe(0xa8)]&&(this[_0x5cedbe(0xb5)](),this[_0x5cedbe(0xb0)][all_typings_1[_0x5cedbe(0xaf)]['MoveXY']]=_0x5e1e82[_0x5cedbe(0xc8)])):_0x5e1e82['description']=_0x5cedbe(0xc4),_0x5e1e82;},this['stopMoveToXY']=_0x42cb79=>{const _0x531e3a=_0x53873d,_0x5bfade=moveXY_1[_0x531e3a(0xde)][_0x531e3a(0xdf)]();return _0x5bfade['success']&&(this[_0x531e3a(0xb0)][all_typings_1[_0x531e3a(0xaf)][_0x531e3a(0xde)]]=_0x5bfade[_0x531e3a(0xc8)],this[_0x531e3a(0xc5)]()),_0x5bfade;},this[_0x53873d(0xa5)]=_0x335b01=>{const _0x5e1120=_0x53873d;console[_0x5e1120(0xdb)](new Date()[_0x5e1120(0xb1)](),_0x5e1120(0xd5));let _0x3ca311={'success':![]};return this[_0x5e1120(0xb0)][all_typings_1[_0x5e1120(0xaf)][_0x5e1120(0xde)]]==all_typings_1[_0x5e1120(0xdd)]['stop']?(_0x3ca311=moveToLocation_1[_0x5e1120(0xc6)]['start']({'remote':this[_0x5e1120(0xc9)],'requestParameters':_0x335b01}),_0x3ca311[_0x5e1120(0xa8)]&&(this[_0x5e1120(0xb5)](),this['algorithmStatuses'][all_typings_1[_0x5e1120(0xaf)][_0x5e1120(0xc6)]]=_0x3ca311[_0x5e1120(0xc8)])):_0x3ca311[_0x5e1120(0xd9)]=_0x5e1120(0xc4),_0x3ca311;},this[_0x53873d(0xd6)]=_0x17a3eb=>{const _0x97918b=_0x53873d,_0x449e5c=moveToLocation_1[_0x97918b(0xc6)][_0x97918b(0xdf)]()&&turn_1[_0x97918b(0xb3)][_0x97918b(0xdf)]();return this[_0x97918b(0xb0)][all_typings_1['ALGORITHM_TYPE']['MoveToLocation']]=_0x449e5c[_0x97918b(0xc8)],this[_0x97918b(0xc2)](),_0x449e5c;},this['rotateAirVehicle']=_0x4ed1e3=>{const _0x17f82c=_0x53873d;let _0x1b90bd={'success':![]};return _0x1b90bd=turn_1[_0x17f82c(0xb3)][_0x17f82c(0xbf)]({'remote':this[_0x17f82c(0xc9)],'requestParameters':_0x4ed1e3}),_0x1b90bd[_0x17f82c(0xa8)]&&(this[_0x17f82c(0xb5)](),this[_0x17f82c(0xb0)][all_typings_1[_0x17f82c(0xaf)][_0x17f82c(0xb3)]]=_0x1b90bd[_0x17f82c(0xc8)]),_0x1b90bd;},this[_0x53873d(0xbc)]=_0x72c3e7=>{const _0x835de8=_0x53873d,_0x117623=turn_1[_0x835de8(0xb3)]['stop']();if(_0x117623[_0x835de8(0xa8)])this[_0x835de8(0xb0)][all_typings_1['ALGORITHM_TYPE'][_0x835de8(0xb3)]]=_0x117623['data'],this[_0x835de8(0xc5)]();else{}return _0x117623;},this[_0x53873d(0xc1)]=_0x822e79=>{const _0x12ed64=_0x53873d,_0x2243fc=moveToLocation_1[_0x12ed64(0xc6)]['stop']()&&turn_1[_0x12ed64(0xb3)][_0x12ed64(0xdf)]();return this[_0x12ed64(0xb0)][all_typings_1['ALGORITHM_TYPE']['MoveToLocation']]=_0x2243fc['data'],this[_0x12ed64(0xc2)](),_0x2243fc;},this[_0x53873d(0xae)]=()=>{const _0x204265=_0x53873d,_0x14a67d={'success':!![]};return _0x14a67d[_0x204265(0xc8)]={'moveToLocation':moveToLocation_1[_0x204265(0xc6)][_0x204265(0xae)](),'moveXY':moveXY_1[_0x204265(0xde)][_0x204265(0xae)](),'turn':turn_1['Turn'][_0x204265(0xae)]()},_0x14a67d;},this[_0x53873d(0xb4)]=()=>{const _0x64b8b1=_0x53873d,_0x298b9a={'success':!![]};return _0x298b9a[_0x64b8b1(0xc8)]=this[_0x64b8b1(0xb0)],_0x298b9a;},this[_0x53873d(0xc7)]=_0x466664=>{const _0x79999=_0x53873d,_0x235757={'success':!![]};return _0x235757[_0x79999(0xc8)]=moveXY_1[_0x79999(0xde)][_0x79999(0xc7)](_0x466664),_0x235757[_0x79999(0xc8)]=moveToLocation_1['MoveToLocation']['updateDefaultConfig'](_0x466664),_0x235757[_0x79999(0xc8)]=turn_1[_0x79999(0xb3)][_0x79999(0xc7)](_0x466664),_0x235757;};}}exports[a13_0x557e43(0xe2)]=CommandManager,CommandManager[a13_0x557e43(0xd4)]=new CommandManager(),CommandManager[a13_0x557e43(0xe1)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xe1)],CommandManager['startMoveToXY']=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xaa)],CommandManager[a13_0x557e43(0xb8)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xb8)],CommandManager[a13_0x557e43(0xa5)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xa5)],CommandManager[a13_0x557e43(0xd6)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xd6)],CommandManager[a13_0x557e43(0xce)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xce)],CommandManager[a13_0x557e43(0xbc)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xbc)],CommandManager[a13_0x557e43(0xc1)]=CommandManager['instance'][a13_0x557e43(0xc1)],CommandManager[a13_0x557e43(0xc5)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xc5)],CommandManager[a13_0x557e43(0xab)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xab)],CommandManager['getServiceObject']=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xae)],CommandManager['getAlgorithmStatus']=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xb4)],CommandManager[a13_0x557e43(0xc7)]=CommandManager[a13_0x557e43(0xd4)][a13_0x557e43(0xc7)];