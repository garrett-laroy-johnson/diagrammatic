//test bundle . This function generates a set of test bundles for debugging things in the sandbox
function testBundleCreate(){
  for (let i=0;i<numBundles; i++){
    let x = (window.innerWidth/numBundles)*i;
    let y = window.innerHeight/2;
    let r = random(10,200);
    let ranBundle = Math.floor(random(0,8));
    mediaBundles[i] = new MediaBundle(null, i, x, y, r, r, images[ranBundle]);
  }
}
