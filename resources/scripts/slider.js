const slider = function(options = {}) {
  const container = $(options.container)
  const slider = $(options.slider)
  const slide = slider.children()
  const slideLength = slide.length
  const slideWidth = slide.width()
  const slideHeight= slide.height()

  container.css({
    width: slideWidth,
    height: slideHeight
  })

  slider.css({
    width: slideLength * slideWidth
  })

  const moveLeft = () => {
    slider.animate({
      left: - slideWidth
    }, 200, () => {
      slider.children().first().appendTo(slider)
      slider.css({ left: '' })
    })
  }

  const moveRight = () => {
    slider.animate({
      left: + slideWidth
    }, 200, () => {
      slider.children().last().prependTo(slider)
      slider.css({ left: '' })
    })
  }

  let interval = options.autoplay ? setInterval(moveRight, 3000) : null

  if(interval !== null || interval !== undefined) {
    slider.hover(() => {
      clearInterval(interval)
    }, () => {
      interval = setInterval(moveRight, 3000)
    })
  }

  return {
    moveLeft,
    moveRight
  }
}

// HomePage Slider
if( $('#slider').length > 0) {
  let homeSlider = slider({
    container: '#slider',
    slider: '#slider ul',
    autoplay: true
  })

  $('#slider-prev').click(() => {
    homeSlider.moveLeft()
  })

  $('#slider-next').click(() => {
    homeSlider.moveRight()
  })
}
