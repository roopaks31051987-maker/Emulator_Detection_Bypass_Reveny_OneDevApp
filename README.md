I developed a custom Frida script to bypass emulator detection in the reveny project: https://github.com/reveny/Android-Emulator-Detection. The detection is implemented in JNI, and traditional scripts failed (https://codeshare.frida.re/@cubetech126/root-and-emulator-detection-bypass/). By analyzing the native code, I crafted a working bypass.

How to Run
1. Install the apk in Genymotion emulator
  
2. Invoke this frida script for bypass
   
frida -U -l reveny-emulator-bypass.js -f  com.reveny.emulator.detection.sample

Youtube Video

https://www.youtube.com/watch?v=-bCbM7efoq8
