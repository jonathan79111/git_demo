function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var videoUrl = xmlDoc.getElementsByTagName('videoURL_mp4')[0];
    var defaultUrl = xmlDoc.getElementsByTagName('defaultURL')[0];
    var imgUrl = xmlDoc.getElementsByTagName('imgURL')[0].textContent;
    var ov = window.document.getElementById("oneadVideo");
    ov.insertAdjacentHTML('afterbegin', "<source src='" + videoUrl.textContent + "' type='video/mp4'>");
    ov.setAttribute("poster", defaultUrl.textContent);
    var bw = window.document.getElementById("banner_wrapper");
    bw.insertAdjacentHTML('afterbegin', "<iframe src='" + imgUrl.substring(0, imgUrl.length - 4) + "/index.html?isipIndex=0'</iframe>" + "</a>");
    var onead = document.getElementById('div-onead-ad');
}
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
    if (this.status == 404) {
        console.log('Fail or resource not found');
    }
};
xhr.open('get', 'https://demo.onead.com.tw/cprp/xml/1121984/l.xml?pid=1121984&campid=10033&uid=1000081&guid=4262fc5d-60f4-11e9-b1f7-0242ac120004', true);
console.log('something here');
xhr.addEventListener("load", myFunction);
xhr.send(null);
//# sourceMappingURL=layout.js.map