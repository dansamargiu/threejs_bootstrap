var g_world = {
  name: "main"
};

// TODO: move key handlers into another module
var g_currentlyPressedKeys = {};

function handleKeyDown(event) {
  g_currentlyPressedKeys[event.keyCode] = true;

  if (String.fromCharCode(event.keyCode) == "F") {
    filter += 1;
    if (filter == 3) {
      filter = 0;
    }
  }
}

function handleKeyUp(event) {
  g_currentlyPressedKeys[event.keyCode] = false;
}

var input = {
  handleKeys: function() {
    if (g_currentlyPressedKeys[33]) {
      // Page Up
      z -= 0.05;
    }
    if (g_currentlyPressedKeys[34]) {
      // Page Down
      z += 0.05;
    }
    if (g_currentlyPressedKeys[37]) {
      // Left cursor key
      g_world.camera.rotation.y += 0.01;
    }
    if (g_currentlyPressedKeys[39]) {
      // Right cursor key
      g_world.camera.rotation.y -= 0.01;
    }
    if (g_currentlyPressedKeys[38]) {
      // Up cursor key
      g_world.camera.rotation.x += 0.01;

    }
    if (g_currentlyPressedKeys[40]) {
      // Down cursor key
      g_world.camera.rotation.x -= 0.01;
    }
  }
}

// ---------------------------------------------
// TODO: move into another module.
function render(leftover) {
  console.log(leftover);
  // TODO: use leftover ammount (value = 0 to 1)
  // to extrapolate animation between frames.
  g_world.renderer.render(g_world.scene, g_world.camera);
}

var init = require('./init.js');
init(g_world);

// TODO: put these in init.
document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

var game_loop = require('./game_loop.js');
game_loop.start(input, g_world.entities, render);
