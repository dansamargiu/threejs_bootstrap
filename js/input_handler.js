var g_cur_pressed_keys = {};

module.exports = {
  m_keybind_map: {},

  handleKeyDown: function(event) {
    g_cur_pressed_keys[event.keyCode] = true;
  },

  handleKeyUp: function(event) {
    g_cur_pressed_keys[event.keyCode] = false;
  },

  registerKeybind: function(keyCode, action) {
    if (typeof(action) != "function") return;
    this.m_keybind_map[keyCode] = action;
  },

  handleKeys: function(entities) {
    for (var property in this.m_keybind_map) {
      if (this.m_keybind_map.hasOwnProperty(property)) {
        if (g_cur_pressed_keys[property]) this.m_keybind_map[property]();
      }
    }
  }
}
