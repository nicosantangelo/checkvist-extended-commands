;(function() {
  'use strict'

  // ----------------------------------------------------------
  // Keyboard

  function Keyboard() {}

  Keyboard.prototype = {
    bind: function(commands) {
      for(var shortcut in commands) {
        document.body.addEventListener('keyup', addShortcut(shortcut, commands[shortcut]), false)
      }

      function addShortcut(shortcut, action) {
        var matcher = new maxkir.KbdMatcher(shortcut)

        return function(event) {
          if (checkvist.commandCanRun() && matcher.matches(event)) {
            action()
          }
        }
      }
    },

    bindWithDelay: function(commands) {
      for(var shortcut in commands) {
        document.body.addEventListener('keyup', addShortcut(shortcut, commands[shortcut]), false)
      }

      function addShortcut(shortcut, action) {
        var runTimeoutId = null
        var nullTimeoutId = null
        var matcher = new maxkir.KbdMatcher(shortcut)

        return function(event) {
          clearTimeout(runTimeoutId)
          clearTimeout(nullTimeoutId)

          if (checkvist.commandCanRun() && matcher.matches(event) && runTimeoutId === null) {
            console.log('Run')
            runTimeoutId = setTimeout(action, 200)
          }

          nullTimeoutId = setTimeout(function() { runTimeoutId = null }, 250)
        }
      }
    }
  }

  // ----------------------------------------------------------
  // checkvist

  var checkvist = {
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
