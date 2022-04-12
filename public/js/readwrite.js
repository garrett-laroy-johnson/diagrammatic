
function writeDiagram(){
   // var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mediaBundles));
   // var downloadAnchorNode = document.createElement('a');
   // downloadAnchorNode.setAttribute("href",     dataStr);
   // downloadAnchorNode.setAttribute("download", "diagrammatic.json");
   // document.body.appendChild(downloadAnchorNode); // required for firefox
   // downloadAnchorNode.click();
   // downloadAnchorNode.remove();
   let d = day();
   let h = hour();
   let m = minute();
   let s = second();

save({ mediaBundles }, "diagrammatic" + d + h + m + s + ".json");
 }
//this is broke. might be a good way to fix: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function readDiagram(){
//    var input = document.createElement('input');
//  input.type = 'file';
//
//  input.onchange = e => {
//
//     // getting a hold of the file reference
//     var file = e.target.files[0];
//
// var data = JSON.parse(fs.readFileSync(file));
// mediaBundles = data;
//     }
//  input.click();

mediaBundles = loadJSON();


}
