"use strict";

//burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
}); //slick slider

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}); //scroll up

var smoothJumpUp = function smoothJumpUp() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 20);
  }
};

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 600) {
    document.getElementById('upbutton').style.display = 'block';
  } else {
    document.getElementById('upbutton').style.display = 'none';
  }
}; //size products


$(".custom-select").each(function () {
  var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function () {
    template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
  $(this).parents(".custom-options").addClass("option-hover");
}, function () {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
  $('html').one('click', function () {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function () {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
}); //map

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(50.443010882923666, 30.521567969276358),
    zoom: 15
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}