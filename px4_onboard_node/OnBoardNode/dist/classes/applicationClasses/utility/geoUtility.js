'use strict';const a68_0x37476d=a68_0x1a31;function a68_0x5a91(){const _0x49b087=['9540036VjrwRN','longitude','push','latitude','instance','__esModule','cloneDeep','checkIfGeoPointValid','4FPSVaK','validateGeoPolygon','3862661HvEGfk','lodash','37288cIhbmm','map','isPOINTsArray','70izWTbd','splice','includes','3982925bMnDdz','isCartographicPOINTsArray','6835871RzUAkV','geometry.coordinates','comparePoints2D','isArray','GeoCalc','isPOINT','get','1411599iYiWpC','15fEETop','4733352iYtNEp','length','6sXYXGp','isFinite','./geoCalc','validatePolygon','isCartographicPOINT','comparePoints','GeoUtility'];a68_0x5a91=function(){return _0x49b087;};return a68_0x5a91();}(function(_0x17d841,_0xed1d22){const _0x16233e=a68_0x1a31,_0x4000e2=_0x17d841();while(!![]){try{const _0x237cb1=parseInt(_0x16233e(0x160))/0x1*(parseInt(_0x16233e(0x176))/0x2)+parseInt(_0x16233e(0x15f))/0x3+parseInt(_0x16233e(0x172))/0x4*(parseInt(_0x16233e(0x156))/0x5)+-parseInt(_0x16233e(0x163))/0x6*(-parseInt(_0x16233e(0x158))/0x7)+-parseInt(_0x16233e(0x161))/0x8+parseInt(_0x16233e(0x16a))/0x9+parseInt(_0x16233e(0x153))/0xa*(-parseInt(_0x16233e(0x174))/0xb);if(_0x237cb1===_0xed1d22)break;else _0x4000e2['push'](_0x4000e2['shift']());}catch(_0x5eee9a){_0x4000e2['push'](_0x4000e2['shift']());}}}(a68_0x5a91,0x82469));Object['defineProperty'](exports,a68_0x37476d(0x16f),{'value':!![]}),exports[a68_0x37476d(0x169)]=void 0x0;function a68_0x1a31(_0x4977b9,_0x21386f){const _0x5a91e6=a68_0x5a91();return a68_0x1a31=function(_0x1a3104,_0x1585c9){_0x1a3104=_0x1a3104-0x153;let _0x4ca91e=_0x5a91e6[_0x1a3104];return _0x4ca91e;},a68_0x1a31(_0x4977b9,_0x21386f);}const _=require(a68_0x37476d(0x175)),geoCalc_1=require(a68_0x37476d(0x165));class GeoUtility{constructor(){}}exports[a68_0x37476d(0x169)]=GeoUtility,GeoUtility[a68_0x37476d(0x16e)]=new GeoUtility(),GeoUtility['filterRoute2D']=_0x2e299a=>{const _0x2c6a58=a68_0x37476d,_0x33ea88=_[_0x2c6a58(0x170)](_0x2e299a);if(GeoUtility['isCartographicPOINTsArray'](_0x33ea88))for(let _0x3016d8=0x0;_0x3016d8<_0x33ea88[_0x2c6a58(0x162)]-0x1;_0x3016d8++){const _0x229f4e=_0x33ea88[_0x3016d8],_0x4a93d1=_0x33ea88[_0x3016d8+0x1];GeoUtility[_0x2c6a58(0x15a)](_0x229f4e,_0x4a93d1)&&(_0x33ea88[_0x2c6a58(0x154)](_0x3016d8+0x1,0x1),_0x3016d8--);}return _0x33ea88;},GeoUtility[a68_0x37476d(0x15a)]=(_0x428898,_0x2e0856)=>{const _0x5a5ed7=a68_0x37476d;let _0xc0b398=!![];if(GeoUtility[_0x5a5ed7(0x157)]([_0x428898,_0x2e0856]))for(let _0x471e6e=0x0;_0x471e6e<0x2;_0x471e6e++){_0x428898[_0x471e6e]!==_0x2e0856[_0x471e6e]&&(_0xc0b398=![]);}else _0xc0b398=![];return _0xc0b398;},GeoUtility['validatePolygonPOINTsArr']=_0x30a214=>{const _0x10c256=a68_0x37476d;let _0x292d99=!![];return GeoUtility[_0x10c256(0x157)](_0x30a214)&&_0x30a214['length']>0x2?_0x30a214[_0x10c256(0x177)](_0x3d1a8c=>{const _0x164a99=_0x10c256;_0x292d99=_0x292d99&&(Array['isArray'](_0x3d1a8c)&&_0x3d1a8c[_0x164a99(0x162)]>=0x2);}):_0x292d99=![],_0x292d99;},GeoUtility[a68_0x37476d(0x173)]=_0x3b3e06=>{const _0x424ad4=a68_0x37476d;let _0x35d3a2=!![];const _0x4d740f=_[_0x424ad4(0x15e)](_0x3b3e06,_0x424ad4(0x159),[[]]);return _0x4d740f['forEach'](_0x5a3f35=>{const _0x2f2d4e=_0x424ad4;GeoUtility[_0x2f2d4e(0x157)](_0x5a3f35)&&_0x5a3f35['length']>0x2?!geoCalc_1['GeoCalc']['comparePoints'](_0x5a3f35[0x0],_0x5a3f35[_0x5a3f35['length']-0x1])&&(_0x35d3a2=![]):_0x35d3a2=![];}),_0x35d3a2;},GeoUtility[a68_0x37476d(0x166)]=_0x32bed2=>{const _0x3283b0=a68_0x37476d;let _0x29bddc=!![];return GeoUtility[_0x3283b0(0x157)](_0x32bed2)&&_0x32bed2[_0x3283b0(0x162)]>0x3?!geoCalc_1[_0x3283b0(0x15c)][_0x3283b0(0x168)](_0x32bed2[0x0],_0x32bed2[_0x32bed2['length']-0x1])&&(_0x29bddc=![]):_0x29bddc=![],_0x29bddc;},GeoUtility['validateAndFixPolygon']=_0xf4e973=>{const _0x5fd8d8=a68_0x37476d;let _0x581100=!![];return GeoUtility['isCartographicPOINTsArray'](_0xf4e973)&&_0xf4e973[_0x5fd8d8(0x162)]>0x3?!geoCalc_1['GeoCalc'][_0x5fd8d8(0x168)](_0xf4e973[0x0],_0xf4e973[_0xf4e973['length']-0x1])&&_0xf4e973['push'](_0xf4e973[0x0]):_0x581100=![],_0x581100;},GeoUtility[a68_0x37476d(0x178)]=_0x3fe4e4=>{const _0x199335=a68_0x37476d,_0x3dbb43=[];if(Array['isArray'](_0x3fe4e4)&&_0x3fe4e4[_0x199335(0x162)]>0x0)for(let _0x48ec47=0x0;_0x48ec47<_0x3fe4e4[_0x199335(0x162)]&&_0x3dbb43;_0x48ec47++){_0x3dbb43[_0x199335(0x16c)](GeoUtility['isPOINT'](_0x3fe4e4[_0x48ec47]));}else _0x3dbb43[_0x199335(0x16c)](![]);return!_0x3dbb43[_0x199335(0x155)](![]);},GeoUtility[a68_0x37476d(0x157)]=_0x174fe9=>{const _0x297c5f=a68_0x37476d,_0x279c13=[];if(Array[_0x297c5f(0x15b)](_0x174fe9)&&_0x174fe9['length']>0x0)for(let _0x333d32=0x0;_0x333d32<_0x174fe9[_0x297c5f(0x162)]&&_0x279c13;_0x333d32++){_0x279c13[_0x297c5f(0x16c)](GeoUtility[_0x297c5f(0x167)](_0x174fe9[_0x333d32]));}else _0x279c13['push'](![]);return!_0x279c13['includes'](![]);},GeoUtility['isCartographicPOINT']=_0x485361=>{const _0x1c5965=a68_0x37476d;let _0x3ab777=![];return Array[_0x1c5965(0x15b)](_0x485361)&&_0x485361[_0x1c5965(0x162)]>0x1&&Number[_0x1c5965(0x164)](_0x485361[0x0])&&Number[_0x1c5965(0x164)](_0x485361[0x1])&&(_0x485361[0x0]!==undefined&&_0x485361[0x0]<=0xb4&&_0x485361[0x0]>=-0xb4&&(_0x485361[0x1]!==undefined&&_0x485361[0x1]<=0x5a&&_0x485361[0x1]>=-0x5a)&&(_0x3ab777=!![])),_0x3ab777;},GeoUtility['isGEOPOINT']=_0x4e8527=>{const _0x719bba=a68_0x37476d;let _0x4644da=![];return _0x4e8527&&_0x4e8527[_0x719bba(0x16b)]&&Number[_0x719bba(0x164)](_0x4e8527[_0x719bba(0x16b)])&&Number[_0x719bba(0x164)](_0x4e8527['latitude'])&&(_0x4e8527['longitude']!==undefined&&_0x4e8527[_0x719bba(0x16b)]<=0xb4&&_0x4e8527[_0x719bba(0x16b)]>=-0xb4&&(_0x4e8527[_0x719bba(0x16d)]!==undefined&&_0x4e8527[_0x719bba(0x16d)]<=0x5a&&_0x4e8527['latitude']>=-0x5a)&&(_0x4644da=!![])),_0x4644da;},GeoUtility[a68_0x37476d(0x15d)]=_0x3cbb73=>{const _0x35be28=a68_0x37476d;let _0x27d900=![];return Array[_0x35be28(0x15b)](_0x3cbb73)&&_0x3cbb73['length']>0x1&&Number[_0x35be28(0x164)](_0x3cbb73[0x0])&&Number['isFinite'](_0x3cbb73[0x1])&&(_0x27d900=!![]),_0x27d900;},GeoUtility[a68_0x37476d(0x171)]=_0x1ca42e=>{const _0x456450=a68_0x37476d;let _0x35e994=![];const _0x58ad61=_[_0x456450(0x15e)](_0x1ca42e,'geometry.coordinates',![]);return _0x58ad61&&(_0x35e994=GeoUtility[_0x456450(0x167)](_0x58ad61)),_0x35e994;};