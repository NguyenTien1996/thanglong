$(document).ready(function () {
  var slidernewsid = $(".news-id .slider").lightSlider({
    item:3,
    pager:false,
    slideMargin:20,
    responsive : [
      {
          breakpoint:991,
          settings: {
              item:2,
            }
      },
      {
          breakpoint:767,
          settings: {
              item:1,
            }
      }
  ]
  })
  $(".prev-news-id").click(function(){
    slidernewsid.goToPrevSlide();
  })
  $(".next-news-id").click(function(){
    slidernewsid.goToNextSlide();
  })
  $(".slide-banner").lightSlider({
    item:1,
    pager:false,
    slideMargin:0,
    pager: true
  })
  $(".slide-prj-id .slider").lightSlider({
    item:1,
    pager:false,
    slideMargin:0,
    pager: true
  })
  var sliderimg= $(".image-hd  .slider").lightSlider({
    item:4,
    pager:false,
    slideMargin:2,
    responsive : [
      {
          breakpoint:991,
          settings: {
              item:3,
            }
      },
      {
          breakpoint:767,
          settings: {
              item:1,
            }
      }
  ]
  })
  $(".prev-imghd").click(function(){
    sliderimg.goToPrevSlide();
  })
  $(".next-imghd").click(function(){
    sliderimg.goToNextSlide();
  })
  $(".touch-menu").click(function(){
    $(this).toggleClass("active")
    $(".head-bottom").toggleClass("active")
    $(".bg-black").toggleClass("active")
  })
  $(".bg-black").click(function() {
    $(this).removeClass("active")
    $(".head-bottom").removeClass("active")
    $(".touch-menu").removeClass("active")
  })
  var dak = $(".ot-prj .list-lvdt .slider").lightSlider({
    item:3,
    pager:false,
    slideMargin:20,
    responsive : [
      {
          breakpoint:991,
          settings: {
              item:2,
            }
      },
      {
          breakpoint:767,
          settings: {
              item:1,
            }
      }
  ]
  
  })
  $(".prev-dak").click(function(){
    dak.goToPrevSlide();
  })
  $(".next-dak").click(function(){
    dak.goToNextSlide();
  })
  $(".slide-tvm .slider").lightSlider({
    item: 1,
    pager: true,
    slideMargin: 0,
  })
  $(".list-top-prj .slider").lightSlider({
    item:1,
    pager:false,
    slideMargin:0,
    pager: true
  })
})
$(document).ready(function() {
  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:5,
      slideMargin:0,
      enableDrag: false,
      currentPagerPosition:'left',
      onSliderLoad: function(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      },
      responsive : [
        {
            breakpoint:991,
            settings: {
              thumbItem:4,
              }
        },
        {
            breakpoint:767,
            settings: {
              thumbItem:3,
              }
        }
    ] 
  });
  $(".btn-search-mobile").click(function() {
    $(".search-mobile").toggleClass("active")
  })
  if ($(window).width() < 991) {
    $(".list-dvtv .slider").lightSlider({
      item:3,
      pager:false,
      slideMargin:20,
      responsive : [
        
        {
            breakpoint:767,
            settings: {
                item:1,
              }
        }
    ]
    })
  }
});
if ($('.head-bottom').length) {
  scrollhead = function () {
  var scrollheader = $(window).scrollTop();
  var offserid = $("section.banner").offset().top
if(scrollheader > offserid){
  $(".head-bottom").addClass("fixed")
}
else{$(".head-bottom").removeClass("fixed")}
}
scrollhead();
$(window).on('scroll', function () {
  scrollhead();
});
}
fixintro = function () {
  var headfixx = $('header').height();
  if ($('.menu-scroll').length > 0) {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 500) {
          $('.menu-scroll').addClass('fixed');
      } else {
          $('.menu-scroll').removeClass('fixed');
      }
      $('.menu-scroll a').each(function () {
          var tag = $(this).data('tag');
          if (tag.length > 0) {
              var offset = $(tag).offset().top - 100;
              if (scrollTop >= offset) {
                  $('.menu-scroll a').removeClass('active');
                  $('.menu-scroll a[data-tag= ' + tag + ']').addClass('active');
              }
          }
      });
  }
};
fixintro();
$(window).on('scroll', function () { fixintro(); });

$(document).ready(function () {
  $('.menu-scroll a').click(function () {
      var tag = $(this).data('tag');
      if (tag.length > 0) {
          var offset = $(tag).offset().top - 200;
          $("html,body").animate({ scrollTop: offset }, 700);
          $('.menu-scroll a').removeClass('active');
          $(this).addClass('active');
      }
  });
  
const resizeImage = (div, ratio) => {
  let widthif = parseInt($(div).width())
  let heightif = (widthif) *ratio
  $(div).css({
      "height": heightif + "px"
  })
}

  resizeImage(".list-tva .img", 9/16)
  resizeImage(".section.map iframe", 1/3)
  resizeImage(".list-lvdt .img", 2/3)
  resizeImage(".list-dvtv .item", 2/3)
  resizeImage(".project-id .img", 2/3)
  resizeImage(".slide-image-hd .item", 2/3)

$(".list-tct .img").each(function(index) {
  const _this = $(this);
  const htext = $(".list-tct .text")
  if(index>0) {
    let widthif = parseInt(_this.width())
    let heightif = (widthif / 3) * 2
    _this.css({
        "height": heightif + "px"
    })
    htext.css({
      "height": "calc(100% - " + heightif + "px)"
    })
  }
});
})
