'use strict';const a27_0x4bae65=a27_0x1c87;(function(_0x287ec8,_0x324910){const _0x5da375=a27_0x1c87,_0x236167=_0x287ec8();while(!![]){try{const _0x271267=-parseInt(_0x5da375(0xc5))/0x1*(parseInt(_0x5da375(0xca))/0x2)+-parseInt(_0x5da375(0xc3))/0x3+-parseInt(_0x5da375(0xc6))/0x4+-parseInt(_0x5da375(0xcd))/0x5+-parseInt(_0x5da375(0xbe))/0x6*(-parseInt(_0x5da375(0xc4))/0x7)+parseInt(_0x5da375(0xc9))/0x8*(-parseInt(_0x5da375(0xbf))/0x9)+parseInt(_0x5da375(0xcc))/0xa;if(_0x271267===_0x324910)break;else _0x236167['push'](_0x236167['shift']());}catch(_0x5cd64e){_0x236167['push'](_0x236167['shift']());}}}(a27_0x442e,0xdc934));Object[a27_0x4bae65(0xbc)](exports,a27_0x4bae65(0xc7),{'value':!![]}),exports[a27_0x4bae65(0xbd)]=void 0x0;function a27_0x442e(){const _0x384911=['../../../../../../classes/typings/all.typings','startTime','../../../../../../../../../config/projConf.json','1086684LSgayB','7aGaEzg','2aMFMMK','1659540zHkJxO','__esModule','needToEnd','9114400lKvrjb','1120244fvrCAa','relevantPoint','53832540dkFneM','8114715GjCCUj','autonomousAction','CONDITION_STATUS','defineProperty','TimeoutConditionLogic','1078932DgqXbM','9zlfQBv'];a27_0x442e=function(){return _0x384911;};return a27_0x442e();}const _=require('lodash'),all_typings_1=require(a27_0x4bae65(0xc0)),projConf=require(a27_0x4bae65(0xc2)),actionMaxTimeout_ms=projConf['actionMaxTimeout_ms'];function a27_0x1c87(_0x2cf5c6,_0x3711ff){const _0x442e7a=a27_0x442e();return a27_0x1c87=function(_0x1c8795,_0x708352){_0x1c8795=_0x1c8795-0xba;let _0x23bce8=_0x442e7a[_0x1c8795];return _0x23bce8;},a27_0x1c87(_0x2cf5c6,_0x3711ff);}class TimeoutConditionLogic{constructor(){this['checkCondition']=(_0x52f5f1,_0x4ba2d4,_0x4ef631)=>{const _0x43f47c=a27_0x1c87;let _0x58e194=all_typings_1[_0x43f47c(0xbb)]['pending'];this[_0x43f47c(0xcb)]=_0x52f5f1,this[_0x43f47c(0xba)]=_0x4ba2d4,this['telemetry']=_0x4ef631;const _0x559964=this['checkTimeFromStartAction']();return _0x559964&&(_0x58e194=all_typings_1[_0x43f47c(0xbb)][_0x43f47c(0xc8)]),_0x58e194;},this['checkTimeFromStartAction']=()=>{const _0xfba564=a27_0x1c87;let _0x3e2cce=![],_0x4c7733=this[_0xfba564(0xba)][_0xfba564(0xc1)];return _0x4c7733!==undefined&&(Date['now']()-_0x4c7733>=actionMaxTimeout_ms&&(_0x3e2cce=!![])),_0x3e2cce;};}}exports[a27_0x4bae65(0xbd)]=TimeoutConditionLogic;