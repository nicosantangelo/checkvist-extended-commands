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
    document.body.addEventListener('keyup', function(event) {
      if (! maxkir.EditTracker.is_editing()) {
        var selectedTaskId = maxkir.Task.selected_task_id()

        if (event.key === 'L') {
          maxkir.ChecklistNodeToggle.expand(selectedTaskId)
          event.preventDefault()
        }

        if (event.key === 'H') {
          maxkir.ChecklistNodeToggle.collapse(selectedTaskId)
          event.preventDefault()
        }
      }
    }, false)
  }
})()
