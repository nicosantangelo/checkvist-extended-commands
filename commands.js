;(function() {
  'use strict'

  bindDelayed({
    l: function() { maxkir.ChecklistNodeToggle.expand(getTaskId()) },
    h: function() { maxkir.ChecklistNodeToggle.collapse(getTaskId()) },
  })

  bind({
    L: function() { maxkir.TaskFocus.set_focus(getTaskId()) },
    H: function() { maxkir.TaskFocus.remove_focus(getTaskId()) }
  })


  function bindDelayed(actions) {
    var runTimeoutId = null
    var nullTimeoutId = null

    document.body.addEventListener('keyup', function(event) {
      clearTimeout(runTimeoutId)
      clearTimeout(nullTimeoutId)

      if (! maxkir.EditTracker.is_editing()) {
        var action = actions[event.key]

        if (action && runTimeoutId === null) {
          runTimeoutId = setTimeout(action, 200)
        }
      }

      nullTimeoutId = setTimeout(function() { runTimeoutId = null }, 250)

    }, false)
  }

  function bind(actions) {
    document.body.addEventListener('keyup', function(event) {
      if (! maxkir.EditTracker.is_editing()) {
        var action = actions[event.key]
        if (action) action()
      }
    })
  }

  function getTaskId() {
    return maxkir.Task.selected_task_id()
  }
})()
