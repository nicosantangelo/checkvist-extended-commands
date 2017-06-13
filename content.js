;(function() {
  'use strict'
  var script = document.createElement('script')

  script.type  = 'text/javascript'
  script.async = true
  script.src   = chrome.extension.getURL('commands.js')

  document.body.appendChild(script)

  var link = document.createElement('link')
  link.media = 'screen'
  link.rel   = 'stylesheet'
  link.type  = 'text/css'
  link.href  = chrome.extension.getURL('styles.css')

  document.head.appendChild(link)
})()
