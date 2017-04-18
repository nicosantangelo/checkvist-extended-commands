;(function() {
  'use strict'

  // ----------------------------------------------------------
  // Keyboard

  function Keyboard() {}

  Keyboard.prototype = {
    bind: function(commands) {
      this.bindCommands(commands, this._handleShortcut.bind(this))
    },

    bindWithDelay: function(commands) {
      this.bindCommands(commands, this._handleDelayedShortcut.bind(this))
    },

    bindCommands: function(commands, getHandler) {
      for(var shortcut in commands) {
        document.body.addEventListener('keyup', getHandler(shortcut, commands[shortcut]), false)
      }
    },

    _handleShortcut: function(shortcut, action) {
      var matcher = checkvist.newKbdMatcher(shortcut)

      return function(event) {
        if (checkvist.commandCanRun() && matcher.matches(event)) action()
      }
    },

    _handleDelayedShortcut: function(shortcut, action) {
      var runTimeoutId = null
      var nullTimeoutId = null
      var matcher = checkvist.newKbdMatcher(shortcut)

      return function(event) {
        clearTimeout(runTimeoutId)
        clearTimeout(nullTimeoutId)

        if (checkvist.commandCanRun() && matcher.matches(event) && runTimeoutId === null) {
          runTimeoutId = setTimeout(action, 200)
        }

        nullTimeoutId = setTimeout(function() { runTimeoutId = null }, 250)
      }
    }
  }

  // ----------------------------------------------------------
  // checkvist

  var checkvist = {
    newKbdMatcher: function(shortcut) {
      var matcher = new maxkir.KbdMatcher(shortcut)
      maxkir.KbdMatcher.matchers.pop() // Remove from the global matchers list, to avoid conflicts
      return matcher
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
    h: function() { checkvist.collapse() },
    l: function() { checkvist.expand() }
  })

  keyboard.bind({
    'shift+h': function() { checkvist.removeFocus() },
    'shift+l': function() { checkvist.setFocus() }
  })

})()
