'use strict';const a52_0x30432e=a52_0x5d89;(function(_0x243b5e,_0x1bc1c1){const _0x324e08=a52_0x5d89,_0x4ec95e=_0x243b5e();while(!![]){try{const _0x23d239=parseInt(_0x324e08(0x13e))/0x1+-parseInt(_0x324e08(0x12a))/0x2*(parseInt(_0x324e08(0x126))/0x3)+parseInt(_0x324e08(0x140))/0x4+parseInt(_0x324e08(0x132))/0x5*(parseInt(_0x324e08(0x131))/0x6)+-parseInt(_0x324e08(0x12e))/0x7*(-parseInt(_0x324e08(0x139))/0x8)+parseInt(_0x324e08(0x130))/0x9*(-parseInt(_0x324e08(0x13c))/0xa)+parseInt(_0x324e08(0x133))/0xb*(-parseInt(_0x324e08(0x124))/0xc);if(_0x23d239===_0x1bc1c1)break;else _0x4ec95e['push'](_0x4ec95e['shift']());}catch(_0x51223a){_0x4ec95e['push'](_0x4ec95e['shift']());}}}(a52_0x41f2,0x27e33));Object[a52_0x30432e(0x12b)](exports,a52_0x30432e(0x136),{'value':!![]}),exports[a52_0x30432e(0x12f)]=void 0x0;const requestManager_1=require('../../applicationServices/restConnections/requestManager'),api_enums_1=require(a52_0x30432e(0x127)),tolerance=0x5,freqSending=0x64,sendInterval=0x3e8/freqSending,speed=0xa,maxTimeout=0x2710;var INTERVAL_NAMES;function a52_0x5d89(_0x380dfc,_0x244bb6){const _0x41f2a9=a52_0x41f2();return a52_0x5d89=function(_0x5d89a0,_0x1fcd51){_0x5d89a0=_0x5d89a0-0x121;let _0x5e317a=_0x41f2a9[_0x5d89a0];return _0x5e317a;},a52_0x5d89(_0x380dfc,_0x244bb6);}(function(_0x250590){const _0x54bc36=a52_0x30432e;_0x250590[_0x250590['intervalSendsGimbalAction']=0x0]='intervalSendsGimbalAction',_0x250590[_0x250590['checkGimbalMoveInterval']=0x1]=_0x54bc36(0x143),_0x250590[_0x250590['waitForGimbalInterval']=0x2]=_0x54bc36(0x137),_0x250590[_0x250590[_0x54bc36(0x141)]=0x3]=_0x54bc36(0x141);}(INTERVAL_NAMES||(INTERVAL_NAMES={})));class GimbalManager{constructor(){const _0x5eca4e=a52_0x30432e;this[_0x5eca4e(0x138)]={},this[_0x5eca4e(0x134)]=![],this[_0x5eca4e(0x125)]={'timestamp':0x0,'yaw':undefined},this[_0x5eca4e(0x13f)]=!![],this[_0x5eca4e(0x123)]=_0x28d3ab=>{return new Promise(_0x94329e=>{const _0x39d6d9=a52_0x5d89;requestManager_1[_0x39d6d9(0x128)][_0x39d6d9(0x13d)](api_enums_1[_0x39d6d9(0x142)][_0x39d6d9(0x129)],_0x28d3ab)['then'](_0x409bea=>{_0x94329e(_0x409bea);})[_0x39d6d9(0x121)](_0x39fff6=>{_0x94329e(_0x39fff6);});});},this[_0x5eca4e(0x13b)]=_0x26f2b4=>{return new Promise(_0xa726a6=>{const _0x281ae3=a52_0x5d89;requestManager_1[_0x281ae3(0x128)]['requestAGCS'](api_enums_1[_0x281ae3(0x12d)][_0x281ae3(0x13b)],_0x26f2b4)['then'](_0x590bfe=>{_0xa726a6(_0x590bfe);})[_0x281ae3(0x121)](_0x38e9b4=>{_0xa726a6(_0x38e9b4);});});},this[_0x5eca4e(0x12c)]=()=>{return new Promise(_0x2a8ad1=>{const _0x154c31=a52_0x5d89;requestManager_1[_0x154c31(0x128)][_0x154c31(0x122)](api_enums_1[_0x154c31(0x12d)][_0x154c31(0x12c)],{})[_0x154c31(0x13a)](_0x44e8fb=>{_0x2a8ad1(_0x44e8fb);})['catch'](_0x302d19=>{_0x2a8ad1(_0x302d19);});});};}}exports[a52_0x30432e(0x12f)]=GimbalManager,GimbalManager[a52_0x30432e(0x135)]=new GimbalManager(),GimbalManager['singleGimbalAction']=GimbalManager['instance'][a52_0x30432e(0x123)],GimbalManager[a52_0x30432e(0x13b)]=GimbalManager[a52_0x30432e(0x135)][a52_0x30432e(0x13b)],GimbalManager[a52_0x30432e(0x12c)]=GimbalManager[a52_0x30432e(0x135)]['finishFollowTarget'];function a52_0x41f2(){const _0x49452f=['then','startFollowTarget','26550UcKUoX','requestGimbalGWService','107423WEaYXT','isGimbalMove','1163960LmLMBh','waitForGimbalTimeout','gimbalGW_Service_API','checkGimbalMoveInterval','catch','requestAGCS','singleGimbalAction','643992eeTull','oldGimbalYawParameters','141eFaIcn','../../../../classes/dataClasses/api/api_enums','RequestManager','setGimbal','374Xfjald','defineProperty','finishFollowTarget','AGCS_API','936509RaDEWh','GimbalManager','567UyCcWs','93096UUIKDA','85RqQlRX','121uqplph','arrivedToStart','instance','__esModule','waitForGimbalInterval','intervals','16beQBvU'];a52_0x41f2=function(){return _0x49452f;};return a52_0x41f2();}