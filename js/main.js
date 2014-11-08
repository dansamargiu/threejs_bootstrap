var g_world = {
  name: "main"
};

// ---------------------------------------------
// TODO: move into another module.
function render(leftover) {
  // TODO: use leftover ammount (value = 0 to 1)
  // to extrapolate animation between frames.
  g_world.renderer.render(g_world.scene, g_world.camera);
}

var init = require('./init.js');
init(g_world);

// TODO: put these in init.
var input_handler = require('./input_handler');
document.onkeydown = input_handler.handleKeyDown;
document.onkeyup = input_handler.handleKeyUp;

var game_loop = require('./game_loop.js');
game_loop.start(input_handler, g_world.entities, render);
