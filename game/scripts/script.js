const D = require('Diagnostics');
const Scene = require('Scene');
const Time = require('Time')
const  FaceTracking = require('FaceTracking');
const Animation = require('Animation');
const Patches = require("Patches");
const counter = Scene.root.find('score');

var Scorenumber = Patches.getScalarValue('score');
counter.text = Scorenumber.toString();

const fd = Scene.root.child('Device').child('Camera').child('Focal Distance');

const ball = fd.child('ball');

const CameraInfo = require('CameraInfo');


// Locate the plane in the Scene
const plane = Scene.root.find('plane0');

//==============================================================================
// Hide the plane when capturing a photo or recording a video
//==============================================================================

// Store references to the photo capture and video recording boolean signals
const isCapturingPhoto = CameraInfo.isCapturingPhoto;
const isRecordingVideo = CameraInfo.isRecordingVideo;

// Create a boolean signal that returns true if either boolean signal are true
const hidePlane = isCapturingPhoto.or(isRecordingVideo);

// Bind the hidePlane signal to the hidden property of the plane
ball.hidden = hidePlane;

D.log(CameraInfo)
// const PatchesV = require('Patches');
// const screenSize = PatchesV.getPoint2DValue('screenSize');
// var screen_height = 0;
// ball.bounds.height.monitor({fireOnInitialValue: true}).subscribe(function (height) {
//     screen_height = height.newValue;
// });
// var screen_width = 0;
// ball.bounds.width.monitor({fireOnInitialValue: true}).subscribe(function (width) {
//     screen_width = width.newValue;s
// });
// const timeDriverParameters = {
//     durationMilliseconds: 3000,
//     loopCount: Infinity,
//     mirror: true
//   };

//   const timeDriver = Animation.timeDriver(timeDriverParameters);
//   const quadraticSampler = Animation.samplers.easeInOutBounce(-0.5, 0.5);
//   const translationAnimation = Animation.animate(timeDriver, quadraticSampler);
//   ball.transform.y = translationAnimation;
//   timeDriver.start();


// var screen_height = 0;
// Scene.root.find('screenCanvas').bounds.height.monitor({fireOnInitialValue: true}).subscribe(function (height) {
//     screen_height = height.newValue;
// });



// // ball.transform.x = FaceTracking.face(0).cameraTransform.rotationY;

FaceTracking.face(0).mouth.openness.monitor().subscribe((event)=> {
    if(event.newValue > 0.2) {
      ball.hidden = true;
    } else {
      ball.hidden = false;
    }
  });
ball.hidden = FaceTracking.face(0).mouth.openness.gt(0.2);

// ball.hidden = FaceTracking.face(0).mouth.openness.gt(0.2);
// function update() {
//     if(mouth.openness > 0.2){
//        ball.hidden = true;
    
//     }else {
//         ball.hidden = false

//     }
// }
// update();



// Time.setIntervalWithSnapshot({

//     "mouthOp" : FaceTracking.face(0).mouth.openness

// },(s,c) => {
//     if(s.mouthOp > 0.2){
//         ball.hidden = true;

//     }else {
//         ball.hidden = false
    
//     }
// },1000/15)



// const baseDriverParameters = {
//     durationMilliseconds: 400,
//     loopCount: Infinity,
//     mirror: true
// };


// TouchGestures.onTap(ball).subscribe(function (gesture) {
//     const lastScaleX = ballTransform.scale.x.startPosition();
//     const lastScaleY = ballTransform.scale.y.startPosition();
  
//     ballTransform.scaleX = gesture.scale.mul(lastScaleX);
//     ballTransform.scaleY = gesture.scale.mul(lastScaleY);
  
//   });

// const baseDriver = Animation.timeDriver(baseDriverParameters)
// baseDriver.start();

// const baseSampler = Animation.samplers.easeInQuint(0.9,1);

// const baseAnimation = Animation.animate(baseDriver,baseSampler);

// const baseTransform = ball.transform;

// baseTransform.scaleX = baseAnimation;
// baseTransform.scaleY = baseAnimation;
// baseTransform.scaleZ = baseAnimation;

// TouchGestures.onPan().subscribe(function(gesture) {
//     ball.trackPoint(gesture.location, gesture.state);
// });



// const startPosition = -1.4;
// const step = 15.5;
// const finish = 280;

// function trackMouth() {
//     var face = FaceTracking.face(0);
//     face.mouth.openness.multiTrigger(0.4).subscribe(function(e) {
//         const lastPositionX = ballTransform.x.pinLastValue();
//         const newPositionX = Reactive.add(lastPositionX, step);
//         ball.transform.x = newPositionX;
       
//     })
 

// }

// trackMouth();





// function animateFloating(obj, deltaY, ms) {
//     var y0 = obj.transform.y.lastValue
//     obj.animy_driver = Animation.timeDriver({durationMilliseconds: ms, loopCount: 999, mirror: true});

//     obj.animy_sampler = Animation.samplers.easeInOutSine(y0, y0 + deltaY);

//     obj.transform.y = Animation.animate(obj.animy_driver, obj.animy_sampler);

//     obj.animy_driver.start();
// }

// function trackHead() {

//     // store the first head detected
//     var head = FaceTracking.face(0);

//     // grab the “x” position of detected head
//     var head_x = head.cameraTransform.x

//     // set the ‘x’ coordinate of the plane to be the ‘x’ coordinate of the head
//     ball.transform.x = head_x
// }


// animateFloating(ball , 5, 2000);

// function fadeIn(obj, mat) {
//     obj.fadein_driver = Animation.timeDriver({durationMilliseconds: 400});
//     obj.fadein_sampler = Animation.samplers.easeInOutSine(0.0,1.0);

//     obj.fadein_driver.reset();

//     mat.opacity = Animation.animate(obj.fadein_driver, obj.fadein_sampler);

//     obj.fadein_driver.start();

// }

// function fadeOut(obj, mat) {

//     obj.fadeout_driver = Animation.timeDriver({durationMilliseconds: 400});
//     obj.fadeout_sampler = Animation.samplers.easeInOutSine(1.0,0.0);
//     obj.fadeout_driver.reset();
//     mat.opacity = Animation.animate(obj.fadeout_driver, obj.fadeout_sampler);

//     obj.fadeout_driver.start();
// }


