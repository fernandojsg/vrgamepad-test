var ul;

function init() {
  var container = document.createElement( 'div' );
  document.body.appendChild( container );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.vr.enabled = true;
  container.appendChild( renderer.domElement );

  //

  document.body.appendChild( WEBVR.createButton( renderer ) );

  ul = document.querySelector('#gamepads ul');

  renderer.setAnimationLoop( render );
}

function render() {
  
  renderer.setAnimationLoop( render );

  var gamepads = navigator.getGamepads && navigator.getGamepads();

  var li = '';
  for ( var i = 0, j = 0, l = gamepads.length; i < l; i ++ ) {

    var gamepad = gamepads[ i ];
    if (gamepad) {
      li += '<li>' + gamepad.id + '</li>';
    }
  }

  ul.innerHTML = li;

}

init();