/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  $.get('_sidemenu.html', function(r) {
    $('#sidemenu').append($(r));
  });
  var today = new Date();
  if( $('.folder').length > 0 ) {
    $('.folder').append( '<span class="date">' + today.toISOString().substring(0, 10) + '</span>');
  }

});
