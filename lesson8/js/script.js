// $()と同義
// $(function(){})
jQuery(function ($) {
  // ハンバーガーメニュー
  // $('.header-button').click(function(){})
  $('.header-button').on('click', () => {
    $('body').toggleClass('open')
  })

  // modaal
  $('.gallery').modaal({
    type: 'image',
  });

})