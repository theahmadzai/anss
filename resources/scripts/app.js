$(document).ready(() => {

  // CSRF token
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })

  // Top line
  $('#top-line').css({
    width: '100%',
    height: '2.5px',
    backgroundImage: 'linear-gradient(to right, black, red, green)'
  })

  // Navbar toggle
  $('#toggle').click(event => {
    $('#toggle').toggleClass('toggle--change')
    $('#navbar').slideToggle()
  })

  // Slider
  $('#slider').slick({
    infinite: true,
    autoplay: true,
    adaptiveHeight: true
  })

  $('#news-slider').slick({
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  // Lightbox
  $('#lightbox').slickLightbox({
    caption: 'caption'
  })

})
