@push('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-lightbox/0.2.12/slick-lightbox.css">
@endpush

@push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-lightbox/0.2.12/slick-lightbox.min.js"></script>
    <script>
        // Slider
        $('#slider').slick({
            infinite: true,
            autoplay: true
        })

        // News Slider
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
    </script>
@endpush
