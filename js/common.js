$(function(){
  /* 메뉴 */
  $('.header').each(function(){
    let win=$(window),
    $header=$(this),
    $headerClone = $header.contents().clone(),
    $headerCloneContainer=$('<div class="clone_menu"></div>');

    $headerCloneContainer.append($headerClone);
    $headerCloneContainer.prependTo('body');

    win.scroll(function(){
      if(win.scrollTop()>$header.offset().top){
          $headerCloneContainer.addClass('visible')
      }else{
          $headerCloneContainer.removeClass('visible')
      };
  })
  });

  /* 웹 슬라이드*/
  var WebSwiper = new Swiper(".webSwiper", {
    effect: "fade",
    navigation: {
      nextEl: ".webswiper-button-next",
      prevEl: ".webswiper-button-prev",
    },
  });
  /* 웹 슬라이드 end*/

  /* 디자인 슬라이드 */
  var DesignSwiper = new Swiper(".designeSwiper", {
    navigation: {
      nextEl: ".designswiper-button-next",
      prevEl: ".designswiper-button-prev",
    },
  });
  /* 디자인 슬라이드 end*/
  
  /*  복사 */
  var clipboard = new ClipboardJS( '.btn_emoji' );
  clipboard.on( 'success', function() {
      alert( '이메일 복사완료! 😉' );
  } );
  clipboard.on( 'error', function() {
      alert( '복사를 실패했어요ㅠ 😭' );
  } );

  var clipboardcall = new ClipboardJS( '.btn_call' );
  clipboardcall.on( 'success', function() {
      alert( '전화번호 복사완료! 😉' );
  } );  
  clipboardcall.on( 'error', function() {
      alert( '복사를 실패했어요ㅠ 😭' );
  } );
  /*  복사 end*/


  $(window).scroll(function(){
    var conScrollTop=$(this).scrollTop();
    console.log($(this).scrollTop())
    /* 자기소개 */
    if(conScrollTop > $ ('.about').offset().top-500){
      $('.aboutcon').addClass('active');
    }else{
      $('.aboutcon').removeClass('active');
    }
    /* 웹포폴 */
    if(conScrollTop > $ ('.Portfolio_web').offset().top-500){
      $('.webSwiper').addClass('active');
    }else{
      $('.webSwiper').removeClass('active');
    }
    /* 디자인 포폴 */
    if(conScrollTop > $ ('.Portfolio_etc').offset().top-500){
      $('.designeSwiper').addClass('active');
    }else{
      $('.designeSwiper').removeClass('active');
    }
    
  });

  /* 메인창 닫기 */
  $('.maincon .close').click(function(){
    $('.maincon').fadeOut();  //.show();
  })
  $('.bg_img img').click(function (){
    $('.maincon').fadeIn(); //.hide();
  });

  /* 스크롤 부드럽게 */
  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
  
  /* 위로 */
  $('.back-to-top').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({
        scrollTop:0
    },300);
  });

  $(window).scroll(function(){
      // console.log($(this).scrollTop());
      if($(this).scrollTop()>=300){
          $('.go_top').fadeIn();
      }else{
          $('.go_top').fadeOut();
      }
  });

  $('.go_top').click(function(e){
      e.preventDefault();
      $('html,body').stop().animate({
          scrollTop:0
      },1000);
      
  });



  /* 모바일메뉴 */
  $('.hamburger button').click(function(e){
    e.preventDefault()        
    $(this).find('i').toggleClass('active')
    $('.mobile_menu').toggleClass('on')
    $('.mobile_menu').toggleClass('active')
    $('.mobile_menu_bg').toggleClass('active')
    $('body').toggleClass('noscroll')
  });
  $('.mobile_menu nav ul li a').click(function(e){
    e.preventDefault()
    $('.mobile_menu').removeClass('active')
    $('.xi-hamburger-out').removeClass('active')
    $('.mobile_menu').removeClass('on')
    $('body').removeClass('noscroll')
    $('.mobile_menu_bg').removeClass('active')
  });

});


$(document).ready(function(){
  $("#spreadBtn02").click(function(){
    if($("#hidden01").is(":visible")){
      $("#hidden01").slideUp();
    }else{
      $("#hidden01").slideDown();
    }
  });
  $("#spreadBtn03").click(function(){
    if($("#hidden02").is(":visible")){
      $("#hidden02").slideUp();
    }else{
      $("#hidden02").slideDown();
    }
  });
});
