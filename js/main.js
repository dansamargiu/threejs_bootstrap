var g_world = {
  name: "main"
};

var init = require('./init.js');
init(g_world);

var game_loop = require('./game_loop.js');
game_loop.start(g_world.input, g_world.entities, g_world.renderer);
