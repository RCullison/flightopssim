'use strict';function a24_0x386f(_0xbdedf7,_0xc0745f){const _0x4fc3c3=a24_0x4fc3();return a24_0x386f=function(_0x386f03,_0x327d02){_0x386f03=_0x386f03-0x152;let _0x357333=_0x4fc3c3[_0x386f03];return _0x357333;},a24_0x386f(_0xbdedf7,_0xc0745f);}const a24_0x1ea7b9=a24_0x386f;(function(_0x39f784,_0x28506e){const _0x26b1ef=a24_0x386f,_0x43f108=_0x39f784();while(!![]){try{const _0x4f41bf=parseInt(_0x26b1ef(0x15f))/0x1+parseInt(_0x26b1ef(0x15a))/0x2+parseInt(_0x26b1ef(0x153))/0x3+parseInt(_0x26b1ef(0x159))/0x4*(-parseInt(_0x26b1ef(0x165))/0x5)+-parseInt(_0x26b1ef(0x15d))/0x6*(-parseInt(_0x26b1ef(0x164))/0x7)+-parseInt(_0x26b1ef(0x158))/0x8+-parseInt(_0x26b1ef(0x166))/0x9;if(_0x4f41bf===_0x28506e)break;else _0x43f108['push'](_0x43f108['shift']());}catch(_0x2aec30){_0x43f108['push'](_0x43f108['shift']());}}}(a24_0x4fc3,0x2dbd5));Object[a24_0x1ea7b9(0x152)](exports,a24_0x1ea7b9(0x154),{'value':!![]}),exports['FilterUtility']=void 0x0;const convertation_1=require(a24_0x1ea7b9(0x163)),accuracyDigitsDefault=0x5;class FilterUtility{constructor(){this['points3DStraightFilter']=(_0x585be6,_0x571f56=accuracyDigitsDefault)=>{const _0x27e8c4=a24_0x386f;let _0x3f11ab=[];if(_0x585be6&&_0x585be6[_0x27e8c4(0x161)]>0x2){_0x3f11ab[_0x27e8c4(0x162)](_0x585be6[0x0]);const _0x574b1e=[_0x585be6[0x0],_0x585be6[0x1]];let _0x796a2c;for(let _0x594a51=0x2;_0x594a51<_0x585be6[_0x27e8c4(0x161)];_0x594a51++){this[_0x27e8c4(0x167)](_0x574b1e[0x0],_0x574b1e[0x1],_0x585be6[_0x594a51],_0x571f56)?_0x574b1e[0x1]=_0x585be6[_0x594a51]:(_0x3f11ab[_0x27e8c4(0x162)](_0x796a2c||_0x574b1e[0x1]),_0x574b1e[0x0]=_0x796a2c||_0x574b1e[0x1],_0x574b1e[0x1]=_0x585be6[_0x594a51],_0x796a2c=undefined);}_0x3f11ab[_0x27e8c4(0x162)](_0x585be6[_0x585be6[_0x27e8c4(0x161)]-0x1]);}else _0x3f11ab=_0x585be6;return _0x3f11ab;},this['cartesian2StraightFilter']=(_0x400ce1,_0x56518c=accuracyDigitsDefault)=>{const _0x3d79e1=a24_0x386f;let _0x3026c0=[];if(_0x400ce1&&_0x400ce1[_0x3d79e1(0x161)]>0x2){_0x3026c0[_0x3d79e1(0x162)](_0x400ce1[0x0]);const _0x4b166b=[_0x400ce1[0x0],_0x400ce1[0x1]];let _0x28170d;for(let _0x212eb8=0x2;_0x212eb8<_0x400ce1[_0x3d79e1(0x161)];_0x212eb8++){this[_0x3d79e1(0x167)]([_0x4b166b[0x0]['x'],_0x4b166b[0x0]['y']],[_0x4b166b[0x1]['x'],_0x4b166b[0x1]['y']],[_0x400ce1[_0x212eb8]['x'],_0x400ce1[_0x212eb8]['y']],_0x56518c)?_0x28170d=_0x400ce1[_0x212eb8]:(_0x3026c0[_0x3d79e1(0x162)](_0x28170d||_0x4b166b[0x1]),_0x4b166b[0x0]=_0x28170d||_0x4b166b[0x1],_0x4b166b[0x1]=_0x400ce1[_0x212eb8],_0x28170d=undefined);}_0x3026c0[_0x3d79e1(0x162)](_0x400ce1[_0x400ce1[_0x3d79e1(0x161)]-0x1]);}else _0x3026c0=_0x400ce1;return _0x3026c0;},this['points_CARTESIAN2_3_StraightFilter']=(_0x1b53ce,_0x284ade=accuracyDigitsDefault)=>{const _0x269a3f=a24_0x386f;let _0x2161f6=[];if(_0x1b53ce&&_0x1b53ce['length']>0x2){_0x2161f6['push'](_0x1b53ce[0x0]);const _0x41eb18=[_0x1b53ce[0x0],_0x1b53ce[0x1]];for(let _0x4b0bce=0x2;_0x4b0bce<_0x1b53ce[_0x269a3f(0x161)];_0x4b0bce++){const _0xd883cc=convertation_1[_0x269a3f(0x169)][_0x269a3f(0x156)](_0x41eb18[0x0]),_0x545c60=convertation_1[_0x269a3f(0x169)][_0x269a3f(0x156)](_0x41eb18[0x1]),_0x2025fb=convertation_1[_0x269a3f(0x169)][_0x269a3f(0x156)](_0x1b53ce[_0x4b0bce]);this[_0x269a3f(0x167)](_0xd883cc,_0x545c60,_0x2025fb,_0x284ade)?_0x41eb18[0x1]=_0x1b53ce[_0x4b0bce]:(_0x2161f6[_0x269a3f(0x162)](_0x41eb18[0x1]),_0x41eb18[0x0]=_0x41eb18[0x1],_0x41eb18[0x1]=_0x1b53ce[_0x4b0bce]);}_0x2161f6['push'](_0x1b53ce[_0x1b53ce[_0x269a3f(0x161)]-0x1]);}else _0x2161f6=_0x1b53ce;return _0x2161f6;},this['pointInLine']=(_0x52d05b,_0x2ea06a,_0x10e32f,_0x1ba8b0=accuracyDigitsDefault)=>{const _0x53a4ed=a24_0x386f;let _0x583d69=![];const _0x2d05b0=this[_0x53a4ed(0x15b)](_0x52d05b,_0x2ea06a),_0x19c0c9=this['euclideanDistanceVector'](_0x2ea06a,_0x10e32f),_0x3b9a17=Number(this['euclideanDistanceVector'](_0x52d05b,_0x10e32f)['toFixed'](_0x1ba8b0)),_0x2ee135=Number((_0x2d05b0+_0x19c0c9)['toFixed'](_0x1ba8b0));return _0x3b9a17===_0x2ee135&&(_0x583d69=!![]),_0x583d69;},this['euclideanDistanceVector']=(_0x233b4c,_0x3d5cee)=>{const _0x226e3a=a24_0x386f,_0x28e02d=(_0x233b4c[0x0]-_0x3d5cee[0x0])*0x186a0,_0x1e2d20=(_0x233b4c[0x1]-_0x3d5cee[0x1])*0x186a0,_0x25af95=(_0x233b4c[0x2]||0x0)-(_0x3d5cee[0x2]||0x0);return Math[_0x226e3a(0x157)](Math[_0x226e3a(0x15c)](_0x28e02d,0x2)+Math['pow'](_0x1e2d20,0x2)+Math[_0x226e3a(0x15c)](_0x25af95,0x2));};}}exports['FilterUtility']=FilterUtility,FilterUtility[a24_0x1ea7b9(0x160)]=new FilterUtility(),FilterUtility['points3DStraightFilter']=FilterUtility[a24_0x1ea7b9(0x160)][a24_0x1ea7b9(0x155)],FilterUtility[a24_0x1ea7b9(0x15e)]=FilterUtility[a24_0x1ea7b9(0x160)][a24_0x1ea7b9(0x15e)],FilterUtility[a24_0x1ea7b9(0x168)]=FilterUtility[a24_0x1ea7b9(0x160)]['points_CARTESIAN2_3_StraightFilter'];function a24_0x4fc3(){const _0x1a3b90=['instance','length','push','./convertation','7abPIfV','5gQbYGF','1291302YveSZS','pointInLine','points_CARTESIAN2_3_StraightFilter','Convertation','defineProperty','1114650KEQUlC','__esModule','points3DStraightFilter','CARTESIAN_2_3_to_POINT3D','sqrt','2786232OUGhgD','499676lSlRhD','381830FrgpVr','euclideanDistanceVector','pow','737340SJLmQl','cartesian2StraightFilter','118670AtUHJZ'];a24_0x4fc3=function(){return _0x1a3b90;};return a24_0x4fc3();}