/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  $a = null;
  $current = ( ($current = $(location).attr('href').split('/').pop()) == '' ) ? 'index.html' : $current;

  localStorage.clear();
  if( localStorage && comparePasstime(localStorage.getItem("menu_datetime"), 10) && ( localStorage.getItem("menu") ) ) {
    var $tmp = $( localStorage.getItem("menu") );
    $tmp.find("a[href$='" + $current + "']").addClass('active');
    $a = $tmp.find('.box a');
    $('#sidemenu').append($tmp);
  } else {
    sidemenuHandler();
  }

  if( $('.date').length <= 0 ) {
    var today = new Date();
    $('.folder').append( $('<span/>').addClass('date').append( today.toISOString().substring(0, 10))  );
  }
  if( $('.change_page').length <= 0 ) {
    $('body').append( $('<div/>').addClass('change_page').append( [ $('<div/>').addClass('icon-chevron-thin-up'), $('<div/>').addClass('icon-chevron-thin-down') ] ) );
  }
  if( $('#logo').length <=0 ) {
    $('body').append( $('<div/>').attr('id', 'logo').text('by Chestnut Wu') );
  }

  $('.icon-chevron-thin-up, .icon-chevron-thin-down').click(function() {
    if ($a === null)
      return false;
    if ((index = $a.index( $a.filter('.active') )) === -1)
      return false;

    switch(this.className) {
      case 'icon-chevron-thin-up': index = --index < 0 ? $a.length - 1 : index; break;
      case 'icon-chevron-thin-down': index = ++index > $a.length - 1 ? 0 : index; break;
    }
    window.location.assign($a.eq(index).attr('href'));
  });

  $(document).keydown(function(e){
    if ($a === null)
      return false;
    if ((index = $a.index( $a.filter('.active') )) === -1)
      return false;

    switch(e.keyCode) {
      case 38: index = --index < 0 ? $a.length - 1 : index; break;
      case 40: index = ++index > $a.length - 1 ? 0 : index; break;
    }
    window.location.assign($a.eq(index).attr('href'));
  });
});

function sidemenuHandler() {
  $.get('sidemenu.html', function(r) {
    if(localStorage) {
      localStorage.setItem('menu', r );
      localStorage.setItem('menu_datetime', new Date() );
    }
    var $tmp = $(r);
    $tmp.find("a[href$='" + $current + "']").addClass('active');
    $a = $tmp.find('.box a');
    $('#sidemenu').append($tmp);
  });
}

function comparePasstime(date, minutes) {
  if( new Date() <= new Date( new Date(date).getTime() + minutes*60000 ) )
    return true;
  return false;
}
