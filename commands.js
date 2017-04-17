;(function() {
  'use strict'

  // ----------------------------------------------------------
  // CommandMapping

  function CommandMapping(actions) {
    this.actions = actions
  }

  CommandMapping.prototype = {
    actions: {}, // { letter: action() }

    hasAction: function(letter) {
      return !! this.getAction(letter)
    },

    exec: function(letter) {
      var action = this.getAction(letter)
      return action()
    },

    getAction: function(letter) {
      return this.actions[letter]
    }
  }


  // ----------------------------------------------------------
  // Keyboard

  function Keyboard() {}

  Keyboard.prototype = {
    bind: function(commands) {
      document.body.addEventListener('keyup', function(event) {
        if (checkvist.commandCanRun()) {
          var letter = this.getLetter(event)
          if (commands.hasAction(letter)) commands.exec(letter)
        }
      }.bind(this), false)
    },

    bindWithDelay: function(commands) {
      var runTimeoutId = null
      var nullTimeoutId = null

      document.body.addEventListener('keyup', function(event) {
        clearTimeout(runTimeoutId)
        clearTimeout(nullTimeoutId)

        if (checkvist.commandCanRun()) {
          var letter = this.getLetter(event)

          if (commands.hasAction(letter) && runTimeoutId === null) {
            runTimeoutId = setTimeout(function() { commands.exec(letter) }, 150)
          }
        }

        nullTimeoutId = setTimeout(function() { runTimeoutId = null }, 200)

      }.bind(this), false)
    },

    getLetter: function(event) {
      var handler = {
        72: function() {
          return event.shiftKey ? 'H' : 'h'
        },

        76: function() {
          return event.shiftKey ? 'L' : 'l'
        }
      }[event.which]

      return handler && handler()
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

  var keyboard = new Keyboard()

  keyboard.bindWithDelay(new CommandMapping({
    h: function() { checkvist.collapse() },
    l: function() { checkvist.expand() }
  }))

  keyboard.bind(new CommandMapping({
    H: function() { checkvist.removeFocus() },
    L: function() { checkvist.setFocus() }
  }))

})()
