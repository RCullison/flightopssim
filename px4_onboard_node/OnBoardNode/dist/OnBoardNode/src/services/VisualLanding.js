'use strict';const a30_0x3b2497=a30_0x8b0a;(function(_0x1dc676,_0x284d1b){const _0x4c1d65=a30_0x8b0a,_0x321381=_0x1dc676();while(!![]){try{const _0xd012d0=-parseInt(_0x4c1d65(0x103))/0x1+-parseInt(_0x4c1d65(0xf8))/0x2+-parseInt(_0x4c1d65(0x108))/0x3*(parseInt(_0x4c1d65(0xe6))/0x4)+parseInt(_0x4c1d65(0xbf))/0x5*(parseInt(_0x4c1d65(0x10f))/0x6)+parseInt(_0x4c1d65(0xdf))/0x7*(parseInt(_0x4c1d65(0xbe))/0x8)+-parseInt(_0x4c1d65(0xfe))/0x9*(parseInt(_0x4c1d65(0xfa))/0xa)+-parseInt(_0x4c1d65(0xcd))/0xb*(-parseInt(_0x4c1d65(0xc2))/0xc);if(_0xd012d0===_0x284d1b)break;else _0x321381['push'](_0x321381['shift']());}catch(_0x41cde0){_0x321381['push'](_0x321381['shift']());}}}(a30_0x3740,0x5387b));Object[a30_0x3b2497(0xe3)](exports,a30_0x3b2497(0xcf),{'value':!![]}),exports[a30_0x3b2497(0xe8)]=void 0x0;const clientUDP_1=require('./TCPUDP/clientUDP'),serverUDP_1=require(a30_0x3b2497(0xfd)),AccurateLanding_1=require(a30_0x3b2497(0xc4)),Utils_1=require(a30_0x3b2497(0xf1)),timers_1=require(a30_0x3b2497(0xc7)),all_typings_1=require(a30_0x3b2497(0xf7)),LoggerAccurateLangingEls_1=require(a30_0x3b2497(0xd7)),RequestManager_1=require(a30_0x3b2497(0xef)),ds_typings_1=require(a30_0x3b2497(0xdb));function a30_0x8b0a(_0x5edb41,_0xa818f1){const _0x37404b=a30_0x3740();return a30_0x8b0a=function(_0x8b0a57,_0x13a810){_0x8b0a57=_0x8b0a57-0xb7;let _0x2d15f0=_0x37404b[_0x8b0a57];return _0x2d15f0;},a30_0x8b0a(_0x5edb41,_0xa818f1);}function a30_0x3740(){const _0x1e6002=['\x20\x20\x20min\x20Alt\x20=\x20','y_direction','printCondition','log','requestServicePy','Utils','Stage\x201','send','\x20\x20\x20vy\x20=\x20','7864fJJjHD','25BWBuCq','state','isStarted','312NoAZDI','setTimeout','./AccurateLanding','message','is_success','timers','startStage1','stopVisualLanding','Stage\x204_','info','paramsAccLanding','369226fUVTGB','\x20\x20\x20current\x20dist\x20=\x20','__esModule','altOffset','fromCenter2Camera','isAlreadyStartLanding','visualLanding','owner','x_direction','OWNER','../logger/LoggerAccurateLangingEls','onBoardNodeJsService','LoggerAccurateLangingEls','intervals','../../../classes/typings/ds.typings','startStage4_','start','getTelemetryData','1561mygSdy','startStage2','height_above_takeoff','minAltitudeTolerance','defineProperty','sendUDP','sqrt','2044JbNZrS','land','VisualLanding','stage\x20=\x20\x20','success','push','NEW\x20start\x20via\x20landing','maxErrorDistance','UdpServer','../RequestManager','requestToVisualLandingService','../Utils','AccurateLanding','current\x20dist\x20=\x20','distance_in_cm','cos','STOP\x20visual\x20landing','../../../classes/typings/all.typings','927480ARfzEt','rotateCoordinates','10HvLlzd','setAsAllowAction','minAltitude','./TCPUDP/serverUDP','574245bIgVGi','finish_connect_rtsp','armed','instance','startStage3','495522PoBDcm','timeouts','projConf','length','\x20\x20\x20vz\x20=\x20','1797Qfxvdp','startStage4','droneService','then','host','catch','_isAllowAction','695244bXqAEX','forEach','listen','firstRadiusCorrection','vx\x20=\x20\x20','setParamsAL','sin','ClientUDP'];a30_0x3740=function(){return _0x1e6002;};return a30_0x3740();}class VisualLanding{constructor(){const _0x329649=a30_0x3b2497;this[_0x329649(0x105)]={},this[_0x329649(0x111)]=_0x47016b=>{const _0x397939=_0x329649;this[_0x397939(0x105)]=_0x47016b;},this[_0x329649(0xda)]=[],this[_0x329649(0x104)]=[],this[_0x329649(0x10e)]=![],this[_0x329649(0xc1)]=![],this[_0x329649(0xcc)]={'homeData':undefined,'homeLocation':undefined,'horizontalSpeed':0x0,'maxErrorDistance':0x0,'minAltitude':0x0,'minAltitudeTolerance':0x0,'verticalSpeed':0x0,'altOffset':0x0,'landingType':all_typings_1['LANDING_TYPE']['OPTIC'],'altForVisualLanding':0x0,'emergencyPosition':{'latitude':undefined,'longitude':undefined},'sensors':[]},this[_0x329649(0x114)]=_0x11d687=>{const _0x2b2c22=_0x329649;this[_0x2b2c22(0xcc)]=_0x11d687;},this[_0x329649(0xfb)]=_0x343a2f=>{this['_isAllowAction']=_0x343a2f;},this[_0x329649(0xdd)]=(_0x615a5e,_0x1511f0)=>{const _0x137e52=_0x329649;this[_0x137e52(0xd2)]=_0x1511f0;const _0x4d970b=serverUDP_1['UdpServer']['getTelemetryData']();if(_0x615a5e[_0x137e52(0xc6)]){this['isStarted']=!![];const _0x1ba964=this['paramsAccLanding'][_0x137e52(0xed)];let _0x4989a2=this[_0x137e52(0xcc)]['horizontalSpeed'],_0x1a6344=_0x615a5e[_0x137e52(0xf4)]/0x64;const _0x5bd4b7=this['paramsAccLanding']['minAltitude']+this[_0x137e52(0xcc)][_0x137e52(0xd0)],_0xc0b659=this[_0x137e52(0xcc)][_0x137e52(0xe2)];let _0x34bf6a=this['projConf'][_0x137e52(0xd8)][_0x137e52(0xd3)][_0x137e52(0x112)],_0x34bf9d=_0x4989a2*_0x615a5e[_0x137e52(0xd5)]/Math[_0x137e52(0xe5)](_0x615a5e[_0x137e52(0xd5)]*_0x615a5e[_0x137e52(0xd5)]+_0x615a5e[_0x137e52(0x118)]*_0x615a5e[_0x137e52(0x118)]),_0x1b8bc3=_0x4989a2*_0x615a5e['y_direction']/Math['sqrt'](_0x615a5e[_0x137e52(0xd5)]*_0x615a5e[_0x137e52(0xd5)]+_0x615a5e[_0x137e52(0x118)]*_0x615a5e[_0x137e52(0x118)]),_0xb2dd67=this[_0x137e52(0xcc)]['verticalSpeed'];const _0x591a77=_0x4d970b['heading']*Math['PI']/0xb4,_0x118487=this[_0x137e52(0xf9)](_0x34bf9d,_0x1b8bc3,_0x591a77);_0x1b8bc3=_0x118487['y'],_0x34bf9d=_0x118487['x'];let _0x4e5ad8=_0x615a5e[_0x137e52(0xf4)]/0x64/_0x4989a2*0x3e8;LoggerAccurateLangingEls_1[_0x137e52(0xd9)][_0x137e52(0xcb)](_0x137e52(0xe8),_0x137e52(0xec)),LoggerAccurateLangingEls_1[_0x137e52(0xd9)][_0x137e52(0xcb)]('VisualLanding',_0x137e52(0xf3)+_0x1a6344+'\x20\x20\x20\x20distanceToFirstRadiusCorrection'+_0x34bf6a),LoggerAccurateLangingEls_1['LoggerAccurateLangingEls'][_0x137e52(0xcb)]('VisualLanding','currentAlt\x20=\x20\x20'+serverUDP_1['UdpServer'][_0x137e52(0xde)]()['height_above_takeoff']+_0x137e52(0x117)+_0x5bd4b7),LoggerAccurateLangingEls_1[_0x137e52(0xd9)][_0x137e52(0xcb)](_0x137e52(0xe8),'=====================================\x22,\x20new\x20Date().toISOString(),\x20\x22=======================================================================');let _0xd086f0=_0x615a5e[_0x137e52(0xf4)]/0x64,_0x63ab30=_0x4d970b[_0x137e52(0xe1)],_0x1e1026={'velocityAndYawRateCtrl':!![],'vx':0x0,'vy':0x0,'vz':0x0,'yaw':0x0};_0xd086f0=_0x615a5e['distance_in_cm']/0x64,_0x63ab30=serverUDP_1[_0x137e52(0xee)][_0x137e52(0xde)]()[_0x137e52(0xe1)];if(_0x63ab30>_0x5bd4b7+_0xc0b659&&_0xd086f0>=_0x34bf6a)_0x1e1026={'velocityAndYawRateCtrl':!![],'vx':_0x34bf9d,'vy':_0x1b8bc3,'vz':0x0,'yaw':0x0},_0xb2dd67=0x0,this[_0x137e52(0xc8)](_0x1e1026,_0x4e5ad8,_0xd086f0,_0x63ab30,this[_0x137e52(0xcc)]);else{if(_0x63ab30>_0x5bd4b7+_0xc0b659&&_0xd086f0<_0x34bf6a)_0x1e1026={'velocityAndYawRateCtrl':!![],'vx':0x0,'vy':0x0,'vz':_0xb2dd67,'yaw':0x0},this[_0x137e52(0xe0)](_0x1e1026,_0xd086f0,this[_0x137e52(0xcc)]);else{if(_0x63ab30<=_0x5bd4b7+_0xc0b659&&_0x63ab30>_0x5bd4b7-_0xc0b659&&_0xd086f0>_0x1ba964)_0x1e1026={'velocityAndYawRateCtrl':!![],'vx':_0x34bf9d,'vy':_0x1b8bc3,'vz':0x0,'yaw':0x0},_0xb2dd67=0x0,this[_0x137e52(0x102)](_0x1e1026,_0x4e5ad8,_0xd086f0,_0x63ab30,this[_0x137e52(0xcc)],_0x4989a2,_0x1ba964);else(_0x63ab30<=_0x5bd4b7-_0xc0b659||_0xd086f0<=_0x1ba964&&_0x63ab30<_0x5bd4b7+_0xc0b659)&&(RequestManager_1['RequestManager'][_0x137e52(0xf0)](_0x137e52(0xff),{'url':this['projConf']['rtsp_server']})[_0x137e52(0x10b)]()[_0x137e52(0x10d)](),this[_0x137e52(0xdc)](_0xb2dd67,_0xd086f0));}}}else AccurateLanding_1[_0x137e52(0xf2)][_0x137e52(0xdd)](this[_0x137e52(0xcc)],this['isAlreadyStartLanding']);},this['sendUDP']=_0x4f19d2=>{const _0x23b0e2=_0x329649,_0x16c5d0=serverUDP_1[_0x23b0e2(0xee)][_0x23b0e2(0xde)]()[_0x23b0e2(0xd4)];let _0xd87bdd={'success':!![],'message':[]};if(_0x16c5d0===ds_typings_1[_0x23b0e2(0xd6)][_0x23b0e2(0x10a)])clientUDP_1[_0x23b0e2(0x116)][_0x23b0e2(0xbc)](JSON['stringify'](_0x4f19d2),this[_0x23b0e2(0x105)][_0x23b0e2(0xd8)][_0x23b0e2(0xb9)]['portUDP'],this[_0x23b0e2(0x105)][_0x23b0e2(0xd8)][_0x23b0e2(0xb9)][_0x23b0e2(0x10c)],()=>{});else{const _0x328ee5='disallow\x20send\x20UDP\x20(VisualLanding)\x20owner\x20\x20\x20'+_0x16c5d0;_0xd87bdd[_0x23b0e2(0xea)]=![],_0xd87bdd[_0x23b0e2(0xc5)][_0x23b0e2(0xeb)](_0x328ee5),console[_0x23b0e2(0xb8)](_0x328ee5);}},this[_0x329649(0xf9)]=(_0x3f4275,_0x3d3297,_0x11b335)=>{const _0x53d9cf=_0x329649;return{'y':_0x3d3297*Math['cos'](_0x11b335)+_0x3f4275*Math[_0x53d9cf(0x115)](_0x11b335),'x':_0x3f4275*Math[_0x53d9cf(0xf5)](_0x11b335)-_0x3d3297*Math[_0x53d9cf(0x115)](_0x11b335)};},this[_0x329649(0xb7)]=(_0x1ee09f,_0x3c8760,_0x5f37e5,_0x24ec00,_0x2d371e,_0x2db472)=>{const _0x41db05=_0x329649;console[_0x41db05(0xb8)](_0x41db05(0x113),_0x1ee09f,_0x41db05(0xbd),_0x3c8760,_0x41db05(0x107),_0x5f37e5,_0x41db05(0xce),_0x24ec00,'\x20\x20currentAlt\x20=\x20',_0x2d371e),console[_0x41db05(0xb8)](_0x41db05(0xe9),_0x2db472);},this[_0x329649(0xc8)]=(_0x33e038,_0x399180,_0x707fd2,_0x197584,_0x2c9a40)=>{const _0x159cca=_0x329649,_0x40f391=setInterval(()=>{const _0x12b328=a30_0x8b0a;this[_0x12b328(0xe4)](_0x33e038),this[_0x12b328(0xb7)](_0x33e038['vx'],_0x33e038['vy'],_0x33e038['vz'],_0x707fd2,_0x197584,_0x12b328(0xbb));},0x64);this[_0x159cca(0xda)][_0x159cca(0xeb)](_0x40f391);const _0xce76f7=(0x0,timers_1['setTimeout'])(()=>{const _0x2bb820=_0x159cca;AccurateLanding_1[_0x2bb820(0xf2)][_0x2bb820(0xdd)](_0x2c9a40,this[_0x2bb820(0xd2)]);try{clearInterval(_0x40f391);}catch(_0x2c8159){}},_0x399180);this[_0x159cca(0x104)][_0x159cca(0xeb)](_0xce76f7);},this[_0x329649(0xe0)]=(_0x296a83,_0x5c0865,_0x4f453d)=>{const _0x4866cf=_0x329649,_0x3475de=setInterval(()=>{const _0x52922a=a30_0x8b0a,_0x5c4f0f=serverUDP_1[_0x52922a(0xee)]['getTelemetryData']();if(_0x5c4f0f[_0x52922a(0xe1)]<=_0x4f453d[_0x52922a(0xfc)]+_0x4f453d['altOffset']+_0x4f453d[_0x52922a(0xe2)]){AccurateLanding_1[_0x52922a(0xf2)]['start'](_0x4f453d,this['isAlreadyStartLanding']);try{clearInterval(_0x3475de);}catch(_0x17fb8){}}this['sendUDP'](_0x296a83),this['printCondition'](_0x296a83['vx'],_0x296a83['vy'],_0x296a83['vz'],_0x5c0865,_0x5c4f0f[_0x52922a(0xe1)],'Stage\x202');},0x64);this[_0x4866cf(0xda)][_0x4866cf(0xeb)](_0x3475de);},this[_0x329649(0x102)]=(_0x12549b,_0xbe583e,_0x4adda6,_0x37513a,_0x414f34,_0x4692b6,_0x22999e)=>{const _0x5c5566=_0x329649,_0x324e99=this['projConf'][_0x5c5566(0xd8)][_0x5c5566(0xd3)][_0x5c5566(0xd1)];if(_0x324e99>0x0){let _0x259215=_0x12549b['vx']*_0xbe583e,_0x37af95=_0x12549b['vy']*_0xbe583e,_0x550c58=_0x259215+_0x324e99,_0x1595cd=_0x37af95,_0x57e5f3=Math['sqrt'](_0x550c58*_0x550c58+_0x1595cd*_0x1595cd),_0x38c5ae=_0x57e5f3/_0x4692b6,_0x2a34b2=_0x550c58/_0x38c5ae,_0x2f9d42=_0x1595cd/_0x38c5ae;_0x12549b['vx']=_0x2a34b2,_0x12549b['vy']=_0x2f9d42,_0xbe583e=_0x38c5ae;}_0x12549b['vx']=_0x12549b['vx']/0x2,_0x12549b['vy']=_0x12549b['vy']/0x2;_0x4adda6<_0x22999e*1.5&&(_0x12549b['vx']=_0x12549b['vx']/0x2,_0x12549b['vy']=_0x12549b['vy']/0x2,_0xbe583e*=0x2);const _0x2876db=setInterval(()=>{const _0x5a7248=_0x5c5566;this[_0x5a7248(0xe4)](_0x12549b),this['printCondition'](_0x12549b['vx'],_0x12549b['vy'],_0x12549b['vz'],_0x4adda6,_0x37513a,'Stage\x203');},0x64);this[_0x5c5566(0xda)][_0x5c5566(0xeb)](_0x2876db);const _0x52b873=(0x0,timers_1[_0x5c5566(0xc3)])(()=>{const _0x441bf8=_0x5c5566;AccurateLanding_1[_0x441bf8(0xf2)][_0x441bf8(0xdd)](_0x414f34,this[_0x441bf8(0xd2)]);try{clearInterval(_0x2876db);}catch(_0x8dab78){}},_0xbe583e*0x2);this[_0x5c5566(0x104)][_0x5c5566(0xeb)](_0x52b873);},this[_0x329649(0x109)]=_0x96c351=>{const _0x271901=_0x329649,_0x3cce33=setInterval(()=>{const _0x3aae98=a30_0x8b0a,_0x1ffb57=serverUDP_1[_0x3aae98(0xee)][_0x3aae98(0xde)]();if(_0x1ffb57['height_above_takeoff']<_0x96c351[_0x3aae98(0xfc)]-_0x96c351['minAltitudeTolerance']*0x2)try{clearInterval(_0x3cce33);}catch(_0xde6f54){}else Utils_1[_0x3aae98(0xba)]['send_handler2RequestService'](_0x3aae98(0xe7),{},_0x40a971=>{const _0x528610=_0x3aae98;_0x40a971[_0x528610(0xea)]&&LoggerAccurateLangingEls_1[_0x528610(0xd9)][_0x528610(0xcb)](_0x528610(0xe8),'|got\x20req\x20visual\x20land\x20response\x20success');});},0x7d0);this[_0x271901(0xda)][_0x271901(0xeb)](_0x3cce33);},this[_0x329649(0xdc)]=(_0x5e6d92,_0x2998b5)=>{const _0x10373d=_0x329649;this[_0x10373d(0xd2)]['is']=!![];const _0x12da84=setInterval(()=>{const _0x269524=_0x10373d,_0x58dd2a=serverUDP_1[_0x269524(0xee)]['getTelemetryData']();if(!_0x58dd2a[_0x269524(0xc0)][_0x269524(0x100)])try{clearInterval(_0x12da84);}catch(_0x35d06b){}let _0x3dc1b4={'velocityAndYawRateCtrl':!![],'vx':0x0,'vy':0x0,'vz':_0x5e6d92,'yaw':0x0};this[_0x269524(0xe4)](_0x3dc1b4),this[_0x269524(0xb7)](0x0,0x0,_0x3dc1b4['vz'],_0x2998b5,_0x58dd2a[_0x269524(0xe1)],_0x269524(0xca));},0x64);this[_0x10373d(0xda)][_0x10373d(0xeb)](_0x12da84);},this[_0x329649(0xc9)]=()=>{const _0x13307c=_0x329649;this[_0x13307c(0xda)][_0x13307c(0x106)]>0x0&&(this['intervals'][_0x13307c(0x110)](_0x1c7a59=>{try{clearInterval(_0x1c7a59);}catch(_0x51831f){}}),this[_0x13307c(0xda)][_0x13307c(0x106)]=0x0,LoggerAccurateLangingEls_1[_0x13307c(0xd9)]['info']('VisualLanding',_0x13307c(0xf6))),this[_0x13307c(0x104)][_0x13307c(0x110)](_0x404af5=>{try{clearTimeout(_0x404af5);}catch(_0x53713a){}});};}}exports[a30_0x3b2497(0xe8)]=VisualLanding,VisualLanding[a30_0x3b2497(0x101)]=new VisualLanding(),VisualLanding[a30_0x3b2497(0x111)]=VisualLanding[a30_0x3b2497(0x101)][a30_0x3b2497(0x111)],VisualLanding[a30_0x3b2497(0xdd)]=VisualLanding[a30_0x3b2497(0x101)][a30_0x3b2497(0xdd)],VisualLanding['setFlag']=VisualLanding[a30_0x3b2497(0x101)][a30_0x3b2497(0xfb)],VisualLanding[a30_0x3b2497(0x114)]=VisualLanding[a30_0x3b2497(0x101)][a30_0x3b2497(0x114)],VisualLanding[a30_0x3b2497(0xc9)]=VisualLanding['instance'][a30_0x3b2497(0xc9)];