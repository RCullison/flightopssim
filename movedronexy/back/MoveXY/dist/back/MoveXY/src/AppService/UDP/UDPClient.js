'use strict';function a0_0x4dbb(){const _0x497917=['instance','udp4','message','stringify','listen','124352nresop','defaultConfig','6450420mdavnb','1160vnkbox','push','3yWclqD','5978JWVlcF','13498551NkIAzV','308xYthnF','1455944LVQEYS','createSocket','servicesConfig','18138uEchak','send','18EDtsKA','4826324TuIkKO','sendUDP'];a0_0x4dbb=function(){return _0x497917;};return a0_0x4dbb();}const a0_0x58d957=a0_0x1bf0;(function(_0xa9f81d,_0x35fb59){const _0x16251c=a0_0x1bf0,_0x2f0707=_0xa9f81d();while(!![]){try{const _0x328a0e=-parseInt(_0x16251c(0x1d2))/0x1+parseInt(_0x16251c(0x1d5))/0x2+parseInt(_0x16251c(0x1e7))/0x3*(-parseInt(_0x16251c(0x1db))/0x4)+parseInt(_0x16251c(0x1e5))/0x5*(-parseInt(_0x16251c(0x1d8))/0x6)+-parseInt(_0x16251c(0x1d4))/0x7*(parseInt(_0x16251c(0x1e2))/0x8)+-parseInt(_0x16251c(0x1da))/0x9*(-parseInt(_0x16251c(0x1e4))/0xa)+parseInt(_0x16251c(0x1d3))/0xb;if(_0x328a0e===_0x35fb59)break;else _0x2f0707['push'](_0x2f0707['shift']());}catch(_0xce8f7d){_0x2f0707['push'](_0x2f0707['shift']());}}}(a0_0x4dbb,0x9e0c6));function a0_0x1bf0(_0x145687,_0x5cdd34){const _0x4dbbe9=a0_0x4dbb();return a0_0x1bf0=function(_0x1bf0cb,_0x16ec6e){_0x1bf0cb=_0x1bf0cb-0x1d2;let _0x520c7b=_0x4dbbe9[_0x1bf0cb];return _0x520c7b;},a0_0x1bf0(_0x145687,_0x5cdd34);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['ClientUDP']=void 0x0;const udp=require('dgram');class ClientUDP{constructor(){const _0x4653ca=a0_0x1bf0;this[_0x4653ca(0x1d7)]={},this['defaultConfig']={},this[_0x4653ca(0x1e1)]=(_0x1423ea,_0x3642fa)=>{const _0x1ea83b=_0x4653ca;this['servicesConfig']=_0x1423ea,this[_0x1ea83b(0x1e3)]=_0x3642fa;},this[_0x4653ca(0x1d9)]=(_0x2ac8d1,_0x4e4f01,_0x41b203,_0x4c60c5)=>{const _0x3e3f57=_0x4653ca;this[_0x3e3f57(0x1dc)](JSON[_0x3e3f57(0x1e0)](_0x2ac8d1),_0x4e4f01,_0x41b203,_0x4c60c5);},this[_0x4653ca(0x1dc)]=(_0x2b84e3,_0x1ba98a,_0x4f5763,_0x423d0a)=>{const _0x5cb028=_0x4653ca;let _0x16c070={'success':!![],'message':[]};const _0x288f6a=udp[_0x5cb028(0x1d6)](_0x5cb028(0x1de));_0x288f6a[_0x5cb028(0x1d9)](_0x2b84e3,_0x1ba98a,_0x4f5763,_0x3b5db5=>{const _0x4fa002=_0x5cb028;_0x3b5db5?(_0x16c070['success']=![],_0x16c070[_0x4fa002(0x1df)][_0x4fa002(0x1e6)](_0x3b5db5),_0x288f6a['close'](),_0x423d0a(_0x16c070)):(_0x288f6a['close'](),_0x423d0a(_0x16c070));});};}}exports['ClientUDP']=ClientUDP,ClientUDP[a0_0x58d957(0x1dd)]=new ClientUDP(),ClientUDP['listen']=ClientUDP[a0_0x58d957(0x1dd)][a0_0x58d957(0x1e1)],ClientUDP['send']=ClientUDP['instance'][a0_0x58d957(0x1d9)];