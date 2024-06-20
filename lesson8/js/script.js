// $()と同義
// $(function(){})
jQuery(function ($) {
  // $('.header-button').click(function(){})
  $('.header-button').on('click', () => {
    $('body').toggleClass('open')
  })
})