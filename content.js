;(function() {
  'use strict'
  var script = document.createElement('script')

  script.type  = 'text/javascript'
  script.async = true
  script.src   = chrome.extension.getURL('commands.js')

  document.body.appendChild(script)
})()
