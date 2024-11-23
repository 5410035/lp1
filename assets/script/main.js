// ハンバーガーメニュー
var hamburger = $('.hamburger_menu');
$('.hamburger_button').on('click', function () {
	hamburger.toggleClass('hamburger_menu_active');
});
$(window).on('resize', function () {
	hamburger.removeClass('hamburger_menu_active');
});
