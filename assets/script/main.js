// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
$('.hamburger__button').on('click', function () {
	hamburger.toggleClass('hamburger-menu_active');
});
$(window).on('resize', function () {
	hamburger.removeClass('hamburger-menu_active');
});

$('.header-nav__item-link').on('click', function () {
	hamburger.toggleClass('hamburger-menu_active');
});

// タブ
$('#smarttab').smartTab({
    enableUrlHash: false
});
