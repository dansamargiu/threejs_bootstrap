var _world = {
  name: "main"
};

function render(leftover) {
  console.log(leftover);
  // TODO: use leftover ammount (value = 0 to 1)
  // to extrapolate animation between frames.
  _world.renderer.render(_world.scene, _world.camera);
}

var init = require('./init.js');
init(_world);

var game_loop = require('./game_loop.js');
game_loop.start(render, _world.entities);
