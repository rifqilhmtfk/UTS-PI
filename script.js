// menu
var buttonMenu = $(".rifqit_button-menu");
var menu = $("nav .rifqit_menu ul");

function klikMenu() {
  buttonMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

// check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
    // display block
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

// efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("rifqit_white");
    } else {
      $("nav").removeClass("rifqit_white");
    }
  });
});
