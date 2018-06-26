/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  var arr = [$('<div />').addClass('aaa'), $('<div />').addClass('aaa'), $('<div />').addClass('aaa')]; //->array
  $('#sidemenu').append('<div>aaa</div>');

  // $()
  // $('.clasName')         -> $jq obj
  // $('<div />')           -> $jq obj
  // $('str') -> html <str> -> $jq obj
  //
  // <div class='clasName'>1</div>
  // <div class='clasName'>2</div>
  // <div class='clasName'>3</div>
  // $('.clasName')         -> $jq obj

  //
  // var $aaa = $('.aaa');
  //
  //
  console.log(
    arr
  );
  // // arr.eq(0);
  //
  console.log(
    $(arr)
  );

  console.log(
    $(arr).map($.fn.toArray)
  );
  //
  // console.log(
  //   $aaa
  // );



  // function initBox(r){
  //   var $tmp = $(r);
  //   $tmp.find('.xxx').click(function(){
  //     alert();
  //   })
  //   return $tmp;
  // }
  //
  // $.get('sidemenu.html', function(r) {
  //   $('#sidemenu').append(initBox(r));
  // });

  // var sidemenu = [
  //   {title: 'Tutorial', items: [
  //     {text: 'A', href: ''},
  //     {text: 'B', href: ''},
  //     {text: 'C', href: ''},
  //     {text: 'D', href: ''},
  //   ]},
  //   {title: 'Tutorial', items: [
  //     {text: 'E', href: ''},
  //     {text: 'F', href: ''},
  //     {text: 'G', href: ''},
  //     {text: 'H', href: ''},
  //   ]},
  //   {title: 'Tutorial', items: [
  //     {text: 'I', href: ''},
  //     {text: 'J', href: ''},
  //     {text: 'K', href: ''},
  //     {text: 'L', href: ''},
  //   ]},
  // ];
  //
  //
  //   $('#sidemenu').append($('<div/>').addClass ('title').text('Google Map Application')).append($('<div/>').addClass ('boxes').append(
  //     sidemenu.map(function(box) {
  //
  //       var items = box.items.map(function (item) {
  //         return $('<a/>').text(item.text);
  //       });
  //
  //       items = $(items).map ($.fn.toArray);
  //
  //       return $('<div/>').addClass('box').append(
  //         $('<b>').text(box.title).add(items)
  //       );
  //     })
  //   ));
  //
  //
  //
  // $('#sidemenu').append($('<div/>').addClass ('title').text('Google Map Application')).append($('<div/>').addClass ('boxes').append(
  //   sidemenu.map(function(box) {
  //     console.log(box);
  //
  //     var $box = $('<div/>').addClass('box').append(
  //       $('<b>').text(box.title)
  //     );
  //
  //     var items = box.items.map(function (item) {
  //       return $('<a/>').text(item.text).appendTo($box);
  //     });
  //
  //     return $box;
  //   })
  // ));

  // $('#sidemenu').append (
  //   $('<div/>').addClass ('title').text('Google Map Application')
  // ).append(
  //   $('<div/>').addClass ('boxes').append(
  //     $('<div/>').addClass ('box').append(
  //       $('<b>').text('Tutorial')
  //     ).append(
  //       $('<a>').text('~~~~~~~~')
  //     ).append(
  //       $('<a>').text('~~~~~~~~')
  //     ).append(
  //       $('<a>').text('~~~~~~~~')
  //     )
  //   )
  // );

});
