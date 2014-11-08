var g_currentlyPressedKeys = {};

module.exports = {
  handleKeyDown: function(event) {
    g_currentlyPressedKeys[event.keyCode] = true;

    if (String.fromCharCode(event.keyCode) == "F") {
      filter += 1;
      if (filter == 3) {
        filter = 0;
      }
    }
  },

  handleKeyUp: function(event) {
    g_currentlyPressedKeys[event.keyCode] = false;
  },

  handleKeys: function(entities) {
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
      entities.camera.rotation.y += 0.01;
    }
    if (g_currentlyPressedKeys[39]) {
      // Right cursor key
      entities.camera.rotation.y -= 0.01;
    }
    if (g_currentlyPressedKeys[38]) {
      // Up cursor key
      entities.camera.rotation.x += 0.01;

    }
    if (g_currentlyPressedKeys[40]) {
      // Down cursor key
      entities.camera.rotation.x -= 0.01;
    }
  }
}
