var THREE = require('three');

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

  // Create an array of materials to be used in a cube, one for each side
  var cubeMaterialArray = [];
  // order to add materials: x+,x-,y+,y-,z+,z-
  cubeMaterialArray.push(new THREE.MeshBasicMaterial({
    color: 0xff3333
  }));
  cubeMaterialArray.push(new THREE.MeshBasicMaterial({
    color: 0xff8800
  }));
  cubeMaterialArray.push(new THREE.MeshBasicMaterial({
    color: 0xffff33
  }));
  cubeMaterialArray.push(new THREE.MeshBasicMaterial({
    color: 0x33ff33
  }));
  cubeMaterialArray.push(new THREE.MeshBasicMaterial({
    color: 0x3333ff
  }));
  cubeMaterialArray.push(new THREE.MeshBasicMaterial({
    color: 0x8833ff
  }));
  var cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray);
  var cubeGeometry = new THREE.CubeGeometry(1, 1, 1);
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
  world.scene.add(cube);

  // Move the camera out so it is not in the cube
  world.camera.position.z = 5;

  cube.update = function() {};

  world.camera.update = function() {

  };

  world.entities = [world.camera, cube];
}
