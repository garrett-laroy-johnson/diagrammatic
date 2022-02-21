


//



const video = document.getElementById('video');

// Create a ObjectDetector method
const objectDetector = ml5.objectDetector('cocossd', {}, modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Detect objects in the video element
objectDetector.detect(video, (err, results) => {
  console.log(results); // Will output bounding boxes of detected objects
});
