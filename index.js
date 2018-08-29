var ul, scene, camera;

function init() {
  
  var container = document.createElement( 'div' );
  document.body.appendChild( container );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.vr.enabled = true;
  container.appendChild( renderer.domElement );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x505050 );

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 10 );

  room = new THREE.Mesh(
    new THREE.BoxBufferGeometry( 6, 6, 6, 8, 8, 8 ),
    new THREE.MeshBasicMaterial( { color: 0x808080, wireframe: true } )
  );
  room.position.y = 3;
  scene.add( room );

  //

  document.body.appendChild( WEBVR.createButton( renderer ) );

  ul = document.querySelector('#gamepads ul');

  renderer.setAnimationLoop( render );
}

function render() {
  
  renderer.render( scene, camera );

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