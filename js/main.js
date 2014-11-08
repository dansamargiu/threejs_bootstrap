var _world = {
  name: "main"
};

// TODO: move key handlers into another module
var currentlyPressedKeys = {};

function handleKeyDown(event) {
  currentlyPressedKeys[event.keyCode] = true;

  if (String.fromCharCode(event.keyCode) == "F") {
    filter += 1;
    if (filter == 3) {
      filter = 0;
    }
  }
}

function handleKeyUp(event) {
  currentlyPressedKeys[event.keyCode] = false;
}

var input = {
  handleKeys: function() {
    if (currentlyPressedKeys[33]) {
      // Page Up
      z -= 0.05;
    }
    if (currentlyPressedKeys[34]) {
      // Page Down
      z += 0.05;
    }
    if (currentlyPressedKeys[37]) {
      // Left cursor key
      _world.camera.rotation.y += 0.01;
    }
    if (currentlyPressedKeys[39]) {
      // Right cursor key
      _world.camera.rotation.y -= 0.01;
    }
    if (currentlyPressedKeys[38]) {
      // Up cursor key
      _world.camera.rotation.x += 0.01;

    }
    if (currentlyPressedKeys[40]) {
      // Down cursor key
      _world.camera.rotation.x -= 0.01;
    }
  }
}

// ---------------------------------------------

function render(leftover) {
  console.log(leftover);
  // TODO: use leftover ammount (value = 0 to 1)
  // to extrapolate animation between frames.
  _world.renderer.render(_world.scene, _world.camera);
}

var init = require('./init.js');
init(_world);

// TODO: put these in init
document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

var game_loop = require('./game_loop.js');
game_loop.start(input, _world.entities, render);
