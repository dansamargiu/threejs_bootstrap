var THREE = require('three');
var geometry_builder = require('./geometry_builder');

module.exports = function(world) {
  world.renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true
  });
  world.renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(world.renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  scene.add(new THREE.AxisHelper(100));
  scene.add(geometry_builder.create_cube());

  world.entities = {
    camera: camera,
    scene: scene
  }

  // TODO: make a constructor for this
  world.input = require('./input_handler');
  document.onkeydown = world.input.handleKeyDown;
  document.onkeyup = world.input.handleKeyUp;

  world.input.registerKeybind(37, function() {
    world.entities.camera.rotation.y += 0.01;
  });
  world.input.registerKeybind(39, function() {
    world.entities.camera.rotation.y -= 0.01;
  });
  world.input.registerKeybind(38, function() {
    world.entities.camera.rotation.x += 0.01;
  });
  world.input.registerKeybind(40, function() {
    world.entities.camera.rotation.x -= 0.01;
  });
}
