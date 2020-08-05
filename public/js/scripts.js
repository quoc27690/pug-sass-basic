$(document).ready(function () {
  // header
  $(window).scroll(function () {
    $("header").toggleClass(
      "active__header__scroll-nav",
      $(this).scrollTop() > 0
    );
  });

  $(".icon-menu").click(function () {
    $(".icon-menu, .header__left a img, .header__right__lang").hide(
      "fast",
      "linear"
    );
    $(".icon-close").show("fast", "linear");
    $("header").addClass("active__header__click-bg", "linear");
    $(".header__right__menu").addClass("active__header__click-slide", "linear");
  });

  $(".icon-close").click(function () {
    $(".icon-menu, .header__left a img, .header__right__lang").show(
      "fast",
      "linear"
    );
    $(".icon-close").hide("fast", "linear");
    $("header").removeClass("active__header__click-bg", "linear");
    $(".header__right__menu").removeClass(
      "active__header__click-slide",
      "linear"
    );
  });
});
