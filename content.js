;(function () {
  'use strict'

  // -----------------------------------------------------------------------------
  // Start

  var script = document.createElement('script')
  script.type = 'text/javascript'

  script.textContent = bindCommands.toString()
  script.textContent += '\nbindCommands()'

  document.body.appendChild(script)


  function bindCommands() {
    var runTimeoutId = null
    var nullTimeoutId = null

    var getTaskId = function() { return maxkir.Task.selected_task_id() }

    var actions = {
      l: function() { maxkir.ChecklistNodeToggle.expand(getTaskId()) },
      h: function() { maxkir.ChecklistNodeToggle.collapse(getTaskId()) }
    }

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

})()
