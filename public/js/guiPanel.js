

let panelAdmin = {
  show: true,
}

let mbPanels = [];


function panelVis(){
if (panelAdmin.show == true){
for (let bundle of mediaBundles){
  bundle.gui.hide();
  for (let object of bundle.objects){
    // object.gui.hide();
  }
}
panelAdmin.show = false;
}
else {
for (let bundle of mediaBundles){
  bundle.gui.show();
  for (let object of bundle.objects){
    // object.gui.show();
  }
}
panelAdmin.show = true;
}
}

function panelOrg (){
  for (let i=0; i< mediaBundles.length;i++){
    if(mediaBundles[i].gui._collapsed == false){
    mediaBundles[i].gui.collapse();
  }
    mediaBundles[i].gui.setPosition(i*210,10);
  }
}
