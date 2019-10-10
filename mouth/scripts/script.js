//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Time = require('Time');
const FaceTracking = require('FaceTracking');

const fd = Scene.root.child('Device').child('Camera').child('Focal Distance');
const particleEmitter = fd.child('emitter');

function trackMouth() {
    var face = FaceTracking.face(0);
    face.mouth.openness.multiTrigger(0.4).subscribe(function(e) {
        particleEmitter.birthrate = 50;
        Time.setTimeout(function(e) {
            particleEmitter.birthrate = 0;
        }, 1000)
    })

}

trackMouth();

FaceTracking.count.monitor().subscribe(function(updatedCount) {
    if(updatedCount.newValue > 0 ) {
        trackMouth();
    }
});

// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;
// How to log messages to the console (uncomment line below to activate)
 Diagnostics.log(updatedCount.newValue);
