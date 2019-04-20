window.onload = function(){

    $('.carousel').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });

    let categoryItem = document.querySelectorAll('.categories .categories-item');
    let hoverItem = document.querySelectorAll('.categories .item-hover');

    for ( let i = 0; i < categoryItem.length; i++) {
        categoryItem[i].addEventListener('mouseenter', () => {
            hoverItem[i].classList.remove('clear');
        });

        categoryItem[i].addEventListener('mouseleave', () => {
            hoverItem[i].classList.add('clear');
        });
    }



    let $show = $('.show');
    let showSettings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        responsive: [
            {
                breakpoint: 99999,
                settings: "unslick"
            },{

                breakpoint: 750,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },{
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },{
                breakpoint: 380,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    $show.slick(showSettings);

    $(window).on('resize', function() {
        if (!$show.hasClass('slick-initialized')) {
            return $show.slick(showSettings);
        }
    });
    /*
    $('.show').slick({
        mobileFirst: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1290,
                settings: "unslick"
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 380,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });*/

    $('.burger-btn').on("click", function() {
        $('.bar-list').slideToggle('slow');
    });


    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 150) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });



};