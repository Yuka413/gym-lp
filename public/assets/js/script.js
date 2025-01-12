//  ハンバーガーメニューここから
$(".l-header__drawer-icon").on("click", function () {
  $(this).toggleClass("is-checked");
  $(".l-header__drawer-content").toggleClass("is-checked");
  if ($(".l-header__drawer-content").hasClass("is-checked")) {
    $("html").css("overflow", "hidden");
  } else {
    $("html").css("overflow", "scroll");
  }
});

$(".l-header__menu-link").on("click", function () {
  $(".l-header__drawer-icon").removeClass("is-checked");
  $(".l-header__drawer-content").removeClass("is-checked");
  $("html").css("overflow", "scroll");
});
// ハンバーガーメニューここまで


// スムーススクロールここから
jQuery('a[href^="#"]').on("click", function (e) {
    const speed = 1000;
    const id = jQuery(this).attr("href");
    const paddingTop = 50;
    const target = jQuery("#" == id ? "html" : id);
    const position = jQuery(target).offset().top - paddingTop;
    jQuery("html, body").animate({
      scrollTop: position,
    },
    speed,
    "swing"
  );
  });
//   スムーススクロールここまで


// ふわっとタイトル表示ここから
const intersectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in-view");
        observer.unobserve(entry.target);
      } 
    });
  });
  
  const inViewItems = document.querySelectorAll(".fade-in-up");
  inViewItems.forEach(function (inViewItem) {
    intersectionObserver.observe(inViewItem);
  });
// ふわっとタイトル表示ここまで


$(function(){
    setInterval(function(){
        $('#js-arrow').animate({
        top: "-=15px"
        }, 1000);
        $('#js-arrow').animate({
            top: "+=15px"
        }, 1000);
    });
});