# Diagrammatic To-do's
## QuickSettings interface
1. Generate QuickSettings Panels for new media objects with parameterization options✅
2. create rename object function
3. create delete object function✅
4. create rescale function ✅
5. display image
6.  create rename bundle function (maybe this means deleting and recreating);
7. check instancing / indexing problem with multiple panels generated from a JS Obj (mediaobject), media bundle ✅
8. embed mediaobject panels in media bundle panels ✅


## Media types
Add (2) media types to Diagrammatic:
1. Text
2. Video

## Images
1. get aspect ratio of image uploads ✅
2. implement scale ✅
3. implement rotate
4. need to square scramble + scatter display modes
5. adaptive background square (goes to extreme x and y points)

## Fiducial Markers
1. Implemented ✅
2. Toggle on/off somehow ✅
3. Smoothing - lerp ();
4. add toggle to DisplayOnlyIfFiducialPresent

## Read/Write
1. implement
## GitHub compatibility & documentation
1. implement
## Sandbox
1. Toggle off bootstrap grid margins✅
2. floating parameter menus✅
3. Create full window canvas ✅
4. create HUD


#Coding log
3.16.22 // left project with rename object function half working. Need to connect Button click to updateName() function.
3.17.22 // OK, started moving rename and tab generation to mediaobject.js as media object functions. makes more sense anyway...
3.18.22 // line 44 in media object --- working to add DOM elements to specifics isntances instead of the template....
3/19/22 // Got DOM elements adding as part of mediaobject Object. However rename input is not working as desired.
3/26/22 // adaptive background?
3/30/22 // implemented pipeline from reactivision to node.js, mediabundles can be assigned to markers.
4/1/22 // pipeline works in reallife (YES!). Implementing keyboard hotkeys to organizing quicksettings. Having problems with quicksettings instancing...
4/6/22 // mediaObject GUI creation works. stuck in the middle of debugging scatter + scramble.
