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
            hoverItem[i].classList.remove('hidden');
        });

        categoryItem[i].addEventListener('mouseleave', () => {
            hoverItem[i].classList.add('hidden');
        });
    }

    $('.show').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 960,
                settings: 'unslick'
            },
            {
                breakpoint: 950,
                settings: 'slick'
            }
        ]
    });

    $('.burger-btn').on("click", function() {
        $('.header-top__bar').slideToggle('slow');
    });





};