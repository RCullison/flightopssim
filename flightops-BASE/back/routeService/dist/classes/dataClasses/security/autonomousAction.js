'use strict';const a117_0x4dec09=a117_0xd692;(function(_0x31d68a,_0x3ff012){const _0x12f295=a117_0xd692,_0x1fcede=_0x31d68a();while(!![]){try{const _0x4454ed=parseInt(_0x12f295(0xe0))/0x1*(-parseInt(_0x12f295(0xf8))/0x2)+parseInt(_0x12f295(0xde))/0x3*(parseInt(_0x12f295(0xf0))/0x4)+parseInt(_0x12f295(0xf6))/0x5+-parseInt(_0x12f295(0xef))/0x6*(-parseInt(_0x12f295(0xdd))/0x7)+-parseInt(_0x12f295(0xd7))/0x8+-parseInt(_0x12f295(0xfa))/0x9*(parseInt(_0x12f295(0xdc))/0xa)+parseInt(_0x12f295(0xf1))/0xb;if(_0x4454ed===_0x3ff012)break;else _0x1fcede['push'](_0x1fcede['shift']());}catch(_0x3d19c4){_0x1fcede['push'](_0x1fcede['shift']());}}}(a117_0x5ad8,0xc8f4c));Object[a117_0x4dec09(0xec)](exports,a117_0x4dec09(0xfe),{'value':!![]}),exports[a117_0x4dec09(0xe5)]=void 0x0;const cameraAction_1=require('./action/cameraAction'),_=require('lodash'),gimbalAction_1=require(a117_0x4dec09(0xfd)),all_typings_1=require(a117_0x4dec09(0xf2)),scanAction_1=require(a117_0x4dec09(0xe7)),waypointsAction_1=require(a117_0x4dec09(0xe2));class AutonomousAction{constructor(_0x5abe04){const _0x2cb440=a117_0x4dec09;this[_0x2cb440(0xdb)]=_0x23de77=>{const _0x537fc0=_0x2cb440;for(const _0x17b670 in this[_0x537fc0(0xff)]){this[_0x537fc0(0xff)][_0x537fc0(0xee)](_0x17b670)&&_[_0x537fc0(0xfc)](this,_0x17b670,_[_0x537fc0(0xed)](_0x23de77,this['saveConfig'][_0x17b670]),this[_0x17b670]);}for(const _0x1d1cf0 in this[_0x537fc0(0xea)]){this['functionSaveConfig'][_0x537fc0(0xee)](_0x1d1cf0)&&_0x23de77&&this[_0x537fc0(0xea)][_0x1d1cf0][_0x537fc0(0xdf)](_0x23de77);}},this[_0x2cb440(0xf4)]=_0x4994f4=>{const _0x4caf84=_0x2cb440;switch(this[_0x4caf84(0xf5)]){case all_typings_1[_0x4caf84(0xe1)][_0x4caf84(0xda)]:{this[_0x4caf84(0xf9)]=new waypointsAction_1[(_0x4caf84(0xe3))](_0x4994f4[_0x4caf84(0xf9)]);break;}case all_typings_1['ACTION_FOR'][_0x4caf84(0xd8)]:{this[_0x4caf84(0xf9)]=new cameraAction_1['CameraAction'](_0x4994f4['action']);break;}case all_typings_1[_0x4caf84(0xe1)][_0x4caf84(0xeb)]:{this[_0x4caf84(0xf9)]=new gimbalAction_1[(_0x4caf84(0xe6))](_0x4994f4['action']);break;}case all_typings_1[_0x4caf84(0xe1)]['Sensor']:{this[_0x4caf84(0xf9)]=new scanAction_1[(_0x4caf84(0xe8))](_0x4994f4['action']);break;}}},this['saveConfig']={'actionFor':_0x2cb440(0xf5),'type':_0x2cb440(0xd9),'startConditions':'startConditions','actionId':_0x2cb440(0xf3),'endConditions':_0x2cb440(0xe9),'onErrorAction':'onErrorAction','action':'action'},this['functionSaveConfig']={'action':{'key':_0x2cb440(0xf9),'function':this['saveAction']}},this['getActions']=()=>{const _0x25d332=_0x2cb440;let _0x410538=this[_0x25d332(0xf9)][_0x25d332(0xfb)]();return _0x410538;},this[_0x2cb440(0xfb)]=()=>{const _0x3cc1f4=_0x2cb440;return{'actionId':this[_0x3cc1f4(0xf3)],'actionFor':this['actionFor'],'type':this[_0x3cc1f4(0xd9)],'startConditions':this[_0x3cc1f4(0xf7)],'endConditions':this['endConditions'],'onErrorAction':this[_0x3cc1f4(0xe4)],'action':this['getActions']()};},_0x5abe04&&this[_0x2cb440(0xdb)](_0x5abe04);}}function a117_0x5ad8(){const _0x920650=['set','./action/gimbalAction','__esModule','saveConfig','3847864iKxPzY','Camera','type','Vehicle','update','5026290GxhpDM','8022jcHvOs','806250SmqHqe','function','1eOTOAu','ACTION_FOR','./action/waypointsAction','WaypointsAction','onErrorAction','AutonomousAction','GimbalAction','./action/scanAction','ScanAction','endConditions','functionSaveConfig','Gimbal','defineProperty','get','hasOwnProperty','3936IiykLm','8MvqDqL','5044501tOCDwt','../../typings/all.typings','actionId','saveAction','actionFor','4974450vrGeoE','startConditions','1872058bTWOth','action','9apqGxw','toJsonForSave'];a117_0x5ad8=function(){return _0x920650;};return a117_0x5ad8();}function a117_0xd692(_0x2aca08,_0x6fe3ff){const _0x5ad884=a117_0x5ad8();return a117_0xd692=function(_0xd69208,_0x59fc00){_0xd69208=_0xd69208-0xd7;let _0x454fdf=_0x5ad884[_0xd69208];return _0x454fdf;},a117_0xd692(_0x2aca08,_0x6fe3ff);}exports[a117_0x4dec09(0xe5)]=AutonomousAction;