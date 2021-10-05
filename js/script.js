/*========================================
ハンバーガー
========================================*/
jQuery('.drawer_icons').on('click',function(e){
    e.preventDefault();
    jQuery('.drawer_icons').toggleClass('is-active');
    jQuery('.drawer_content').toggleClass('is-active');
    jQuery('.drawer_background').toggleClass('is-active');
    return false;
});

/*========================================
to_top
========================================*/
jQuery(window).on('scroll', function() {
    if ( 100 < jQuery(this).scrollTop()) {
      jQuery('.to_top').addClass('is-show');
    } else {
      jQuery('.to_top').removeClass('is-show');
    }
});

/*========================================
スムーススクロール
========================================*/
jQuery('a[href^="#"]').on('click', function() { 
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this). attr('href');
    var position = 0;
    if ( id != '#') {
      position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);

    $(".drawer_icons").removeClass("is-active");
    $(".drawer_content").removeClass("is-active");
    $(".drawer_background").removeClass("is-active");
});

/*========================================
アコーディオン
========================================*/
jQuery('.qa_item_wrapper').on('click', function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa_item_icons').toggleClass('is-open');
});

/*========================================
swiper
========================================*/
var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

/*========================================
google-form
========================================*/
let $form = $("#js-form")
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 
/*========================================
wow.js
========================================*/
new WOW().init();
 

