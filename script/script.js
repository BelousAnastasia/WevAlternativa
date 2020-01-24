$(document).ready(function () {

  // clider in clients section
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
      1450: {
        slidesPerView: 4  
      },
    }
  });

  // change image in payments section

  $('.payments_info_change .info_change_link').on('click', function () {
    $('.info_change_link').removeClass('active');
    $(this).addClass('active');

    if ($('.link_pay').hasClass('active')) {
      $('.mockup_img_info').addClass('info_pay');
    } else {
      $('.mockup_img_info').removeClass('info_pay');
    }

    if ($('.link_crm').hasClass('active')) {
      $('.mockup_img_info').addClass('info_crm');
    } else {
      $('.mockup_img_info').removeClass('info_crm');
    }

    if ($('.link_secure').hasClass('active')) {
      $('.mockup_img_info').addClass('info_secure');
    } else {
      $('.mockup_img_info').removeClass('info_secure');
    }
  });

  // modal

  var elements = $('.modal-overlay, .modal');

  $('.modal_link').click(function () {
    elements.addClass('active');
  });
  $('.close-modal, .modal-overlay').click(function () {
    elements.removeClass('active');
  });

  // action for cases section
  $('.cases_cards .cases_card').on('click', function () {
    $('.cases_card').removeClass('cases_card_active').addClass('not_active');
    $(this).addClass('cases_card_active').removeClass('not_active');
  });

  

});

