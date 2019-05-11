var onead = document.getElementById("div-onead-ad");

function myFunction(xml){
    // var oneadVideo = document.getElementById("oneadVideo");

    console.log("video:",oneadVideo);
    var xmlDoc = xml.responseXML;
    var videoUrl = xmlDoc.getElementsByTagName('videoURL_mp4')[0];
    console.log("videoUrl:",videoUrl)

    var defaultUrl = xmlDoc.getElementsByTagName('defaultURL')[0];
    console.log("defaultURL:",defaultUrl)

    var imgUrl = xmlDoc.getElementsByTagName('imgURL')[0].textContent;
    console.log(imgUrl)

    // var clickUrl = xmlDoc.getElementsByTagName('clickURL')[0].textContent;
    // oneadVideo.textContent = videoUrl.textContent;
    // console.log('clickurl',clickUrl);
    var ov = window.document.getElementById("oneadVideo");
    ov.insertAdjacentHTML('afterbegin',"<source src='"+videoUrl.textContent+"' type='video/mp4'>");
    window.document.getElementById("oneadVideo").poster = defaultUrl.textContent;
    var bw = window.document.getElementById("banner_wrapper");
    bw.insertAdjacentHTML('afterbegin', "<iframe src='"+imgUrl.substring(0,imgUrl.length-4)+"/index.html?isipIndex=0'</iframe>"+"</a>");
    var onead = document.getElementById('div-onead-ad');
    // onead.insertAdjacentHTML('afterbegin', "<a herf='"+clickUrl+"'>"+"</a>");
}

var  xhr = new XMLHttpRequest () ;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    // document.getElementById('oneadVideo').textContent = xhr.responseText;
    // console.log(xhr.responseText);
    }
    if(this.status == 404){
        console.log('Fail or resource not found')
    }
};


xhr.open('get','https://demo.onead.com.tw/cprp/xml/1121984/l.xml?pid=1121984&campid=10033&uid=1000081&guid=4262fc5d-60f4-11e9-b1f7-0242ac120004',true);
console.log('something here')
xhr.addEventListener("load", myFunction);
xhr.send(null);


//點擊banner_warp跳到宣傳頁面
//點擊跳至連結
onead.onclick=()=> {
    window.open("https://www.facebook.com/applausemovietaiwan/videos/771300709916739");
    console.log('opennews')
};

