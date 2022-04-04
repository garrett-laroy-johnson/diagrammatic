let panelAdmin = {
  show: true,
}

let mbPanels = [];


function panelVis(){
if (panelAdmin.show == true){
for (let bundle of mediaBundles){
  bundle.gui.hide();
  for (let object of bundle.objects){
    object.gui.hide();
  }
}
panelAdmin.show = false;
}
else {
for (let bundle of mediaBundles){
  bundle.gui.show();
  for (let object of bundle.objects){
    object.gui.show();
  }
}
panelAdmin.show = true;
}
}

function panelOrg (){
  for (let i=0; i< mediaBundles.length;i++){
    mediaBundles[i].gui.collapse();
    mediaBundles[i].gui.setPosition(i*210,10);


    for (let p = 0; p < mediaBundles[i].objects.length;p++){
      if(mediaBundles[i].objects[p].gui._collapse == false){
        mediaBundles[i].objects[p].gui.collapse();
      }
      mediaBundles[i].objects[p].gui.setPosition(i*210, 50 + (p*30));
    }
  }
}
