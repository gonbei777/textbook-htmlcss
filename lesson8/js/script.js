// $()と同義
// $(function(){})
jQuery(function ($) {
  // ハンバーガーメニュー
  // $('.header-button').click(function(){})
  $('.header-button').on('click', () => {
    $('body').toggleClass('open')
  })

  // modaal
  if ($('.gallery').length !== 0) {
    $('.gallery').modaal({
      type: 'image',
    });
  }


})