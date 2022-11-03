export declare enum GENERAL_API {
    general = "api"
}
export declare enum OB_API {
    setForceType = "/setForceType",
    virtualRCSwitch = "/virtualRCSwitch",
    missionRouteUpload = "/missionRouteUpload",
    autonomousRouteUpload = "/autonomousRouteUpload",
    pauseMissionRoute = "/pauseMissionRoute",
    resumeMissionRoute = "/resumeMissionRoute",
    startMissionRoute = "/startMissionRoute",
    stopMissionRoute = "/stopMissionRoute",
    autonomousRouteAction = "/autonomousRouteAction",
    taskAction = "/taskAction",
    startGimbalAction = "/startGimbalAction",
    endGimbalAction = "/endGimbalAction",
    singleGimbalAction = "/singleGimbalAction",
    stowGimbal = "/stowGimbal",
    moveGimbal = "/moveGimbal",
    uploadNoGpsTask = "/uploadNoGpsTask",
    sendTaskToCS = "/sendTaskToCS",
    setNoGpsParams = "/setNoGpsParams",
    queryToSetOwner = "/queryToSetOwner",
    queryToOffOwner = "/queryToOffOwner",
    dropPackage = "/dropPackage",
    refreshSite = "/refreshSite",
    testEnergy = "/testEnergy",
    waitRouteManagerStart = "/waitRouteManagerStart",
    waitRouteManagerStop = "/waitRouteManagerStop",
    waitRouteManagerGetStates = "/waitRouteManagerGetStates",
    waitRouteManagerGetArrPoints = "/waitRouteManagerGetArrPoints",
    moveXY = "/moveXY",
    stopMoveToXY = "/stopMoveToXY",
    go2height = "/go2height",
    go2heightLidar = "/go2heightLidar",
    pause2Controller = "/pause2DJIController",
    stopAllActions = "/stopAllActions",
    resume2Controller = "/resume2DJIController",
    upload2DJIControlle = "/upload2DJIControlle",
    start2Controller = "/start2DJIController",
    setTaskStatus = "/setTaskStatus",
    upload2Controller = "/upload2DJIController",
    setZoom = "/setZoom",
    land = "/land",
    takeOff = "/takeOff",
    startCAS = "/CAS/startCAS",
    stopCAS = "/CAS/stopCAS",
    onMissionLand = "/onMissionLand",
    onMissionTakeOff = "/onMissionTakeOff"
}
export declare enum RS_API {
    updateArea = "/updateArea",
    updateArea3D = "/updateArea3D",
    updatePartOfAreaMatrix = "/updatePartOfAreaMatrix",
    computeRoute = "/computeRoute",
    computeRouteBypassRelief = "/computeRouteBaypassRelief",
    computeWithDirection = "/computeWithDirection",
    findRoute_finish_floating = "/findRoute_finish_floating",
    findRoute_finish_floating_withDirection = "/findRoute_finish_floating_withDirection",
    findRoute_start_floating = "/findRoute_start_floating",
    findRoute_start_floating_withDirection = "/findRoute_start_floating_withDirection",
    findRoute_start_finish_floating = "/findRoute_start_finish_floating",
    findRoute_start_finish_floating_withDirection = "/findRoute_start_finish_floating_withDirection",
    cartographicToMatrix = "/cartographicToMatrix",
    isPointOutsideNFZ = "/isPointOutsideNFZ",
    addBypassRelief = "/addBypassRelief"
}
export declare enum SSG_API {
    landing = "/landing",
    returnHome = "/returnHome",
    flyTo = "/flyTo",
    croppedTelemetry = "/croppedTelemetry"
}
export declare enum ESSG_API {
    landing = "/landing",
    returnHome = "/returnHome",
    flyTo = "/flyTo",
    croppedTelemetry = "/croppedTelemetry",
    cropTelemetrySimulator = "/cropTelemetrySimulator",
    returnHomeSimulator = "/returnHomeSimulator",
    flyToSimulator = "/flyToSimulator",
    landingSimulator = "/landingSimulator"
}
export declare enum SAG_API {
    landing = "/landing",
    returnHome = "/returnHome",
    flyTo = "/flyTo",
    croppedTelemetry = "/croppedTelemetry"
}
export declare enum SMS_API {
    landing = "/landing",
    returnHome = "/returnHome",
    flyTo = "/flyTo"
}
export declare enum API_GENERAL {
    general = "api"
}
export declare enum CS_API {
    uploadTask = "/uploadTask",
    uploadAndStartTask = "/uploadAndStartTask",
    startTask = "/startTask",
    pauseTask = "/pauseTask",
    resumeTask = "/resumeTask",
    stopTask = "/stopTask",
    updateParameters = "/updateParameters",
    setNoGpsParams = "/setNoGpsParams"
}
export declare enum OPG_API {
    setNoGpsParams = "/setNoGpsParams"
}
export declare enum PX4_API {
    land = "/land",
    pause_mission = "/pause_mission",
    set_home = "/set_home",
    waypointUpdateVelocity = "/waypointUpdateVelocity"
}
export declare enum MOVE_XY_API {
    start = "/start",
    stop = "/stop"
}
export declare enum ExternalService_API {
    actionSensorByType = "/actionSensorByType",
    endPodAction = "/endPodAction"
}
export declare enum ALS_WS_API {
    algorithmStatus = "algorithmStatus"
}
export declare enum ALS_API {
    uploadTask = "/uploadTask",
    uploadAndStartTask = "/uploadAndStartTask",
    startTask = "/startTask",
    pauseTask = "/pauseTask",
    resumeTask = "/resumeTask",
    stopTask = "/stopTask",
    externalInput = "/externalInput",
    response4Action = "/response4Action",
    getAlgorithmStatus = "/getAlgorithmStatus",
    approvalAction = "/approvalAction",
    getAlgorithmData = "/getAlgorithmData",
    getgetCurrentTask = "/getgetCurrentTask",
    testLog = "/testLog"
}
