var THREE = require('three');


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a set of coordinate axes to help orient user
// specify length in pixels in each direction
var axes = new THREE.AxisHelper(100);
scene.add(axes);

// Add the cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Move the camera out so it is not in the cube
camera.position.z = 5;

cube.update = function() {
  this.rotation.x += 0.01;
  this.rotation.y += 0.01;
};

camera.update = function() {

};

var entities = [camera, cube];

function render(leftover) {
  console.log(leftover);
  // TODO: use leftover ammount (value = 0 to 1)
  // to extrapolate animation between frames.
  renderer.render(scene, camera);
}

var game_loop = require('./game_loop.js');
game_loop.start(render, entities);
