var THREE = require('three');
var geometry_builder = require('./geometry_builder');

module.exports = function(world) {
  world.renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true
  });
  world.renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(world.renderer.domElement);

  world.scene = new THREE.Scene();
  world.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // create a set of coordinate axes to help orient user
  // specify length in pixels in each direction
  world.scene.add(new THREE.AxisHelper(100));

  var cube = geometry_builder.create_cube();
  world.scene.add(cube);

  // Move the camera out so it is not in the cube
  world.camera.position.z = 5;
  world.entities = [];
}
