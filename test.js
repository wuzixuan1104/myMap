var map;
 var MarkAry = [];    //要查詢的位址資料陣列
 var marker = [];     //要查詢的位址資料陣列，對應的標記Marker資訊
 var infowindow = new google.maps.InfoWindow();
 var geocoder = new google.maps.Geocoder();

$(document).ready(function() {
   SetData(initialize);//初次載入頁面讀取預設地址資料供地圖使用

   $("#reSetData").click(function(){
       SetData(initialize);//重新依據textarea內地址資料供地圖使用
   });
});

function initialize(MarkAry)
{
  //console.log(MarkAry);
  marker = [];//重設欲查詢的地址資料時需確認marker為空

  var latlng = new google.maps.LatLng(23.973875,120.982024); //台灣緯度Latitude、經度Longitude：23.973875,120.982024
  var mapOptions = {
    zoom: 5,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

  //顯示MarkAry中地點標記 
  var DataHtml = "<ul style="list-style-type: decimal-leading-zero; text-align: left;">";
  for ( var index in MarkAry )
  {
     //設定各查詢位址的標記Marker
     marker[index] = new google.maps.Marker({
           position: new google.maps.LatLng(MarkAry[index][1],MarkAry[index][2]),
           title:MarkAry[index][0],
           map:map  //要顯示標記的地圖
     });
     //設定 各標記點Marker的click事件
     google.maps.event.addListener(marker[index], 'click', function() {
        ShowInfo(map , this);
     });

     //設定 左方資料列表與其資料列click事件
     onclickJs = "ShowInfo(map , marker[" + index + "] )";
     DataHtml += "
<li><span onclick="\" onclickjs="" style="cursor: pointer;">" + MarkAry[index][0] + "</span></li>
";
  }

  //設定當user縮放地圖時，若存在資訊視窗則關閉資訊視窗
  google.maps.event.addListener(map, 'zoom_changed', function() {
     if (infowindow){ infowindow.close(); }
  });

  DataHtml += "</ul>
";
  $("#DataList").html(DataHtml);
  var markerCluster = new MarkerClusterer(map, marker);
}

function SetData(callback)
{
  MarkAry = [];//重設欲查詢的地址資料時需確認MarkAry為空
  var strData = ($.trim($("#searchData").val())).replace("\n","");
  var aryData = strData.split(",");
  var lengthData = aryData.length; //地址個數
  var i = 0;
  $.each(aryData,function(key,value){//console.log(key);console.log(value);
     geocoder.geocode(
        {
           'address':value
        },function (results,status)
        {
           i++;
           if(status==google.maps.GeocoderStatus.OK)
           {
              var obj = results[0].geometry.location;
              var thisData = [value,obj.lat(),obj.lng()];
              //MarkAry.push(thisData); //直接使用push似乎會由於非同步回傳結果時間的不同，導致順序與地址輸入框內不同
              MarkAry[key] = thisData;  //將push方式改為直接設定陣列的index再去塞值，如此MarkAry的順序跟地址輸入框內才相同
           }

           if ( i==lengthData ){ callback(MarkAry); }
        }
     );
  });
}

function ShowInfo(mapObj , markerObj)
{//開啟資訊視窗
  if (infowindow){ infowindow.close();}
  infowindow.setContent(InfoContent(markerObj));
  infowindow.open(mapObj,markerObj);
}

function InfoContent(markerObj)
{//設定資訊視窗內容要呈現什麼
  html = "<div>
縣市：<span style="color: blue;">" + markerObj.title + "</span></div>
";
  html += "<div>
緯度：<span style="color: blue;">" + markerObj.getPosition().lat() + "</span></div>
";
  html += "<div>
經度：<span style="color: blue;">" + markerObj.getPosition().lng() + "</span></div>
";
  return html;
}
