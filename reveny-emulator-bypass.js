Java.perform(function () {
    var emuDetectorClass = Java.use("com.reveny.emulatordetector.plugin.EmulatorDetection");

    emuDetectorClass.isDetected.implementation = function () {
        console.log("Bypassed isDetected()");
        return false;
    };

});
