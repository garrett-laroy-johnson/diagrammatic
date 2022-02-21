//
// let myCanvas = null;
// // Declare kinectron
// let kinectron;
//
// // let frameP;
//
//
// let detector;
//
//
//
// function preload (){
//
//     detector = ml5.objectDetector('cocodssd')
// }
//
//
// function setup() {
//   myCanvas = createCanvas(500, 500);
//   background(0);
//   //
//   // frameP = createP('');
//
//   // Define and create an instance of kinectron
//   //var kinectronIpAddress = "192.168.12.159"; // FILL IN YOUR KINECTRON IP ADDRESS HERE
//   //kinectron = new Kinectron(kinectronIpAddress);
//
//  kinectron = new Kinectron();
//
//   // Connect with application over peer
//   kinectron.makeConnection();
//
//   // Set callbacks
//
//   kinectron.setInfraredCallback(drawFeed);
//
//   console.log(detector);
//
// }
//
//
// function getDetections (error, results) {
//   if (error){
//     console.log(error);
//   }
//   console.log(results);
//
// }
//
// function draw() {
//   // var fps = frameRate();
//   // fill(0);
//   // stroke(0);
//   // text("FPS: " + fps.toFixed(0), 10, height);
//   // frameP.html(fps.toFixed(0));
// }
//
// // Choose camera to start based on key pressed
// // function keyPressed() {
// //   if (keyCode === ENTER) {
// //     kinectron.startColor();
// //   } else if (keyCode === UP_ARROW) {
// //     kinectron.startDepth();
// //   } else if (keyCode === DOWN_ARROW) {
// //     kinectron.startInfrared();
// //   } else if (keyCode === RIGHT_ARROW) {
// //     kinectron.stopAll();
// //   }
// // }
//
// function drawFeed(img) {
//   // Draws feed using p5 load and display image functions
//   loadImage(img.src, function(loadedImage) {
//     image(loadedImage, 0, 0);
//   });
//     detector.detect(img, getDetections);
// }


// ml5.js: Object Detection with COCO-SSD (Webcam Persistance)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/ml5/1.3-object-detection.html
// https://youtu.be/QEzRxnuaZCk

// p5.js Web Editor - Image: https://editor.p5js.org/codingtrain/sketches/ZNQQx2n5o
// p5.js Web Editor - Webcam: https://editor.p5js.org/codingtrain/sketches/VIYRpcME3
// p5.js Web Editor - Webcam Persistence: https://editor.p5js.org/codingtrain/sketches/Vt9xeTxWJ

// let img;
let video;
let detector;
let detections = {};
let idCount = 0;

function preload() {
  // img = loadImage('dog_cat.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }

  let labels = Object.keys(detections);
  for (let label of labels) {
    let objects = detections[label];
    for (let object of objects) {
      object.taken = false;
    }
  }

  for (let i = 0; i < results.length; i++) {
    let object = results[i];
    let label = object.label;

    if (detections[label]) {
      let existing = detections[label];
      if (existing.length == 0) {
        object.id = idCount;
        idCount++;
        existing.push(object);
        object.timer = 100;
      } else {
        // Find the object closest?
        let recordDist = Infinity;
        let closest = null;
        for (let candidate of existing) {
          let d = dist(candidate.x, candidate.y, object.x, object.y);
          if (d < recordDist && !candidate.taken) {
            recordDist = d;
            closest = candidate;
          }
        }
        if (closest) {
          // copy x,y,w,h
          let amt = 0.75; //0.75;
          closest.x = lerp(object.x, closest.x, amt);
          closest.y = lerp(object.y, closest.y, amt);
          closest.width = lerp(object.width, closest.width, amt);
          closest.height = lerp(object.height, closest.height, amt);
          closest.taken = true;
          closest.timer = 100;
        } else {
          object.id = idCount;
          idCount++;
          existing.push(object);
          object.timer = 100;
        }
      }
    } else {
      object.id = idCount;
      idCount++;
      detections[label] = [object];
      object.timer = 100;
    }
  }
  detector.detect(video, gotDetections);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector.detect(video, gotDetections);
}


function draw() {
  image(video, 0, 0);

  let labels = Object.keys(detections);
  for (let label of labels) {
    let objects = detections[label];
    for (let i = objects.length - 1; i >= 0; i--) {
      let object = objects[i];
      if (object.label !== 'person') {
        stroke(0, 255, 0);
        strokeWeight(4);
        fill(0, 255, 0, object.timer);
        rect(object.x, object.y, object.width, object.height);
        noStroke();
        fill(0);
        textSize(32);
        text(object.label + " " + object.id, object.x + 10, object.y + 24);
      }
      object.timer -= 2;
      if (object.timer < 0) {
        objects.splice(i, 1);
      }

    }

  }

}
