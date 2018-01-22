window.addEventListener(
  'load',
  function(event) {
    var starButton = document.querySelector('.unstarred > .js-toggler-target')
    if (!starButton || document.querySelector('.starring-container.on')) return
    setTimeout(function() {
      starButton.click()
    }, 5000)
  },
  false
)
