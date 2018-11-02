const slider = (function($) {
  return function (options = {}) {
    const container = $(options.container)
    const slider = $(options.slider)
    const slide = slider.children()
    const image = $(options.image)
    const slideLength = slide.length
    const slideWidth = slide.width()
    const slideHeight = slide.height()

    slider.css({
      width: slideLength * slideWidth,
      marginLeft: -slideWidth
    })

    image.css({
      width: slideWidth,
      height: slideHeight
    })

    const moveLeft = () => {
      slider.animate({
        left: + slideWidth
      }, 1000, () => {
        slider.children().last().prependTo(slider)
        slider.css({ left: '' })
      })
    }

    const moveRight = () => {
      slider.animate({
        left: - slideWidth
      }, 1000, () => {
        slider.children().first().appendTo(slider)
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

})($)

// HomePage Slider
if( $('#slider').length > 0) {
  let homeSlider = slider({
    container: '#slider',
    slider: '#slider ul',
    image: '#slider ul li img',
    autoplay: true
  })

  $('#slider-prev').click(() => {
    homeSlider.moveLeft()
  })

  $('#slider-next').click(() => {
    homeSlider.moveRight()
  })
}
