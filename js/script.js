jQuery(document).ready(function () {
  jQuery(".banner-slider").slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  jQuery(".service-slider .slider").slick({
    autoplay: false,
    infinite: false,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></div> <div class="shop-btn" style="margin-left: 10px;"></div>',
  });

  jQuery(".women-salone .slider").slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    focusOnSelect: false,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></div> <div class="shop-btn" style="margin-left: 10px;"></div>',
  });
  jQuery(".notworthy .slider").slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    focusOnSelect: false,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></div> <div class="shop-btn" style="margin-left: 10px;"></div>',
  });
});
