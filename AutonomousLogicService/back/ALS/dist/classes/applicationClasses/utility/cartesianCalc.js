'use strict';const a33_0x52cd1d=a33_0x527d;function a33_0x527d(_0xa64a5,_0x235012){const _0x5ee02b=a33_0x5ee0();return a33_0x527d=function(_0x527d4e,_0x3f018f){_0x527d4e=_0x527d4e-0xf2;let _0x340dce=_0x5ee02b[_0x527d4e];return _0x340dce;},a33_0x527d(_0xa64a5,_0x235012);}(function(_0x19b904,_0x4f802d){const _0x36742d=a33_0x527d,_0xf3b662=_0x19b904();while(!![]){try{const _0x531ee2=parseInt(_0x36742d(0x104))/0x1+parseInt(_0x36742d(0x115))/0x2*(-parseInt(_0x36742d(0x109))/0x3)+-parseInt(_0x36742d(0x120))/0x4+parseInt(_0x36742d(0x118))/0x5*(parseInt(_0x36742d(0x10d))/0x6)+parseInt(_0x36742d(0x10f))/0x7+parseInt(_0x36742d(0xfa))/0x8+parseInt(_0x36742d(0x10b))/0x9;if(_0x531ee2===_0x4f802d)break;else _0xf3b662['push'](_0xf3b662['shift']());}catch(_0x1072d0){_0xf3b662['push'](_0xf3b662['shift']());}}}(a33_0x5ee0,0x55078));function a33_0x5ee0(){const _0x149f22=['calcDistance','checkGraphRange','3650928mQENCC','min','GeoUtility','isCrossVectorAndPolygon','isPOINT','isCrossPolygonAndPolygon','./geoCalc','computeDelta','bottomRight','pow','12384MzOdZC','maxY','vectorAlong','checkPointInPolygon','findNumberOfPointsCrossVectorAndPolygon','679989SvXgyj','lodash','6834222dHzuMW','GeoCalc','186666HVusuB','maxX','681954QpvwBz','minX','isCartographicPOINTsArray','isPOINTsArray','isFinite','findTopLeftAndBottomRitht','4hWoJzn','checkCrossLines','length','10VChtxW','checkCrossPolygon','findCrossPoint','minY','buildRectangleAroundPoint','isCrossRectangles','findFirst_LastDistancesOnVector','max','2344584YVlbqZ','instance','forEach','./geoUtility','isCrossPolygonsRectangles','validatePolygonPOINTsArr','topLeft','push','round','CartesianCalc','validateAndFixPolygon'];a33_0x5ee0=function(){return _0x149f22;};return a33_0x5ee0();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a33_0x52cd1d(0xf6)]=void 0x0;const _=require(a33_0x52cd1d(0x10a)),geoUtility_1=require(a33_0x52cd1d(0x123)),geoCalc_1=require(a33_0x52cd1d(0x100));class CartesianCalc{constructor(){}static[a33_0x52cd1d(0xf8)](_0x2b3547){const _0x378c87=a33_0x52cd1d;let _0x4bd3de;if(geoCalc_1['GeoCalc'][_0x378c87(0x111)](_0x2b3547)){const _0x56cedc=_0x2b3547[0x1][0x0]-_0x2b3547[0x0][0x0],_0x6d0331=_0x2b3547[0x1][0x1]-_0x2b3547[0x0][0x1];_0x4bd3de=Math['sqrt'](Math[_0x378c87(0x103)](_0x56cedc,0x2)+Math[_0x378c87(0x103)](_0x6d0331,0x2));}return _0x4bd3de;}static[a33_0x52cd1d(0x106)](_0x38a047,_0x42504c=0x0){const _0x2d7b9a=a33_0x52cd1d;let _0x4b0779;if(geoCalc_1['GeoCalc'][_0x2d7b9a(0x111)](_0x38a047)&&Number[_0x2d7b9a(0x113)](_0x42504c)&&_0x42504c>=0x0){const _0x4a0d36=this[_0x2d7b9a(0xf8)](_0x38a047);if(_0x4a0d36<_0x42504c)_0x4b0779=_0x38a047[0x1];else{const _0xb5d024=_0x42504c/_0x4a0d36,_0x252c9d=this[_0x2d7b9a(0x101)](_0x38a047);_0x4b0779=[_0x38a047[0x0][0x0]+_0x252c9d['x']*_0xb5d024,_0x38a047[0x0][0x1]+_0x252c9d['y']*_0xb5d024];}}return _0x4b0779;}static[a33_0x52cd1d(0x101)](_0x11acac){const _0x8e00d2=a33_0x52cd1d;let _0xddec88;return geoCalc_1[_0x8e00d2(0x10c)]['isCartographicPOINTsArray'](_0x11acac)&&(_0xddec88={'x':_0x11acac[0x1][0x0]-_0x11acac[0x0][0x0],'y':_0x11acac[0x1][0x1]-_0x11acac[0x0][0x1]}),_0xddec88;}static['findFirstAndLastPointsOnLINE'](_0x42516a){const _0x768917=a33_0x52cd1d;let _0x7b3724;if(geoCalc_1[_0x768917(0x10c)]['isCartographicPOINTsArray'](_0x42516a)){_0x7b3724=[_0x42516a[0x0],_0x42516a[0x0]];if(_0x42516a['length']>0x1){const _0xdc2be3=_0x42516a[0x1][0x0]-_0x42516a[0x0][0x0]||1e-18,_0x26aed2=_0x42516a[0x1][0x1]-_0x42516a[0x0][0x1];if(_0xdc2be3)_0x42516a[_0x768917(0x122)]((_0x2bb532,_0x3cf0ea)=>{_0x7b3724[0x0][0x0]>_0x2bb532[0x0]&&(_0x7b3724[0x0]=_0x2bb532),_0x7b3724[0x1][0x0]<_0x2bb532[0x0]&&(_0x7b3724[0x1]=_0x2bb532);});else _0x26aed2&&_0x42516a['forEach']((_0x58ddb6,_0x44dc5b)=>{_0x7b3724[0x0][0x1]>_0x58ddb6[0x1]&&(_0x7b3724[0x0]=_0x58ddb6),_0x7b3724[0x1][0x1]<_0x58ddb6[0x1]&&(_0x7b3724[0x1]=_0x58ddb6);});}}return _0x7b3724;}static[a33_0x52cd1d(0x11e)](_0x589be1,_0x9f1038){const _0x4a797b=a33_0x52cd1d;let _0x291287,_0x1f47ac;if(geoCalc_1[_0x4a797b(0x10c)]['isCartographicPOINTsArray'](_0x589be1)){_0x291287=[_0x589be1[0x0],_0x589be1[0x0]];if(_0x589be1[_0x4a797b(0x117)]>0x1){const _0x302bba=_0x589be1[0x1][0x0]-_0x589be1[0x0][0x0],_0x970914=_0x589be1[0x1][0x1]-_0x589be1[0x0][0x1];if(_0x302bba)_0x589be1[_0x4a797b(0x122)]((_0x5d3f7e,_0x3f8265)=>{_0x291287[0x0][0x0]>_0x5d3f7e[0x0]&&(_0x291287[0x0]=_0x5d3f7e),_0x291287[0x1][0x0]<_0x5d3f7e[0x0]&&(_0x291287[0x1]=_0x5d3f7e);});else _0x970914&&_0x589be1[_0x4a797b(0x122)]((_0x3b85af,_0x452036)=>{_0x291287[0x0][0x1]>_0x3b85af[0x1]&&(_0x291287[0x0]=_0x3b85af),_0x291287[0x1][0x1]<_0x3b85af[0x1]&&(_0x291287[0x1]=_0x3b85af);});}const _0x419227=this['calcDistance']([_0x9f1038[0x0],_0x291287[0x0]]),_0x3ef759=this[_0x4a797b(0xf8)]([_0x9f1038[0x0],_0x291287[0x1]]);_0x1f47ac=[Math[_0x4a797b(0xfb)](_0x419227,_0x3ef759),Math[_0x4a797b(0x11f)](_0x419227,_0x3ef759)];}return _0x1f47ac;}static['findPointsCrossVectorAndPolygon'](_0x5c9679,_0x418a3a){const _0x3b92c8=a33_0x52cd1d,_0x349f08=[];for(let _0x30f9a3=0x0;_0x30f9a3<_0x5c9679[_0x3b92c8(0x117)];_0x30f9a3++){let _0x587e50=_0x30f9a3+0x1;_0x587e50===_0x5c9679[_0x3b92c8(0x117)]&&(_0x587e50=0x0);const _0x123c4a=[_0x5c9679[_0x30f9a3],_0x5c9679[_0x587e50]];if(this['checkCrossLines'](_0x123c4a,_0x418a3a)){const _0x40c40b=this['findCrossPoint'](_0x123c4a,_0x418a3a);_0x40c40b&&_0x349f08[_0x3b92c8(0xf4)](_0x40c40b);}}return _0x349f08;}static[a33_0x52cd1d(0x108)](_0xc0ea10,_0x296d6b){const _0x43277a=a33_0x52cd1d;let _0x58b2ef=0x0;if(geoUtility_1[_0x43277a(0xfc)]['isPOINT'](_0x296d6b)){const _0x3c21f2=[_0x296d6b,[_0x296d6b[0x0]+0x1,_0x296d6b[0x1]]];for(let _0x6bef09=0x0;_0x6bef09<_0xc0ea10['length'];_0x6bef09++){let _0x4f5eb8=_0x6bef09+0x1;_0x4f5eb8===_0xc0ea10[_0x43277a(0x117)]&&(_0x4f5eb8=0x0);const _0x4323c4=[_0xc0ea10[_0x6bef09],_0xc0ea10[_0x4f5eb8]];this[_0x43277a(0x116)](_0x4323c4,_0x3c21f2)&&_0x58b2ef++;}}return _0x58b2ef;}static[a33_0x52cd1d(0x107)](_0x2af6ad,_0x39c44d){const _0x17ea07=a33_0x52cd1d;let _0x528320=!![];const _0xe097f3=CartesianCalc[_0x17ea07(0x108)](_0x2af6ad,_0x39c44d);return!(_0xe097f3%0x2)&&(_0x528320=![]),_0x528320;}static[a33_0x52cd1d(0xff)](_0xaa4fbd,_0x2fdee3){const _0x158b8e=a33_0x52cd1d;let _0x4093db=![];if(geoUtility_1[_0x158b8e(0xfc)][_0x158b8e(0xf7)](_0xaa4fbd)&&geoUtility_1[_0x158b8e(0xfc)][_0x158b8e(0xf7)](_0x2fdee3))for(let _0x4b612f=0x0;_0x4b612f<_0xaa4fbd[_0x158b8e(0x117)];_0x4b612f++){if(!_0x4093db){let _0x147aed=_0x4b612f+0x1;_0x147aed===_0xaa4fbd[_0x158b8e(0x117)]&&(_0x147aed=0x0);const _0x84c110=[_0xaa4fbd[_0x4b612f],_0xaa4fbd[_0x147aed]],_0x40a26d=CartesianCalc[_0x158b8e(0xfd)](_0x2fdee3,_0x84c110);if(_0x40a26d){_0x4093db=!![],_0x4b612f=_0xaa4fbd[_0x158b8e(0x117)];break;}}}return _0x4093db;}static[a33_0x52cd1d(0x11d)](_0x38d0b5,_0x2b0164){const _0x404853=a33_0x52cd1d;let _0x100406=![];if(geoUtility_1['GeoUtility'][_0x404853(0xfe)](_0x38d0b5[0x0])&&geoUtility_1[_0x404853(0xfc)][_0x404853(0xfe)](_0x38d0b5[0x1])&&geoUtility_1[_0x404853(0xfc)][_0x404853(0xfe)](_0x2b0164[0x0])&&geoUtility_1['GeoUtility'][_0x404853(0xfe)](_0x2b0164[0x1])){const _0x28c2a9=Math[_0x404853(0xfb)](_0x38d0b5[0x0][0x0],_0x38d0b5[0x1][0x0]),_0x386fc6=Math[_0x404853(0xfb)](_0x38d0b5[0x0][0x1],_0x38d0b5[0x1][0x1]),_0x276612=Math['max'](_0x38d0b5[0x0][0x0],_0x38d0b5[0x1][0x0]),_0x268b61=Math[_0x404853(0x11f)](_0x38d0b5[0x0][0x1],_0x38d0b5[0x1][0x1]),_0x2cf883=Math[_0x404853(0xfb)](_0x2b0164[0x0][0x0],_0x2b0164[0x1][0x0]),_0x2219cd=Math[_0x404853(0xfb)](_0x2b0164[0x0][0x1],_0x2b0164[0x1][0x1]),_0x57b3fd=Math[_0x404853(0x11f)](_0x2b0164[0x0][0x0],_0x2b0164[0x1][0x0]),_0x3c52a7=Math['max'](_0x2b0164[0x0][0x1],_0x2b0164[0x1][0x1]);_0x57b3fd>_0x28c2a9&&_0x2cf883<_0x276612&&_0x3c52a7>_0x386fc6&&_0x2219cd<_0x268b61&&(_0x100406=!![]);}return _0x100406;}static[a33_0x52cd1d(0x124)](_0xb1155e,_0xf12dd8){const _0x2d6273=a33_0x52cd1d;let _0x1f8029=![];if(geoUtility_1[_0x2d6273(0xfc)][_0x2d6273(0x112)](_0xb1155e)&&geoUtility_1[_0x2d6273(0xfc)]['isPOINTsArray'](_0xf12dd8)){const _0x27424e=CartesianCalc['findTopLeftAndBottomRitht'](_0xb1155e),_0x19e8eb=CartesianCalc[_0x2d6273(0x114)](_0xb1155e);_0x1f8029=CartesianCalc['isCrossRectangles']([_0x27424e['topLeft'],_0x27424e[_0x2d6273(0x102)]],[_0x19e8eb[_0x2d6273(0xf3)],_0x19e8eb[_0x2d6273(0x102)]]);}return _0x1f8029;}static['isCrossVectorAndPolygon'](_0x4a04d2,_0x8c174e){const _0x1cbcd1=a33_0x52cd1d;let _0x2a3a5b=![];for(let _0x2ad17d=0x0;_0x2ad17d<_0x4a04d2[_0x1cbcd1(0x117)];_0x2ad17d++){let _0x1a949d=_0x2ad17d+0x1;_0x1a949d===_0x4a04d2[_0x1cbcd1(0x117)]&&(_0x1a949d=0x0);const _0x699b0e=[_0x4a04d2[_0x2ad17d],_0x4a04d2[_0x1a949d]];this[_0x1cbcd1(0x116)](_0x699b0e,_0x8c174e)&&(_0x2a3a5b=!![],_0x2ad17d=_0x4a04d2['length']);}return _0x2a3a5b;}static[a33_0x52cd1d(0x116)](_0x427842,_0x2bf42f){const _0x42c25b=a33_0x52cd1d;let _0x3cef6c=![];if(CartesianCalc[_0x42c25b(0x11d)](_0x427842,_0x2bf42f)){const _0x3b3e3a=(_0x2bf42f[0x1][0x0]-_0x2bf42f[0x0][0x0])*(_0x427842[0x0][0x1]-_0x2bf42f[0x0][0x1])-(_0x2bf42f[0x1][0x1]-_0x2bf42f[0x0][0x1])*(_0x427842[0x0][0x0]-_0x2bf42f[0x0][0x0]),_0x281c73=(_0x2bf42f[0x1][0x0]-_0x2bf42f[0x0][0x0])*(_0x427842[0x1][0x1]-_0x2bf42f[0x0][0x1])-(_0x2bf42f[0x1][0x1]-_0x2bf42f[0x0][0x1])*(_0x427842[0x1][0x0]-_0x2bf42f[0x0][0x0]),_0x1b6fb0=(_0x427842[0x1][0x0]-_0x427842[0x0][0x0])*(_0x2bf42f[0x0][0x1]-_0x427842[0x0][0x1])-(_0x427842[0x1][0x1]-_0x427842[0x0][0x1])*(_0x2bf42f[0x0][0x0]-_0x427842[0x0][0x0]),_0x22f887=(_0x427842[0x1][0x0]-_0x427842[0x0][0x0])*(_0x2bf42f[0x1][0x1]-_0x427842[0x0][0x1])-(_0x427842[0x1][0x1]-_0x427842[0x0][0x1])*(_0x2bf42f[0x1][0x0]-_0x427842[0x0][0x0]);_0x3b3e3a*_0x281c73<0x0&&_0x1b6fb0*_0x22f887<0x0&&(_0x3cef6c=!![]);}return _0x3cef6c;}static[a33_0x52cd1d(0x11a)](_0x15bf23,_0x44626d){let _0x28fbe7;const _0x4505dc=_0x15bf23[0x1][0x0]-_0x15bf23[0x0][0x0]||1e-8,_0x232b90=_0x15bf23[0x1][0x1]-_0x15bf23[0x0][0x1],_0x1932f6=_0x44626d[0x1][0x0]-_0x44626d[0x0][0x0]||1e-8,_0x8dfa54=_0x44626d[0x1][0x1]-_0x44626d[0x0][0x1];if(_0x4505dc&&_0x1932f6){const _0x285854=_0x232b90/_0x4505dc,_0x3485aa=_0x8dfa54/_0x1932f6,_0x4b0317=_0x15bf23[0x0][0x1]-_0x285854*_0x15bf23[0x0][0x0],_0x1d4f70=_0x44626d[0x0][0x1]-_0x3485aa*_0x44626d[0x0][0x0],_0x24f049=(_0x1d4f70-_0x4b0317)/(_0x285854-_0x3485aa),_0x20a2a6=_0x285854*_0x24f049+_0x4b0317;_0x28fbe7=[_0x24f049,_0x20a2a6];}return _0x28fbe7;}static[a33_0x52cd1d(0x119)](_0xb9b4c8){const _0x25b47c=a33_0x52cd1d;let _0x199a7d=![];if(_0xb9b4c8[_0x25b47c(0x117)]>0x2)for(let _0x2b5f7e=0x0;_0x2b5f7e<_0xb9b4c8[_0x25b47c(0x117)]-0x2;_0x2b5f7e++){for(let _0x274017=_0x2b5f7e+0x1;_0x274017<_0xb9b4c8[_0x25b47c(0x117)]-0x1;_0x274017++){!_0x199a7d&&(_0x199a7d=this[_0x25b47c(0x116)]([[_0xb9b4c8[_0x2b5f7e][0x0],_0xb9b4c8[_0x2b5f7e][0x1]],[_0xb9b4c8[_0x2b5f7e+0x1][0x0],_0xb9b4c8[_0x2b5f7e+0x1][0x1]]],[[_0xb9b4c8[_0x274017][0x0],_0xb9b4c8[_0x274017][0x1]],[_0xb9b4c8[_0x274017+0x1][0x0],_0xb9b4c8[_0x274017+0x1][0x1]]]));}!_0x199a7d&&(_0x199a7d=this[_0x25b47c(0x116)]([[_0xb9b4c8[_0x2b5f7e][0x0],_0xb9b4c8[_0x2b5f7e][0x1]],[_0xb9b4c8[_0x2b5f7e+0x1][0x0],_0xb9b4c8[_0x2b5f7e+0x1][0x1]]],[[_0xb9b4c8[_0xb9b4c8['length']-0x1][0x0],_0xb9b4c8[_0xb9b4c8['length']-0x1][0x1]],[_0xb9b4c8[0x0][0x0],_0xb9b4c8[0x0][0x1]]]));}return _0x199a7d;}}exports[a33_0x52cd1d(0xf6)]=CartesianCalc,CartesianCalc[a33_0x52cd1d(0x121)]=new CartesianCalc(),CartesianCalc[a33_0x52cd1d(0x11c)]=(_0x9268b0,_0x87c4e2)=>{const _0x4e03d9={'x':_0x87c4e2['x']/0x2,'y':_0x87c4e2['y']/0x2},_0x4c5d0a=[_0x9268b0[0x0]-_0x4e03d9['x'],_0x9268b0[0x1]+_0x4e03d9['y']],_0x4e3056=[_0x9268b0[0x0]+_0x4e03d9['x'],_0x9268b0[0x1]+_0x4e03d9['y']],_0x228ab5=[_0x9268b0[0x0]+_0x4e03d9['x'],_0x9268b0[0x1]-_0x4e03d9['y']],_0x55da25=[_0x9268b0[0x0]-_0x4e03d9['x'],_0x9268b0[0x1]-_0x4e03d9['y']];return[_0x4c5d0a,_0x4e3056,_0x228ab5,_0x55da25];},CartesianCalc[a33_0x52cd1d(0x114)]=_0x199ec6=>{const _0x3595e1=a33_0x52cd1d;let _0x35d28a;return geoUtility_1[_0x3595e1(0xfc)][_0x3595e1(0xf2)](_0x199ec6)&&(_0x35d28a={'topLeft':[_0x199ec6[0x0][0x0],_0x199ec6[0x0][0x1]],'bottomRight':[_0x199ec6[0x0][0x0],_0x199ec6[0x0][0x1]]},_0x199ec6['forEach'](_0x428122=>{const _0x362187=_0x3595e1;_0x35d28a[_0x362187(0xf3)][0x0]=Math['min'](_0x35d28a[_0x362187(0xf3)][0x0],_0x428122[0x0]),_0x35d28a['topLeft'][0x1]=Math['max'](_0x35d28a[_0x362187(0xf3)][0x1],_0x428122[0x1]),_0x35d28a[_0x362187(0x102)][0x0]=Math[_0x362187(0x11f)](_0x35d28a['bottomRight'][0x0],_0x428122[0x0]),_0x35d28a['bottomRight'][0x1]=Math[_0x362187(0xfb)](_0x35d28a[_0x362187(0x102)][0x1],_0x428122[0x1]);})),_0x35d28a;},CartesianCalc[a33_0x52cd1d(0xf9)]=_0x3f8a7b=>{const _0x367ddf=a33_0x52cd1d;let _0x342e22={'minX':Math[_0x367ddf(0xf5)](_0x3f8a7b[0x0][0x0]['x']+0x1),'maxX':Math['round'](_0x3f8a7b[0x0][0x0]['x']+0x1),'minY':Math['round'](_0x3f8a7b[0x0][0x0]['y']+0x1),'maxY':Math['round'](_0x3f8a7b[0x0][0x0]['y']+0x1)};return _0x3f8a7b['forEach'](_0x1391bb=>{const _0x16b7ab=_0x367ddf;_0x1391bb[_0x16b7ab(0x122)](_0x1bf652=>{const _0x6efb76=_0x16b7ab;_0x342e22[_0x6efb76(0x110)]=Math[_0x6efb76(0xfb)](_0x342e22['minX'],_0x1bf652['x']),_0x342e22['maxX']=Math[_0x6efb76(0x11f)](_0x342e22[_0x6efb76(0x10e)],_0x1bf652['x']),_0x342e22['minY']=Math['min'](_0x342e22[_0x6efb76(0x11b)],_0x1bf652['y']),_0x342e22[_0x6efb76(0x105)]=Math[_0x6efb76(0x11f)](_0x342e22[_0x6efb76(0x105)],_0x1bf652['y']);});}),_0x342e22;};