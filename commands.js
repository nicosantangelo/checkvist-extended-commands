;(function() {
  'use strict'

  // ----------------------------------------------------------
  // Keyboard

  function Keyboard() {}

  Keyboard.prototype = {
    bind: function(commands) {
      for(var shortcut in commands) {
        checkvist.addShortcut(shortcut, this._wrapAction(commands[shortcut]))
      }
    },

    bindWithDelay: function(commands) {
      for(var shortcut in commands) {
        checkvist.addShortcut(shortcut, this._delayAction(commands[shortcut]))
      }
    },

    _delayAction: function(action) {
      var runTimeoutId = null
      var nullTimeoutId = null

      action = this._wrapAction(action)

      return function() {
        clearTimeout(runTimeoutId)
        clearTimeout(nullTimeoutId)

        if (checkvist.commandCanRun() && runTimeoutId === null) {
          runTimeoutId = setTimeout(action, 150)
        }

        nullTimeoutId = setTimeout(function() { runTimeoutId = null }, 200)

      }
    },

    _wrapAction: function(action) {
      return function() {
        if (checkvist.commandCanRun()) action()
      }
    }
  }

  // ----------------------------------------------------------
  // checkvist

  var checkvist = {
    addShortcut: function(shortcut, callback) {
      return maxkir.kbd.addShortcut(shortcut, callback)
    },

    collapse: function() {
      return maxkir.ChecklistNodeToggle.collapse(this.getTaskId())
    },

    expand: function() {
      return maxkir.ChecklistNodeToggle.expand(this.getTaskId())
    },

    setFocus: function() {
      return maxkir.TaskFocus.set_focus(this.getTaskId())
    },

    removeFocus: function() {
      return maxkir.TaskFocus.remove_focus(this.getTaskId())
    },

    commandCanRun: function() {
      return maxkir.cmd.can_run(true)
    },

    getTaskId: function() {
      return maxkir.Task.selected_task_id()
    }
  }


  // ----------------------------------------------------------
  // Main

  // maxkir.tree_nav.selectFirstInTree()
  // maxkir.tree_nav.selectLastInTree()

  var keyboard = new Keyboard()

  keyboard.bindWithDelay({
    h: function() { return checkvist.collapse() },
    l: function() { return checkvist.expand() }
  })

  keyboard.bind({
    'shift+h': function() { return checkvist.removeFocus() },
    'shift+l': function() { return checkvist.setFocus() }
  })

})()
