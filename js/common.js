$(function () {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      // 800: {
      //   slidesPerView: 1,
      //   spaceBetween: 20,
      // },
      800: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  $(function () {
    $('.main_v').append(`
    <p class="main_leaf1"></p>
    <p class="main_leaf2"></p>
    <p class="main_leaf3"></p>`)
    $('.youtube_wrap').append(`
    <p class="y_leaf1"></p>
    <p class="y_leaf2"></p>
    <p class="y_leaf3"></p>
    `)
    $('.news_wrap').append(`
    <p class="n_leaf1"></p>
    <p class="n_leaf2"></p>`)
    $('.notice_wrap').append(`
    <p class="noti_leaf1"></p>
    `)
    $('footer').append(`
    <p class="img1"></p>
    <p class="img2"></p>
    <p class="img3"></p>
    `)
  })


  // $('.close_btn').css('display','none')
  // $('.ham').on('click',function(){
  //   $('header').css('display', 'flex')
  //   $(this).fadeOut()
  //   $('.close_btn').fadeIn()

  // })
  // $('.close_btn').on('click',function(){
  //   $(this).fadeOut()
  //   $('.ham').fadeIn()
  //   $('header').css('display', 'none')
  // })


  // $('.close_btn').css('display', 'none')
  // $('.ham').on('click', function () {
  //   $('.gnb').css('display', 'none')
  //   $(this).fadeOut()
  //   $('.close_btn').fadeIn()

  // })
  // $('.close_btn').on('click', function () {
  //   $(this).fadeOut()
  //   $('.ham').fadeIn()
  //   $('.gnb').css('display', 'block')
  // })

  $('.close_btn').css('display', 'none')
  $('.ham').on('click', function () {
    $('header').css('display', 'flex')
    $(this).fadeOut()
    $('.close_btn').fadeIn()

  })
  $('.close_btn').on('click', function () {
    $(this).fadeOut()
    $('.ham').fadeIn()
    $('header').css('display', 'none')
  })



  // function printEvent(e) {
  //   console.log(e);
  //   console.log(window.scrollY);
  // }
  // window.addEventListener('scroll', printEvent);









  AOS.init({
    // 스크롤의 떨어진 거리
    //offset:200,
    //duration:1000
  });

})