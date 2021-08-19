
const slider = tns ({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false
});

document.querySelector('.prev').addEventListener('click', function() {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
  slider.goTo('next');
});



  $(function() {
    
    // скрипт для табов, все что нужно подставить класс ul  и класс активности
    // 

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog__wrapper').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog__itemContent').eq(i).toggleClass('catalog__itemContent_active');
        $('.catalog__itemList').eq(i).toggleClass('catalog__itemList_active');
      });
    });
  });

  // modal

    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    $('.button_catalog').on('click', function(){
      $('.overlay, #order').fadeIn();
    });

    $('.button_catalog').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descor').text($('.catalog__subheader').eq(i).text());
      });
    });


