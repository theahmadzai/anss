<<<<<<< HEAD
(function () {
  'use strict';

  $(document).ready(function () {
    // CSRF token
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    }); // Top line

    $('#top-line').css({
      width: '100%',
      height: '2.5px',
      backgroundImage: 'linear-gradient(to right, black, red, green)'
    }); // Navbar toggle

    $('#toggle').click(function (event) {
      $('#toggle').toggleClass('toggle--change');
      $('#navbar').slideToggle();
    }); // Slider

    $('#slider').slick({
      infinite: true,
      autoplay: true,
      adaptiveHeight: true
    });
    $('#news-slider').slick({
      infinite: true,
      autoplay: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      dots: true,
      arrows: false,
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }]
    }); // Lightbox

    $('#lightbox').slickLightbox({
      caption: 'caption'
    });
  });

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJyZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cclxuICAvLyBDU1JGIHRva2VuXHJcbiAgJC5hamF4U2V0dXAoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIFRvcCBsaW5lXHJcbiAgJCgnI3RvcC1saW5lJykuY3NzKHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcyLjVweCcsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsYWNrLCByZWQsIGdyZWVuKSdcclxuICB9KVxyXG5cclxuICAvLyBOYXZiYXIgdG9nZ2xlXHJcbiAgJCgnI3RvZ2dsZScpLmNsaWNrKGV2ZW50ID0+IHtcclxuICAgICQoJyN0b2dnbGUnKS50b2dnbGVDbGFzcygndG9nZ2xlLS1jaGFuZ2UnKVxyXG4gICAgJCgnI25hdmJhcicpLnNsaWRlVG9nZ2xlKClcclxuICB9KVxyXG5cclxuICAvLyBTbGlkZXJcclxuICAkKCcjc2xpZGVyJykuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgfSlcclxuXHJcbiAgJCgnI25ld3Mtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA4MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0pXHJcblxyXG4gIC8vIExpZ2h0Ym94XHJcbiAgJCgnI2xpZ2h0Ym94Jykuc2xpY2tMaWdodGJveCh7XHJcbiAgICBjYXB0aW9uOiAnY2FwdGlvbidcclxuICB9KVxyXG5cclxufSlcclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWpheFNldHVwIiwiaGVhZGVycyIsImF0dHIiLCJjc3MiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImNsaWNrIiwiZXZlbnQiLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwic2xpY2siLCJpbmZpbml0ZSIsImF1dG9wbGF5IiwiYWRhcHRpdmVIZWlnaHQiLCJzbGlkZXNUb1Nob3ciLCJkb3RzIiwiYXJyb3dzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNsaWNrTGlnaHRib3giLCJjYXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7RUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFNO0VBRXRCO0VBQ0FGLEVBQUFBLENBQUMsQ0FBQ0csU0FBRixDQUFZO0VBQ1ZDLElBQUFBLE9BQU8sRUFBRTtFQUNQLHNCQUFnQkosQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJLLElBQTdCLENBQWtDLFNBQWxDO0VBRFQ7RUFEQyxHQUFaLEVBSHNCOztFQVV0QkwsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlTSxHQUFmLENBQW1CO0VBQ2pCQyxJQUFBQSxLQUFLLEVBQUUsTUFEVTtFQUVqQkMsSUFBQUEsTUFBTSxFQUFFLE9BRlM7RUFHakJDLElBQUFBLGVBQWUsRUFBRTtFQUhBLEdBQW5CLEVBVnNCOztFQWlCdEJULEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVUsS0FBYixDQUFtQixVQUFBQyxLQUFLLEVBQUk7RUFDMUJYLElBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVksV0FBYixDQUF5QixnQkFBekI7RUFDQVosSUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhYSxXQUFiO0VBQ0QsR0FIRCxFQWpCc0I7O0VBdUJ0QmIsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhYyxLQUFiLENBQW1CO0VBQ2pCQyxJQUFBQSxRQUFRLEVBQUUsSUFETztFQUVqQkMsSUFBQUEsUUFBUSxFQUFFLElBRk87RUFHakJDLElBQUFBLGNBQWMsRUFBRTtFQUhDLEdBQW5CO0VBTUFqQixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCYyxLQUFsQixDQUF3QjtFQUN0QkMsSUFBQUEsUUFBUSxFQUFFLElBRFk7RUFFdEJDLElBQUFBLFFBQVEsRUFBRSxJQUZZO0VBR3RCQyxJQUFBQSxjQUFjLEVBQUUsSUFITTtFQUl0QkMsSUFBQUEsWUFBWSxFQUFFLENBSlE7RUFLdEJDLElBQUFBLElBQUksRUFBRSxJQUxnQjtFQU10QkMsSUFBQUEsTUFBTSxFQUFFLEtBTmM7RUFPdEJDLElBQUFBLFVBQVUsRUFBRSxDQUNWO0VBQ0VDLE1BQUFBLFVBQVUsRUFBRSxHQURkO0VBRUVDLE1BQUFBLFFBQVEsRUFBRTtFQUNSTCxRQUFBQSxZQUFZLEVBQUU7RUFETjtFQUZaLEtBRFU7RUFQVSxHQUF4QixFQTdCc0I7O0VBK0N0QmxCLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXdCLGFBQWYsQ0FBNkI7RUFDM0JDLElBQUFBLE9BQU8sRUFBRTtFQURrQixHQUE3QjtFQUlELENBbkREOzs7OyJ9
=======
!function(){"use strict";$(document).ready(function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$("#top-line").css({width:"100%",height:"2.5px",backgroundImage:"linear-gradient(to right, black, red, green)"}),$("#toggle").click(function(e){$("#toggle").toggleClass("toggle--change"),$("#navbar").slideToggle()})})}();
>>>>>>> 617f498542d8d8ded63df9ed2e3b922f73dbfdf2
