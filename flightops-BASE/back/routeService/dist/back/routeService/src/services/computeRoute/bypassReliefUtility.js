'use strict';const a6_0x5e9888=a6_0x5a60;function a6_0x5a60(_0x1db5c8,_0x1651d5){const _0x42e085=a6_0x42e0();return a6_0x5a60=function(_0x5a600c,_0x4c86f9){_0x5a600c=_0x5a600c-0x8d;let _0x39e410=_0x42e085[_0x5a600c];return _0x39e410;},a6_0x5a60(_0x1db5c8,_0x1651d5);}(function(_0x1f6b0f,_0x2f1d33){const _0x3e7ef8=a6_0x5a60,_0x75c91=_0x1f6b0f();while(!![]){try{const _0x1ff6ca=-parseInt(_0x3e7ef8(0xf0))/0x1*(-parseInt(_0x3e7ef8(0xc2))/0x2)+-parseInt(_0x3e7ef8(0xcb))/0x3*(parseInt(_0x3e7ef8(0xd9))/0x4)+-parseInt(_0x3e7ef8(0xa9))/0x5+parseInt(_0x3e7ef8(0xe9))/0x6*(parseInt(_0x3e7ef8(0x105))/0x7)+parseInt(_0x3e7ef8(0x100))/0x8+-parseInt(_0x3e7ef8(0x108))/0x9*(-parseInt(_0x3e7ef8(0xd1))/0xa)+-parseInt(_0x3e7ef8(0xf2))/0xb;if(_0x1ff6ca===_0x2f1d33)break;else _0x75c91['push'](_0x75c91['shift']());}catch(_0x4bf560){_0x75c91['push'](_0x75c91['shift']());}}}(a6_0x42e0,0x989ee));function a6_0x42e0(){const _0x28dab0=['computeHeightASL','finish\x20BypassReliefUtility.cartographicToMatrix','round','computeCompressPath','log','MatrixUtility',';\x20path:\x20','allowedId','grid','computeRoute','checkRoute_3D','fromTo','isPOINTsArray','*caltch*','isFinite','FilterUtility','min','NfzManager','./computeRouteUtility','route','Logger','4023690IklLVn','direction','heightRange','GeoCalc','cloneDeep','computeBypassRelief','addCrossAllNfzPoints','routeService','computeNewPointsForShirtLeg','-start\x20BypassReliefUtility.simplifyPath_3D_newLogic','isPOINT','lodash','ASL_to_ATP','computeRouteTerrainFollowingFullPathRecursiveFunction','computeDirectionRoute','instance','Can\x20not\x20compute\x20route;\x20computed\x20route\x20is\x20empty\x20array','defaultLastLegLength','success','convertRouteToCartographic','../../../../../classes/applicationClasses/utility/geoUtility','getTimeString','DataUtility','now','description','2622MSOhHB','GeoUtility','DtmManager','splice','MatrixManager','heightTolerance','__esModule','height','checkAndFixParameters','165948jDFsMy','matrixPoints:\x20','decrementMaxHeight','getTotalTimeString','FindRouteUtility','-start\x20BypassReliefUtility.cartographicToMatrix','5884490vgzBeU','computeRouteTerrainFollowingFullPathFloating_recursiveFunction','../../logger/Logger','../matrix/matrixManager','computeRouteBypassReliefRecursiveFunction','forEach','pointsStraightFilter_CARTESIAN2','computeRouteSecond','44uOFMEV','length','points_CARTESIAN2_3_StraightFilter','ASL_Max','decrementRoute','\x20allowedId:\x20','heightValidation','trunc','finish\x20BypassReliefUtility.simplifyPath_3D_newLogic','northWest','Invalid\x20route\x20(by\x20ASL_Max)','../nfz/nfzManager','---------------','cellSize','SiteManager','push','33198BTypBa','computeRouteTerrainFollowingFullPathRecursiveFunction_floating','./findRouteUtility','findNearestPointOutsideNFZ','addFollowTerrain','data','logStatus','509UUOOxO','simplifyPath_3D_newLogic','13680029UmhKWw','\x20-\x20computeDirectionRoute\x20-\x20','../dtm/dtmManager','maxLegLength','../../../../../classes/applicationClasses/utility/dataUtility','altitudeRange','along','cartographicToMatrix','isAGL','addHeight','takeOffAslHeight','can\x20not\x20build\x20the\x20path:\x20','BypassReliefUtility','convertToShirtLags','4287288EJYMCg','catch','../../../../../classes/applicationClasses/utility/geoCalc','../site/siteManager','lastLegLength','1141XvRAbe','-\x20BypassReliefUtility\x20-','checkIsNotCrossNfzMatrix_3D','18mLvigl','then','stringify','\x20Can\x20not\x20compute\x20route;\x20can\x20not\x20compute\x20follow\x20tarrain.\x20Please\x20check\x20AGL\x20parameyters','isCartographicPOINTsArray','ComputeRouteUtility','isArray','calcDistance','Can\x20not\x20compute\x20route'];a6_0x42e0=function(){return _0x28dab0;};return a6_0x42e0();}Object['defineProperty'](exports,a6_0x5e9888(0xc8),{'value':!![]}),exports[a6_0x5e9888(0xfe)]=void 0x0;const _=require(a6_0x5e9888(0xb4)),dataUtility_1=require(a6_0x5e9888(0xf6)),geoUtility_1=require(a6_0x5e9888(0xbd)),geoCalc_1=require(a6_0x5e9888(0x102)),nfzManager_1=require(a6_0x5e9888(0xe4)),siteManager_1=require(a6_0x5e9888(0x103)),matrixUtility_1=require('../../../../../classes/applicationClasses/utility/matrixUtility'),Logger_1=require(a6_0x5e9888(0xd3)),matrixManager_1=require(a6_0x5e9888(0xd4)),computeRouteUtility_1=require(a6_0x5e9888(0xa6)),dtmManager_1=require(a6_0x5e9888(0xf4)),filterUtility_1=require('../../../../../classes/applicationClasses/utility/filterUtility'),findRouteUtility_1=require(a6_0x5e9888(0xeb)),servicesConf=require('./../../../../../../../../config/services.json'),routeComputeConfig=require('./../../../../../../../../config/routeComputeConfig.json'),defaultMaxLegLength=servicesConf[a6_0x5e9888(0xb0)]['defaultMaxLegLength'],defaultLastLegLength=servicesConf[a6_0x5e9888(0xb0)][a6_0x5e9888(0xba)],heightRange=routeComputeConfig[a6_0x5e9888(0xab)],heightTolerance=routeComputeConfig[a6_0x5e9888(0xc7)];class BypassReliefUtility{constructor(){const _0x113145=a6_0x5e9888;this[_0x113145(0x94)]=_0x1c61a4=>{const _0x301e02=_0x113145;let _0x1efdce=(_0x1c61a4[_0x301e02(0xfc)]||0x0)+_0x1c61a4['altitudeRange'][_0x301e02(0xa4)];return _0x1c61a4['isAGL']?_0x1efdce=_0x1c61a4[_0x301e02(0xdc)]-_0x1c61a4[_0x301e02(0xf7)]['min']:_0x1efdce=(_0x1c61a4[_0x301e02(0xfc)]||0x0)+_0x1c61a4[_0x301e02(0xf7)][_0x301e02(0xa4)],_0x1efdce;},this[_0x113145(0xd5)]=(_0xf5232f,_0x5bbdef,_0x29f8d1,_0x19e1f3)=>{const _0x22f93b=_0x113145,_0x4298ac={'success':![]};_0xf5232f[_0x22f93b(0xc9)]==undefined&&_0xf5232f[_0x22f93b(0xf7)]&&(_0xf5232f[_0x22f93b(0xc9)]=_0xf5232f['altitudeRange'][_0x22f93b(0xa4)]);!_0xf5232f[_0x22f93b(0xfa)]&&_0xf5232f['height']!=undefined&&(_0xf5232f[_0x22f93b(0xf7)]=_0xf5232f[_0x22f93b(0xf7)]||{'min':_0xf5232f[_0x22f93b(0xc9)],'max':_0xf5232f[_0x22f93b(0xc9)]});let _0x383117=_0xf5232f;_0x19e1f3!==undefined&&(_0x383117=_[_0x22f93b(0xad)](_0xf5232f),_0x383117['ASL_Max']=_0x19e1f3);const _0x5d6f81=this['computeHeightASL'](_0x383117),_0x2254b5=computeRouteUtility_1['ComputeRouteUtility'][_0x22f93b(0x9d)](_0x383117,_0x5d6f81);if(_0x2254b5&&_0x2254b5[_0x22f93b(0xa7)]&&_0x2254b5[_0x22f93b(0xa7)][_0x22f93b(0xda)]>0x0)dtmManager_1[_0x22f93b(0xc4)][_0x22f93b(0xae)](_0xf5232f,_0x2254b5[_0x22f93b(0xa7)])[_0x22f93b(0x109)](_0x24f473=>{const _0x469439=_0x22f93b;if(_0x24f473[_0x469439(0xbb)]){const _0x1c9610={'success':_0x24f473[_0x469439(0xbb)],'data':_0x24f473[_0x469439(0xee)]};_0x1c9610[_0x469439(0xee)]&&_0x1c9610[_0x469439(0xee)][_0x469439(0xa7)]&&Array[_0x469439(0x91)](_0x1c9610[_0x469439(0xee)][_0x469439(0xa7)])&&_0x1c9610[_0x469439(0xee)][_0x469439(0xa7)]['length']>0x1?this['heightValidation'](_0xf5232f[_0x469439(0xdc)],_0x1c9610[_0x469439(0xee)]['route'])?_0x5bbdef(_0x1c9610):_0x29f8d1?this[_0x469439(0xd8)](_0xf5232f,_0x5bbdef):!_0xf5232f[_0x469439(0xfa)]?(_0x4298ac[_0x469439(0xbb)]=!![],_0x4298ac[_0x469439(0xee)]={'route':_0x2254b5['route'],'airVehicleId':_0xf5232f['allowedId'],'route_notFiltered':this['addHeight'](_0x2254b5[_0x469439(0xa7)],_0xf5232f[_0x469439(0xc9)]||_0xf5232f[_0x469439(0xf7)][_0x469439(0xa4)]),'graphRange':{'minX':0x0,'maxX':0x1,'minY':0x0,'maxY':0x1},'groundASL':[],'groundASL_Cartesian2':[],'locationDrone_CARTESIAN2':{'x':0x0,'y':0x0},'routeASL_Cartesian2':[]},_0x4298ac[_0x469439(0xc1)]=_0x24f473[_0x469439(0xc1)],_0x5bbdef(_0x4298ac)):(_0x24f473[_0x469439(0xbb)]=![],_0x24f473[_0x469439(0xc1)]=_0x469439(0xe3),_0x5bbdef(_0x24f473)):_0x29f8d1?this['computeRouteSecond'](_0xf5232f,_0x5bbdef):(_0x24f473[_0x469439(0xbb)]=![],_0x24f473['description']=_0x469439(0x93),_0x5bbdef(_0x24f473));}else _0x29f8d1?this['computeRouteSecond'](_0xf5232f,_0x5bbdef):_0x5bbdef(_0x24f473);})['catch'](_0x187c52=>{const _0x40d263=_0x22f93b;!_0xf5232f[_0x40d263(0xfa)]?(_0x4298ac[_0x40d263(0xbb)]=!![],_0x4298ac['data']={'route':_0x2254b5['route'],'airVehicleId':_0xf5232f[_0x40d263(0x9b)],'route_notFiltered':this[_0x40d263(0xfb)](_0x2254b5[_0x40d263(0xa7)],_0xf5232f[_0x40d263(0xc9)]||_0xf5232f['altitudeRange'][_0x40d263(0xa4)]),'graphRange':{'minX':0x0,'maxX':0x1,'minY':0x0,'maxY':0x1},'groundASL':[],'groundASL_Cartesian2':[],'locationDrone_CARTESIAN2':{'x':0x0,'y':0x0},'routeASL_Cartesian2':[]},_0x4298ac[_0x40d263(0xc1)]=_0x187c52[_0x40d263(0xc1)],_0x5bbdef(_0x4298ac)):_0x29f8d1?this[_0x40d263(0xd8)](_0xf5232f,_0x5bbdef):(_0x4298ac[_0x40d263(0xbb)]=![],_0x4298ac[_0x40d263(0xee)]=_0x187c52[_0x40d263(0xee)],_0x4298ac[_0x40d263(0xc1)]=_0x187c52[_0x40d263(0xc1)],_0x5bbdef(_0x4298ac));});else{const _0x46b517={'success':![],'description':_0x22f93b(0x93),'data':_0x2254b5};_0x5bbdef(_0x46b517);}},this[_0x113145(0xca)]=(_0x44fcc0,_0x5e812b)=>{const _0x4dc598=_0x113145;_0x44fcc0['height']==undefined&&_0x44fcc0[_0x4dc598(0xf7)]&&(_0x44fcc0[_0x4dc598(0xc9)]=_0x44fcc0[_0x4dc598(0xf7)][_0x4dc598(0xa4)]);!_0x44fcc0[_0x4dc598(0xfa)]&&_0x44fcc0[_0x4dc598(0xc9)]!=undefined&&(_0x44fcc0[_0x4dc598(0xf7)]=_0x44fcc0[_0x4dc598(0xf7)]||{'min':_0x44fcc0['height'],'max':_0x44fcc0[_0x4dc598(0xc9)]});let _0x28aa65=_0x44fcc0;return _0x5e812b!==undefined&&(_0x28aa65=_[_0x4dc598(0xad)](_0x44fcc0),_0x28aa65[_0x4dc598(0xdc)]=_0x5e812b),_0x28aa65;},this[_0x113145(0xb6)]=(_0x321db6,_0x54afb9,_0x1f437f,_0x13f1ed)=>{const _0x5db365=_0x113145,_0x2ef790={'success':![]};let _0x46f75f=this[_0x5db365(0xca)](_0x321db6,_0x13f1ed);const _0x5b03a5=this['computeHeightASL'](_0x46f75f),_0x59802d=computeRouteUtility_1[_0x5db365(0x90)]['computeRoute'](_0x46f75f,_0x5b03a5),_0x48cb1d=nfzManager_1[_0x5db365(0xa5)][_0x5db365(0xaf)](_0x59802d[_0x5db365(0xa7)]);if(_0x59802d&&_0x59802d[_0x5db365(0xa7)]&&_0x59802d['route']['length']>0x0)dtmManager_1[_0x5db365(0xc4)][_0x5db365(0xae)](_0x321db6,_0x48cb1d)[_0x5db365(0x109)](_0x42cf15=>{const _0x50d317=_0x5db365;if(_0x42cf15[_0x50d317(0xbb)]){const _0x253ab6={'success':_0x42cf15[_0x50d317(0xbb)],'data':_0x42cf15[_0x50d317(0xee)]};if(_0x253ab6[_0x50d317(0xee)]&&_0x253ab6[_0x50d317(0xee)]['route']&&Array[_0x50d317(0x91)](_0x253ab6[_0x50d317(0xee)][_0x50d317(0xa7)])&&_0x253ab6['data'][_0x50d317(0xa7)][_0x50d317(0xda)]>0x1){if(this['heightValidation'](_0x321db6[_0x50d317(0xdc)],_0x253ab6['data'][_0x50d317(0xa7)])){const _0x5e6970=this['decrementRoute'](_0x253ab6[_0x50d317(0xee)]['route'],_0x321db6),_0x426c39=siteManager_1[_0x50d317(0xe7)][_0x50d317(0x9e)](_0x5e6970,_0x321db6[_0x50d317(0x9b)]);_0x426c39?_0x54afb9(_0x253ab6):_0x1f437f?this[_0x50d317(0xd8)](_0x321db6,_0x54afb9):(_0x42cf15[_0x50d317(0xbb)]=![],_0x42cf15[_0x50d317(0xc1)]=_0x50d317(0x93),_0x54afb9(_0x42cf15));}else _0x1f437f?this[_0x50d317(0xd8)](_0x321db6,_0x54afb9):!_0x321db6[_0x50d317(0xfa)]?(_0x2ef790[_0x50d317(0xbb)]=!![],_0x2ef790['data']={'route':_0x59802d['route'],'airVehicleId':_0x321db6['allowedId'],'route_notFiltered':this[_0x50d317(0xfb)](_0x59802d[_0x50d317(0xa7)],_0x321db6['height']||_0x321db6[_0x50d317(0xf7)][_0x50d317(0xa4)]),'graphRange':{'minX':0x0,'maxX':0x1,'minY':0x0,'maxY':0x1},'groundASL':[],'groundASL_Cartesian2':[],'locationDrone_CARTESIAN2':{'x':0x0,'y':0x0},'routeASL_Cartesian2':[]},_0x2ef790[_0x50d317(0xc1)]=_0x42cf15[_0x50d317(0xc1)],_0x54afb9(_0x2ef790)):(_0x42cf15[_0x50d317(0xbb)]=![],_0x42cf15[_0x50d317(0xc1)]=_0x50d317(0xe3),_0x54afb9(_0x42cf15));}else _0x1f437f?this['computeRouteSecond'](_0x321db6,_0x54afb9):(_0x42cf15[_0x50d317(0xbb)]=![],_0x42cf15[_0x50d317(0xc1)]=_0x50d317(0x93),_0x54afb9(_0x42cf15));}else _0x1f437f?this['computeRouteSecond'](_0x321db6,_0x54afb9):_0x54afb9(_0x42cf15);})[_0x5db365(0x101)](_0x5dc648=>{const _0x4fe7e9=_0x5db365;!_0x321db6[_0x4fe7e9(0xfa)]?(_0x2ef790[_0x4fe7e9(0xbb)]=!![],_0x2ef790[_0x4fe7e9(0xee)]={'route':_0x59802d[_0x4fe7e9(0xa7)],'airVehicleId':_0x321db6['allowedId'],'route_notFiltered':this['addHeight'](_0x59802d[_0x4fe7e9(0xa7)],_0x321db6[_0x4fe7e9(0xc9)]||_0x321db6['altitudeRange']['min']),'graphRange':{'minX':0x0,'maxX':0x1,'minY':0x0,'maxY':0x1},'groundASL':[],'groundASL_Cartesian2':[],'locationDrone_CARTESIAN2':{'x':0x0,'y':0x0},'routeASL_Cartesian2':[]},_0x2ef790['description']=_0x5dc648[_0x4fe7e9(0xc1)],_0x54afb9(_0x2ef790)):_0x1f437f?this['computeRouteSecond'](_0x321db6,_0x54afb9):(_0x2ef790[_0x4fe7e9(0xbb)]=![],_0x2ef790[_0x4fe7e9(0xee)]=_0x5dc648[_0x4fe7e9(0xee)],_0x2ef790[_0x4fe7e9(0xc1)]=_0x5dc648[_0x4fe7e9(0xc1)],_0x54afb9(_0x2ef790));});else{const _0x543cec={'success':![],'description':_0x5db365(0x93),'data':_0x59802d};_0x54afb9(_0x543cec);}},this[_0x113145(0xed)]=(_0x59394a,_0x5cf41a)=>{return new Promise((_0x461ba4,_0x2093aa)=>{const _0x4df8f3=a6_0x5a60,_0x5a78bf={'success':![]},_0x1a909d=nfzManager_1[_0x4df8f3(0xa5)][_0x4df8f3(0xaf)](_0x5cf41a['route']);if(_0x5cf41a&&_0x5cf41a[_0x4df8f3(0xa7)]&&_0x5cf41a[_0x4df8f3(0xa7)]['length']>0x0)dtmManager_1[_0x4df8f3(0xc4)][_0x4df8f3(0xae)](_0x59394a,_0x1a909d)[_0x4df8f3(0x109)](_0x92c05a=>{const _0x562319=_0x4df8f3;if(_0x92c05a[_0x562319(0xbb)]){const _0x23f7e0={'success':_0x92c05a['success'],'data':_0x92c05a[_0x562319(0xee)]};if(_0x23f7e0['data']&&_0x23f7e0[_0x562319(0xee)][_0x562319(0xa7)]&&Array[_0x562319(0x91)](_0x23f7e0[_0x562319(0xee)]['route'])&&_0x23f7e0['data'][_0x562319(0xa7)][_0x562319(0xda)]>0x1){if(this['heightValidation'](_0x59394a[_0x562319(0xdc)],_0x23f7e0['data'][_0x562319(0xa7)])){const _0x249bfa=this[_0x562319(0xdd)](_0x23f7e0[_0x562319(0xee)]['route'],_0x59394a),_0x5d45e8=siteManager_1[_0x562319(0xe7)][_0x562319(0x9e)](_0x249bfa,_0x59394a[_0x562319(0x9b)]);_0x5d45e8?_0x461ba4(_0x23f7e0):(_0x92c05a[_0x562319(0xbb)]=![],_0x92c05a[_0x562319(0xc1)]=_0x562319(0x93),_0x461ba4(_0x92c05a));}else _0x461ba4(_0x5a78bf);}else _0x461ba4(_0x5a78bf);}else _0x461ba4(_0x92c05a);})[_0x4df8f3(0x101)](_0x3c2668=>{const _0x36cf25=_0x4df8f3;!_0x59394a['isAGL']?(_0x5a78bf[_0x36cf25(0xbb)]=!![],_0x5a78bf[_0x36cf25(0xee)]={'route':_0x5cf41a[_0x36cf25(0xa7)],'airVehicleId':_0x59394a[_0x36cf25(0x9b)],'route_notFiltered':this[_0x36cf25(0xfb)](_0x5cf41a[_0x36cf25(0xa7)],_0x59394a[_0x36cf25(0xc9)]||_0x59394a[_0x36cf25(0xf7)]['min']),'graphRange':{'minX':0x0,'maxX':0x1,'minY':0x0,'maxY':0x1},'groundASL':[],'groundASL_Cartesian2':[],'locationDrone_CARTESIAN2':{'x':0x0,'y':0x0},'routeASL_Cartesian2':[]},_0x5a78bf[_0x36cf25(0xc1)]=_0x3c2668[_0x36cf25(0xc1)]):(_0x5a78bf[_0x36cf25(0xbb)]=![],_0x5a78bf[_0x36cf25(0xee)]=_0x3c2668[_0x36cf25(0xee)],_0x5a78bf[_0x36cf25(0xc1)]=_0x3c2668[_0x36cf25(0xc1)]),_0x461ba4(_0x5a78bf);});else{const _0x3890cf={'success':![],'description':_0x4df8f3(0x93),'data':_0x5cf41a};_0x461ba4(_0x3890cf);}});},this[_0x113145(0xb5)]=(_0x4c5260,_0x1a9fec)=>{const _0x4c2f03=_0x113145,_0xbfa754=_[_0x4c2f03(0xad)](_0x4c5260);return Array['isArray'](_0xbfa754)&&_0xbfa754[_0x4c2f03(0xda)]>0x0&&_0xbfa754[_0x4c2f03(0xd6)](_0x562a8d=>{_0x562a8d[0x2]!=undefined&&(_0x562a8d[0x2]-=_0x1a9fec);}),_0xbfa754;},this[_0x113145(0xd2)]=(_0x5c17e4,_0x9a94f1,_0x39b215,_0x101397)=>{const _0x5cba89=_0x113145,_0x1e1afd={'success':![]};let _0x5ea68e=this[_0x5cba89(0xca)](_0x5c17e4,_0x101397),_0x2b35d2={'route':[],'id':_0x5c17e4[_0x5cba89(0x9b)]};const _0x51bf44=findRouteUtility_1[_0x5cba89(0xcf)][_0x5cba89(0xec)](_0x5c17e4[_0x5cba89(0x9b)],_0x5ea68e['fromTo'][0x0],_0x5ea68e[_0x5cba89(0xf7)][_0x5cba89(0xa4)]);if(_0x51bf44[_0x5cba89(0xbb)]){_0x5c17e4[_0x5cba89(0x9f)][0x0]=_0x51bf44[_0x5cba89(0xee)];const _0x1e7b2a=this['computeHeightASL'](_0x5ea68e);_0x2b35d2=computeRouteUtility_1['ComputeRouteUtility'][_0x5cba89(0x9d)](_0x5ea68e,_0x1e7b2a);}const _0x1b5b43=nfzManager_1['NfzManager'][_0x5cba89(0xaf)](_0x2b35d2[_0x5cba89(0xa7)]);if(_0x2b35d2&&_0x2b35d2[_0x5cba89(0xa7)]&&_0x2b35d2[_0x5cba89(0xa7)][_0x5cba89(0xda)]>0x0)dtmManager_1[_0x5cba89(0xc4)]['computeBypassRelief'](_0x5c17e4,_0x1b5b43)[_0x5cba89(0x109)](_0x5705e2=>{const _0x378672=_0x5cba89;if(_0x5705e2[_0x378672(0xbb)]){const _0x5cae8b={'success':_0x5705e2[_0x378672(0xbb)],'data':_0x5705e2[_0x378672(0xee)]};if(_0x5cae8b[_0x378672(0xee)]&&_0x5cae8b['data'][_0x378672(0xa7)]&&Array[_0x378672(0x91)](_0x5cae8b[_0x378672(0xee)]['route'])&&_0x5cae8b[_0x378672(0xee)][_0x378672(0xa7)][_0x378672(0xda)]>0x1){if(this[_0x378672(0xdf)](_0x5c17e4[_0x378672(0xdc)],_0x5cae8b['data']['route'])){const _0x4f6025=this[_0x378672(0xdd)](_0x5cae8b[_0x378672(0xee)][_0x378672(0xa7)],_0x5c17e4),_0x261690=siteManager_1[_0x378672(0xe7)][_0x378672(0x9e)](_0x4f6025,_0x5c17e4['allowedId']);_0x261690?_0x9a94f1(_0x5cae8b):_0x39b215?this[_0x378672(0xd8)](_0x5c17e4,_0x9a94f1):(_0x5705e2[_0x378672(0xbb)]=![],_0x5705e2[_0x378672(0xc1)]+='\x20Can\x20not\x20compute\x20route;\x20can\x20not\x20compute\x20follow\x20tarrain.\x20Please\x20check\x20AGL\x20parameyters',_0x9a94f1(_0x5705e2));}else _0x39b215?this[_0x378672(0xd8)](_0x5c17e4,_0x9a94f1):!_0x5c17e4['isAGL']?(_0x1e1afd[_0x378672(0xbb)]=!![],_0x1e1afd[_0x378672(0xee)]={'route':_0x2b35d2[_0x378672(0xa7)],'airVehicleId':_0x5c17e4[_0x378672(0x9b)],'route_notFiltered':this[_0x378672(0xfb)](_0x2b35d2[_0x378672(0xa7)],_0x5c17e4[_0x378672(0xc9)]||_0x5c17e4[_0x378672(0xf7)][_0x378672(0xa4)]),'graphRange':{'minX':0x0,'maxX':0x1,'minY':0x0,'maxY':0x1},'groundASL':[],'groundASL_Cartesian2':[],'locationDrone_CARTESIAN2':{'x':0x0,'y':0x0},'routeASL_Cartesian2':[]},_0x1e1afd[_0x378672(0xc1)]=_0x5705e2['description'],_0x9a94f1(_0x1e1afd)):(_0x5705e2[_0x378672(0xbb)]=![],_0x5705e2['description']=_0x378672(0xe3),_0x9a94f1(_0x5705e2));}else _0x39b215?this[_0x378672(0xd8)](_0x5c17e4,_0x9a94f1):(_0x5705e2[_0x378672(0xbb)]=![],_0x5705e2[_0x378672(0xc1)]+=_0x378672(0x8e),_0x9a94f1(_0x5705e2));}else _0x39b215?this[_0x378672(0xd8)](_0x5c17e4,_0x9a94f1):_0x9a94f1(_0x5705e2);})[_0x5cba89(0x101)](_0x51cfa0=>{const _0x1b6546=_0x5cba89;!_0x5c17e4['isAGL']?(_0x1e1afd[_0x1b6546(0xbb)]=!![],_0x1e1afd['data']={'route':_0x2b35d2['route'],'airVehicleId':_0x5c17e4['allowedId'],'route_notFiltered':this[_0x1b6546(0xfb)](_0x2b35d2[_0x1b6546(0xa7)],_0x5c17e4[_0x1b6546(0xc9)]||_0x5c17e4[_0x1b6546(0xf7)][_0x1b6546(0xa4)]),'graphRange':{'minX':0x0,'maxX':0x1,'minY':0x0,'maxY':0x1},'groundASL':[],'groundASL_Cartesian2':[],'locationDrone_CARTESIAN2':{'x':0x0,'y':0x0},'routeASL_Cartesian2':[]},_0x1e1afd[_0x1b6546(0xc1)]=_0x51cfa0[_0x1b6546(0xc1)],_0x9a94f1(_0x1e1afd)):_0x39b215?this[_0x1b6546(0xd8)](_0x5c17e4,_0x9a94f1):(_0x1e1afd[_0x1b6546(0xbb)]=![],_0x1e1afd[_0x1b6546(0xee)]=_0x51cfa0[_0x1b6546(0xee)],_0x1e1afd[_0x1b6546(0xc1)]=_0x51cfa0[_0x1b6546(0xc1)],_0x9a94f1(_0x1e1afd));});else{const _0x17f221={'success':![],'description':_0x5cba89(0xb9),'data':_0x2b35d2};_0x9a94f1(_0x17f221);}},this[_0x113145(0xdd)]=(_0x23494f,_0x2eeefc)=>{const _0x41c4e4=_0x113145,_0x48e669=_[_0x41c4e4(0xad)](_0x23494f);return _0x2eeefc['isAGL']?_0x48e669[_0x41c4e4(0xd6)](_0x45994c=>{const _0x174851=_0x41c4e4;_0x45994c[0x2]-=_0x2eeefc[_0x174851(0xf7)][_0x174851(0xa4)]-heightTolerance;}):_0x48e669['forEach'](_0x4131fd=>{const _0x717ff5=_0x41c4e4;_0x4131fd[0x2]-=(_0x2eeefc['height']||_0x2eeefc[_0x717ff5(0xf7)][_0x717ff5(0xa4)])-heightTolerance;}),_0x48e669;},this['computeRouteSecond']=(_0x58b639,_0x141a39)=>{const _0x13b555=_0x113145,_0x507475=this[_0x13b555(0xcd)](_0x58b639);this[_0x13b555(0xd5)](_0x58b639,_0x141a39,![],_0x507475);},this[_0x113145(0xcd)]=_0x443ebf=>{const _0x32fb17=_0x113145;return heightRange[_0x32fb17(0xa4)]+0x1+_0x443ebf[_0x32fb17(0xf7)][_0x32fb17(0xa4)];},this[_0x113145(0xfb)]=(_0x4ff5ab,_0x55dabd)=>{const _0xd0c60b=_0x113145;return Array['isArray'](_0x4ff5ab)&&_0x4ff5ab[_0xd0c60b(0xd6)](_0x1ade8d=>{_0x1ade8d[0x2]=_0x55dabd;}),_0x4ff5ab;},this[_0x113145(0xdf)]=(_0x289b24,_0xd7bf74)=>{const _0x4f6c78=_0x113145;let _0x5d4108=!![];return Array[_0x4f6c78(0x91)](_0xd7bf74)&&_0xd7bf74['length']>0x0&&_0xd7bf74[_0x4f6c78(0xd6)](_0x35b489=>{_0x35b489[0x2]>_0x289b24&&(_0x5d4108=![]);}),_0x5d4108;},this[_0x113145(0xb7)]=_0x2f91ac=>{const _0x2e5fb2=_0x113145;let _0x1d2a00,_0x1a8589=[];const _0x333aa5=siteManager_1[_0x2e5fb2(0xe7)]['getSiteWithGenerateGrid'](_0x2f91ac[_0x2e5fb2(0x9b)],_0x2f91ac[_0x2e5fb2(0xf7)][_0x2e5fb2(0xa4)]);if(geoUtility_1[_0x2e5fb2(0xc3)][_0x2e5fb2(0x8f)](_0x2f91ac[_0x2e5fb2(0x9f)])&&_0x2f91ac['fromTo'][_0x2e5fb2(0xda)]>=0x2&&Number[_0x2e5fb2(0xa2)](_0x2f91ac['direction'])){const _0x47412c=Number[_0x2e5fb2(0xa2)](_0x2f91ac[_0x2e5fb2(0x104)])?_0x2f91ac[_0x2e5fb2(0x104)]:defaultLastLegLength,_0x23cb28=geoCalc_1['GeoCalc']['calcDestination'](_0x2f91ac[_0x2e5fb2(0x9f)][0x1],-_0x47412c,_0x2f91ac[_0x2e5fb2(0xaa)]),_0x167a79=siteManager_1[_0x2e5fb2(0xe7)]['getMatrix'](_0x2f91ac[_0x2e5fb2(0x9b)]),_0x523c07=this[_0x2e5fb2(0xf9)](_0x333aa5,[_0x23cb28,_0x2f91ac[_0x2e5fb2(0x9f)][0x1]]),_0xb6100d=matrixUtility_1[_0x2e5fb2(0x99)]['checkIsNotCrossNfzMatrix_3D'](_0x523c07,_0x167a79,[_0x2f91ac[_0x2e5fb2(0xf7)][_0x2e5fb2(0xa4)],_0x2f91ac['altitudeRange'][_0x2e5fb2(0xa4)]]);if(_0xb6100d){const _0x1e389b=this[_0x2e5fb2(0xf9)](_0x333aa5,[_0x2f91ac[_0x2e5fb2(0x9f)][0x0],_0x23cb28]);try{if(_0x1e389b){const _0x5cff1b=matrixManager_1[_0x2e5fb2(0xc6)][_0x2e5fb2(0x97)](_0x1e389b,_['cloneDeep'](_0x333aa5[_0x2e5fb2(0x9c)])),_0x518143=this[_0x2e5fb2(0xf1)](_0x167a79,_0x5cff1b,_0x2f91ac[_0x2e5fb2(0xf7)][_0x2e5fb2(0xa4)]);_0x1a8589=this[_0x2e5fb2(0xbc)](_0x333aa5,_0x518143,[_0x2f91ac['fromTo'][0x0],_0x23cb28]),_0x1a8589[_0x2e5fb2(0xe8)](_0x2f91ac[_0x2e5fb2(0x9f)][0x1]),this[_0x2e5fb2(0xff)](_0x1a8589,_0x2f91ac[_0x2e5fb2(0xf5)]||defaultMaxLegLength),_0x1d2a00={'route':_0x1a8589,'id':_0x2f91ac[_0x2e5fb2(0x9b)]};}else _0x1d2a00={'route':[],'id':_0x2f91ac[_0x2e5fb2(0x9b)]},this['logStatus']('\x20-\x20computeDirectionRoute\x20-\x20'+_0x2e5fb2(0xa1)+_0x2e5fb2(0xcc)+JSON[_0x2e5fb2(0x8d)](_0x1e389b,undefined,0x2)+JSON[_0x2e5fb2(0x8d)](_0x2f91ac,undefined,0x2)+';\x20path:\x20'+JSON[_0x2e5fb2(0x8d)](_0x1a8589,undefined,0x2)+_0x2e5fb2(0xde)+_0x2f91ac[_0x2e5fb2(0x9b)]);}catch(_0x240741){console[_0x2e5fb2(0x98)](_0x2e5fb2(0xfd),JSON[_0x2e5fb2(0x8d)](_0x240741)),this[_0x2e5fb2(0xef)](_0x2e5fb2(0xf3)+_0x2e5fb2(0xa1)+JSON[_0x2e5fb2(0x8d)](_0x240741,undefined,0x2)+JSON['stringify'](_0x2f91ac,undefined,0x2)+_0x2e5fb2(0x9a)+JSON[_0x2e5fb2(0x8d)](_0x1a8589,undefined,0x2)+_0x2e5fb2(0xde)+_0x2f91ac[_0x2e5fb2(0x9b)]),_0x1d2a00={'route':[],'id':_0x2f91ac[_0x2e5fb2(0x9b)]};}}}return _0x1d2a00;},this['convertToShirtLags']=(_0x160fde,_0x1810f1)=>{const _0x532882=_0x113145;if(geoUtility_1[_0x532882(0xc3)][_0x532882(0xa0)](_0x160fde))for(let _0x58848d=0x0;_0x58848d<_0x160fde[_0x532882(0xda)]-0x1;_0x58848d++){const _0x466bdf=_0x160fde[_0x58848d],_0x3418ce=_0x160fde[_0x58848d+0x1],_0x1ca902=geoCalc_1[_0x532882(0xac)][_0x532882(0x92)](_0x466bdf,_0x3418ce);if(_0x1ca902>_0x1810f1){const _0x4afbd7=this[_0x532882(0xb1)](_0x1ca902,_0x466bdf,_0x3418ce,_0x1810f1);_0x160fde[_0x532882(0xc5)](_0x58848d+0x1,0x0,..._0x4afbd7),_0x58848d+=_0x4afbd7[_0x532882(0xda)];}}},this['computeNewPointsForShirtLeg']=(_0x3695fe,_0x45f7f7,_0x227d6c,_0x53a283)=>{const _0x1225e1=_0x113145,_0x3b35f1=[],_0x602bd6=Math[_0x1225e1(0x96)](_0x3695fe/_0x53a283)+0x1,_0xfdf33=_0x3695fe/_0x602bd6;for(let _0x5827f3=0x1;_0x5827f3<_0x602bd6;_0x5827f3++){const _0x351bed=_0xfdf33*_0x5827f3,_0x1b15ac=geoCalc_1[_0x1225e1(0xac)][_0x1225e1(0xf8)]([_0x45f7f7,_0x227d6c],_0x351bed);_0x1b15ac&&_0x3b35f1[_0x1225e1(0xe8)](_0x1b15ac);}return _0x3b35f1;},this[_0x113145(0xf1)]=(_0xd09979,_0xc2355f,_0xca96a4)=>{const _0x5805b1=_0x113145;console['log'](dataUtility_1[_0x5805b1(0xbf)]['getTimeString'](),_0x5805b1(0xb2));const _0x1166be=Date[_0x5805b1(0xc0)]();_0xca96a4===undefined&&(_0xca96a4=heightRange['min']+0x1);for(let _0x41db78=0x0;_0x41db78<_0xc2355f[_0x5805b1(0xda)]-0x2;_0x41db78++){for(let _0x3380d3=_0xc2355f[_0x5805b1(0xda)]-0x1;_0x3380d3>_0x41db78+0x1;_0x3380d3--){const _0x3fd1f2=[_0xc2355f[_0x41db78],_0xc2355f[_0x3380d3]],_0x1770b2=_0xd09979;try{const _0x41c96b=matrixUtility_1[_0x5805b1(0x99)][_0x5805b1(0x107)](_0x3fd1f2,_0x1770b2,[_0xca96a4,_0xca96a4]);if(_0x41c96b)_0xc2355f[_0x5805b1(0xc5)](_0x41db78+0x1,_0x3380d3-_0x41db78-0x1),_0x3380d3=_0x41db78,_0x41db78--;else{}}catch(_0xa2c31a){console['log']('BypassReliefUtility,\x20simplifyPath:\x20',JSON[_0x5805b1(0x8d)](_0xa2c31a));}}}return console[_0x5805b1(0x98)](dataUtility_1[_0x5805b1(0xbf)]['getTimeString'](),_0x5805b1(0xe1),dataUtility_1[_0x5805b1(0xbf)][_0x5805b1(0xce)](_0x1166be,_0x5805b1(0xe5))),_0xc2355f;},this['cartographicToMatrix']=(_0x3f7c4d,_0x917eef)=>{const _0x3ad632=_0x113145;console[_0x3ad632(0x98)](dataUtility_1[_0x3ad632(0xbf)][_0x3ad632(0xbe)](),_0x3ad632(0xd0));const _0x15b2f9=Date['now'](),_0x2c665a=[],_0x218d68=_0x3f7c4d[_0x3ad632(0xe2)],_0x3374b9=_0x3f7c4d[_0x3ad632(0xe6)];return geoUtility_1[_0x3ad632(0xc3)][_0x3ad632(0xb3)](_0x3374b9)&&geoUtility_1[_0x3ad632(0xc3)]['isCartographicPOINTsArray'](_0x917eef)&&_0x917eef[_0x3ad632(0xd6)](_0xcdd2de=>{const _0x282807=_0x3ad632;_0x2c665a[_0x282807(0xe8)]([Math['trunc']((_0xcdd2de[0x0]-_0x218d68[0x0])/_0x3374b9[0x0]),Math[_0x282807(0xe0)]((_0x218d68[0x1]-_0xcdd2de[0x1])/_0x3374b9[0x1])]);}),console['log'](dataUtility_1[_0x3ad632(0xbf)][_0x3ad632(0xbe)](),_0x3ad632(0x95),dataUtility_1[_0x3ad632(0xbf)][_0x3ad632(0xce)](_0x15b2f9,_0x3ad632(0xe5))),_0x2c665a;},this[_0x113145(0xbc)]=(_0x37e846,_0x4d26ea,_0x43c7d8)=>{const _0x55c238=_0x113145;let _0x35928d=[];if(geoUtility_1[_0x55c238(0xc3)]['isPOINTsArray'](_0x4d26ea)){_0x35928d=[_0x43c7d8[0x0]];const _0x2a06fd=_0x37e846[_0x55c238(0xe6)],_0x3a9eba=[_0x37e846[_0x55c238(0xe2)][0x0]+_0x2a06fd[0x0]/0x2,_0x37e846[_0x55c238(0xe2)][0x1]-_0x2a06fd[0x1]/0x2];if(geoUtility_1[_0x55c238(0xc3)][_0x55c238(0xb3)](_0x3a9eba)&&_0x3a9eba['length']===0x2&&geoUtility_1[_0x55c238(0xc3)][_0x55c238(0xb3)](_0x2a06fd)&&_0x2a06fd[_0x55c238(0xda)]===0x2)for(let _0x33da45=0x1;_0x33da45<_0x4d26ea[_0x55c238(0xda)]-0x1;_0x33da45++){_0x35928d[_0x55c238(0xe8)]([_0x3a9eba[0x0]+_0x4d26ea[_0x33da45][0x0]*_0x2a06fd[0x0],_0x3a9eba[0x1]-_0x4d26ea[_0x33da45][0x1]*_0x2a06fd[0x1]]);}_0x35928d[_0x55c238(0xe8)](_0x43c7d8[0x1]);}return _0x35928d;},this[_0x113145(0xd7)]=(_0x38613b,_0x4636c1)=>{const _0x202221=_0x113145,_0x49af97=filterUtility_1[_0x202221(0xa3)][_0x202221(0xdb)](_0x38613b,_0x4636c1);return _0x49af97;},this[_0x113145(0xef)]=_0x2c5c03=>{const _0x13f8d7=_0x113145;Logger_1[_0x13f8d7(0xa8)]['info'](_0x13f8d7(0x106),_0x2c5c03);};}}exports[a6_0x5e9888(0xfe)]=BypassReliefUtility,BypassReliefUtility[a6_0x5e9888(0xb8)]=new BypassReliefUtility(),BypassReliefUtility[a6_0x5e9888(0xd5)]=BypassReliefUtility[a6_0x5e9888(0xb8)][a6_0x5e9888(0xd5)],BypassReliefUtility[a6_0x5e9888(0xb6)]=BypassReliefUtility[a6_0x5e9888(0xb8)]['computeRouteTerrainFollowingFullPathRecursiveFunction'],BypassReliefUtility[a6_0x5e9888(0xea)]=BypassReliefUtility['instance'][a6_0x5e9888(0xd2)],BypassReliefUtility[a6_0x5e9888(0xb7)]=BypassReliefUtility[a6_0x5e9888(0xb8)]['computeDirectionRoute'],BypassReliefUtility[a6_0x5e9888(0xcd)]=BypassReliefUtility[a6_0x5e9888(0xb8)][a6_0x5e9888(0xcd)],BypassReliefUtility[a6_0x5e9888(0xed)]=BypassReliefUtility['instance'][a6_0x5e9888(0xed)],BypassReliefUtility['computeHeightASL']=BypassReliefUtility['instance'][a6_0x5e9888(0x94)];