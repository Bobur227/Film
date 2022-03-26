$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:2,
        speed:900,
        infinite:false,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:3500,
        touchThreshold:10,
        // slidesToScroll:1,
        // easing:'cubic-bezier',
        // pauseOnFocus:true,
        // pauseOnhover:true,
        // pauseOnDotsHover:true,
        // draggable:true,
        // swipe:true,
        // touchMove:true,
        // waitForAnimate:false,
        // centerMode:true,
        // veribleWidth:false,
        // rows:1,
        // slidesPerRow:1,
        // vertical:false,
    });
});

$('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });

$(document).ready(function(){
    $('.showcase-shelf').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:3,
        speed:900,
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:3500,
        touchThreshold:10,
    });
});


$('img.grid-content_svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });