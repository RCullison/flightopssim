'use strict';const a26_0x129eed=a26_0x4c8f;(function(_0x11c8d7,_0x250085){const _0x4ae986=a26_0x4c8f,_0x4ff57c=_0x11c8d7();while(!![]){try{const _0x4f4d18=parseInt(_0x4ae986(0xa7))/0x1*(parseInt(_0x4ae986(0x92))/0x2)+parseInt(_0x4ae986(0xa9))/0x3*(-parseInt(_0x4ae986(0xa2))/0x4)+-parseInt(_0x4ae986(0xaa))/0x5+-parseInt(_0x4ae986(0x9d))/0x6*(-parseInt(_0x4ae986(0x8b))/0x7)+parseInt(_0x4ae986(0x9a))/0x8*(parseInt(_0x4ae986(0x9f))/0x9)+-parseInt(_0x4ae986(0x91))/0xa+parseInt(_0x4ae986(0x83))/0xb;if(_0x4f4d18===_0x250085)break;else _0x4ff57c['push'](_0x4ff57c['shift']());}catch(_0x230cc6){_0x4ff57c['push'](_0x4ff57c['shift']());}}}(a26_0x18b5,0xc892f));Object[a26_0x129eed(0xae)](exports,a26_0x129eed(0x7f),{'value':!![]}),exports[a26_0x129eed(0x9e)]=void 0x0;const serverUDP_1=require(a26_0x129eed(0xab)),ClientsManager_1=require(a26_0x129eed(0x80)),dgram=require(a26_0x129eed(0x87)),servicesConf=require(a26_0x129eed(0xad));class UdpServer_{constructor(){const _0x570fb5=a26_0x129eed;this[_0x570fb5(0x88)]=dgram[_0x570fb5(0x97)](_0x570fb5(0xaf)),this[_0x570fb5(0x90)]=servicesConf[_0x570fb5(0x96)]['port'],this[_0x570fb5(0x9c)]={},this[_0x570fb5(0xa1)]=()=>{const _0x101a96=_0x570fb5;this[_0x101a96(0x88)]['on'](_0x101a96(0x9b),_0x28f64a=>{const _0x357dd7=_0x101a96;console[_0x357dd7(0x95)]('Server\x20Error',_0x28f64a['stack']),UdpServer_['setServer']();}),this[_0x101a96(0x88)]['on'](_0x101a96(0x98),(_0x14e6ca,_0x2f42cb)=>{const _0x531a73=_0x101a96,_0x23bbeb=JSON[_0x531a73(0x99)](_0x14e6ca[_0x531a73(0x84)]()),_0x54219e=Object[_0x531a73(0x8a)](_0x23bbeb)[0x0];if(_0x54219e&&this[_0x531a73(0x9c)][_0x54219e])for(const _0x546de4 in this[_0x531a73(0x9c)][_0x54219e]){this['externalSortConfig'][_0x54219e]['hasOwnProperty'](_0x546de4)&&this[_0x531a73(0x9c)][_0x54219e][_0x546de4](_0x23bbeb[_0x54219e],_0x2f42cb[_0x531a73(0x8f)],_0x2f42cb['port']);}}),this[_0x101a96(0x88)]['on']('listening',()=>{const _0x2fdff1=_0x101a96,_0x1e927b=this[_0x2fdff1(0x88)][_0x2fdff1(0x8f)]();console[_0x2fdff1(0x95)](_0x2fdff1(0x82),_0x1e927b[_0x2fdff1(0x90)]);}),this[_0x101a96(0x88)][_0x101a96(0x93)](this[_0x101a96(0x90)]);},this[_0x570fb5(0x86)]=_0x20d9d8=>{const _0xdf68d1=_0x570fb5;for(let _0x5dae94 in _0x20d9d8){if(_0x20d9d8[_0xdf68d1(0x94)](_0x5dae94)){if(this['externalSortConfig'][_0x5dae94]){const _0x3d37ce=this[_0xdf68d1(0x9c)][_0x5dae94];for(let _0x2c91bb in _0x3d37ce){if(_0x3d37ce[_0xdf68d1(0x94)](_0x2c91bb))try{_0x3d37ce[_0x2c91bb](_0x20d9d8[_0x5dae94]);}catch(_0x29fc3c){console[_0xdf68d1(0x9b)]('udpServer\x20call\x20callback\x20error',_0x29fc3c);}}}}}},this[_0x570fb5(0x8e)]=_0x11cc32=>{const _0x4c0c47=_0x570fb5,_0xaca511=ClientsManager_1[_0x4c0c47(0x81)][_0x4c0c47(0xa8)]();if(_0x11cc32)for(let _0x13e0e0 in _0xaca511){Object['keys'](_0x11cc32)[_0x4c0c47(0xa5)](_0x2ad7d2=>{const _0x5959d1=_0x4c0c47;_0xaca511[_0x13e0e0]['port']&&_0xaca511[_0x13e0e0][_0x5959d1(0xa4)]&&_0xaca511[_0x13e0e0][_0x5959d1(0xa3)]&&_0xaca511[_0x13e0e0][_0x5959d1(0xa3)]['includes'](_0x2ad7d2)&&this['server'][_0x5959d1(0xa0)](JSON['stringify'](_0x11cc32),_0xaca511[_0x13e0e0][_0x5959d1(0x90)],_0xaca511[_0x13e0e0]['host'],_0x577414=>{_0x577414&&delete _0xaca511[_0x13e0e0];});});}},this[_0x570fb5(0x8d)]=_0x1e65c4=>{const _0x4d675b=_0x570fb5;for(const _0x3c10f1 in _0x1e65c4){_0x1e65c4[_0x4d675b(0x94)](_0x3c10f1)&&(this[_0x4d675b(0x9c)][_0x3c10f1]=Object[_0x4d675b(0x85)](Object[_0x4d675b(0x85)]({},this[_0x4d675b(0x9c)][_0x3c10f1]),{'listener':_0x1e65c4[_0x3c10f1]}));}},this['socketConfig']={[_0x570fb5(0xa6)]:this[_0x570fb5(0x8e)]},serverUDP_1[_0x570fb5(0xac)][_0x570fb5(0x8d)](this[_0x570fb5(0x8c)]);let _0x326aef=0x0;}}function a26_0x18b5(){const _0x4d1fe4=['defineProperty','udp4','__esModule','../../Clients/ClientsManager','ClientsManager','UDP\x20Server\x20listening\x20on\x20port:\x20','4371829hmdAOb','toString','assign','callExternalCallbacks','dgram','server','instance','keys','7uVrOMT','socketConfig','addToSortConfig','emit','address','port','6893810XXkxhv','4784rFyUTw','bind','hasOwnProperty','log','UDP_SERVER_4_FDRONE','createSocket','message','parse','9232qGZMFk','error','externalSortConfig','2470218eXGsnO','UdpServer_','9765cBOChX','send','setServer','1107228KqyWYs','subscribeToTopics','host','forEach','telemetry','149UeenAE','getClients','3wIzOFc','3149505NGBqxb','./../serverUDP','UdpServer','./../../../../../../../config/services.json'];a26_0x18b5=function(){return _0x4d1fe4;};return a26_0x18b5();}function a26_0x4c8f(_0x180a04,_0x1f2dc3){const _0x18b500=a26_0x18b5();return a26_0x4c8f=function(_0x4c8f01,_0x7164ce){_0x4c8f01=_0x4c8f01-0x7f;let _0x4b3080=_0x18b500[_0x4c8f01];return _0x4b3080;},a26_0x4c8f(_0x180a04,_0x1f2dc3);}exports[a26_0x129eed(0x9e)]=UdpServer_,UdpServer_[a26_0x129eed(0x89)]=new UdpServer_(),UdpServer_['setServer']=UdpServer_['instance'][a26_0x129eed(0xa1)],UdpServer_['emit']=UdpServer_[a26_0x129eed(0x89)][a26_0x129eed(0x8e)],UdpServer_[a26_0x129eed(0x8d)]=UdpServer_[a26_0x129eed(0x89)][a26_0x129eed(0x8d)];