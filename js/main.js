var THREE = require('three');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Add the cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// Move the camera out so it is not in the cube
camera.position.z = 5;

var game_loop = require('./game_loop.js');
game_loop.start(renderer, camera, scene, cube);
