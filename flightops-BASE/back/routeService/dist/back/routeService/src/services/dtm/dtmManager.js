'use strict';const a10_0xfbe6dd=a10_0x394c;(function(_0x41bddc,_0x52f4ff){const _0x52cb77=a10_0x394c,_0x4bc446=_0x41bddc();while(!![]){try{const _0x52ccd1=parseInt(_0x52cb77(0x128))/0x1*(-parseInt(_0x52cb77(0x141))/0x2)+-parseInt(_0x52cb77(0x138))/0x3*(parseInt(_0x52cb77(0x12b))/0x4)+-parseInt(_0x52cb77(0x105))/0x5*(-parseInt(_0x52cb77(0x107))/0x6)+parseInt(_0x52cb77(0x121))/0x7+parseInt(_0x52cb77(0x13a))/0x8*(-parseInt(_0x52cb77(0x148))/0x9)+-parseInt(_0x52cb77(0x12a))/0xa+-parseInt(_0x52cb77(0x125))/0xb*(-parseInt(_0x52cb77(0x140))/0xc);if(_0x52ccd1===_0x52f4ff)break;else _0x4bc446['push'](_0x4bc446['shift']());}catch(_0x46de54){_0x4bc446['push'](_0x4bc446['shift']());}}}(a10_0x1471,0xbd849));function a10_0x394c(_0x270962,_0x17edce){const _0x147125=a10_0x1471();return a10_0x394c=function(_0x394c4e,_0x5beb19){_0x394c4e=_0x394c4e-0xf5;let _0x528433=_0x147125[_0x394c4e];return _0x528433;},a10_0x394c(_0x270962,_0x17edce);}Object['defineProperty'](exports,a10_0xfbe6dd(0x13f),{'value':!![]}),exports[a10_0xfbe6dd(0x126)]=void 0x0;function a10_0x1471(){const _0x37520c=['instance','addBypassRelief','fixPointsHeight_POINT3D','convertPathToPathResolutionFull','path_to_POINT_ON_PATH_Arr_ForAGL','cloneDeep','cartographicArrToMatrix3D','it\x20is\x20impossible\x20to\x20compute\x20the\x20graph\x20data;\x20','cartesian2StraightFilter','Error\x20on\x20compute\x20AGL\x20route.\x20Check\x20task\x20AGL\x20parameters\x20(ascend\x20angle,\x20min\x20/\x20max\x20altitude\x20and\x20max\x20ASL)','4330OiKDax','convertArr_POINT_INDEXED_to_POINT3D','5022EOvDSG','data','description','max','computeBypassRelief','routeASL_Cartesian2_notFiltered','abs','route','computeRouteDtmWith_Obstacle','GeoUtility','convert_ALONG_GEOPOINT3D_Arr_to_CARESIAN2','forEach','../../../../../classes/applicationClasses/utility/geoUtility','CartesianCalc','routeASL_Cartesian2','path_to_CARTESIAN2_Arr','checkGraphRange','concat','[0].point.altitude','../../../../../classes/applicationClasses/utility/cartesianCalc','groundASL_Cartesian2','isAGL','groundASL_Cartesian2_notFiltered','catch','maxX','getPointsAltitude','3551366lsKHdl','SiteManager','takeOffAslHeight','slope','1918862FVsqXt','DtmManager','maxY','11ujgknD','isArray','11762380BIsSTj','9912yenNXX','addDroneHeight','ASL_Max','POINT_ON_PATH_Arr_to_POINT3D_Arr','altitudeRange','staticPath','../../../../../classes/applicationClasses/utility/filterUtility','success','get','point','blank','push','validateWithMatrixHeight','699ZNfafb','isFinite','48dYGnvB','path_to_POINT_ON_PATH_Arr','OBJ_VALUE','allowedId','resolution','__esModule','108vIfrNM','10450nsUUIB','../../../../../classes/typings/all.typings','../../../../../classes/applicationClasses/utility/convertation','addGroundPointsHeight','heightRange','POINT3D_Arr_to_ALONG_POINT3D_Arr','DtmUtility','322209nqYnua','then','FilterUtility','min','pathPoints','length','../site/siteManager','lodash','Convertation','defaultAltitude','buildGraphFromRoute'];a10_0x1471=function(){return _0x37520c;};return a10_0x1471();}const _=require(a10_0xfbe6dd(0xf7)),cartesianCalc_1=require(a10_0xfbe6dd(0x11a)),convertation_1=require(a10_0xfbe6dd(0x143)),filterUtility_1=require(a10_0xfbe6dd(0x131)),geoUtility_1=require(a10_0xfbe6dd(0x113)),all_typings_1=require(a10_0xfbe6dd(0x142)),dtmUtility_1=require('./dtmUtility'),siteManager_1=require(a10_0xfbe6dd(0xf6)),routeComputeConfig=require('./../../../../../../../../config/routeComputeConfig.json'),heightRange=routeComputeConfig[a10_0xfbe6dd(0x145)],resolution=routeComputeConfig[a10_0xfbe6dd(0x13e)];class DtmManager{constructor(){const _0xcf2032=a10_0xfbe6dd;this[_0xcf2032(0x10f)]=_0x54e5f0=>{return new Promise((_0x52440f,_0x47c85c)=>{const _0x3803fc={'success':![]};});},this[_0xcf2032(0xfc)]=_0x33a62c=>{return new Promise((_0x3b6d13,_0x53189e)=>{const _0x3690f4=a10_0x394c,_0x597445={'success':![]};_0x33a62c&&_0x33a62c[_0x3690f4(0x124)]&&(_0x33a62c[_0x3690f4(0x124)][_0x3690f4(0x14b)]=-Math['abs'](_0x33a62c[_0x3690f4(0x124)]['min']||0x0),_0x33a62c[_0x3690f4(0x124)][_0x3690f4(0x10a)]=Math[_0x3690f4(0x10d)](_0x33a62c['slope'][_0x3690f4(0x10a)]||0x0));const _0x2e9669=convertation_1['Convertation'][_0x3690f4(0xff)](_0x33a62c),_0x1d3752=dtmUtility_1[_0x3690f4(0x147)][_0x3690f4(0xfe)](_0x2e9669,resolution),_0x28d014=convertation_1[_0x3690f4(0xf8)]['POINT_ON_PATH_Arr_to_POINT3D_Arr'](_0x1d3752);dtmUtility_1[_0x3690f4(0x147)][_0x3690f4(0x120)](_0x28d014)[_0x3690f4(0x149)](_0x919584=>{const _0x5a97b8=_0x3690f4,_0xd8bc5d=_0x919584[_0x5a97b8(0x108)],_0x4eca62=this[_0x5a97b8(0x137)](_0xd8bc5d,_0x33a62c[_0x5a97b8(0x13d)]),_0x4f9969=this[_0x5a97b8(0x144)](_0x1d3752,_0x4eca62),_0x4effa1=dtmUtility_1[_0x5a97b8(0x147)][_0x5a97b8(0x146)](_0x1d3752,_0x4f9969),_0x1ff533=this[_0x5a97b8(0x12c)](_0x4f9969,_0x33a62c[_0x5a97b8(0x12f)]['min'],_0x33a62c[_0x5a97b8(0x11c)],_0x33a62c[_0x5a97b8(0x123)]),_0x5dcdbf=dtmUtility_1[_0x5a97b8(0x147)]['fixHeightOfPoints'](_0x4f9969,_0x1ff533,_0x1d3752,_0x33a62c);if(_0x5dcdbf[_0x5a97b8(0x132)]){let _0x10ee20=_0x5dcdbf['data'];const _0x323dfb=dtmUtility_1[_0x5a97b8(0x147)]['convert_ALONG_GEOPOINT3D_Arr_to_CARESIAN2'](_0x4effa1);let _0x5bce2e=dtmUtility_1[_0x5a97b8(0x147)]['convertArr_POINT_INDEXED_to_CARESIAN2'](_0x10ee20);const _0x6605c7=cartesianCalc_1[_0x5a97b8(0x114)][_0x5a97b8(0x117)]([_0x323dfb,_0x5bce2e]);let _0x439bcd;if(_0x33a62c[_0x5a97b8(0x11c)])_0x439bcd=dtmUtility_1[_0x5a97b8(0x147)][_0x5a97b8(0x106)](_0x10ee20);else{_0x439bcd=_0x28d014,_0x439bcd[_0x5a97b8(0x112)](_0x4d443c=>{const _0x91adf0=_0x5a97b8;_0x4d443c[0x2]=_0x33a62c['altitudeRange'][_0x91adf0(0x14b)];});let _0x51d15f=_0x33a62c[_0x5a97b8(0x12f)]['min']+_[_0x5a97b8(0x133)](_0x4effa1,_0x5a97b8(0x119),0x0);_0x1ff533[0x0]&&Number[_0x5a97b8(0x139)](_0x1ff533[0x0][0x2])&&(_0x51d15f=_0x1ff533[0x0][0x2]),_0x5bce2e=[{'x':0x0,'y':_0x51d15f},{'x':_0x6605c7[_0x5a97b8(0x11f)],'y':_0x51d15f}],_0x6605c7[_0x5a97b8(0x127)]=Math['max'](_0x6605c7[_0x5a97b8(0x127)]+0x14,_0x51d15f+0x14);}const _0x1e5d60=geoUtility_1[_0x5a97b8(0x110)][_0x5a97b8(0xfd)](_0x439bcd);if(_0x1e5d60['success']){_0x439bcd=_0x1e5d60[_0x5a97b8(0x108)];const _0x3d3af1={'route':_0x439bcd,'groundASL':_0x4f9969,'groundASL_Cartesian2':_0x323dfb,'routeASL_Cartesian2':_0x5bce2e,'graphRange':_0x6605c7};_0x597445[_0x5a97b8(0x132)]=!![],_0x597445['data']=_0x3d3af1;}else _0x597445['data']={'route':_0x439bcd,'groundASL':_0x4f9969,'groundASL_Cartesian2':_0x323dfb,'routeASL_Cartesian2':_0x5bce2e,'graphRange':_0x6605c7},_0x597445[_0x5a97b8(0x132)]=_0x1e5d60[_0x5a97b8(0x132)],_0x597445[_0x5a97b8(0x109)]=_0x1e5d60[_0x5a97b8(0x109)];}else _0x597445[_0x5a97b8(0x109)]=_0x5a97b8(0x104);_0x597445[_0x5a97b8(0x108)]['route_notFiltered']=_['cloneDeep'](_0x597445[_0x5a97b8(0x108)][_0x5a97b8(0x10e)]),_0x597445[_0x5a97b8(0x108)][_0x5a97b8(0x11d)]=_[_0x5a97b8(0x100)](_0x597445[_0x5a97b8(0x108)][_0x5a97b8(0x11b)]),_0x597445['data'][_0x5a97b8(0x10c)]=_[_0x5a97b8(0x100)](_0x597445['data'][_0x5a97b8(0x115)]),_0x597445[_0x5a97b8(0x108)][_0x5a97b8(0x10e)]=filterUtility_1[_0x5a97b8(0x14a)]['points3DStraightFilter'](_0x597445[_0x5a97b8(0x108)][_0x5a97b8(0x10e)]),_0x597445[_0x5a97b8(0x108)]['groundASL_Cartesian2']=filterUtility_1[_0x5a97b8(0x14a)][_0x5a97b8(0x103)](_0x597445[_0x5a97b8(0x108)]['groundASL_Cartesian2']),_0x597445[_0x5a97b8(0x108)][_0x5a97b8(0x115)]=filterUtility_1[_0x5a97b8(0x14a)][_0x5a97b8(0x103)](_0x597445[_0x5a97b8(0x108)][_0x5a97b8(0x115)]),_0x3b6d13(_0x597445);})[_0x3690f4(0x11e)](_0x30ba0f=>{_0x30ba0f;const _0x210c39={'success':![],'description':'can\x27t\x20get\x20PointsAltitude','data':_0x30ba0f};_0x53189e(_0x210c39);});});},this[_0xcf2032(0xfa)]=_0x3cbdb9=>{return new Promise((_0x3d7eb9,_0x5d51d7)=>{const _0x3c1448=a10_0x394c,_0x321700={'success':![]},_0x15ebad=convertation_1[_0x3c1448(0xf8)][_0x3c1448(0x116)](_0x3cbdb9['pathPoints'],_0x3cbdb9[_0x3c1448(0xf9)],_0x3cbdb9[_0x3c1448(0x123)]),_0xda843a=convertation_1[_0x3c1448(0xf8)][_0x3c1448(0x13b)](_0x3cbdb9[_0x3c1448(0x14c)]),_0x16f9c4=dtmUtility_1[_0x3c1448(0x147)][_0x3c1448(0xfe)](_0xda843a,resolution),_0x1f64ed=convertation_1['Convertation'][_0x3c1448(0x12e)](_0x16f9c4);dtmUtility_1[_0x3c1448(0x147)]['getPointsAltitude'](_0x1f64ed)[_0x3c1448(0x149)](_0x5cf03e=>{const _0x3879f5=_0x3c1448;if(_0x5cf03e[_0x3879f5(0x132)]){const _0x41acaa=_0x5cf03e['data'],_0x561756=this[_0x3879f5(0x137)](_0x41acaa,_0x3cbdb9[_0x3879f5(0x13d)]||all_typings_1['OBJ_VALUE'][_0x3879f5(0x135)]),_0x5c6de7=dtmUtility_1[_0x3879f5(0x147)][_0x3879f5(0x146)](_0x16f9c4,_0x561756),_0x5bbe29=dtmUtility_1[_0x3879f5(0x147)][_0x3879f5(0x111)](_0x5c6de7),_0x38ff1d=cartesianCalc_1['CartesianCalc']['checkGraphRange']([_0x5bbe29,_0x15ebad]);_0x321700['success']=!![],_0x321700[_0x3879f5(0x108)]={'groundASL_Cartesian2':_0x5bbe29,'routeASL_Cartesian2':_0x15ebad,'graphRange':_0x38ff1d},_0x3d7eb9(_0x321700);}else _0x321700['success']=_0x5cf03e[_0x3879f5(0x132)],_0x321700[_0x3879f5(0x109)]=_0x3879f5(0x102)+_0x5cf03e[_0x3879f5(0x109)],_0x5d51d7(_0x321700);})['catch'](_0x763e6e=>{const _0x4c57d2=_0x3c1448;_0x321700[_0x4c57d2(0x132)]=_0x763e6e[_0x4c57d2(0x132)],_0x321700[_0x4c57d2(0x109)]='it\x20is\x20impossible\x20to\x20compute\x20the\x20graph\x20data;\x20'+_0x763e6e['description'],_0x5d51d7(_0x321700);});});},this[_0xcf2032(0x137)]=(_0x12e481,_0x471cec=all_typings_1[_0xcf2032(0x13c)][_0xcf2032(0x135)])=>{const _0x355c1c=_0xcf2032,_0x21b216=_[_0x355c1c(0x100)](_0x12e481),_0xc1c3d6={'allowedId':_0x471cec,'points':_0x12e481},_0x143cff=siteManager_1[_0x355c1c(0x122)][_0x355c1c(0x101)](_0xc1c3d6);return _0x21b216['length']===_0x143cff[_0x355c1c(0xf5)]&&_0x21b216[_0x355c1c(0x112)]((_0x261d77,_0x3b2d39)=>{const _0x5e7879=_0x355c1c;_0x143cff[_0x3b2d39][0x2]!==undefined&&_0x143cff[_0x3b2d39][0x2]>heightRange['min']&&(_0x261d77[0x2]=Math[_0x5e7879(0x10a)](_0x261d77[0x2]||heightRange[_0x5e7879(0x14b)],_0x143cff[_0x3b2d39][0x2]));}),_0x21b216;},this[_0xcf2032(0x144)]=(_0x462ac5,_0x491b1c)=>{const _0x5ec32b=_0xcf2032,_0x53ab10=[];if(Array[_0x5ec32b(0x129)](_0x462ac5)&&Array['isArray'](_0x491b1c)&&_0x462ac5[_0x5ec32b(0xf5)]===_0x491b1c[_0x5ec32b(0xf5)])for(let _0x2146d=0x0;_0x2146d<_0x462ac5['length'];_0x2146d++){const _0x2ff2af=Math['max'](_0x491b1c[_0x2146d][0x2]||heightRange['min'],_0x462ac5[_0x2146d][_0x5ec32b(0x134)][0x2]||heightRange['min']);_0x53ab10[_0x5ec32b(0x136)]([_0x491b1c[_0x2146d][0x0],_0x491b1c[_0x2146d][0x1],_0x2ff2af]);}return _0x53ab10;},this[_0xcf2032(0x12c)]=(_0x1328ba,_0x33b492,_0x5b481b=![],_0xe65276)=>{const _0x383c03=_0xcf2032,_0x36a176=_[_0x383c03(0x100)](_0x1328ba||[]);return _0x5b481b?_0x36a176[_0x383c03(0x112)]((_0x144423,_0x3f4d12)=>{const _0x1392df=_0x383c03;_0x144423[0x2]=(_0x144423[0x2]||heightRange[_0x1392df(0x14b)])+_0x33b492;}):_0x36a176[_0x383c03(0x112)]((_0x53c03e,_0x26bce4)=>{_0x53c03e[0x2]=_0xe65276+_0x33b492;}),_0x36a176;},this[_0xcf2032(0x10b)]=(_0x6b2ed0,_0x14c66c)=>{return new Promise((_0xe9a30a,_0x175808)=>{const _0x5efc90=a10_0x394c;let _0x34dcd7=_0x14c66c;Array[_0x5efc90(0x129)](_0x6b2ed0[_0x5efc90(0x130)])&&(_0x34dcd7=_0x34dcd7[_0x5efc90(0x118)](_0x6b2ed0[_0x5efc90(0x130)]));const _0x19a574={'takeOffAslHeight':_0x6b2ed0[_0x5efc90(0x123)],'isAGL':_0x6b2ed0[_0x5efc90(0x11c)],'allowedId':_0x6b2ed0[_0x5efc90(0x13d)],'cartographicPath':_0x34dcd7,'slope':_0x6b2ed0['slope'],'altitudeRange':{'min':_0x6b2ed0[_0x5efc90(0x12f)][_0x5efc90(0x14b)]+0x0,'max':_0x6b2ed0[_0x5efc90(0x12f)][_0x5efc90(0x10a)]},'ASL_Max':_0x6b2ed0[_0x5efc90(0x12d)]};this[_0x5efc90(0xfc)](_0x19a574)[_0x5efc90(0x149)](_0x12f31c=>{_0xe9a30a(_0x12f31c);})[_0x5efc90(0x11e)](_0x3abd94=>{_0x175808(_0x3abd94);});});};}}exports['DtmManager']=DtmManager,DtmManager[a10_0xfbe6dd(0xfb)]=new DtmManager(),DtmManager[a10_0xfbe6dd(0x10f)]=DtmManager[a10_0xfbe6dd(0xfb)]['computeRouteDtmWith_Obstacle'],DtmManager[a10_0xfbe6dd(0xfc)]=DtmManager['instance']['addBypassRelief'],DtmManager[a10_0xfbe6dd(0x10b)]=DtmManager[a10_0xfbe6dd(0xfb)][a10_0xfbe6dd(0x10b)],DtmManager['buildGraphFromRoute']=DtmManager[a10_0xfbe6dd(0xfb)][a10_0xfbe6dd(0xfa)];