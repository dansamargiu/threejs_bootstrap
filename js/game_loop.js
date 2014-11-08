var MS_PER_UPDATE = 30;
var previous = new Date().getTime();
var lag = 0.0;

function update_entities(entities) {
  for (var property in entities) {
    if (entities.hasOwnProperty(property) && typeof entities[property].update == 'function') {
      entities[property].update();
    }
  }
}

module.exports.start = function(input, entities, renderer) {
  // Game Loop
  function game_loop() {
    requestAnimationFrame(game_loop);

    var current = new Date().getTime();
    var elapsed = current - previous;
    previous = current;
    lag += elapsed;

    // process input
    input.handleKeys(entities);

    while (lag >= MS_PER_UPDATE) {
      // update
      update_entities(entities);
      lag -= MS_PER_UPDATE;
    }

    // render (todo: use lag/MS_PER_UPDATE to get offset)
    renderer.render(entities.scene, entities.camera);
  }

  // Start the loop
  game_loop();
}
