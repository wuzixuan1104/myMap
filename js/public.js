/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  var $a = null;

  var current = $(location).attr('href').split('/').pop();

  $.get('sidemenu.html', function(r) {
    var $tmp = $(r);
    $a = $tmp.find('.box a');
    $('#sidemenu').append($tmp);
    $a.each(function () {
      if ($(this).attr('href') == current)
        $(this).addClass('active');
    });

  });

  if( $('.date').length <= 0 ) {
    var today = new Date();
    $('.folder').append( $('<span/>').addClass('date').append( today.toISOString().substring(0, 10))  );
  }
  if( $('.change_page').length <= 0 ) {
    $('body').append( $('<div/>').addClass('change_page').append( [ $('<div/>').addClass('icon-up'), $('<div/>').addClass('icon-down') ] ) );
  }
  if( $('#logo').length <=0 ) {
    $('body').append( $('<div/>').attr('id', 'logo').text('by Chestnut Wu') );
  }




  $('.icon-up').click(function() {
    if ($a === null)
      return false;

    if ((index = $a.index( $a.filter('.active') )) === -1)
      return false;

    index = --index < 0 ? $a.length - 1 : index;
    window.location.assign($a.eq(index).attr('href'));
  });

  $('.icon-down').click(function() {
    if ($a === null)
      return false;

    if ((index = $a.index( $a.filter('.active') )) === -1)
      return false;

    index = ++index > $a.length - 1 ? 0 : index;
    window.location.assign($a.eq(index).attr('href'));
  });



});
