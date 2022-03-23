

function updateIndex() {
  for (i=0;i<mediaBundles.length;i++){
  mediaBundles[i].index = i;
  }
}



function logMB(inputName, log)  {
  // logs feedback to psuedoconsole
  let text;
  switch (log) {
    case "duplicate":
      text = "There is already a MediaBundle called " + inputName + ", please find a new name or edit that one.";
      break;
    case "created":
      text = "You have successfully created a MediaBundle called " + inputName + ".";
      break;
      case "newObj":
        text = "You have successfully added " + inputName + " new object(s).";
        break;
    }
  $("#MBCreateOutput").empty();
  $("#MBCreateOutput").show();
  document.getElementById("MBCreateOutput").innerHTML = text;
  $("#MBCreateOutput").fadeOut(2000);
}
