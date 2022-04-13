let markerAdmin = {
  markers: [],
  IDs: [],
  active: [],
  }

class Marker {
 constructor (id, x, y, theta){
    this.x = x,
    this.y = y,
    this.id = id,
    this.theta = theta
    this.transform = {
      invertY: true,
      invertY: true
    };
  }
hello(){
  push();
  rectMode(CENTER);
  fill(255,0,255);
  translate(this.x*width, this.y*height)
  rotate(this.theta);
  rect(0,0,100);
textSize(50);
  fill(255);
  text(this.id, -50,25)
  pop();
}
}

function updateMarkers(data){
  // does the ID list contain the marker ID?
  	if  (markerAdmin.IDs.indexOf(data[1]) != -1) {
  // if year, update that old marker

  for (const marker of markerAdmin.markers) {
  	if (marker.id == data[1]){
  			marker.x = data[2];
  			marker.y = data[3];
  			marker.theta = data[4];
    }
  }



  }
  else {

  	console.log("new marker: " + data[1]);
  	let b = new Marker(data[1],data[2],data[3],data[4]);
  	markerAdmin.IDs.push(data[1])
  	markerAdmin.markers.push(b);
    for (let mb of mediaBundles){
    mb.gui.removeControl("anchorToMarker")
    .addDropDown("anchorToMarker", markerAdmin.IDs, function (object){mb.fiducial = object.index;
      console.log(object);
      console.log(mb);
    });

        }


  }

}
