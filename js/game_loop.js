var MS_PER_UPDATE = 30;
var previous = new Date().getTime();
var lag = 0.0;

module.exports.start = function(render, entities) {
  // Game Loop
  function game_loop() {
    requestAnimationFrame(game_loop);

    var current = new Date().getTime();
    var elapsed = current - previous;
    previous = current;
    lag += elapsed;

    // process input
    // TODO

    while (lag >= MS_PER_UPDATE) {
      // update
      console.log("update");
      for (var i = 0; i < entities.length; i++) {
        entities[i].update();
      }

      lag -= MS_PER_UPDATE;
    }

    // render
    console.log("render");
    render(lag / MS_PER_UPDATE);
  }

  // Start the loop
  game_loop();
}
