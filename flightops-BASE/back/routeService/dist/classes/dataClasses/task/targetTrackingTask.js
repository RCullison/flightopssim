'use strict';function a135_0x2679(){const _0x366650=['missionAltAGL','TargetTrackingTask','GeoPoint_to_GEOPOINT3D','styles','ALGORITHM_STATUS','603UJSbgx','targetAGL','260918HuhhSu','501112jxlNMB','5244BjZNXV','DynamicPoint','get','7AsvpSz','geoLocation','azimuthToPoint','870YtcSTg','StopProcess','status','Started','4350357IIwfjC','11668aXVXbu','maxAltASL','point','metadata','heading','altitudeRange','Stop','InProcess','isNoGPS','headingType','name','type','34619iThymb','1122NpEcrm','viewingAngle','taskId','totalRoutLength','Convertation','slope','isAGL','MAPI_MISSION_STATUS','2EDAFmG','toJsonForUI','update','hasOwnProperty','../../applicationClasses/safe','1067BlnDzJ','38370UXTWpV','Stopped','defineProperty','TargetTracking','createConfig','ASL_Max','../../applicationClasses/utility/convertation'];a135_0x2679=function(){return _0x366650;};return a135_0x2679();}const a135_0x5afb0c=a135_0x222f;function a135_0x222f(_0x1c2e20,_0x2cfdb3){const _0x2679bc=a135_0x2679();return a135_0x222f=function(_0x222f6b,_0x3dc887){_0x222f6b=_0x222f6b-0x159;let _0x1a468a=_0x2679bc[_0x222f6b];return _0x1a468a;},a135_0x222f(_0x1c2e20,_0x2cfdb3);}(function(_0xb8ee08,_0x47558d){const _0x2520c6=a135_0x222f,_0x31b5c2=_0xb8ee08();while(!![]){try{const _0x1a13ce=parseInt(_0x2520c6(0x159))/0x1*(-parseInt(_0x2520c6(0x17b))/0x2)+parseInt(_0x2520c6(0x18d))/0x3*(-parseInt(_0x2520c6(0x166))/0x4)+-parseInt(_0x2520c6(0x161))/0x5*(-parseInt(_0x2520c6(0x173))/0x6)+parseInt(_0x2520c6(0x15e))/0x7*(parseInt(_0x2520c6(0x15a))/0x8)+-parseInt(_0x2520c6(0x165))/0x9+parseInt(_0x2520c6(0x181))/0xa*(parseInt(_0x2520c6(0x180))/0xb)+-parseInt(_0x2520c6(0x15b))/0xc*(-parseInt(_0x2520c6(0x172))/0xd);if(_0x1a13ce===_0x47558d)break;else _0x31b5c2['push'](_0x31b5c2['shift']());}catch(_0x4f344e){_0x31b5c2['push'](_0x31b5c2['shift']());}}}(a135_0x2679,0x495c9));Object[a135_0x5afb0c(0x183)](exports,'__esModule',{'value':!![]}),exports[a135_0x5afb0c(0x189)]=void 0x0;const all_typings_1=require('../../typings/all.typings'),safe_1=require(a135_0x5afb0c(0x17f)),convertation_1=require(a135_0x5afb0c(0x187));class TargetTrackingTask{constructor(_0x257cad){const _0xcecd5a=a135_0x5afb0c;this[_0xcecd5a(0x171)]=all_typings_1['TASK_TYPE'][_0xcecd5a(0x184)],this[_0xcecd5a(0x163)]=all_typings_1['ALGORITHM_STATUS'][_0xcecd5a(0x16c)],this[_0xcecd5a(0x170)]='TargetPoint',this[_0xcecd5a(0x176)]=0x0,this[_0xcecd5a(0x18b)]={},this[_0xcecd5a(0x169)]={},this[_0xcecd5a(0x18e)]=0x0,this[_0xcecd5a(0x16e)]=![],this[_0xcecd5a(0x185)]={'taskId':_0xcecd5a(0x175),'name':_0xcecd5a(0x170),'status':'status','ASL_Max':_0xcecd5a(0x186),'altitudeRange':_0xcecd5a(0x16b),'slope':'slope','maxAltASL':_0xcecd5a(0x167),'geoLocation':_0xcecd5a(0x15f),'point':_0xcecd5a(0x15f),'minDistanceToViewPoint':'minDistanceToViewPoint','targetAGL':_0xcecd5a(0x18e),'azimuthToPoint':_0xcecd5a(0x160),'viewingAngle':_0xcecd5a(0x174),'isAGL':_0xcecd5a(0x179),'missionAltAGL':_0xcecd5a(0x188),'headingType':_0xcecd5a(0x16f),'heading':_0xcecd5a(0x16a),'isNoGPS':_0xcecd5a(0x16e),'styles':'styles'},this[_0xcecd5a(0x17d)]=(_0x2da625,_0xfcbb47=this['createConfig'])=>{const _0x183c40=_0xcecd5a;for(const _0x2d3a30 in _0xfcbb47){_0xfcbb47[_0x183c40(0x17e)](_0x2d3a30)&&(0x0,safe_1[_0x183c40(0x15d)])(()=>_0x2da625[_0xfcbb47[_0x2d3a30]])!==undefined&&(0x0,safe_1['set'])(this,_0x2d3a30,(0x0,safe_1['get'])(()=>_0x2da625[_0xfcbb47[_0x2d3a30]]));}return this[_0x183c40(0x17c)]();},this[_0xcecd5a(0x17c)]=()=>{const _0x1cd76d=_0xcecd5a;return{'taskId':this['taskId'],'name':this['name'],'type':this[_0x1cd76d(0x171)],'status':this['status'],'ASL_Max':this[_0x1cd76d(0x186)],'altitudeRange':this[_0x1cd76d(0x16b)],'slope':this[_0x1cd76d(0x178)],'maxAltASL':this['maxAltASL'],'geoLocation':this[_0x1cd76d(0x15f)],'point':this[_0x1cd76d(0x15f)],'minDistanceToViewPoint':this['minDistanceToViewPoint'],'targetAGL':this[_0x1cd76d(0x18e)],'azimuthToPoint':this[_0x1cd76d(0x160)],'viewingAngle':this[_0x1cd76d(0x174)],'isAGL':this[_0x1cd76d(0x179)],'missionAltAGL':this[_0x1cd76d(0x188)],'headingType':this[_0x1cd76d(0x16f)],'heading':this[_0x1cd76d(0x16a)],'isNoGPS':this['isNoGPS'],'styles':this[_0x1cd76d(0x18b)]};},this['update'](_0x257cad,this['createConfig']);}['toJsonForMAPI'](){const _0x317afa=a135_0x5afb0c;let _0x55d186=all_typings_1[_0x317afa(0x17a)][_0x317afa(0x182)];switch(this[_0x317afa(0x163)]){case all_typings_1[_0x317afa(0x18c)]['Start']:_0x55d186=all_typings_1['MAPI_MISSION_STATUS'][_0x317afa(0x164)];break;case all_typings_1[_0x317afa(0x18c)][_0x317afa(0x16c)]:_0x55d186=all_typings_1[_0x317afa(0x17a)][_0x317afa(0x182)];break;case all_typings_1[_0x317afa(0x18c)][_0x317afa(0x16d)]:_0x55d186=all_typings_1[_0x317afa(0x17a)][_0x317afa(0x162)];break;}return{'type':all_typings_1['MAPI_MISSION_TYPE'][_0x317afa(0x15c)],'missionId':this[_0x317afa(0x175)],'status':_0x55d186,'name':this[_0x317afa(0x170)],'distanceToDynamicPoint':this['distanceToTargetTrackingPoint'],'totalLength':this[_0x317afa(0x176)],'dynamicPointLocation':convertation_1[_0x317afa(0x177)][_0x317afa(0x18a)](this[_0x317afa(0x168)]),'isNoGPS':this[_0x317afa(0x16e)]};}}exports[a135_0x5afb0c(0x189)]=TargetTrackingTask;